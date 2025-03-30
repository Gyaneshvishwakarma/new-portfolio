
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  liveDemo?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Learning Platform",
    description: "A comprehensive learning management system built with React and Node.js, featuring video courses, quizzes, and progress tracking.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=500&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    github: "https://github.com",
    liveDemo: "https://example.com"
  },
  {
    id: 2,
    title: "Hospital Management System",
    description: "A full-stack application for efficient hospital administration, including patient records, appointment scheduling, and billing.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=500&auto=format&fit=crop",
    tags: ["Python", "Django", "PostgreSQL", "Bootstrap"],
    github: "https://github.com"
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "A machine learning project that uses GANs to generate unique artwork based on text prompts.",
    image: "https://images.unsplash.com/photo-1558244661-d248897f7bc4?q=80&w=500&auto=format&fit=crop",
    tags: ["Python", "TensorFlow", "React", "Flask"],
    liveDemo: "https://example.com"
  },
  {
    id: 4,
    title: "Inventory Management System",
    description: "A robust system for tracking inventory levels, orders, sales, and deliveries for small businesses.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=500&auto=format&fit=crop",
    tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    github: "https://github.com",
    liveDemo: "https://example.com"
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs glass px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass p-2 rounded-lg hover:bg-primary/20 transition-colors duration-300"
              aria-label="GitHub Repository"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {project.liveDemo && (
            <a 
              href={project.liveDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass p-2 rounded-lg hover:bg-primary/20 transition-colors duration-300"
              aria-label="Live Demo"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState<string>("All");
  const allTags = ["All", ...Array.from(new Set(projects.flatMap(p => p.tags)))];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-gradient">My Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on during my MCA program and personal learning journey.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === tag 
                ? "bg-primary text-primary-foreground" 
                : "glass hover:bg-primary/20"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
