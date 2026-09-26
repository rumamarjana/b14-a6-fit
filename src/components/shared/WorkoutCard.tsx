import Image from 'next/image';
import React from 'react';
import {Iwork} from '@/types/work.type'
import { Clock, Flame, Star } from 'lucide-react';
import Link from 'next/link'

export const WorkoutCard = ({ workout }: { workout: Iwork }) => {
  return (
  <Link href={`/workout/${workout.id}`} className="block w-[394px] h-[368px] rounded-3xl overflow-hidden" >
    <div className="w-[394px] h-[368px] bg-[#121418] border border-gray-800 rounded-3xl overflow-hidden shadow-xl text-white font-sans flex flex-col justify-between">

      <div className="h-52 w-full overflow-hidden relative">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

    
      <div className="p-5 flex flex-col gap-2 w-full">
        {/* Muscle Group Badges */}
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle, index) => (
            <span
              key={index}
              className="bg-[#c2f900] text-black text-xs font-extrabold tracking-wider px-3 py-1 rounded-full uppercase"
            >
              {muscle}
            </span>
          ))}
        </div>

       
        <h3 className="text-xl font-black uppercase tracking-wide text-white leading-tight mt-1">
          {workout.name}
        </h3>

     
        <p className="text-gray-400 text-sm font-medium -mt-1">
          {workout.equipment}
        </p>

     
        <div className="border-t border-gray-800 my-1" />

        
        <div className="flex items-center gap-5 text-gray-300 text-sm font-medium">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-gray-400" />
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-gray-400 fill-gray-400" />
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-gray-400" />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default WorkoutCard;