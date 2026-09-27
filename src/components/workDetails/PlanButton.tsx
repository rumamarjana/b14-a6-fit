"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { Iwork } from "@/types/work.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const PlanButton = ({ workout }: { workout: Iwork }) => {
  const { plan, setPlan } = useContext(WorkoutContext);

  const handlePlanWork = () => {
    console.log(" Plan triggered", workout);


    setPlan([...plan, workout]);
    toast.success(`You add Plan "${workout.name}"`);
  };

    return (
        <button className="bg-[#ccff00] text-black hover:bg-[#b3e600] 
        font-bold rounded-lg px-5 py-2.5 text-sm flex items-center transition-colors"
          onClick={() => handlePlanWork()}
         >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Add to today's plan
        </button>
    );
};

export default PlanButton;