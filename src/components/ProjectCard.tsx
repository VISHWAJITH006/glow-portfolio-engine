import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image?: string;
  demoUrl?: string;
  sourceUrl?: string;
  achievements?: string[];
}

const ProjectCard = ({
  title,
  description,
  longDescription,
  techStack,
  image,
  demoUrl,
  sourceUrl,
  achievements = []
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="glass group hover-lift overflow-hidden">
      <div className="aspect-video bg-gradient-primary/10 flex items-center justify-center overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="text-6xl text-primary/30">📱</div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-muted-foreground hover:text-primary"
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </Button>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>

        {isExpanded && (
          <div className="animate-fade-in-up space-y-4">
            <p className="text-sm text-foreground leading-relaxed">{longDescription}</p>
            
            {achievements.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-primary mb-2">Key Achievements:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          {demoUrl && (
            <Button size="sm" className="flex-1" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {sourceUrl && (
            <Button size="sm" variant="outline" className="flex-1" asChild>
              <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                Source Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;