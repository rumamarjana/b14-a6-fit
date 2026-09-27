"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { Iwork } from "@/types/work.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const SaveButton = ({ workout }: { workout: Iwork }) => {
  const { save, setSave } = useContext(WorkoutContext);

  const handleSavenWork = () => {
    console.log(" save triggered", workout);


    setSave([...save, workout]);
    toast.success(`You add save another data "${workout.name}"`);
  };

    return (
        <button className="bg-[#ccff00] text-black hover:bg-[#b3e600] 
        font-bold rounded-lg px-5 py-2.5 text-sm flex items-center transition-colors"
          onClick={() => handleSavenWork()}
         >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
           Save for later
        </button>
    );
};

export default SaveButton;




















