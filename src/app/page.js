import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Background from './components/Background';
import Why from './components/Homepage/Why';
import How from './components/Homepage/How';
import PowerOfAI from './components/Homepage/PowerofAI';

const About = dynamic(() => import('./components/Homepage/About'), { suspense: true });
const Retail = dynamic(() => import('./components/Homepage/Retail'), { suspense: true });
const Team = dynamic(() => import('./components/Homepage/Team'), { suspense: true });

export default function Home() {
  return (
    <div>
      <Background />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <How/>
        <PowerOfAI/>
        <Team />
        <Why/>
      </Suspense>
    </div>
  );
}
