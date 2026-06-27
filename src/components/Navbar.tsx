import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

type NavLink =
  | { kind: "route"; to: string; label: string }
  | { kind: "hash"; hash: string; label: string };

const links: NavLink[] = [
  { kind: "route", to: "/how-it-works", label: "How It Works" },
  { kind: "hash", hash: "services", label: "Services" },
  { kind: "hash", hash: "pricing", label: "Pricing" },
  { kind: "route", to: "/free-resources", label: "Free Resources" },
];

function NavLinkItem({ link, onClick }: { link: NavLink; onClick?: () => void }) {
  const cls = "font-mono-caps text-white transition-colors hover:text-[#6B6FD4]";
  if (link.kind === "route") {
    return (
      <Link
        to={link.to}
        onClick={onClick}
        className={cls}
        activeProps={{ className: "font-mono-caps text-[#6B6FD4] transition-colors hover:text-[#8B8FE8]" }}
      >
        {link.label}
      </Link>
    );
  }
  return (
    <Link to="/" hash={link.hash} onClick={onClick} className={cls}>
      {link.label}
    </Link>
  );
}

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
            <NavLinkItem key={l.label} link={l} />
          ))}
          <Link
            to="/register-interest"
            className="font-mono-caps transition-colors"
            style={{ color: "#6B6FD4" }}
            activeProps={{ style: { color: "#8B8FE8" } }}
          >
            FREE TRIAL
          </Link>
          <Link
            to="/"
            hash="booking"
            className="btn-primary text-sm"
            data-cal-link="fluario-jejc7g/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            BOOK A CALL
          </Link>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[rgba(107,111,212,0.2)] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <NavLinkItem key={l.label} link={l} onClick={() => setOpen(false)} />
          ))}
          <Link
            to="/register-interest"
            onClick={() => setOpen(false)}
            className="font-mono-caps"
            style={{ color: "#6B6FD4" }}
          >
            FREE TRIAL
          </Link>
          <Link
            to="/"
            hash="booking"
            onClick={() => setOpen(false)}
            className="btn-primary text-sm justify-center"
            data-cal-link="fluario-jejc7g/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            BOOK A CALL
          </Link>
        </div>
      )}
    </nav>
  );
}
