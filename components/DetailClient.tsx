"use client";

import Link from "next/link";
import { ArrowLeft, Check, Clock3, Dumbbell, Flame, ListChecks, Save, Star } from "lucide-react";
import { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";
import Toast from "./Toast";
import { useState } from "react";

export default function DetailClient({ workout }: { workout: Workout }) {
  const { plan, saved, addToPlan, saveForLater } = useFitLog();
  const [toast, setToast] = useState("");
  const inPlan = plan.some((item) => item.id === workout.id);
  const isSaved = saved.some((item) => item.id === workout.id);
  const planFull = plan.length >= 5;

  const handlePlan = () => {
    if (inPlan) return setToast("Already in today's plan");
    if (planFull) return setToast("Today's plan is full (5 lifts max)");
    addToPlan(workout);
    setToast("Added to today's plan");
  };

  const handleSave = () => {
    if (isSaved) return setToast("Already saved for later");
    saveForLater(workout);
    setToast("Saved for later");
  };

  return (
    <main className="detail-page section">
      <div className="container">
        <Link href="/" className="back-link"><ArrowLeft size={16} /> Back to library</Link>
        <div className="detail-grid">
          <div className="detail-visual">
            <img src={workout.image} alt={workout.name} />
            <div className="visual-caption">FITLOG / WORKOUT {String(workout.id).padStart(2, "0")}</div>
          </div>
          <div className="detail-copy">
            <p className="eyebrow">WORKOUT / {String(workout.id).padStart(2, "0")}</p>
            <h1>{workout.name}</h1>
            <p className="detail-description">{workout.description}</p>
            <div className="detail-tags">{workout.muscleGroups.map((tag) => <span key={tag}>{tag}</span>)}</div>

            <div className="spec-panel">
              <div><span>EQUIPMENT</span><strong>{workout.equipment}</strong></div>
              <div><span>DIFFICULTY</span><strong>{workout.difficulty}</strong></div>
              <div><span>SETS</span><strong>{workout.sets}</strong></div>
              <div><span>REPS</span><strong>{workout.reps}</strong></div>
              <div><span>DURATION</span><strong>{workout.duration} min</strong></div>
              <div><span>CALORIES</span><strong>{workout.caloriesBurned} kcal</strong></div>
              <div><span>RATING</span><strong>{workout.rating} / 5</strong></div>
            </div>

            <div className="instructions">
              <div className="mini-heading"><ListChecks size={18} /> INSTRUCTIONS</div>
              <ol>{workout.instructions.map((instruction, index) => <li key={instruction}><b>{String(index + 1).padStart(2, "0")}</b><span>{instruction}</span></li>)}</ol>
            </div>

            <div className="detail-actions">
              <button className="primary-button" onClick={handlePlan} disabled={inPlan || planFull}><Check size={18} /> {inPlan ? "IN TODAY'S PLAN" : "ADD TO TODAY'S PLAN"}</button>
              <button className="secondary-button" onClick={handleSave}><Save size={18} /> {isSaved ? "SAVED" : "SAVE FOR LATER"}</button>
            </div>
            <div className="detail-quick-stats">
              <span><Clock3 size={15} /> {workout.duration} min</span>
              <span><Flame size={15} /> {workout.caloriesBurned} kcal</span>
              <span><Star size={15} fill="currentColor" /> {workout.rating}</span>
              <span><Dumbbell size={15} /> {workout.equipment}</span>
            </div>
          </div>
        </div>
      </div>
      {toast && <Toast message={toast} onClose={() => setToast("")} />}
    </main>
  );
}
