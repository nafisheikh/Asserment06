import { Workout } from "@/types/workout";

export const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_URL, { cache: "no-store" });
  if (!response.ok) throw new Error("Failed to fetch workouts");
  return response.json();
}

export async function getWorkout(id: string) {
  const response = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Workout not found");
  }
  return response.json();
}