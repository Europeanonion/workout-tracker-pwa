'use client';

import React from "react";
import { WorkoutItem } from "@/types/workout"; // Import proper type

interface WorkoutCardProps {
  workout: WorkoutItem;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold">
        {workout["Jeff Nippard's Ultimate PPL Program - 6x/Week Spreadsheet"]}
      </h2>
      {workout.Column2 && <p>Exercise: {workout.Column2}</p>}
      {workout.Column4 && <p>Sets: {workout.Column4}</p>}
      {workout.Column5 && <p>Reps: {workout.Column5}</p>}
      {workout.Column7 && <p>RPE: {workout.Column7}</p>}
      {workout.Column11 && <p className="text-gray-500 italic">{workout.Column11}</p>}
    </div>
  );
}
