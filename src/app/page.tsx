"use client";

import { useState, useEffect } from "react";
import Card, { CardContent } from "@/components/ui/card";
import Button from "@/components/ui/button";
import Progress from "@/components/ui/progress";
import { useRouter } from "next/navigation"; // ✅ Fixed for App Router
import { db } from "@/lib/firebase"; // ✅ Use alias to avoid path issues
import { collection, getDocs } from "firebase/firestore";

export default function WorkoutTracker() {
  const [workoutData, setWorkoutData] = useState([]);
  const [currentDay, setCurrentDay] = useState("Push #1");
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "workouts"));
        setWorkoutData(querySnapshot.docs.map(doc => doc.data()));
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };
    fetchData();
  }, []);

  const handleWorkoutComplete = () => {
    setProgress(progress + 10);
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center">Workout Tracker</h1>
      <div className="mt-5">
        {workoutData.map((workout, index) =>
          workout.day === currentDay ? (
            <Card key={index} className="mb-4">
              <CardContent>
                <h2 className="text-xl font-semibold">{workout.exercise}</h2>
                <p>Sets: {workout.sets} | Reps: {workout.reps} | RPE: {workout.rpe}</p>
                <Button onClick={handleWorkoutComplete} className="mt-3">Mark Complete</Button>
              </CardContent>
            </Card>
          ) : null
        )}
      </div>
      <Progress value={progress} className="mt-5" />
    </div>
  );
}
