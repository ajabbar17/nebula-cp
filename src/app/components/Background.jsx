"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';


const Background = () => {
  const canvasRef = useRef(null);
  const headerRef = useRef(null);


  useEffect(() => {
    let width, height, canvas, ctx, points, target;
    let animateHeader = true;

    const initHeader = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      target = { x: width / 2, y: height / 2 };

      const largeHeader = headerRef.current;
      largeHeader.style.height = height + "px";

      canvas = canvasRef.current;
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext("2d");

      // create points
      points = [];
      for (let x = 0; x < width; x = x + width / 20) {
        for (let y = 0; y < height; y = y + height / 20) {
          const px = x + Math.random() * width / 20;
          const py = y + Math.random() * height / 20;
          const p = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      // for each point find the 5 closest points
      for (let i = 0; i < points.length; i++) {
        const closest = [];
        const p1 = points[i];
        for (let j = 0; j < points.length; j++) {
          const p2 = points[j];
          if (!(p1 === p2)) {
            let placed = false;
            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (closest[k] === undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      // assign a circle to each point
      for (let i in points) {
        const c = new Circle(points[i], 2 + Math.random() * 2, "rgba(255,255,255,0.3)");
        points[i].circle = c;
      }
    };

    const addListeners = () => {
      if (!("ontouchstart" in window)) {
        window.addEventListener("mousemove", mouseMove);
      }
      window.addEventListener("scroll", scrollCheck);
      window.addEventListener("resize", resize);
    };

    const mouseMove = (e) => {
      let posx = 0;
      let posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      target.x = posx;
      target.y = posy;
    };

    const scrollCheck = () => {
      if (document.body.scrollTop > height) animateHeader = false;
      else animateHeader = true;
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const largeHeader = headerRef.current;
      largeHeader.style.height = height + "px";
      canvas.width = width;
      canvas.height = height;
    };

    const initAnimation = () => {
      animate();
      for (let i in points) {
        shiftPoint(points[i]);
      }
    };

    const animate = () => {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (let i in points) {
          if (Math.abs(getDistance(target, points[i])) < 4000) {
            points[i].active = 0.3;
            points[i].circle.active = 0.6;
          } else if (Math.abs(getDistance(target, points[i])) < 20000) {
            points[i].active = 0.1;
            points[i].circle.active = 0.3;
          } else if (Math.abs(getDistance(target, points[i])) < 40000) {
            points[i].active = 0.02;
            points[i].circle.active = 0.1;
          } else {
            points[i].active = 0;
            points[i].circle.active = 0;
          }

          drawLines(points[i]);
          points[i].circle.draw();
        }
      }
      requestAnimationFrame(animate);
    };

    const shiftPoint = (p) => {
      gsap.to(p, {
        duration: 1 + 1 * Math.random(),
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: "circ.inOut",
        onComplete: function () {
          shiftPoint(p);
        }
      });
    };

    const drawLines = (p) => {
      if (!p.active) return;
      for (let i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
        ctx.stroke();
      }
    };

    function Circle(pos, rad, color) {
      this.pos = pos || null;
      this.radius = rad || null;
      this.color = color || null;

      this.draw = function () {
        if (!this.active) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "rgba(156,217,249," + this.active + ")";
        ctx.fill();
      };
    }

    const getDistance = (p1, p2) => {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    };

    initHeader();
    initAnimation();
    addListeners();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", scrollCheck);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div id="large-header" className="large-header" ref={headerRef}>
     
      <canvas id="demo-canvas" ref={canvasRef}></canvas>

          <h1 className="text-4xl md:text-8xl font-bold mb-6 main-title">
            <span
              className={`inline-block animate-animation  `}
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
          <h1 className="text-2xl  md:text-6xl font-bold mt-20 md:mt-36 uppercase main-title"
            style={{ color: '#D64D72' }}
          >
            Web2,WEB3 & beyond
          </h1>
          <p className="text-base md:text-2xl main-title mt-36 md:mt-64">A new way to find superstar crypto plays</p>
          <button className='bg-white font-bold text-xl text-black p-4 mt-72 md:mt-96 px-6 md:px-12 text-center main-title rounded-full'>Get Started</button>

    </div>
  );
};

export default Background;
