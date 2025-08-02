import { useEffect, useState } from 'react';

interface FloatingNavigationProps {
  sections: Array<{ id: string; label: string }>;
}

const FloatingNavigation = ({ sections }: FloatingNavigationProps) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="floating-nav hidden lg:block">
      {sections.map(({ id, label }) => (
        <div key={id} className="relative group">
          <button
            onClick={() => scrollToSection(id)}
            className={`block w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === id
                ? 'bg-primary border-primary scale-150'
                : 'bg-transparent border-muted hover:border-primary hover:scale-125'
            }`}
            aria-label={`Go to ${label} section`}
          />
          <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-card text-card-foreground px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FloatingNavigation;