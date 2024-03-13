import * as React from 'react';
import { useAnimate } from 'framer-motion';

// const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    animate(
      'ul',
      {
        clipPath: isOpen
          ? 'inset(0% 0% 0% 0% round 10px)'
          : 'inset(10% 50% 90% 50% round 10px)',
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        height: isOpen ? 'auto' : 0,
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.5,
      },
    );
  }, [isOpen]);

  return scope;
}

export default useMenuAnimation;
