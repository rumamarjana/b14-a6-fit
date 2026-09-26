import React from 'react';
import {Iwork} from '@/types/work.type'
import React, { createContext, ReactNode, useState } from "react";


const WorkoutContext = createContext({null});


const WorkoutProvider = ({children}:{ children: ReactNode }) => {

    const [plan, setPlan] = useState<Iwork[]>([]);
    const [save, setSave] = useState<Iwork[]>([]);




     const sharedData = {
          plan,
        setPlan,
           save,
        setSave
  };

    return (
          <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
    );
};

export default WorkoutProvider;