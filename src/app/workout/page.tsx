import React from 'react';
import WorkoutCard from '@/components/shared/WorkoutCard';
import {Iwork} from '@/types/work.type'


const workOutPage = async () => {
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await response.json();

    return data;

}




const WorkOutPage = async () => {

    const workData = await workOutPage();

    console.log(workData, 'workData');
    return (
        <section className='bg-[#15171d] py-6'>
            <div className='container mx-auto'>
                <div className='mx-9 '>
                    <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.95] text-white">THE LIBRARY</h2>
                    <p className="text-sm text-gray-400 max-w-md mt-4 leading-6">Twelve lifts covering every major muscle group.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w">
                    {workData.map((workout: Iwork, ind: number) => {
                        return <WorkoutCard key={ind} workout={workout} />;
                    })}
                </div>
            </div>

        </section>
    );
};

export default WorkOutPage;