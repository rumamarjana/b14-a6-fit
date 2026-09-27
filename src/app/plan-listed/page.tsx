"use client";

import WorkoutCard from '@/components/shared/WorkoutCard';
import { WorkoutContext } from '@/context/WorkoutContext'
import React from 'react';
import { useContext, useState } from "react";
import { Iwork } from '@/types/work.type'
import PlanWorkCard from '@/components/shared/planWorkCard';

const PlanPage = () => {

    const { plan, save, totalExercises, totalMinutes, totalCalories } = useContext(WorkoutContext);
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
                        <span className="text-4xl font-bold font-heading text-[#CCFF00]">2</span>
                    </div>


                    <div className="px-6">
                        <span className="text-xs text-gray-400 uppercase tracking-wide block mb-1">Minutes</span>
                        <span className="text-4xl font-bold font-heading text-white">23</span>
                    </div>


                    <div className="px-6">
                        <span className="text-xs text-gray-400 uppercase tracking-wide block mb-1">Calories</span>
                        <span className="text-4xl font-bold font-heading text-white">190</span>
                    </div>

                </div>


                <div className="tabs tabs-lift py-8">
                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Today’s Plan" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {plan.length > 0 ? (
                            plan.map((workout: Iwork) => {
                                return (
                                    <PlanWorkCard
                                        key={workout.id}
                                        workout={workout}
                                    />
                                );
                            })
                        ) : (
                            <p className="text-center text-lg font-semibold">
                                No plan workout found
                            </p>
                        )}
                    </div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Saved" defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {save.length > 0 ? (
                            save.map((workout: Iwork) => {
                                return (
                                    <PlanWorkCard
                                        key={workout.id}
                                        workout={workout}
                                    />
                                );
                            })
                        ) : (
                            <p className="text-center text-lg font-semibold">
                                No saved workout found
                            </p>
                        )}
                    </div>


                </div>
            </div>
        </section>

    );
};

export default PlanPage;