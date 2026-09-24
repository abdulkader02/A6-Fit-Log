import Image from "next/image";
import { IWorkout } from "@/types/workout.type";
import { CiSaveDown2 } from "react-icons/ci";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import SaveWorkoutButton from "./SaveWorkoutButton";
import AddToPlanButton from "./AddToPlanButton";

interface WorkoutDetailsProps {
  workout: IWorkout;
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid overflow-hidden rounded-xl border border-[#25272d] bg-[#17191e] lg:grid-cols-2">
        {/* LEFT — IMAGE */}
        <div className="relative min-h-100 bg-[#111318] lg:min-h-162.5">
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
          {/* Muscle Groups */}
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscleGroup) => (
              <span
                key={muscleGroup}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-black"
              >
                {muscleGroup}
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

          <div className="mt-8 bg-[#1a1c21] rounded-lg border border-[#25272d] p-6">
            <div className="divide-y divide-[#25272d] border-y border-[#25272d]">
              {/* Equipment */}
              <div className="flex items-center justify-between gap-5 py-3">
                <span className="text-[10px] text-[#9CA3AF]">EQUIPMENT</span>

                <span className="text-right text-xs font-semibold text-white">
                  {workout.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex items-center justify-between py-3">
                <span className="text-[10px] text-[#9CA3AF]">DIFFICULTY</span>

                <span className="text-xs font-semibold text-white">
                  {workout.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex items-center justify-between py-3">
                <span className="text-[10px] text-[#9CA3AF]">SETS</span>

                <span className="text-xs font-semibold text-white">
                  {workout.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="flex items-center justify-between py-3">
                <span className="text-[10px] text-[#9CA3AF]">REPS</span>

                <span className="text-xs font-semibold text-white">
                  {workout.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between py-3">
                <span className="text-[10px] text-[#9CA3AF]">DURATION</span>

                <span className="text-xs font-semibold text-white">
                  {workout.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex items-center justify-between py-3">
                <span className="text-[10px] text-[#9CA3AF]">CALORIES</span>

                <span className="text-xs font-semibold text-white">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between py-3">
                <span className="text-[10px] text-[#9CA3AF]">RATING</span>

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
              {workout.instructions.map((instruction, ind) => (
                <li
                  key={ind}
                  className="flex gap-3 text-xs leading-5 text-[#a1a5ad]"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#25272d] text-[9px] font-bold text-[#ccff00]">
                    {ind + 1}
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
         <div className="mt-8 flex flex-col gap-3 sm:flex-row">
  <AddToPlanButton workout={workout} />

  <SaveWorkoutButton workout={workout} />
</div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetails;
