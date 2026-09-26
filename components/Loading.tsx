export default function Loading({ label = "Loading workouts…" }: { label?: string }) {
  return (
    <div className="loading-wrap" role="status" aria-live="polite">
      <span className="spinner" />
      <span>{label}</span>
    </div>
  );
}
