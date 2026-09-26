"use client";

import { useEffect, useMemo, useState } from "react";
import { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";
import SortDropdown from "./SortDropdown";
import Loading from "./Loading";
import Toast from "./Toast";

export default function Library() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sort, setSort] = useState<"duration" | "calories" | "rating">("duration");
  const [toast, setToast] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch("/api/fitlog");
        if (!response.ok) throw new Error();
        setWorkouts(await response.json());
      } catch {
        setError("Unable to load workouts. Please refresh the page.");
        setToast("Could not load workout library");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const sorted = useMemo(() => [...workouts].sort((a, b) => {
    if (sort === "calories") return b.caloriesBurned - a.caloriesBurned;
    if (sort === "rating") return b.rating - a.rating;
    return a.duration - b.duration;
  }), [workouts, sort]);

  return (
    <section className="library section" id="library">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">12 MOVES / ONE LIBRARY</p>
            <h2>THE LIBRARY</h2>
            <p>Twelve lifts covering every major muscle group.</p>
          </div>
          <SortDropdown value={sort} onChange={setSort} />
        </div>
        {loading && <Loading />}
        {!loading && error && <div className="error-state">{error}</div>}
        {!loading && !error && <div className="workout-grid">{sorted.map((workout) => <WorkoutCard key={workout.id} workout={workout} />)}</div>}
      </div>
      {toast && <Toast message={toast} onClose={() => setToast("")} />}
    </section>
  );
}
