import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ value, duration = 4500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasStarted = useRef(false);

  const target = Number(String(value).replace(/[^0-9]/g, ""));

  useEffect(() => {
    const element = ref.current;
    if (!element || !target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted.current) return;

        hasStarted.current = true;
        setCount(0);

        let startTime = null;

        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;

          const progress = Math.min((timestamp - startTime) / duration, 1);
          const current = Math.floor(progress * target);

          setCount(current);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(target);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString("en-IN")}+</span>;
}