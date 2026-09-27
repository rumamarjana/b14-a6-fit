import React from 'react';
import { Iwork } from '@/types/work.type';
import Image from 'next/image';
import Link from 'next/link';

const planWorkCard = ({ workout }:{workout: Iwork}) => {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 bg-[#0a0c10]">

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-[#12141c] border border-[#1f2230] rounded-xl transition hover:border-[#2e3347] gap-4">


                <div className="flex items-center gap-4 w-full sm:w-auto">

                    <div className="relative w-28 h-16 rounded-lg overflow-hidden bg-[#1e2230] flex-shrink-0 border border-[#2b2f42]">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            priority
                            className="object-cover rounded-2xl"
                        />
                    </div>


                    <div className="flex flex-col min-w-0">
                        <h3 className="text-white font-bold tracking-wide uppercase text-sm sm:text-base truncate">Russian Twist</h3>
                        <span className="text-gray-400 text-xs sm:text-sm mt-0.5">Medicine Ball</span>


                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs mt-2 text-gray-400">
                            <div className="flex items-center gap-1">
                                <span className="text-[#ccff00] text-[13px]">🕒</span>
                                <span>8 min</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-[#ccff00] text-[13px]">🔥</span>
                                <span>70 kcal</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-amber-400 text-[12px]">⭐</span>
                                <span className="font-medium text-gray-300">4.1</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex items-center gap-2 w-full sm:w-auto justify-end border-t border-[#1f2230] sm:border-t-0 pt-3 sm:pt-0">
                  <Link href={`/workout/${workout.id}`}>
                    <button className="px-4 py-2 text-xs font-semibold text-gray-300 bg-transparent border border-[#2e3347] rounded-full hover:bg-[#1e2230] hover:text-white transition whitespace-nowrap">
                        View Details
                    </button>
              </Link>

                    <button className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-black bg-[#ccff00] hover:bg-[#b5e600] rounded-full transition whitespace-nowrap">
                        <span>✓</span> Mark as Done
                    </button>


                    <button className="p-2 text-gray-500 hover:text-gray-300 transition text-sm ml-1" aria-label="Dismiss Item">
                        ✕
                    </button>
                </div>

            </div>
        </div>

    );
};

export default planWorkCard;