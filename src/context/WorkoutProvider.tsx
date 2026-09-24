"use client";

import { IWorkout } from "@/types/workout.type";
import React, {
  createContext,
  ReactNode,
  useState,
} from "react";

interface WorkoutContextType {
  plan: IWorkout[];
  saved: IWorkout[];

  addToPlan: (workout: IWorkout) => void;
  saveWorkout: (workout: IWorkout) => void;
}

export const WorkoutContext = createContext<WorkoutContextType>({
  plan: [],
  saved: [],

  addToPlan: () => {},
  saveWorkout: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);

  const addToPlan = (workout: IWorkout) => {
    setPlan((currentPlan) => [...currentPlan, workout]);
  };

  const saveWorkout = (workout: IWorkout) => {
    setSaved((currentSaved) => [...currentSaved, workout]);
  };

  const sharedData = {
    plan,
    saved,
    addToPlan,
    saveWorkout,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;