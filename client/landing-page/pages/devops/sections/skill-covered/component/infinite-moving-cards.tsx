'use client';

import React, { useEffect, useState } from 'react';

import { cn } from '@shared';

export function InfiniteMovingCards({
  className,
  direction = 'left',
  items,
  pauseOnHover = true,
  speed = 'fast',
}: {
  className?: string;
  direction?: 'left' | 'right';
  items: {
    title: string;
  }[];
  pauseOnHover?: boolean;
  speed?: 'fast' | 'normal' | 'slow';
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty(
          '--animation-duration',
          '20s',
        );
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty(
          '--animation-duration',
          '40s',
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-duration',
          '80s',
        );
      }
    }
  };

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(
        scrollerRef.current.children,
      );

      for (const item of scrollerContent) {
        const duplicatedItem = item.cloneNode(true);

        if (scrollerRef.current) {
          scrollerRef.current.append(duplicatedItem);
        }
      }

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  useEffect(() => {
    addAnimation();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 overflow-hidden',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item) => (
          <li
            key={item.title}
            className='relative flex shrink-0 items-center justify-center rounded-[30px] bg-[#E9F3FF] px-6 py-3 transition-all duration-300 ease-in-out hover:bg-white md:px-12'
          >
            <blockquote className='flex max-w-[350px] items-center gap-3 py-3 md:max-w-[550px]'>
              <h4 className='text-nowrap text-lg font-bold text-[#00AABB] md:text-2xl'>
                {item.title}
              </h4>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}
