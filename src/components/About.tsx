
import { Code, BookOpen, Database, Brain } from 'lucide-react';

const About = () => {
  const educationDetails = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "University Name",
      year: "2021 - Present",
      description: "Specializing in Web Technologies and Data Science"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Previous University",
      year: "2018 - 2021",
      description: "Graduated with distinction, focused on programming fundamentals"
    }
  ];

  const skills = [
    {
      category: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"]
    },
    {
      category: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      items: ["Node.js", "Express", "Python/Django", "MongoDB", "SQL", "RESTful APIs"]
    },
    {
      category: "Other Skills",
      icon: <Brain className="h-6 w-6" />,
      items: ["Git", "Docker", "AWS", "Machine Learning", "Data Structures", "Algorithms"]
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-gradient">About Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Get to know my background, skills, and passion for technology
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <div className="glass-card rounded-xl p-6 space-y-4">
              <p>
                I'm an MCA student with a passion for building beautiful, functional web applications. 
                My journey in computer science began during my undergraduate studies where I discovered 
                my love for programming and problem-solving.
              </p>
              <p>
                Currently pursuing my Master's degree, I'm focused on expanding my knowledge in web development, 
                data science, and cloud technologies. I enjoy tackling complex problems and continuously learning 
                about the latest technologies in the field.
              </p>
              <p>
                Beyond academics, I contribute to open-source projects and build personal projects to apply 
                and strengthen my skills. I'm particularly interested in creating applications that provide 
                meaningful solutions to real-world problems.
              </p>
            </div>
          </div>
          
          {/* Education */}
          <div className="animate-fade-in [animation-delay:200ms]">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className="glass-card rounded-xl p-6">
              <div className="space-y-6">
                {educationDetails.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4 py-1">
                    <h4 className="text-lg font-medium">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.year}</p>
                    <p className="mt-1">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 glass rounded-lg mr-3">
                    {skillGroup.icon}
                  </div>
                  <h4 className="text-lg font-medium">{skillGroup.category}</h4>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
