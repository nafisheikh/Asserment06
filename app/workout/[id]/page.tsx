import DetailClient from "@/components/DetailClient";
import { getWorkout } from "@/lib/api";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function WorkoutDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const workout = await getWorkout(id);
    return <DetailClient workout={workout} />;
  } catch {
    notFound();
  }
}
