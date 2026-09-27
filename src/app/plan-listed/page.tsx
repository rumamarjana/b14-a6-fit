"use client";


import { WorkoutContext } from '@/context/WorkoutContext'
import React, { useState } from 'react';
import { useContext } from "react";
import { Iwork } from '@/types/work.type'
import PlanWorkCard from '@/components/shared/planWorkCard';
import Link from 'next/link';

const PlanPage = () => {

    const { plan, save, totalExercises, totalMinutes, totalCalories } = useContext(WorkoutContext);

    const [sortBy, setSortBy] = useState<"rating" |"duration" | "caloriesBurned">("duration");


    const sortWorkout = (workout: Iwork[]) => {
        const sortedWorkout = [...workout];

        if (sortBy === "duration") {
            sortedWorkout.sort((a, b) => b.duration - a.duration);
        } else if (sortBy === "caloriesBurned") {
            sortedWorkout.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        }
        else if (sortBy === "rating") {
            sortedWorkout.sort((a, b) => b.rating - a.rating);
        }
        return sortedWorkout;
    }


    const sortedPlan = sortWorkout(plan);
    const sortedSave = sortWorkout(save);

    console.log(sortedPlan, "sortedPlan");
    console.log(sortedSave, "sortedSave");
    return (
        <section className='bg-[#0B0C10] text-gray-300 min-h-screen p-8 '>
            <div className='container mx-auto'>
                <div>
                    <h1 className="text-2xl font-bold font-heading text-white tracking-wider uppercase">My Plan</h1>
                    <p className="text-sm text-gray-400 mt-1">Cap of five lifts for today. Finish them, then load more.</p>
                </div>

                <div className="bg-[#12141D] border border-gray-800 rounded-2xl p-6 grid grid-cols-3 divide-x divide-gray-800">


                    <div className="px-4 first:pl-0">
                        <span className="text-xs text-gray-400 uppercase tracking-wide block mb-1">Exercises</span>
                        <span className="text-4xl font-bold font-heading text-[#CCFF00]"> {totalExercises}</span>
                    </div>


                    <div className="px-6">
                        <span className="text-xs text-gray-400 uppercase tracking-wide block mb-1">Minutes</span>
                        <span className="text-4xl font-bold font-heading text-white">  {totalMinutes}</span>
                    </div>


                    <div className="px-6">
                        <span className="text-xs text-gray-400 uppercase tracking-wide block mb-1">Calories</span>
                        <span className="text-4xl font-bold font-heading text-white">  {totalCalories}</span>
                    </div>

                </div>

                <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#0a0c10] font-sans gap-4 select-none ">
                    <div className='w-full grid grid-cols-2 justify-between mb-4'>
                        <div className='w-full flex items-center justify-between mb-4'>
                            <div className="tabs tabs-lift py-8  w-full">
                                <input type="radio" name="my_tabs_3" className="tab" aria-label="Today’s Plan" />
                                <div className="tab-content bg-base-100 border-base-300 p-6">
                                    {sortedPlan.length > 0 ? (
                                        sortedPlan.map((workout: Iwork) => {
                                            return (
                                                <PlanWorkCard
                                                    key={workout.id}
                                                    workout={workout}
                                                />
                                            );
                                        })
                                    ) : (
                                        <div className=" mt-4 flex min-h-[150px] flex-col items-center justify-center rounded-xl
                                 border border-dashed border-[#252a32] bg-[#0f1115]">

                                            <h2 className="text-[10px] font-bold tracking-wide">
                                                NOTHING HERE YET
                                            </h2>

                                            <p className="mt-1 text-[7px] text-gray-500">
                                                Browse the library and add a lift to get today moving.
                                            </p>
                                            <Link href="/workout">
                                                <button className="mt-3 rounded-full  bg-[#c8ff00] px-4 py-[6px] text-[7px font-bold
                                          text-black  shadow-[0_4px_15px_rgba(200,255,0,0.2)]   transition hover:scale-105 hover:bg-[#bdf000] " >
                                                    Go to workouts
                                                </button>
                                            </Link>

                                        </div>

                                    )}
                                </div>

                                <input type="radio" name="my_tabs_3" className="tab" aria-label="Saved" defaultChecked />
                                <div className="tab-content bg-base-100 border-base-300 p-6">
                                    {sortedSave.length > 0 ? (
                                        sortedSave.map((workout: Iwork) => {
                                            return (
                                                <PlanWorkCard
                                                    key={workout.id}
                                                    workout={workout}
                                                />
                                            );
                                        })
                                    ) : (
                                        <div className=" mt-4 flex min-h-[150px] flex-col items-center justify-center rounded-xl
                                 border border-dashed border-[#252a32] bg-[#0f1115]">

                                            <h2 className="text-[10px] font-bold tracking-wide">
                                                NOTHING HERE YET
                                            </h2>

                                            <p className="mt-1 text-[7px] text-gray-500">
                                                Browse the library and add a lift to get today moving.
                                            </p>
                                            <Link href="/workout">
                                                <button className="mt-3 rounded-full  bg-[#c8ff00] px-4 py-[6px] text-[7px font-bold
                                          text-black  shadow-[0_4px_15px_rgba(200,255,0,0.2)]   transition hover:scale-105 hover:bg-[#bdf000] " >
                                                    Go to workouts
                                                </button>
                                            </Link>

                                        </div>
                                    )}
                                </div>


                            </div>
                        </div>

                        <div className="flex items-center gap-2 mx-8">
                            <select
                                value={sortBy}
                                onChange={(e) =>
                                    setSortBy(e.target.value as "duration" | "caloriesBurned" | "rating")
                                } defaultValue="Pick a Runtime"
                                className="select select-success " >
                                <option disabled={true}>Sort By</option>
                                <option value={"duration"}>duration</option>
                                <option value={"caloriesBurned"}>caloriesBurned</option>
                                <option value={"rating"}>rating</option>

                            </select>
                        </div>
                    </div>


                </div>

            </div >
        </section >

    );
};

export default PlanPage;