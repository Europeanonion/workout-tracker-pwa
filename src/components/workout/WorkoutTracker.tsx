'use client';

import { useState } from "react";
import phaseData from "@/lib/workoutData.json";
import PhaseSelector from "./PhaseSelector";
import WorkoutCard from "./WorkoutCard";
import { PhaseData, PhaseKey, WorkoutItem } from "@/types/workout"; // Import types

export default function WorkoutTracker() {
  const [selectedPhase, setSelectedPhase] = useState<PhaseKey>("6x - Phase 1");

  const workouts = (phaseData as PhaseData)[selectedPhase]?.filter(
    (item): item is WorkoutItem =>
      item !== null && "Jeff Nippard's Ultimate PPL Program - 6x/Week Spreadsheet" in item
  ) || [];

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center">Workout Tracker</h1>
      <PhaseSelector selectedPhase={selectedPhase} setSelectedPhase={setSelectedPhase} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.length > 0 ? (
          workouts.map((workout, index) => <WorkoutCard key={index} workout={workout} />)
        ) : (
          <p className="text-gray-500 text-center">No workouts found.</p>
        )}
      </div>
    </div>
  );
}
