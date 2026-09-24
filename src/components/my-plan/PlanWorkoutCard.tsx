"use client";

import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { useContext } from "react";

import { IWorkout } from "@/types/workout.type";
import { WorkoutContext } from "@/context/WorkoutProvider";

import {
  MdAccessTime,
  MdLocalFireDepartment,
  MdStar,
  MdCheck,
  MdClose,
} from "react-icons/md";

interface PlanWorkoutCardProps {
  workout: IWorkout;
  onRemove: (id: number) => void;
  isSaved: boolean;
}

const PlanWorkoutCard = ({
  workout,
  onRemove,
  isSaved,
}: PlanWorkoutCardProps) => {
  const { markAsDone, completedIds } = useContext(WorkoutContext);

  const isCompleted = completedIds.includes(workout.id);

  const handleDone = () => {
    markAsDone(workout.id);
    toast.success(`${workout.name} marked as done!`);
  };

  const handleRemove = () => {
    onRemove(workout.id);
    toast.error(`${workout.name} removed!`);
  };

  return (
    <article
      className="
        flex w-full flex-col gap-4
        rounded-2xl border border-[#20232b]
        bg-[#121418] p-4
        sm:p-5
        md:flex-row md:items-center md:gap-5
        lg:gap-6 lg:p-5
      "
    >
      <div
        className="
          relative h-48 w-full shrink-0
          overflow-hidden rounded-xl
          sm:h-52
          md:h-24 md:w-32
          lg:h-28 lg:w-40
        "
      >
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 128px,
            160px
          "
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="text-lg font-black uppercase text-white sm:text-xl">
          {workout.name}
        </h2>

        <p className="mt-1 text-xs text-[#787c87]">
          {workout.equipment}
        </p>

        <div
          className="
            mt-4 flex flex-wrap items-center gap-x-4 gap-y-2
            text-[11px] text-[#9b9da5]
          "
        >
          <div className="flex items-center gap-1">
            <MdAccessTime size={16} className="text-[#ccff00]" />
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-1">
            <MdLocalFireDepartment
              size={16}
              className="text-[#ccff00]"
            />
            <span>{workout.caloriesBurned} cal</span>
          </div>

          <div className="flex items-center gap-1">
            <MdStar size={16} className="text-[#ccff00]" />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>

      <div
        className="
          flex w-full flex-wrap items-center gap-2
          md:w-auto md:shrink-0 md:flex-nowrap
        "
      >
        <Link
          href={`/workouts/${workout.id}`}
          className="
            flex-1 rounded-md border border-[#ccff00]
            px-4 py-2.5 text-center
            text-[10px] font-black uppercase
            text-[#ccff00]
            transition hover:bg-[#ccff00]
            hover:text-black
            sm:flex-none
          "
        >
          View Details
        </Link>

        {!isSaved && (
          <button
            onClick={handleDone}
            disabled={isCompleted}
            className={`
              flex flex-1 items-center justify-center
              gap-1 rounded-md
              px-4 py-2.5
              text-[10px] font-black uppercase
              transition
              sm:flex-none
              ${
                isCompleted
                  ? "cursor-default bg-[#25272d] text-[#ccff00]"
                  : "bg-[#ccff00] text-black hover:bg-[#b8e600]"
              }
            `}
          >
            <MdCheck size={16} />

            <span className="whitespace-nowrap">
              {isCompleted ? "Done" : "Mark as Done"}
            </span>
          </button>
        )}

        <button
          onClick={handleRemove}
          aria-label={`Remove ${workout.name}`}
          className="
            flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-md border border-[#3a3d44]
            text-[#787c87]
            transition
            hover:border-red-500
            hover:text-red-500
          "
        >
          <MdClose size={18} />
        </button>
      </div>
    </article>
  );
};

export default PlanWorkoutCard;