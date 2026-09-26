import React from 'react';
import { Iwork } from '@/types/work.type';
import Image from 'next/image';

interface IWorkDetailsPageProps {
    params: Promise<{
        id: string;
    }>
}

const workOutPage = async () => {
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await response.json();

    return data;

}



const WorkOutDetailsPage = async ({ params }: IWorkDetailsPageProps) => {

    const { Id } = await params;

    const workData = await workOutPage();

    console.log(workData);

    const workout = workData.find(
        (workout: Iwork) => String(workout.id) === String(Id)
    );

    console.log("FOUND WORKOUT:", workout);


    return (
        <section className="bg-[#15171d] min-h-screen py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 items-stretch">

                   
                    <div className="w-full lg:w-1/2 relative min-h-[450px] lg:min-h-full rounded-2xl overflow-hidden flex-shrink-0">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover rounded-2xl"
                            priority
                        />
                    </div>

               
                    <div className=" text-gray-200 p-8  w-full lg:w-1/2 font-sans   flex flex-col justify-between">
                        <div>
                        
                            <h2 className="text-3xl font-extrabold uppercase tracking-wide text-white mb-2">
                                {workout.name}
                            </h2>
                            <p className="text-gray-400 text-sm mb-4">
                                {workout.description}
                            </p>

                        
                            <div className="flex flex-wrap gap-2 mb-6">
                                {workout.muscleGroups.map((group, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#ccff00] text-black font-bold px-4 py-1.5 text-xs rounded-full"
                                    >
                                        {group}
                                    </span>
                                ))}
                            </div>

                      
                            <div className="bg-[#181b23] rounded-xl p-4 mb-6 border border-gray-800/50">
                                <div className="divide-y divide-gray-800/60 text-xs tracking-wider">
                                    <div className="flex justify-between py-2.5">
                                        <span className="font-bold text-gray-400 uppercase">Equipment</span>
                                        <span className="font-semibold text-gray-200">{workout.equipment}</span>
                                    </div>
                                    <div className="flex justify-between py-2.5">
                                        <span className="font-bold text-gray-400 uppercase">Difficulty</span>
                                        <span className="font-semibold text-gray-200">{workout.difficulty}</span>
                                    </div>
                                    <div className="flex justify-between py-2.5">
                                        <span className="font-bold text-gray-400 uppercase">Sets</span>
                                        <span className="font-semibold text-gray-200">{workout.sets}</span>
                                    </div>
                                    <div className="flex justify-between py-2.5">
                                        <span className="font-bold text-gray-400 uppercase">Reps</span>
                                        <span className="font-semibold text-gray-200">{workout.reps}</span>
                                    </div>
                                    <div className="flex justify-between py-2.5">
                                        <span className="font-bold text-gray-400 uppercase">Duration</span>
                                        <span className="font-semibold text-gray-200">{workout.duration} min</span>
                                    </div>
                                    <div className="flex justify-between py-2.5">
                                        <span className="font-bold text-gray-400 uppercase">Calories</span>
                                        <span className="font-semibold text-gray-200">{workout.caloriesBurned} kcal</span>
                                    </div>
                                    <div className="flex justify-between py-2.5">
                                        <span className="font-bold text-gray-400 uppercase">Rating</span>
                                        <span className="font-semibold text-gray-200">{workout.rating}</span>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="mb-8">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                                    Instructions
                                </h3>
                                <ol className="list-decimal list-inside space-y-2.5 text-sm text-gray-300">
                                    {workout.instructions.map((step, index) => (
                                        <li key={index}>{step}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>

                        
                        <div className="flex flex-wrap gap-3 pt-2">
                            <button className="bg-[#ccff00] text-black hover:bg-[#b3e600] font-bold rounded-lg px-5 py-2.5 text-sm flex items-center transition-colors">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Add to today's plan
                            </button>
                            <button className="border border-gray-700 text-gray-300 hover:bg-gray-800 font-medium rounded-lg px-5 py-2.5 text-sm flex items-center transition-colors">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                                Save for later
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkOutDetailsPage;