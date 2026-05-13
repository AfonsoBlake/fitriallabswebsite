import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md" style={{ background: "rgba(0,0,0,0.8)", borderBottom: "1px solid rgba(107,111,212,0.2)" }}>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-12">
        <a href="#top" className="flex items-center">
          <img src="/fluario-logo.png" alt="Fluario" style={{ height: 40 }} />
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-mono-caps text-white transition-colors hover:text-[#6B6FD4]">
              {l.label}
            </a>
          ))}
          <a href="#booking" className="btn-primary text-sm">BOOK A CALL</a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[rgba(107,111,212,0.2)] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-mono-caps text-white">{l.label}</a>
          ))}
          <a href="#booking" onClick={() => setOpen(false)} className="btn-primary text-sm justify-center">BOOK A CALL</a>
        </div>
      )}
    </nav>
  );
}
