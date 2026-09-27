'use client';
import React, { useContext } from 'react';
import { WorkoutContext } from '@/context/WorkoutContext';

const SaveCount = () => {
  const { save } = useContext(WorkoutContext);

  return (
    <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-700 text-xs text-gray-400 transition-colors group-hover:border-[#baff00] group-hover:bg-[#baff00] group-hover:text-black">
      {save?.length || 0}
    </div>
  );
};

export default SaveCount;