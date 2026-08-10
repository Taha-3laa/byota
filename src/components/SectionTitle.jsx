import { useEffect, useRef, useState } from "react";
import "./SectionTitle.css";

export default function SectionTitle({ children }) {
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <h2
      ref={titleRef}
      className={`section-title ${isVisible ? "show" : ""}`}>
      {children}
    </h2>
  );
}