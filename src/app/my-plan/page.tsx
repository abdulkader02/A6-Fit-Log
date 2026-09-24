"use client";
import { WorkoutContext } from '@/context/WorkoutProvider';
import React, { useContext } from 'react';

const page = () => {
    const { workouts } =useContext(WorkoutContext);
    return (
        <div>
            <h1>My Plan</h1>
            <ul>
                {workouts.map((workout) => (
                    <li key={workout.id}>{workout.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default page;