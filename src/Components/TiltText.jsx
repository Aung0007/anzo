import { useGSAP } from '@gsap/react';
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';

const TiltText = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const element = tiltRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate tilt based on mouse position relative to center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = (y - centerY) / 20; // Adjust divisor to control tilt amount
      const tiltY = (centerX - x) / 20;

      element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    };

    const handleMouseLeave = () => {
      if (tiltRef.current) {
        tiltRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    tiltRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      tiltRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useGSAP(()=>{
    gsap.to(tiltRef.current,{
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      duration: 0.1,
      ease: 'power2.inOut'
    })
  },[tiltRef])

  return (
   <>
   <div className='text-white mt-24 w-fit' ref={tiltRef} style={{transition: 'transform 0.1s ease-out'}}>
    <h1 className='text-[4.2vw] uppercase font-[anzo] leading-[4vw]'>I AM <span className='text-black'>
    DARK MODE</span>™ </h1>
    <h1 className='text-[8.2vw] leading-[7vw] uppercase font-[anzo]'>DESIGNER</h1>
    <h1 className='text-[4.2vw] uppercase font-[anzo] leading-[4vw]'> TO HIRE</h1>
   </div>
   </>
  )
}

export default TiltText
