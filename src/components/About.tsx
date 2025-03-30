import { Code, BookOpen, Database, Brain } from 'lucide-react';
import TechnicalSkills from './TechnicalSkills';

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

  const categories = [
    {
      name: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      description: "Creating responsive and interactive user interfaces with modern frameworks"
    },
    {
      name: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      description: "Building robust server-side applications and APIs"
    },
    {
      name: "Data Science",
      icon: <Brain className="h-6 w-6" />,
      description: "Analyzing data and creating machine learning models"
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/2 -right-24 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-gradient">About Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Gyanesh Vishwakarma - MCA Student, Web Developer & Problem Solver
        </p>
        
        {/* Two-column layout for bio and image */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* Bio Column */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <div className="glass-card rounded-xl p-8 h-full animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-gradient">My Journey</h3>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  I'm Gyanesh Vishwakarma, an MCA student passionate about building beautiful, functional web applications. 
                  My journey in computer science began during my undergraduate studies where I discovered 
                  my love for programming and problem-solving.
                </p>
                <p className="leading-relaxed">
                  Currently pursuing my Master's degree, I'm focused on expanding my knowledge in web development, 
                  data science, and cloud technologies. I enjoy tackling complex problems and continuously learning 
                  about the latest technologies in the field.
                </p>
                <p className="leading-relaxed">
                  Beyond academics, I contribute to open-source projects and build personal projects to apply 
                  and strengthen my skills. I'm particularly interested in creating applications that provide 
                  meaningful solutions to real-world problems.
                </p>
              </div>
            </div>
          </div>
          
          {/* Education Column */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-xl p-8 h-full animate-fade-in [animation-delay:200ms]">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Education</h3>
              <div className="space-y-8">
                {educationDetails.map((edu, index) => (
                  <div key={index} className="relative pl-6 pb-8">
                    <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-primary to-accent"></div>
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary transform -translate-x-1/3"></div>
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-primary/90 font-medium">{edu.year}</p>
                    <p className="mt-2 text-muted-foreground">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Expertise Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Areas of Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-semibold">{category.name}</h4>
                </div>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* New Technical Skills Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Proficiency</h3>
          <TechnicalSkills />
        </div>
      </div>
    </section>
  );
};

export default About;
