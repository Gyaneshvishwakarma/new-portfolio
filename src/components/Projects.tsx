
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
    title: "The Yogesh Vishwakarma Landing Website",
    description: "A ReactJS and Tailwind CSS landing page designed for a YouTuber, highlighting their services, portfolio, and essential details.",
    image: "/assests/project1.png",
    tags: ["ReactJS", "Shadcn", "Tailwind CSS", "Accernity"],
    github: "https://github.com/Gyaneshvishwakarma/The-Yogesh-Vishwakarma-Website-Project",
    liveDemo: "https://the-yogesh-vishwakarma.vercel.app/"
  },
  {
    id: 2,
    title: "Beauty Parlour Website",
    description: "A user-friendly WordPress website crafted for a freelance beauty parlour. It showcases services, booking options, and client testimonials.",
    image: "/assests/project2.png",
    tags: ["WordPress"],
    github: "https://github.com/Gyaneshvishwakarma",
    liveDemo: "https://divyzone.in/"
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "Personal portfolio showcasing my web development skills, projects, and achievements. Built with Next.js, Tailwind CSS, and interactive libraries for engagement.",
    image: "/assests/project3.png",
    tags: ["NextJS", "TailwindCSS", "Framer Motion", "Shadcn"],
    github: "https://github.com/Gyaneshvishwakarma/Gyanesh-Portfolio",
    liveDemo: "/"
  }
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
