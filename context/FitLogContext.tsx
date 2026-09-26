"use client";

import { Workout } from "@/types/workout";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type FitLogContextValue = {
  plan: Workout[];
  saved: Workout[];
  done: number[];
  addToPlan: (workout: Workout) => boolean;
  saveForLater: (workout: Workout) => boolean;
  removeFromPlan: (id: number) => void;
  removeSaved: (id: number) => void;
  markAsDone: (id: number) => void;
};

const FitLogContext = createContext<FitLogContextValue | null>(null);

export function FitLogProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [done, setDone] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const savedPlan = localStorage.getItem("fitlog-plan");
      const savedLater = localStorage.getItem("fitlog-saved");
      const savedDone = localStorage.getItem("fitlog-done");
      if (savedPlan) setPlan(JSON.parse(savedPlan));
      if (savedLater) setSaved(JSON.parse(savedLater));
      if (savedDone) setDone(JSON.parse(savedDone));
    } catch {
      // Ignore malformed localStorage and start fresh.
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    localStorage.setItem("fitlog-done", JSON.stringify(done));
  }, [plan, saved, done, hydrated]);

  const value = useMemo<FitLogContextValue>(() => ({
    plan,
    saved,
    done,
    addToPlan: (workout) => {
      if (plan.length >= 5 || plan.some((item) => item.id === workout.id)) return false;
      setPlan((current) => [...current, workout]);
      return true;
    },
    saveForLater: (workout) => {
      if (saved.some((item) => item.id === workout.id)) return false;
      setSaved((current) => [...current, workout]);
      return true;
    },
    removeFromPlan: (id) => setPlan((current) => current.filter((item) => item.id !== id)),
    removeSaved: (id) => setSaved((current) => current.filter((item) => item.id !== id)),
    markAsDone: (id) => setDone((current) => (current.includes(id) ? current : [...current, id])),
  }), [plan, saved, done]);

  return <FitLogContext.Provider value={value}>{children}</FitLogContext.Provider>;
}

export function useFitLog() {
  const context = useContext(FitLogContext);
  if (!context) throw new Error("useFitLog must be used inside FitLogProvider");
  return context;
}
