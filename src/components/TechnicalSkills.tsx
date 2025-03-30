
import React, { useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { 
  Code, Database, FileJson, Figma, Server, 
  LucideIcon, TerminalSquare, Layers, PenTool, Cloud
} from 'lucide-react';

type Skill = {
  name: string;
  icon: React.ReactNode;
  proficiency: number;
  category: string;
  description: string;
};

const TechnicalSkills = () => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  
  const skills: Skill[] = [
    {
      name: "React",
      icon: <FileJson className="h-8 w-8 text-blue-500" />,
      proficiency: 90,
      category: "Frontend",
      description: "Building interactive user interfaces with React and its ecosystem"
    },
    {
      name: "TypeScript",
      icon: <Code className="h-8 w-8 text-blue-700" />,
      proficiency: 85,
      category: "Frontend",
      description: "Type-safe JavaScript development with TypeScript"
    },
    {
      name: "Next.js",
      icon: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.214.006c-.052.004-.216.023-.364.04C7.442.346 4.25 2.185 2.226 5.012c-1.073 1.503-1.77 3.192-2.06 4.974-.1.617-.11.85-.11 1.995s.01 1.378.11 1.995c.496 3.062 2.293 5.726 5.02 7.445 1.503 1.073 3.192 1.77 4.974 2.06.617.1.85.11 1.995.11s1.378-.01 1.995-.11c3.062-.496 5.726-2.293 7.445-5.02 1.073-1.503 1.77-3.192 2.06-4.974.1-.617.11-.85.11-1.995s-.01-1.378-.11-1.995c-.496-3.062-2.293-5.726-5.02-7.445C17.132.993 15.443.296 13.66.006c-.595-.096-1.859-.09-2.448.006v-.006zm7.364 5.098c.05-.001 4.55 4.512 4.55 4.568 0 .056-4.5 4.568-4.55 4.568-.053 0-.053-9.136 0-9.136z" fill="currentColor"/>
        <path d="M14.273 14.095a.995.995 0 01-.502-.736.995.995 0 01.258-.863l6.728-6.73-2.89-2.89-9.139 9.135a1 1 0 01-.704.292.997.997 0 01-.704-.292l-3.59-3.59 9.138-9.135-2.89-2.89L1.25 5.926l9.348 9.35a.996.996 0 01-.001 1.407l-4.921 4.922a1 1 0 01-1.407.001l-4.923-4.922 3.032-3.033a.996.996 0 00.001-1.407l-2.887-2.887 3.54-3.541a.996.996 0 000-1.407L.296 2.4 1.7.994l7.416 7.416 1.407-1.406-7.416-7.416L4.513 1.7l2.008 2.01a.996.996 0 001.407 0l3.54-3.541 2.887 2.887a.996.996 0 001.407-.001L18.8.018l1.407 1.407-3.033 3.032a.997.997 0 00-.001 1.407l2.887 2.887-3.54 3.541a.996.996 0 00-.001 1.407l2.01 2.01-1.407 1.402-2.85-2.85v-.174z" fill="currentColor"/>
      </svg>,
      proficiency: 80,
      category: "Frontend",
      description: "Building server-rendered React applications with Next.js"
    },
    {
      name: "Node.js",
      icon: <Server className="h-8 w-8 text-green-600" />,
      proficiency: 75,
      category: "Backend",
      description: "Server-side JavaScript runtime for building scalable applications"
    },
    {
      name: "MongoDB",
      icon: <Database className="h-8 w-8 text-green-500" />,
      proficiency: 70,
      category: "Backend",
      description: "NoSQL database for modern applications"
    },
    {
      name: "Python/Django",
      icon: <TerminalSquare className="h-8 w-8 text-blue-500" />,
      proficiency: 65,
      category: "Backend",
      description: "Web development with Python's powerful Django framework"
    },
    {
      name: "UI/UX Design",
      icon: <PenTool className="h-8 w-8 text-purple-500" />,
      proficiency: 75,
      category: "Design",
      description: "Creating user-centered designs with focus on usability and aesthetics"
    },
    {
      name: "AWS",
      icon: <Cloud className="h-8 w-8 text-orange-400" />,
      proficiency: 60,
      category: "DevOps",
      description: "Deploying and managing applications on Amazon Web Services"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative">
        {/* Computer Screen */}
        <div className="relative aspect-video bg-gray-900 rounded-lg shadow-xl border-4 border-gray-800">
          {/* Screen Content */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
            {/* Grid background effect */}
            <div className="absolute inset-0 opacity-10" 
                 style={{backgroundImage: 'linear-gradient(to right, gray 1px, transparent 1px), linear-gradient(to bottom, gray 1px, transparent 1px)', 
                         backgroundSize: '20px 20px'}}></div>
            
            {/* Skill Icons Grid */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-8 p-8">
                {skills.map((skill, index) => (
                  <HoverCard key={index} openDelay={200} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div 
                        className="bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-all transform hover:scale-110 backdrop-blur-sm border border-gray-700/50"
                        onMouseEnter={() => setActiveSkill(skill)}
                        onMouseLeave={() => setActiveSkill(null)}
                      >
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <div className="text-primary hover:text-accent transition-colors">
                            {skill.icon}
                          </div>
                          <span className="text-xs font-medium text-white">{skill.name}</span>
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 glass-card">
                      <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">{skill.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {skill.description}
                          </p>
                          <div className="mt-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-medium">Proficiency</span>
                              <span className="text-xs text-accent">{skill.proficiency}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-primary to-accent" 
                                style={{ width: `${skill.proficiency}%` }}>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Computer Stand */}
        <div className="w-1/6 h-8 mx-auto bg-gray-800 rounded-b-lg"></div>
        <div className="w-1/4 h-1 mx-auto bg-gray-700 rounded-full shadow-lg"></div>
      </div>

      {/* Skill Details Display (optional) */}
      {activeSkill && (
        <div className="mt-8 animate-fade-in glass-card p-4 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
              {activeSkill.icon}
            </div>
            <div>
              <h4 className="text-xl font-bold">{activeSkill.name}</h4>
              <p className="text-sm text-muted-foreground">{activeSkill.category}</p>
            </div>
            <div className="ml-auto">
              <div className="text-2xl font-bold text-accent">{activeSkill.proficiency}%</div>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">{activeSkill.description}</p>
        </div>
      )}
    </div>
  );
};

export default TechnicalSkills;
