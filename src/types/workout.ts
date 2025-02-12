export type WorkoutItem = {
    "Jeff Nippard's Ultimate PPL Program - 6x/Week Spreadsheet"?: string;
    Column2?: string; // Exercise name
    Column4?: number; // Sets
    Column5?: number; // Reps
    Column7?: number; // RPE
    Column11?: string; // Notes
  };
  
  export type PhaseData = {
    "6x - Phase 1": (WorkoutItem | null)[];
    "6x - Phase 2": (WorkoutItem | null)[];
    "6x - Phase 3": (WorkoutItem | null)[];
  };
  
  export type PhaseKey = keyof PhaseData;
  