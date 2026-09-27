'use client';
import React, { useContext } from 'react';
import Link from 'next/link';
import { WorkoutContext } from '@/context/WorkoutContext';

const PlanCount = () => {
    const { plan } = useContext(WorkoutContext);

    return (
        <Link
            href="/plan-listed"
            className="group flex items-center gap-2 text-sm text-gray-300"
        >
            Plan
            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-700 text-xs text-gray-400 transition-colors group-hover:border-[#baff00] group-hover:bg-[#baff00] group-hover:text-black">
                {plan?.length || 0}
            </div>
        </Link>


    );
};

export default PlanCount;