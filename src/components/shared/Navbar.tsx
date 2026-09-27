import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import Logo from '@/assets/logo.png'
import PlanCount from '../workCount/planCount';
import SaveCount from '../workCount/saveCount';

import { Plane } from 'lucide-react';

const Navbar = () => {

    const links = <>
        <li><Link href="/workout" className="rounded-full px-4 py-2 text-sm text-gray-400
            hover:bg-[#182510] hover:text-lime-400
            transition-all duration-200">
            Workouts
        </Link></li>
        <li><Link href="/plan-listed" className="rounded-full px-4 py-2 text-sm text-gray-400
            hover:bg-[#182510] hover:text-lime-400
            transition-all duration-200" >
            My Plan
        </Link></li>
     
    </>


    return (
        <div className="navbar bg-base-100 shadow-sm ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl">
                    <Image
                        src={Logo}
                        width={40}
                        height={50}
                        alt='logo'
                    />
                    FITLOG
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <PlanCount />
               <SaveCount />
            </div>
        </div>
    );
};

export default Navbar;