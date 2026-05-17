import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { hash: "how-it-works", label: "How It Works" },
  { hash: "services", label: "Services" },
  { hash: "pricing", label: "Pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md" style={{ background: "rgba(0,0,0,0.8)", borderBottom: "1px solid rgba(107,111,212,0.2)" }}>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-12">
        <Link to="/" className="flex items-center">
          <img src="/fluario-logo.png" alt="Fluario" style={{ height: 40 }} />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.hash} to="/" hash={l.hash} className="font-mono-caps text-white transition-colors hover:text-[#6B6FD4]">
              {l.label}
            </Link>
          ))}
          <Link
            to="/register-interest"
            className="font-mono-caps transition-colors"
            style={{ color: "#6B6FD4" }}
            activeProps={{ style: { color: "#8B8FE8" } }}
          >
            FREE TRIAL
          </Link>
          <Link to="/" hash="booking" className="btn-primary text-sm">BOOK A CALL</Link>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[rgba(107,111,212,0.2)] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.hash} to="/" hash={l.hash} onClick={() => setOpen(false)} className="font-mono-caps text-white">{l.label}</Link>
          ))}
          <Link
            to="/register-interest"
            onClick={() => setOpen(false)}
            className="font-mono-caps"
            style={{ color: "#6B6FD4" }}
          >
            FREE TRIAL
          </Link>
          <Link to="/" hash="booking" onClick={() => setOpen(false)} className="btn-primary text-sm justify-center">BOOK A CALL</Link>
        </div>
      )}
    </nav>
  );
}
