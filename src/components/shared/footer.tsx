import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/logo.png'
import Link from 'next/link'

const footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 border-t border-[#242832] bg-[#0d0f13]">
            <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-4">

             
                <div className="flex items-center gap-2">
                  <Link href="/" className="btn btn-ghost text-xl">
                    <Image
                        src={Logo}
                        width={40}
                        height={50}
                        alt='logo'
                    />
                    FITLOG
                </Link>

                    <span className="text-[9px] font-bold">
                        FITLOG
                    </span>
                </div>

              
                <p className="text-[8px] text-gray-500">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default footer;