"use client";

import { IWorkout } from "@/types/workout.type";
import React, { createContext, ReactNode, useState } from "react";

interface WorkoutContextType {
  plan: IWorkout[];
  saved: IWorkout[];
  completedIds: number[];

  addToPlan: (workout: IWorkout) => boolean;
  saveWorkout: (workout: IWorkout) => boolean;

  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;
}

export const WorkoutContext = createContext<WorkoutContextType>({
  plan: [],
  saved: [],
  completedIds: [],

  addToPlan: () => false,
  saveWorkout: () => false,

  removeFromPlan: () => {},
  removeFromSaved: () => {},

  markAsDone: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);
  const [completedIds, setCompletedIds] = useState<number[]>([]);

  const addToPlan = (workout: IWorkout) => {
    if (plan.some((item) => item.id === workout.id)) {
      return false;
    }

    setPlan((currentPlan) => [...currentPlan, workout]);

    return true;
  };

  const saveWorkout = (workout: IWorkout) => {
    if (saved.some((item) => item.id === workout.id)) {
      return false;
    }

    setSaved((currentSaved) => [...currentSaved, workout]);

    return true;
  };

  const removeFromPlan = (id: number) => {
    setPlan((currentPlan) =>
      currentPlan.filter((workout) => workout.id !== id)
    );
  };

  const removeFromSaved = (id: number) => {
    setSaved((currentSaved) =>
      currentSaved.filter((workout) => workout.id !== id)
    );
  };

  const markAsDone = (id: number) => {
    setCompletedIds((currentIds) => {
      if (currentIds.includes(id)) {
        return currentIds;
      }

      return [...currentIds, id];
    });
  };

  const sharedData = {
    plan,
    saved,
    completedIds,
    addToPlan,
    saveWorkout,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;