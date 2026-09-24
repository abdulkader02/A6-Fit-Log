import { notFound } from "next/navigation";
import WorkoutDetails from "@/components/workout-details/WorkoutDetails";

const WorkoutDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  if (!response.ok) {
    notFound();
  }

  const workout = await response.json();

  return <WorkoutDetails workout={workout} />;
};

export default WorkoutDetailsPage;