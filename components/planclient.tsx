"use client";

import Link from "next/link";
import { Check, Clock3, Flame, Star, X, ArrowUpRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useFitLog } from "@/context/FitLogContext";
import Toast from "./Toast";
import Loading from "./Loading";

export default function PlanClient() {
  const { plan, saved, done, removeFromPlan, removeSaved, markAsDone } = useFitLog();
  const [tab, setTab] = useState<"plan" | "saved">("plan");
  const [toast, setToast] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    if (window.location.search.includes("tab=saved")) setTab("saved");
  }, []);

  const items = tab === "plan" ? plan : saved;
  const metrics = useMemo(() => ({
    exercises: plan.length,
    minutes: plan.reduce((sum, item) => sum + item.duration, 0),
    calories: plan.reduce((sum, item) => sum + item.caloriesBurned, 0),
  }), [plan]);

  if (!hydrated) return <Loading label="Loading plan…" />;

  return (
    <main className="plan-page section">
      <div className="container">
        <div className="plan-heading">
          <div>
            <p className="eyebrow">YOUR WORKOUT LOG</p>
            <h1>MY PLAN</h1>
            <p>Cap of five lifts for today. Finish them, then load more.</p>
          </div>
          <div className="plan-count"><b>{plan.length}</b><span>/ 05 TODAY</span></div>
        </div>

        <div className="metrics-grid">
          <div className="metric-card"><span>EXERCISES</span><b>{metrics.exercises}</b><small>LIFTS</small></div>
          <div className="metric-card"><span>MINUTES</span><b>{metrics.minutes}</b><small>EST. TIME</small></div>
          <div className="metric-card"><span>CALORIES</span><b>{metrics.calories}</b><small>EST. BURN</small></div>
        </div>

        <div className="plan-tabs">
          <button className={tab === "plan" ? "active" : ""} onClick={() => setTab("plan")}>TODAY&apos;S PLAN <b>{plan.length}</b></button>
          <button className={tab === "saved" ? "active" : ""} onClick={() => setTab("saved")}>SAVED <b>{saved.length}</b></button>
        </div>

        {items.length === 0 ? (
          <div className="empty-state">
            <div className="empty-number">00</div>
            <p className="eyebrow">NOTHING HERE YET</p>
            <h2>BUILD YOUR NEXT SESSION.</h2>
            <p>Browse the library and add a lift to get today moving.</p>
            <Link href="/" className="primary-button">GO TO WORKOUTS <ArrowUpRight size={18} /></Link>
          </div>
        ) : (
          <div className="plan-list">
            {items.map((workout, index) => {
              const isDone = done.includes(workout.id);
              return (
                <article className={`plan-card ${isDone ? "done" : ""}`} key={workout.id}>
                  <div className="plan-thumb"><img src={workout.image} alt={workout.name} /><span>{String(index + 1).padStart(2, "0")}</span></div>
                  <div className="plan-main">
                    <p className="eyebrow">{workout.muscleGroups.join(" / ")}</p>
                    <h3>{workout.name}</h3>
                    <p>{workout.equipment}</p>
                    <div className="card-stats"><span><Clock3 size={14} /> {workout.duration} min</span><span><Flame size={14} /> {workout.caloriesBurned} kcal</span><span><Star size={14} fill="currentColor" /> {workout.rating}</span></div>
                  </div>
                  <div className="plan-actions">
                    <Link href={`/workout/${workout.id}`} className="ghost-button">VIEW DETAILS</Link>
                    {tab === "plan" ? <button className={`done-button ${isDone ? "completed" : ""}`} onClick={() => { markAsDone(workout.id); setToast("Workout marked as done"); }}><Check size={16} /> {isDone ? "DONE" : "MARK AS DONE"}</button> : null}
                    <button className="remove-button" onClick={() => { tab === "plan" ? removeFromPlan(workout.id) : removeSaved(workout.id); setToast(tab === "plan" ? "Removed from today's plan" : "Removed from saved"); }} aria-label="Remove workout"><X size={18} /></button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
      {toast && <Toast message={toast} onClose={() => setToast("")} />}
    </main>
  );
}
