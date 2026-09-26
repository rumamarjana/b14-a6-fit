import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/banner.png'

const Banner = () => {
    return (
        <section className='bg-[#15171d] py-6'>
            <div className="hero bg-base-200 min-h-screen  container mx-auto overflow-hidden rounded-2xl h-[100px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image
                        src={bannerImg}
                        width={400}
                        height={500}
                    />
                    <div className="max-w-xl">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#b6ff00] mb-4">
                            Workout Library
                        </p>

                        <h1 className="text-4xl md:text-5xl font-black uppercase leading-[0.95] text-white">
                            Train with intent. <br />
                            Log every set.
                        </h1>

                        <p className="text-sm text-gray-400 max-w-md mt-4 leading-6">
                            FitLog is a dark, no-nonsense gym companion:
                            pick a lift, lock it into today&apos;s plan,
                            and watch the week&apos;s work add up.
                        </p>

                        <button className="mt-5 btn btn-sm bg-[#b6ff00] border-none 
                            text-black font-bold hover:bg-[#c8ff4d]">
                            Browse Workouts
                        </button>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Banner;