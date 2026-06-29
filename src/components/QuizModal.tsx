import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { CheckCircle, X } from 'lucide-react'
import { getSupabase } from '../lib/supabase'

interface Props {
  onClose: () => void
}

const QUESTIONS = [
  {
    question: 'What is the goal of your DMs?',
    options: [
      'Answering customer inquiries',
      'Funneling prospects to a CTA',
      'Both, qualify and convert',
      'Recovering leads that went cold',
    ],
  },
  {
    question: 'What is your biggest DM problem right now?',
    options: [
      'Responding too slow or missing messages',
      'Do not know what to say to convert',
      'Too many DMs, not enough time',
      'My team replies inconsistently',
    ],
  },
  {
    question: 'How many DMs does your business get per week?',
    options: ['Under 50', '50 to 200', '200 to 500', '500 or more'],
  },
  {
    question: 'Where are your leads coming from?',
    options: ['Instagram', 'TikTok', 'Facebook', 'Multiple platforms'],
  },
  {
    question: 'What type of business are you?',
    options: [
      'Fitness and Wellness',
      'Beauty and Aesthetics',
      'Fashion and Lifestyle',
      'Food and Beverage',
      'Real Estate',
      'Health and Medical',
      'Education and Coaching',
      'Automotive',
      'Events and Entertainment',
      'Travel and Hospitality',
      'E-commerce and DTC Brand',
      'Other',
    ],
  },
]

async function saveQuizResponse(answers: string[]) {
  try {
    const sb = getSupabase()
    if (!sb) return
    const { error } = await sb.from('quiz_responses').insert({
      q1: answers[0],
      q2: answers[1],
      q3: answers[2],
      q4: answers[3],
      q5: answers[4],
    })
    if (error) console.warn('[QuizModal] Supabase insert error:', error.message)
  } catch (e) {
    console.warn('[QuizModal] Failed to save quiz response:', e)
  }
}

function OptionCard({
  label,
  isSelected,
  compact,
  onClick,
}: {
  label: string
  isSelected: boolean
  compact: boolean
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: isSelected
          ? 'rgba(107, 111, 212, 0.22)'
          : hovered
            ? 'rgba(107, 111, 212, 0.1)'
            : 'rgba(107, 111, 212, 0.05)',
        border: isSelected
          ? '1.5px solid rgba(139, 143, 232, 0.85)'
          : hovered
            ? '1.5px solid rgba(107, 111, 212, 0.45)'
            : '1.5px solid rgba(107, 111, 212, 0.2)',
        borderRadius: 10,
        padding: compact ? '0.75rem 0.875rem' : '0.875rem 1.125rem',
        color: isSelected ? '#FFFFFF' : '#C4B8F0',
        fontSize: compact ? '0.825rem' : '0.88rem',
        fontFamily: 'Inter, sans-serif',
        fontWeight: isSelected ? 500 : 400,
        cursor: 'pointer',
        textAlign: compact ? 'center' : 'left',
        transition: 'background 0.12s ease, border-color 0.12s ease, color 0.12s ease',
        lineHeight: 1.35,
        width: '100%',
      }}
    >
      {label}
    </button>
  )
}

export default function QuizModal({ onClose }: Props) {
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [answers, setAnswers] = useState<string[]>([])

  const isEnd = step === 5
  const progress = isEnd ? 100 : ((step + 1) / 5) * 100
  const currentQ = QUESTIONS[step] ?? null

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  const handleNext = useCallback(() => {
    if (!selected) return
    const newAnswers = [...answers, selected]
    setAnswers(newAnswers)
    setSelected(null)
    if (step === 4) {
      saveQuizResponse(newAnswers)
      localStorage.setItem('fluario_quiz_done', String(Date.now()))
      setStep(5)
    } else {
      setStep(s => s + 1)
    }
  }, [selected, answers, step])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.84)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{
          background: '#0D0B2B',
          border: '1px solid rgba(107, 111, 212, 0.35)',
          borderRadius: 20,
          width: '100%',
          maxWidth: 560,
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow:
            '0 0 80px rgba(107, 111, 212, 0.12), 0 24px 64px rgba(0, 0, 0, 0.6)',
        }}
      >
        {/* Progress bar */}
        <div
          style={{
            height: 4,
            background: 'rgba(107, 111, 212, 0.18)',
            borderRadius: '20px 20px 0 0',
            overflow: 'hidden',
          }}
        >
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #6B6FD4 0%, #A78BFA 100%)',
            }}
          />
        </div>

        {/* X close button — end screen only */}
        {isEnd && (
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              width: 32,
              height: 32,
              background: 'rgba(107, 111, 212, 0.12)',
              border: '1px solid rgba(107, 111, 212, 0.3)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#C4B8F0',
              zIndex: 10,
            }}
          >
            <X size={15} />
          </button>
        )}

        <div style={{ padding: '2rem 2.5rem 2.5rem' }}>
          <AnimatePresence mode="wait">
            {isEnd ? (
              <motion.div
                key="end"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                style={{ textAlign: 'center' }}
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 260, damping: 20 }}
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: 'rgba(107, 111, 212, 0.15)',
                    border: '2px solid rgba(139, 143, 232, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0.5rem auto 1.75rem',
                  }}
                >
                  <CheckCircle size={34} color="#8B8FE8" strokeWidth={1.8} />
                </motion.div>

                <h2
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.45rem',
                    color: '#FFFFFF',
                    lineHeight: 1.3,
                    marginBottom: '0.875rem',
                  }}
                >
                  You are exactly who Fluario is built for.
                </h2>

                <p
                  style={{
                    color: '#C4B8F0',
                    fontSize: '0.925rem',
                    lineHeight: 1.65,
                    maxWidth: 360,
                    margin: '0 auto 2rem',
                  }}
                >
                  Fluario automates your DMs so every lead gets a reply, every
                  time, on autopilot.
                </p>

                <Link
                  to="/book-a-call"
                  onClick={onClose}
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #6B6FD4, #8B8FE8)',
                    color: '#FFFFFF',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    padding: '0.875rem 2.5rem',
                    borderRadius: 10,
                    textDecoration: 'none',
                    letterSpacing: '0.025em',
                    boxShadow: '0 4px 24px rgba(107, 111, 212, 0.4)',
                    cursor: 'pointer',
                  }}
                >
                  Book a free demo
                </Link>

                <div style={{ marginTop: '1.25rem' }}>
                  <button
                    onClick={onClose}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'rgba(196, 184, 240, 0.55)',
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      textUnderlineOffset: 3,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    Skip for now
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
              >
                <p
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.72rem',
                    color: '#6B6FD4',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    marginBottom: '0.625rem',
                  }}
                >
                  Question {step + 1} of 5
                </p>

                <h2
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    color: '#FFFFFF',
                    lineHeight: 1.4,
                    marginBottom: '1.5rem',
                  }}
                >
                  {currentQ!.question}
                </h2>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: step === 4 ? 'repeat(2, 1fr)' : '1fr',
                    gap: '0.625rem',
                    marginBottom: '1.75rem',
                  }}
                >
                  {currentQ!.options.map(option => (
                    <OptionCard
                      key={option}
                      label={option}
                      isSelected={selected === option}
                      compact={step === 4}
                      onClick={() => setSelected(option)}
                    />
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    onClick={handleNext}
                    disabled={!selected}
                    style={{
                      background: selected
                        ? 'linear-gradient(135deg, #6B6FD4, #8B8FE8)'
                        : 'rgba(107, 111, 212, 0.12)',
                      border: selected
                        ? 'none'
                        : '1px solid rgba(107, 111, 212, 0.22)',
                      borderRadius: 10,
                      padding: '0.75rem 2rem',
                      color: selected ? '#FFFFFF' : 'rgba(196, 184, 240, 0.35)',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      letterSpacing: '0.025em',
                      cursor: selected ? 'pointer' : 'not-allowed',
                      transition: 'opacity 0.15s, box-shadow 0.15s',
                      boxShadow: selected
                        ? '0 4px 16px rgba(107, 111, 212, 0.3)'
                        : 'none',
                    }}
                  >
                    {step === 4 ? 'Submit' : 'Next →'}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
