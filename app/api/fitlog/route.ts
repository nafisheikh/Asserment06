import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog", { cache: "no-store" });
    if (!response.ok) return NextResponse.json({ message: "Failed to fetch workouts" }, { status: response.status });
    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ message: "Workout API is unavailable" }, { status: 500 });
  }
}
