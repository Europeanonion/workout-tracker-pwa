import { useState, useEffect } from 'react';
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Progress } from "../../components/ui/progress";
import { useRouter } from 'next/router';
import { db } from '../../lib/firebase'; // Assuming Firebase for data storage
import { collection, getDocs } from 'firebase/firestore';

export default function WorkoutTracker() {
  const [workoutData, setWorkoutData] = useState([]);
  const [currentDay, setCurrentDay] = useState('Push #1');
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(db, "workouts"));
      setWorkoutData(data.docs.map(doc => doc.data()));
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
        {workoutData.map((workout, index) => (
          workout.day === currentDay && (
            <Card key={index} className="mb-4">
              <CardContent>
                <h2 className="text-xl font-semibold">{workout.exercise}</h2>
                <p>Sets: {workout.sets} | Reps: {workout.reps} | RPE: {workout.rpe}</p>
                <Button onClick={handleWorkoutComplete} className="mt-3">Mark Complete</Button>
              </CardContent>
            </Card>
          )
        ))}
      </div>
      <Progress value={progress} className="mt-5" />
    </div>
  );
}
