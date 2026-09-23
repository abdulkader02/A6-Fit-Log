export interface IWorkout {
  id: string;
  name: string;
  category: string | string[];
  equipment: string;
  difficulty: string;
  sets: number;
  reps: string;
  duration: number;
  calories: number;
  rating: number;
  image: string;
  description: string;
  instructions: string[];
}
