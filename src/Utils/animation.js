// animation.js
import { gsap } from 'gsap';
import { getDistance, Circle } from './helpers';

export const initHeader = (canvasRef, headerRef, points, target) => {
  let width = window.innerWidth;
  let height = window.innerHeight;

  target.x = width / 2;
  target.y = height / 2;

  const largeHeader = headerRef.current;
  largeHeader.style.height = `${height}px`;

  const canvas = canvasRef.current;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  points.length = 0; // Clear the points array
  for (let x = 0; x < width; x += width / 20) {
    for (let y = 0; y < height; y += height / 20) {
      const px = x + Math.random() * width / 20;
      const py = y + Math.random() * height / 20;
      const p = { x: px, originX: px, y: py, originY: py };
      points.push(p);
    }
  }

  points.forEach(p1 => {
    const closest = [];
    points.forEach(p2 => {
      if (p1 !== p2) {
        for (let k = 0; k < 5; k++) {
          if (!closest[k] || getDistance(p1, p2) < getDistance(p1, closest[k])) {
            closest[k] = p2;
            break;
          }
        }
      }
    });
    p1.closest = closest;
  });

  points.forEach(p => {
    p.circle = new Circle(p, 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
  });
};

export const initAnimation = (ctx, points, target, animateHeader) => {
  const animate = () => {
    if (animateHeader) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      points.forEach(p => {
        if (Math.abs(getDistance(target, p)) < 4000) {
          p.active = 0.3;
          p.circle.active = 0.6;
        } else if (Math.abs(getDistance(target, p)) < 20000) {
          p.active = 0.1;
          p.circle.active = 0.3;
        } else if (Math.abs(getDistance(target, p)) < 40000) {
          p.active = 0.02;
          p.circle.active = 0.1;
        } else {
          p.active = 0;
          p.circle.active = 0;
        }

        drawLines(ctx, p);
        p.circle.draw(ctx);
      });
    }
    requestAnimationFrame(animate);
  };

  const shiftPoint = (p) => {
    gsap.to(p, {
      duration: 1 + Math.random(),
      x: p.originX - 50 + Math.random() * 100,
      y: p.originY - 50 + Math.random() * 100,
      ease: 'circ.inOut',
      onComplete: () => shiftPoint(p),
    });
  };

  const drawLines = (ctx, p) => {
    if (!p.active) return;
    p.closest.forEach(c => {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(c.x, c.y);
      ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
      ctx.stroke();
    });
  };

  points.forEach(p => shiftPoint(p));
  animate();
};

export const addListeners = (mouseMove, scrollCheck, resize) => {
  if (!('ontouchstart' in window)) {
    window.addEventListener('mousemove', mouseMove);
  }
  window.addEventListener('scroll', scrollCheck);
  window.addEventListener('resize', resize);
};
