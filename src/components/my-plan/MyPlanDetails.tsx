"use client";

import { useContext, useState } from "react";
import Link from "next/link";

import PlanWorkoutCard from "@/components/my-plan/PlanWorkoutCard";
import { WorkoutContext } from "@/context/WorkoutProvider";

const MyPlanDetails = () => {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
  } = useContext(WorkoutContext);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  // Show Today's Plan or Saved workouts
  const workouts = activeTab === "today" ? plan : saved;

  // Today's Plan metrics
  const totalExercises = plan.length;

  const totalMinutes = plan.reduce(
    (sum, workout) => sum + (workout.duration || 0),
    0,
  );

  const totalCalories = plan.reduce(
    (sum, workout) => sum + (workout.caloriesBurned || 0),
    0,
  );

  // Remove workout
  const handleRemove = (id: number) => {
    if (activeTab === "today") {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
    }
  };

  return (
    <main className="min-h-screen bg-[#0c0d10] px-4 py-8 text-white sm:px-6 md:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            MY PLAN
          </h1>

          <p className="mt-1 text-xs text-[#787c87]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 divide-x divide-[#20232b] rounded-2xl border border-[#20232b] bg-[#121418] p-4 sm:p-6">

          {/* Exercises */}
          <div className="pr-3 sm:pr-4">
            <span className="text-[10px] text-[#787c87] sm:text-xs">
              Exercises
            </span>

            <p className="mt-2 text-2xl font-black text-[#ccff00] sm:text-3xl">
              {totalExercises}
            </p>
          </div>

          {/* Minutes */}
          <div className="px-3 sm:px-4">
            <span className="text-[10px] text-[#787c87] sm:text-xs">
              Minutes
            </span>

            <p className="mt-2 text-2xl font-black sm:text-3xl">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="pl-3 sm:pl-4">
            <span className="text-[10px] text-[#787c87] sm:text-xs">
              Calories
            </span>

            <p className="mt-2 text-2xl font-black sm:text-3xl">
              {totalCalories}
            </p>
          </div>

        </div>

        {/* Tabs */}
        <div className="mt-8">
          <div className="inline-flex w-full rounded-xl border border-[#20232b] bg-[#121418] p-1 sm:w-auto">

            {/* Today's plan */}
            <button
              onClick={() => setActiveTab("today")}
              className={`flex-1 rounded-lg px-4 py-2.5 text-xs font-bold transition sm:flex-none ${
                activeTab === "today"
                  ? "bg-[#ccff00] text-black"
                  : "text-[#787c87] hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            {/* Saved */}
            <button
              onClick={() => setActiveTab("saved")}
              className={`flex-1 rounded-lg px-4 py-2.5 text-xs font-bold transition sm:flex-none ${
                activeTab === "saved"
                  ? "bg-[#ccff00] text-black"
                  : "text-[#787c87] hover:text-white"
              }`}
            >
              Saved
            </button>

          </div>
        </div>

        {/* Workouts */}
        <div className="mt-6">

          {workouts.length === 0 ? (
            <div className="flex min-h-75 flex-col items-center justify-center rounded-2xl border border-dashed border-[#20232b] bg-[#121418]/50 px-5 text-center">

              <h2 className="text-xl font-black uppercase">
                NOTHING HERE YET
              </h2>

              <p className="mt-2 max-w-md text-xs text-[#787c87]">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-6 rounded-full bg-[#ccff00] px-6 py-3 text-xs font-black uppercase tracking-wider text-black transition hover:bg-[#b8e600]"
              >
                Go to workouts
              </Link>

            </div>
          ) : (
            <div className="flex flex-col gap-4">

              {workouts.map((workout) => (
                <PlanWorkoutCard
                  key={workout.id}
                  workout={workout}
                  onRemove={handleRemove}
                  isSaved={activeTab === "saved"}
                />
              ))}

            </div>
          )}

        </div>
      </div>
    </main>
  );
};

export default MyPlanDetails;
