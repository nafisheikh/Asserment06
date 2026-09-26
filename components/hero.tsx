import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">WORKOUT LIBRARY</p>
          <h1>TRAIN WITH <em>INTENT.</em><br />LOG EVERY SET.</h1>
          <p className="hero-text">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.</p>
          <Link href="#library" className="primary-button">BROWSE WORKOUTS <ArrowDownRight size={18} /></Link>
        </div>
        <div className="hero-art">
          <div className="hero-art-label">01 / 12</div>
          <img src="/design-assets/hero-exercise-large.png" alt="Workout illustration" />
          <div className="hero-art-line" />
        </div>
      </div>
    </section>
  );
}
