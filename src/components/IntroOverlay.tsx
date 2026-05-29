import { useEffect, useRef } from 'react'

interface IntroOverlayProps {
  onDone?: () => void
}

interface Particle {
  sx: number; sy: number
  vx: number; vy: number
  speed: number
  r: number; g: number; b: number
  size: number
  delay: number
  fade: number
}

const SPARKLES = [
  { x: -130, y:  -80, size: 5, delay: '0s',    dur: '0.75s', color: '#fff'     },
  { x:  110, y: -105, size: 4, delay: '0.25s',  dur: '0.9s',  color: '#7B5FFF' },
  { x:  148, y:   18, size: 6, delay: '0.4s',   dur: '0.65s', color: '#fff'     },
  { x:   80, y:  118, size: 4, delay: '0.1s',   dur: '0.85s', color: '#7B5FFF' },
  { x: -108, y:   92, size: 5, delay: '0.3s',   dur: '0.75s', color: '#fff'     },
  { x: -148, y:  -22, size: 4, delay: '0.55s',  dur: '0.95s', color: '#7B5FFF' },
  { x:   18, y: -135, size: 5, delay: '0.15s',  dur: '0.7s',  color: '#fff'     },
  { x:  -55, y:  120, size: 4, delay: '0.35s',  dur: '0.8s',  color: '#7B5FFF' },
]

const MAX_PARTICLES = 1500

export default function IntroOverlay({ onDone }: IntroOverlayProps) {
  const overlayRef  = useRef<HTMLDivElement>(null)
  const sparklesRef = useRef<HTMLDivElement>(null)
  const logoRef     = useRef<HTMLImageElement>(null)
  const canvasRef   = useRef<HTMLCanvasElement>(null)
  const rafRef      = useRef<number>(0)
  const doneRef     = useRef(false)
  const onDoneRef   = useRef(onDone)
  onDoneRef.current = onDone

  useEffect(() => {
    const overlay = overlayRef.current
    const canvas  = canvasRef.current
    const img     = logoRef.current
    if (!overlay || !canvas || !img) return

    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight

    const ctx = canvas.getContext('2d')!
    let particles: Particle[] = []
    let particlesBuilt = false
    let startTime: number | null = null

    // ── dismiss ──────────────────────────────────────────────────────────────
    function dismiss() {
      if (doneRef.current) return
      doneRef.current = true
      cancelAnimationFrame(rafRef.current)
      const el = overlayRef.current
      if (el) el.style.display = 'none'
      onDoneRef.current?.()
    }

    // ── pre-sample pixels from logo (runs immediately on image load) ──────────
    function buildParticles(): boolean {
      const W    = canvas!.width
      const H    = canvas!.height
      const imgW = img!.naturalWidth  || 300
      const imgH = img!.naturalHeight || 300

      const scale = Math.min(300 / imgW, 300 / imgH, 1)
      const drawW = imgW * scale
      const drawH = imgH * scale
      const drawX = (W - drawW) / 2
      const drawY = (H - drawH) / 2

      const off    = document.createElement('canvas')
      off.width    = W
      off.height   = H
      const offCtx = off.getContext('2d')!
      offCtx.drawImage(img!, drawX, drawY, drawW, drawH)

      let data: Uint8ClampedArray
      try {
        data = offCtx.getImageData(0, 0, W, H).data
      } catch (err) {
        console.warn('[IntroOverlay] getImageData failed:', err)
        particlesBuilt = true
        return false
      }

      particles = []
      const step = 8
      const cx   = W / 2
      const cy   = H / 2
      const maxD = Math.sqrt(cx * cx + cy * cy)

      for (let y = 0; y < H; y += step) {
        for (let x = 0; x < W; x += step) {
          const i = (y * W + x) * 4
          const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3]
          if (a < 40 || r + g + b < 50) continue

          const dx    = x - cx
          const dy    = y - cy
          const dist  = Math.sqrt(dx * dx + dy * dy)
          const angle = Math.atan2(dy, dx)

          particles.push({
            sx: x, sy: y,
            vx: Math.cos(angle),
            vy: Math.sin(angle),
            speed: 900 + (dist / maxD) * 900 + Math.random() * 100,
            r, g, b,
            size:  step * 0.8,
            delay: (dist / maxD) * 0.3,
            fade:  0.2 + Math.random() * 0.1,
          })
        }
      }

      // Cap at MAX_PARTICLES using partial Fisher-Yates so selection is random
      if (particles.length > MAX_PARTICLES) {
        for (let i = 0; i < MAX_PARTICLES; i++) {
          const j = i + Math.floor(Math.random() * (particles.length - i))
          const tmp = particles[i]; particles[i] = particles[j]; particles[j] = tmp
        }
        particles.length = MAX_PARTICLES
      }

      particlesBuilt = true
      console.log('[IntroOverlay] particles built:', particles.length)
      return particles.length > 0
    }

    // ── animation loop (no save/restore/rotate — direct fillRect only) ────────
    function animate(ts: number) {
      if (!startTime) startTime = ts
      const elapsed = (ts - startTime) / 1000
      const W = canvas!.width
      const H = canvas!.height

      // Fade overlay background 1→0 over 0.4s
      const bgOpacity = Math.max(0, 1 - elapsed / 0.4)
      const el = overlayRef.current
      if (el) el.style.background = `rgba(0,0,0,${bgOpacity.toFixed(3)})`

      // Single clearRect per frame
      ctx.clearRect(0, 0, W, H)

      // Expanding radial void from center
      const voidR = Math.min(elapsed * 280, Math.max(W, H) * 1.5)
      const grad  = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(voidR, 1))
      grad.addColorStop(0,   'rgba(0,0,0,1)')
      grad.addColorStop(0.5, 'rgba(0,0,0,0.6)')
      grad.addColorStop(1,   'rgba(0,0,0,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, W, H)

      let alive = 0
      for (const p of particles) {
        const t     = Math.max(0, elapsed - p.delay)
        const eased = t * t
        const curX  = p.sx + p.vx * p.speed * eased
        const curY  = p.sy + p.vy * p.speed * eased
        const alpha = Math.max(0, 1 - t / p.fade)
        if (alpha <= 0) continue
        alive++

        ctx.globalAlpha = alpha
        ctx.fillStyle   = `rgb(${p.r},${p.g},${p.b})`
        ctx.fillRect(curX, curY, p.size, p.size)
      }
      ctx.globalAlpha = 1

      if ((alive > 0 || bgOpacity > 0) && elapsed < 0.8) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        dismiss()
      }
    }

    // ── start animation (particles already built by this point) ───────────────
    function startParticles() {
      if (doneRef.current) return
      // Fallback: build now if pre-build somehow didn't run
      if (!particlesBuilt && !buildParticles()) { dismiss(); return }
      if (particles.length === 0) { dismiss(); return }

      const sparkEl = sparklesRef.current
      if (sparkEl) sparkEl.style.display = 'none'
      img!.style.display   = 'none'
      canvas.style.display = 'block'
      startTime            = null
      rafRef.current       = requestAnimationFrame(animate)
    }

    // Pre-build particles immediately when image is ready, then wait 800ms
    function onImageReady() {
      buildParticles()
      setTimeout(startParticles, 800)
    }

    if (img.complete && img.naturalWidth > 0) {
      onImageReady()
    } else {
      img.addEventListener('load',  onImageReady, { once: true })
      img.addEventListener('error', () => {
        console.error('[IntroOverlay] image failed to load')
        dismiss()
      }, { once: true })
    }

    const hardFallback = setTimeout(() => {
      console.warn('[IntroOverlay] hard fallback')
      dismiss()
    }, 2500)

    return () => {
      cancelAnimationFrame(rafRef.current)
      clearTimeout(hardFallback)
    }
  }, [])

  function handleClick() {
    if (doneRef.current) return
    doneRef.current = true
    cancelAnimationFrame(rafRef.current)
    const el = overlayRef.current
    if (!el) return
    el.style.transition = 'opacity 0.3s ease'
    el.style.opacity    = '0'
    setTimeout(() => { el.style.display = 'none'; onDoneRef.current?.() }, 300)
  }

  return (
    <>
      <style>{`
        @keyframes sparkle-pop {
          0%   { opacity: 0; transform: scale(0)   rotate(0deg); }
          40%  { opacity: 1; transform: scale(1.2) rotate(45deg); }
          60%  { opacity: 1; transform: scale(1)   rotate(90deg); }
          100% { opacity: 0; transform: scale(0)   rotate(180deg); }
        }
      `}</style>

      <div
        ref={overlayRef}
        onClick={handleClick}
        style={{
          position:       'fixed',
          inset:          0,
          zIndex:         9999,
          background:     '#000',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          cursor:         'pointer',
          willChange:     'opacity',
        }}
      >
        <div
          ref={sparklesRef}
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
        >
          {SPARKLES.map((s, i) => (
            <div
              key={i}
              style={{
                position:     'absolute',
                left:         `calc(50% + ${s.x}px)`,
                top:          `calc(50% + ${s.y}px)`,
                width:        `${s.size}px`,
                height:       `${s.size}px`,
                borderRadius: '50%',
                background:   s.color,
                boxShadow:    `0 0 6px 2px ${s.color}`,
                opacity:      0,
                animation:    `sparkle-pop ${s.dur} ${s.delay} ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        <img
          ref={logoRef}
          src="/fluario-logo.png"
          alt="Fluario"
          style={{
            display:      'block',
            maxWidth:     '300px',
            maxHeight:    '300px',
            objectFit:    'contain',
            position:     'relative',
            zIndex:       1,
            background:   'transparent',
            mixBlendMode: 'screen',
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset:    0,
            width:    '100%',
            height:   '100%',
            display:  'none',
            zIndex:   2,
          }}
        />
      </div>
    </>
  )
}
