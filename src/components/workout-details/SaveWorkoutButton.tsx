"use client";

import { useContext } from "react";
import { CiSaveDown2 } from "react-icons/ci";
import toast from "react-hot-toast";

import { WorkoutContext } from "@/context/WorkoutProvider";
import { IWorkout } from "@/types/workout.type";

interface SaveWorkoutButtonProps {
  workout: IWorkout;
}

const SaveWorkoutButton = ({
  workout,
}: SaveWorkoutButtonProps) => {
  const { saveWorkout } = useContext(WorkoutContext);

  const handleSave = () => {
    const saved = saveWorkout(workout);

    if (!saved) {
      toast.error("This workout is already saved!");
      return;
    }

    toast.success("Saved for later");
  };

  return (
    <button
      onClick={handleSave}
      className="flex flex-1 items-center justify-center gap-2 rounded-md border border-[#3a3d44] px-5 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
    >
      <CiSaveDown2 size={18} />

      Save for Later
    </button>
  );
};

export default SaveWorkoutButton;
