import React, { createRef, HTMLAttributes, useEffect, useRef } from 'react';

import Lottie, { AnimationItem } from 'lottie-web';

/**
 * The property types which are used by the `Animate` component
 */
interface Props {
  animation: Record<string, any>;
  className?: HTMLAttributes<HTMLDivElement>['className'];
  loop?: boolean;
  autoplay?: boolean;
}

/**
 * A component that helps displaying SVG animations
 *
 * @param animation The source of the animation to display
 * @param className The class name to apply to the component
 * @param loop If the animation should loop
 * @param autoplay If the animation should automatically play
 *
 * @returns The `Animate` component
 */
export function Animate({ animation, className, loop, autoplay }: Props) {
  /** A ref to store the animation container */
  const animationContainer = createRef<HTMLDivElement>();

  /** A ref to store the animation */
  const animationRef = useRef<AnimationItem>();

  /** Handle the animation loading and destroying logic */
  useEffect(() => {
    if (animationContainer.current) {
      animationRef.current = Lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop,
        autoplay,
        animationData: animation,
        rendererSettings: {
          progressiveLoad: true,
        },
      });
      animationRef.current.setSubframe(true);
    }
    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
      }
    };
  }, [animationContainer]);

  return <div className={className} ref={animationContainer} />;
}

/**
 * The default property values which are used by the `Animate` component
 */
Animate.defaultProps = {
  className: undefined,
  loop: true,
  autoplay: true,
};
