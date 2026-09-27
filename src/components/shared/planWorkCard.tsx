"use client";

import React, { useContext, useState } from "react";
import { Iwork } from "@/types/work.type";
import Image from "next/image";
import Link from "next/link";
import { WorkoutContext } from "@/context/WorkoutContext";

const planWorkCard = ({ workout }: { workout: Iwork }) => {
  const [isDone, setIsDone] = useState(false);

  const context = useContext(WorkoutContext);

  
  const { plan, setPlan } = context;

   const handleRemove = () => {
    setPlan((prevPlan: Iwork[]) =>
      prevPlan.filter((item: Iwork) => item.id !== workout.id)
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-[#0a0c10]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-[#12141c] border border-[#1f2230] rounded-xl transition hover:border-[#2e3347] gap-4">

        {/* Workout Information */}
        <div className="flex items-center gap-4 w-full sm:w-auto">

          {/* Image */}
          <div className="relative w-28 h-16 rounded-lg overflow-hidden bg-[#1e2230] flex-shrink-0 border border-[#2b2f42]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col min-w-0">
            <h3 className="text-white font-bold tracking-wide uppercase text-sm sm:text-base truncate">
              {workout.name}
            </h3>

            <span className="text-gray-400 text-xs sm:text-sm mt-0.5">
              {workout.equipment}
            </span>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs mt-2 text-gray-400">

              {/* Duration */}
              <div className="flex items-center gap-1">
                <span className="text-[#ccff00] text-[13px]">
                  🕒
                </span>
                <span>{workout.duration} min</span>
              </div>

              {/* Calories */}
              <div className="flex items-center gap-1">
                <span className="text-[#ccff00] text-[13px]">
                  🔥
                </span>
                <span>{workout.caloriesBurned} kcal</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                <span className="text-amber-400 text-[12px]">
                  ⭐
                </span>
                <span className="font-medium text-gray-300">
                  {workout.rating}
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end border-t border-[#1f2230] sm:border-t-0 pt-3 sm:pt-0">

          {/* View Details */}
          <Link href={`/workout/${workout.id}`}>
            <button
              className="px-4 py-2 text-xs font-semibold text-gray-300 bg-transparent border border-[#2e3347] rounded-full hover:bg-[#1e2230] hover:text-white transition whitespace-nowrap"
            >
              View Details
            </button>
          </Link>

          {/* Mark Done */}
          <button
            onClick={() => setIsDone(!isDone)}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full transition whitespace-nowrap ${
              isDone
                ? "bg-green-500 text-white"
                : "bg-[#ccff00] text-black hover:bg-[#b5e600]"
            }`}
          >
            <span>✓</span>

            {isDone ? "Completed" : "Mark as Done"}
          </button>

          {/* Remove */}
          <button
            onClick={handleRemove}
            className="p-2 text-gray-500 hover:text-red-400 transition text-sm ml-1"
            aria-label="Remove workout"
          >
            ✕
          </button>

        </div>
      </div>
    </div>
  );
};

export default planWorkCard;