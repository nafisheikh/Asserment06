"use client";

import Link from "next/link";
import { Clock3, Flame, Star, Dumbbell } from "lucide-react";
import { Workout } from "@/types/workout";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link href={`/workout/${workout.id}`} className="workout-card">
      <div className="card-image-wrap">
        <img src={workout.image} alt={workout.name} className="card-image" />
        <div className="card-tags">
          {workout.muscleGroups.slice(0, 2).map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <span className="card-arrow">↗</span>
      </div>
      <div className="card-content">
        <h3>{workout.name}</h3>
        <p className="equipment"><Dumbbell size={14} /> {workout.equipment}</p>
        <div className="card-stats">
          <span><Clock3 size={14} /> {workout.duration} min</span>
          <span><Flame size={14} /> {workout.caloriesBurned} kcal</span>
          <span><Star size={14} fill="currentColor" /> {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}
