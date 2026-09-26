import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found section">
      <div className="container not-found-inner">
        <p className="eyebrow">ERROR / 404</p>
        <div className="big-404">404</div>
        <h1>THIS REP DOESN&apos;T EXIST.</h1>
        <p>The page you&apos;re looking for isn&apos;t part of the FitLog library.</p>
        <Link href="/" className="primary-button"><ArrowLeft size={18} /> BACK TO WORKOUTS</Link>
      </div>
    </main>
  );
}
