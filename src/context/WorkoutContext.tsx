"use client";


import React, { createContext, useState, ReactNode } from 'react';

export const WorkoutContext = createContext({});


const WorkoutProvider = ({ children }: { children: ReactNode }) => {

   const [plan, setPlan] = useState([]);
   const [save, setSave] = useState([]);

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