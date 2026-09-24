import Image from "next/image";
import Link from "next/link";
import { IWorkout } from "@/types/workout.type";

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  const categories = Array.isArray(workout.muscleGroups)
    ? workout.muscleGroups
    : [workout.muscleGroups];

  return (
    <Link href={`/workouts/${workout.id}`} className="group block">
      <article className="overflow-hidden rounded-[18px] border border-[#202227] bg-[#14161a] transition duration-200 hover:-translate-y-1 hover:border-[#ccff00]/40">
        
        {/* Image */}
        <div className="relative h-44 w-full overflow-hidden bg-[#111318]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4 pt-3.5">

          {/* Categories */}
          <div className="mb-3 flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <span
                key={idx}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-black"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="text-base font-black uppercase tracking-tight text-white">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="mt-1 text-xs text-[#787c87]">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-4 border-t border-[#202227] pt-3">
            <div className="flex items-center gap-5 text-xs text-[#8a8f9c]">

              {/* Duration */}
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    strokeWidth="2"
                  />
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M12 7v5l3 2"
                  />
                </svg>

                {workout.duration} min
              </span>

              {/* Calories */}
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-3.5 w-3.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 23c-4.97 0-9-3.58-9-8 0-4.19 3.58-8.24 6.84-11.4a1 1 0 011.53.25c.87 1.4 1.83 2.72 2.63 3.9.72-1.07 1.25-2.2 1.58-3.32a1 1 0 011.83-.17C18.66 8.04 21 11.52 21 15c0 4.42-4.03 8-9 8z" />
                </svg>

                {workout.caloriesBurned} kcal
              </span>

              {/* Rating */}
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>

                {workout.rating}
              </span>

            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default WorkoutCard;