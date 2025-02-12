'use client';

import { PhaseKey } from "@/types/workout";
import React, { Dispatch, SetStateAction } from "react";

interface PhaseSelectorProps {
  selectedPhase: PhaseKey;
  setSelectedPhase: Dispatch<SetStateAction<PhaseKey>>;
}

const PhaseSelector: React.FC<PhaseSelectorProps> = ({ selectedPhase, setSelectedPhase }) => {
  return (
    <div className="flex justify-center mb-5">
      <select
        className="p-2 border rounded-md"
        value={selectedPhase}
        onChange={(e) => setSelectedPhase(e.target.value as PhaseKey)}
      >
        <option value="6x - Phase 1">Phase 1 - Base Hypertrophy</option>
        <option value="6x - Phase 2">Phase 2 - Maximum Effort</option>
        <option value="6x - Phase 3">Phase 3 - Supercompensation</option>
      </select>
    </div>
  );
}

export default PhaseSelector;
