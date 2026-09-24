"use client";

import { useContext } from "react";
import toast from "react-hot-toast";

import { WorkoutContext } from "@/context/WorkoutProvider";
import { IWorkout } from "@/types/workout.type";
import { MdOutlineLibraryAddCheck } from "react-icons/md";

interface AddToPlanButtonProps {
  workout: IWorkout;
}

const AddToPlanButton = ({
  workout,
}: AddToPlanButtonProps) => {
  const { addToPlan } = useContext(WorkoutContext);

  const handleAddToPlan = () => {
    addToPlan(workout);

    toast.success("Added to today's plan");
  };

  return (
    <button
      onClick={handleAddToPlan}
      className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-xs font-black uppercase tracking-wide text-black"
    >
      <span><MdOutlineLibraryAddCheck/></span>
      Add to Today&apos;s Plan
    </button>
  );
};

export default AddToPlanButton;