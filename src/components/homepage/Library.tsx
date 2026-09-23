import WorkoutCard from "@/components/homepage/WorkoutLibrary";
import { IWorkout } from "@/types/workout.type";

const getWorkouts = async (): Promise<IWorkout[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
};

const Library = async () => {
  const workouts = await getWorkouts();

  return (
    <div id="library" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Section heading */}
      <div className="mb-7">
        <h2 className="text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
          The Library
        </h2>

        <p className="mt-2 text-xs text-[#858992]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Workout Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default Library;
