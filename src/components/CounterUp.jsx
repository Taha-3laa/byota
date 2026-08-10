import { useEffect, useRef, useState } from "react";

export default function CounterUp({ end, duration = 2100 }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const startTime = performance.now();

        const updateCounter = (currentTime) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          const currentNumber = Math.floor(progress * end);

          setCount(currentNumber);

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };

        requestAnimationFrame(updateCounter);

        observer.disconnect();
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={counterRef}> {count} </span>
  );
}