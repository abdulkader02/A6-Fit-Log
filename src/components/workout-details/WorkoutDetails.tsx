import Image from "next/image";
import { IWorkout } from "@/types/workout.type";
import { CiSaveDown2 } from "react-icons/ci";


interface WorkoutDetailsProps {
  workout: IWorkout;
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid overflow-hidden rounded-xl border border-[#25272d] bg-[#17191e] lg:grid-cols-2">

        {/* LEFT — IMAGE */}
        <div className="relative min-h-100 bg-[#111318] lg:min-h-[650px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* RIGHT — CONTENT */}
        <div className="flex flex-col p-6 sm:p-8 lg:p-10">

          {/* Category */}
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.category.map((category) => (
              <span
                key={category}
                className="rounded-full border border-[#ccff00]/30 px-3 py-1 text-[9px] font-bold uppercase tracking-wide text-[#ccff00]"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-black uppercase leading-none tracking-tight text-white sm:text-4xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#8b8f98]">
            {workout.description}
          </p>

          {/* Key Specs */}
          <div className="mt-8">
            <h2 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ccff00]">
              Key Specs
            </h2>

            <div className="divide-y divide-[#25272d] border-y border-[#25272d]">
              
              <div className="flex justify-between py-3">
                <span className="text-[10px] text-[#777b84]">
                  EQUIPMENT
                </span>
                <span className="text-xs font-semibold text-white">
                  {workout.equipment}
                </span>
              </div>

              <div className="flex justify-between py-3">
                <span className="text-[10px] text-[#777b84]">
                  DIFFICULTY
                </span>
                <span className="text-xs font-semibold text-white">
                  {workout.difficulty}
                </span>
              </div>

              <div className="flex justify-between py-3">
                <span className="text-[10px] text-[#777b84]">
                  SETS
                </span>
                <span className="text-xs font-semibold text-white">
                  {workout.sets}
                </span>
              </div>

              <div className="flex justify-between py-3">
                <span className="text-[10px] text-[#777b84]">
                  REPS
                </span>
                <span className="text-xs font-semibold text-white">
                  {workout.reps}
                </span>
              </div>

              <div className="flex justify-between py-3">
                <span className="text-[10px] text-[#777b84]">
                  DURATION
                </span>
                <span className="text-xs font-semibold text-white">
                  {workout.duration} min
                </span>
              </div>

              <div className="flex justify-between py-3">
                <span className="text-[10px] text-[#777b84]">
                  CALORIES
                </span>
                <span className="text-xs font-semibold text-white">
                  {workout.calories} kcal
                </span>
              </div>

              <div className="flex justify-between py-3">
                <span className="text-[10px] text-[#777b84]">
                  RATING
                </span>
                <span className="text-xs font-semibold text-[#ccff00]">
                  ★ {workout.rating}
                </span>
              </div>

            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ccff00]">
              Instructions
            </h2>

            <ol className="space-y-3">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-xs leading-5 text-[#a1a5ad]"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#25272d] text-[9px] font-bold text-[#ccff00]">
                    {index + 1}
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#d8ff45]"
            >
              <span>＋</span>
              Add to today's plan
            </button>

            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-md border border-[#3a3d44] px-5 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
            >
              <CiSaveDown2 />
              <span>Save for later</span>
            </button>

          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetails;