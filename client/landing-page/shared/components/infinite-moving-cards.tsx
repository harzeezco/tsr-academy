'use client';

import Image from 'next/image';
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
    alt: string;
    small: boolean;
    src: string;
    width: number;
  }[];
  pauseOnHover?: boolean;
  speed?: 'fast' | 'normal' | 'slow';
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);

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
      <div
        ref={scrollerRef}
        className={cn(
          'flex items-center min-w-full gap-10 py-4 w-max flex-nowrap',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map((item) => (
          <div key={item.alt}>
            <Image
              alt={item.alt}
              className={cn(
                item.small ? 'max-sm:w-[140px]' : 'max-sm:w-[340px]',
              )}
              height={60}
              src={`/icons/${item.src}`}
              width={item.width}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
