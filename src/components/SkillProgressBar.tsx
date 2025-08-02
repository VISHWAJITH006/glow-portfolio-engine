import { useEffect, useRef, useState } from 'react';

interface SkillProgressBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

const SkillProgressBar = ({ skill, percentage, delay = 0 }: SkillProgressBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setCurrentPercentage(prev => {
            if (prev >= percentage) {
              clearInterval(interval);
              return percentage;
            }
            return prev + 2;
          });
        }, 20);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <span className="text-sm text-primary font-semibold">{currentPercentage}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${currentPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default SkillProgressBar;