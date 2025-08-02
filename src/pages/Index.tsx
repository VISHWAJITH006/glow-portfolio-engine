import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Copy, Download, Mail, Linkedin, Github, ExternalLink, MapPin, Calendar, Award, BookOpen, Brain, Code, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Component imports
import LoadingScreen from '@/components/LoadingScreen';
import BackgroundParticles from '@/components/BackgroundParticles';
import FloatingNavigation from '@/components/FloatingNavigation';
import TypingAnimation from '@/components/TypingAnimation';
import SkillProgressBar from '@/components/SkillProgressBar';
import ProjectCard from '@/components/ProjectCard';
import AnimatedCounter from '@/components/AnimatedCounter';
import ContactForm from '@/components/ContactForm';
import ScrollToTop from '@/components/ScrollToTop';
import ThemeToggle from '@/components/ThemeToggle';
import Navigation from '@/components/Navigation';

// Assets
import profilePhoto from '@/assets/profile-photo.jpg';
import heroBackground from '@/assets/hero-background.jpg';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const typingTexts = [
    "AI/ML Enthusiast",
    "Problem Solver",
    "Full Stack Developer",
    "Innovation Seeker"
  ];

  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'C/C++', level: 80 },
    { name: 'Machine Learning', level: 75 },
    { name: 'Data Science', level: 70 },
    { name: 'React', level: 65 },
    { name: 'Node.js', level: 60 },
  ];

  const projects = [
    {
      title: "AI-Powered Chat Application",
      description: "Modern chat app with AI integration and real-time messaging",
      longDescription: "A comprehensive chat application built with React and Node.js, featuring AI-powered responses, real-time messaging, and modern UI design. Implemented WebSocket connections for instant communication and integrated machine learning models for intelligent conversation assistance.",
      techStack: ["React", "Node.js", "WebSocket", "Python", "TensorFlow"],
      achievements: [
        "Real-time messaging with 99.9% uptime",
        "AI response accuracy of 85%+",
        "Supports 1000+ concurrent users"
      ]
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analytics",
      longDescription: "Built a comprehensive analytics dashboard using React and D3.js for data visualization. Features include real-time data processing, interactive charts, and automated report generation. Integrated with multiple data sources and APIs.",
      techStack: ["React", "D3.js", "Python", "PostgreSQL", "Docker"],
      achievements: [
        "Processes 10M+ data points daily",
        "Reduced report generation time by 70%",
        "Interactive visualizations with sub-second response"
      ]
    },
    {
      title: "Machine Learning Model Optimizer",
      description: "Tool for optimizing ML model performance and accuracy",
      longDescription: "Developed a comprehensive tool for optimizing machine learning models using hyperparameter tuning and automated feature selection. Supports multiple ML frameworks and provides detailed performance analytics.",
      techStack: ["Python", "scikit-learn", "TensorFlow", "Pandas", "NumPy"],
      achievements: [
        "Improved model accuracy by 15-25%",
        "Automated hyperparameter optimization",
        "Supports 50+ ML algorithms"
      ]
    }
  ];

  useEffect(() => {
    if (!isLoading) {
      setIsVisible(true);
    }
  }, [isLoading]);

  const copyEmail = () => {
    navigator.clipboard.writeText('vishwajithgs006@gmail.com');
    toast({
      title: "Email copied!",
      description: "Email address has been copied to clipboard.",
    });
  };

  const downloadResume = () => {
    toast({
      title: "Resume download",
      description: "Resume will be available soon!",
    });
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <BackgroundParticles />
      <ThemeToggle />
      <Navigation sections={sections} />
      <FloatingNavigation sections={sections} />
      <ScrollToTop />

      {/* Hero Section */}
      <section 
        id="hero" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center z-10 px-4 animate-fade-in-up">
          <div className="mb-8">
            <img 
              src={profilePhoto} 
              alt="Vishwajith G S" 
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary shadow-glow hover-scale animate-bounce-in"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            VISHWAJITH G S
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12">
            <TypingAnimation texts={typingTexts} className="text-primary" />
          </div>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            A passionate BE CSE (AIML) student exploring the intersection of computer science and 
            artificial intelligence to build intelligent solutions for the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="hover-glow animate-float"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="hover-glow"
              onClick={downloadResume}
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        {/* About Section */}
        <section id="about" className="mb-20">
          <Card className="glass p-8 hover-lift">
            <div className="flex items-center mb-6">
              <Sparkles className="text-primary mr-4" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  I am a BE student specializing in Computer Science and Engineering with a focus on 
                  Artificial Intelligence and Machine Learning (AIML). With a strong foundation in 
                  programming, data structures, and algorithms, I am passionate about developing 
                  intelligent systems that solve real-world problems.
                </p>
                <p className="text-lg leading-relaxed">
                  I enjoy working on projects that involve machine learning, deep learning, and data 
                  analysis, and I'm always eager to explore new technologies and tools in the AI domain. 
                  My goal is to contribute to impactful innovations that shape the future of technology.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="px-4 py-2">
                    <Brain className="mr-2" size={16} />
                    AI Enthusiast
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    <Code className="mr-2" size={16} />
                    Full Stack Developer
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    <BookOpen className="mr-2" size={16} />
                    Continuous Learner
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="glass p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      <AnimatedCounter end={1000} suffix="+" />
                    </div>
                    <div className="text-sm text-muted-foreground">Problems Solved</div>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      <AnimatedCounter end={8.74} suffix="" />
                    </div>
                    <div className="text-sm text-muted-foreground">CGPA</div>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      <AnimatedCounter end={15} suffix="+" />
                    </div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      <AnimatedCounter end={95} suffix="%" />
                    </div>
                    <div className="text-sm text-muted-foreground">12th Score</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <Card className="glass p-8 hover-lift">
            <div className="flex items-center mb-8">
              <Code className="text-primary mr-4" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-primary">Programming Languages</h3>
                {skills.slice(0, 4).map((skill, index) => (
                  <SkillProgressBar 
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.level}
                    delay={index * 200}
                  />
                ))}
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6 text-primary">Technologies & Frameworks</h3>
                {skills.slice(4).map((skill, index) => (
                  <SkillProgressBar 
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.level}
                    delay={(index + 4) * 200}
                  />
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <ExternalLink className="text-primary mr-4" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions and technical expertise through real-world applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-20">
          <Card className="glass p-8 hover-lift">
            <div className="flex items-center mb-8">
              <BookOpen className="text-primary mr-4" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            </div>
            
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6 relative">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full animate-pulse-ring"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-primary">BE CSE (AIML)</h3>
                  <Badge variant="outline" className="w-fit">
                    <Calendar className="mr-1" size={14} />
                    2024–2028
                  </Badge>
                </div>
                <h4 className="text-lg font-semibold mb-2">THIAGARAJAR COLLEGE OF ENGINEERING</h4>
                <p className="text-muted-foreground mb-2">
                  <MapPin className="inline mr-1" size={16} />
                  Madurai, Tamil Nadu
                </p>
                <div className="flex items-center">
                  <Award className="text-primary mr-2" size={16} />
                  <span className="font-semibold">CGPA: 8.74</span>
                  <span className="text-muted-foreground ml-2">(1st year)</span>
                </div>
              </div>

              <div className="border-l-4 border-muted pl-6 relative">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-muted rounded-full"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">12th Grade</h3>
                  <Badge variant="outline" className="w-fit">2024</Badge>
                </div>
                <h4 className="text-lg font-semibold mb-2">VHN Higher Secondary School</h4>
                <div className="flex items-center">
                  <Award className="text-primary mr-2" size={16} />
                  <span className="font-semibold">Score: 571/600 (95.17%)</span>
                </div>
              </div>

              <div className="border-l-4 border-muted pl-6 relative">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-muted rounded-full"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">10th Grade</h3>
                  <Badge variant="outline" className="w-fit">2022</Badge>
                </div>
                <h4 className="text-lg font-semibold mb-2">KNU Matric High School</h4>
                <div className="flex items-center">
                  <Award className="text-primary mr-2" size={16} />
                  <span className="font-semibold">Score: 458/500 (91.6%)</span>
                  <Badge variant="secondary" className="ml-2">Centum in Maths</Badge>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Award className="text-primary mr-4" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold">Achievements & Certifications</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass p-6 hover-glow text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2 text-primary">NPTEL Excellence</h3>
              <p className="text-muted-foreground">Top 1% in NPTEL "Python for Data Science"</p>
            </Card>
            
            <Card className="glass p-6 hover-glow text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2 text-primary">Problem Solving</h3>
              <p className="text-muted-foreground">Solved 1000+ problems on Skillrack platform</p>
            </Card>
            
            <Card className="glass p-6 hover-glow text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2 text-primary">Innovation</h3>
              <p className="text-muted-foreground">Multiple AI/ML projects in development</p>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Mail className="text-primary mr-4" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always excited to collaborate on innovative projects and discuss new opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <Card className="glass p-6 hover-glow">
                <div className="flex items-center">
                  <Mail className="text-primary mr-4" size={24} />
                  <div className="flex-1">
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">vishwajithgs006@gmail.com</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={copyEmail}
                    className="hover:bg-primary/10"
                  >
                    <Copy size={16} />
                  </Button>
                </div>
              </Card>
              
              <Card className="glass p-6 hover-glow">
                <a 
                  href="https://linkedin.com/in/vishwajith-g-s-854033325" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <Linkedin className="text-primary mr-4 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <p className="text-muted-foreground">Connect with me professionally</p>
                  </div>
                </a>
              </Card>
              
              <Card className="glass p-6 hover-glow">
                <a 
                  href="https://github.com/VISHWAJITH-GS" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <Github className="text-primary mr-4 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <p className="text-muted-foreground">View my code repositories</p>
                  </div>
                </a>
              </Card>
            </div>

            <ContactForm />
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="glass border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Vishwajith G S. Built with ❤️ using React and modern web technologies.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://linkedin.com/in/vishwajith-g-s-854033325" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/VISHWAJITH-GS" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="mailto:vishwajithgs006@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
