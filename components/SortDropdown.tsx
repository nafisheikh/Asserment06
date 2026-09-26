"use client";

import { ChevronDown } from "lucide-react";

type SortValue = "duration" | "calories" | "rating";

export default function SortDropdown({ value, onChange }: { value: SortValue; onChange: (value: SortValue) => void }) {
  return (
    <label className="sort-box">
      <span>Sort By</span>
      <select value={value} onChange={(e) => onChange(e.target.value as SortValue)} aria-label="Sort workouts">
        <option value="duration">Duration</option>
        <option value="calories">Calories</option>
        <option value="rating">Rating</option>
      </select>
      <ChevronDown size={15} />
    </label>
  );
}
