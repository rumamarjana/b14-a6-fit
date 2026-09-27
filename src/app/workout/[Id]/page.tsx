import React from 'react';
import { Iwork } from '@/types/work.type';
import Image from 'next/image';
import PlanButton from '@/components/workDetails/PlanButton';
import SaveButton from '@/components/workDetails/SaveButton';


interface IWorkDetailsPageProps {
    params: Promise<{
        Id: string;
    }>;
}

const workOutPage = async () => {
    const response = await fetch(
        "https://api.api-store.workers.dev/api/fitlog"
    );

    const data = await response.json();

    return data;
};



const WorkOutDetailsPage = async ({
    params,
}: IWorkDetailsPageProps) => {
    const { Id } = await params;

    const workData = await workOutPage();

    console.log("ALL WORKOUTS:", workData);

    const workout = workData.find(
    (workout: Iwork) => String(workout.id) === String(Id)
  );
    console.log("FOUND WORKOUT:", workout);


    return (
      <section className="bg-[#0b0d12] min-h-screen py-10 px-4 text-gray-200">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2 aspect-square relative rounded-2xl overflow-hidden flex-shrink-0">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover rounded-2xl"
            />
          </div>

          
          <div className="w-full lg:w-1/2 font-sans flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold uppercase tracking-wide text-white mb-2">
                {workout.name}
              </h2>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {workout.description}
              </p>

            
              <div className="flex flex-wrap gap-2 mb-6">
                {workout.muscleGroups.map((group:any, index:number) => (
                  <span
                    key={index}
                    className="bg-[#ccff00] text-black font-bold px-3.5 py-1 text-xs rounded-full"
                  >
                    {group}
                  </span>
                ))}
              </div>

          
              <div className="bg-[#12151c] rounded-xl p-4 mb-6 border border-gray-800/40">
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
                <ol className="list-decimal list-inside space-y-3 text-xs text-gray-300 leading-relaxed">
                  {workout.instructions.map((step:any, index:number) => (
                    <li key={index}>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

      
            <div className="flex flex-wrap gap-3 pt-2">
             <PlanButton workout={workout} / >
              <SaveButton workout={workout} / >
             
            </div>

          </div>
        </div>
      </div>
    </section>
    );
};

export default WorkOutDetailsPage;