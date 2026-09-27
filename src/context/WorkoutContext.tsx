"use client";

import {Iwork} from "@/types/work.type"
import React, { createContext, useState, ReactNode } from 'react';

interface IWorkoutContext {
  plan: Iwork[];
  setPlan: React.Dispatch<React.SetStateAction<Iwork[]>>;
  save: Iwork[];
  setSave: React.Dispatch<React.SetStateAction<Iwork[]>>;
   totalExercises: number;
  totalMinutes: number;
  totalCalories: number;
}

export const WorkoutContext = createContext<IWorkoutContext>({
   plan: [],
  setPlan: () => {},

  save: [],
  setSave: () => {},

  totalExercises: 0,
  totalMinutes: 0,
  totalCalories: 0,
});



const WorkoutProvider = ({ children }: { children: ReactNode }) => {

  const [plan, setPlan] = useState<Iwork[]>([]);
  const [save, setSave] = useState<Iwork[]>([]);

   const totalExercises = plan.length;
   const totalMinutes = plan.reduce(
      (acc, item) => acc + item.duration,
      0
   );
   const totalCalories = plan.reduce(

      (acc, item) => acc + item.caloriesBurned,

      0

   );

   const sharedData = {
      plan,
      setPlan,
      save,
      setSave,
      totalExercises,
      totalMinutes,
      totalCalories,
   };

   return (
      <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
   );
};

export default WorkoutProvider;