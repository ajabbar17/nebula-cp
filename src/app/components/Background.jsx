"use client";
import React, { useEffect, useRef } from 'react';
import { initHeader, initAnimation, addListeners } from '../../Utils/animation';

const Background = () => {
  const canvasRef = useRef(null);
  const headerRef = useRef(null);
  const pointsRef = useRef([]);
  const targetRef = useRef({ x: 0, y: 0 });
  const animateHeaderRef = useRef(true);

  useEffect(() => {
    const mouseMove = (e) => {
      targetRef.current.x = e.pageX || e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      targetRef.current.y = e.pageY || e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    };

    const scrollCheck = () => {
      animateHeaderRef.current = document.body.scrollTop <= window.innerHeight;
    };

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const largeHeader = headerRef.current;
      largeHeader.style.height = `${height}px`;
      const canvas = canvasRef.current;
      canvas.width = width;
      canvas.height = height;
    };

    initHeader(canvasRef, headerRef, pointsRef.current, targetRef.current);
    initAnimation(canvasRef.current.getContext('2d'), pointsRef.current, targetRef.current, animateHeaderRef.current);
    addListeners(mouseMove, scrollCheck, resize);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('scroll', scrollCheck);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div id="large-header" className="large-header" ref={headerRef}>
      <canvas id="demo-canvas" ref={canvasRef}></canvas>
      <h1 className="text-4xl md:text-8xl font-bold mb-6 main-title" style={{minHeight: '1em'}}>
        <span
          className="inline-block animate-animation"
          style={{
            animationDelay: '1s',
            background: 'linear-gradient(to right, #fff, #fff)',
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            backgroundSize: '0%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          NEBULA CAPITAL
        </span>
      </h1>
      <h1 className="text-2xl md:text-6xl font-bold mt-20 md:mt-36 uppercase main-title" style={{ color: '#D64D72', minHeight: '1em' }}>
        Web2, WEB3, & beyond
      </h1>
      <button
        className="bg-white font-bold text-xl text-black p-4 mt-72 md:mt-96 px-6  text-center main-title rounded-full"
        onClick={() => window.open("https://t.me/+K2gODipwtbo3MDVh", "_blank")}
      >
        Get Early Access to Nebula
      </button>
    </div>
  );
};

export default Background;
