"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Logo />
        <nav className={`main-nav ${open ? "open" : ""}`}>
          <Link className={pathname === "/" ? "active" : ""} href="/" onClick={() => setOpen(false)}>Workout</Link>
          <Link className={pathname.startsWith("/my-plan") ? "active" : ""} href="/my-plan" onClick={() => setOpen(false)}>My Plan</Link>
        </nav>
        <div className="nav-badges">
          <Link href="/my-plan" className="counter filled"><span>PLAN</span><b>{plan.length}</b></Link>
          <Link href="/my-plan?tab=saved" className="counter outlined"><span>SAVED</span><b>{saved.length}</b></Link>
        </div>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
