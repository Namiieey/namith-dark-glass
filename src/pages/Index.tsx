
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Youtube, FileText, Upload, Sparkles, Code, Shield, Edit, User } from "lucide-react";

const Index = () => {
  const skills = [
    { name: "Web Development", icon: Code },
    { name: "Cybersecurity", icon: Shield }, 
    { name: "Editing", icon: Edit },
    { name: "Developer", icon: User }
  ];

  const projects = [
    {
      title: "Instagram Login Screen",
      description: "A pixel-perfect recreation of Instagram's login interface with modern design patterns",
      source: "https://github.com/",
      tech: ["HTML", "CSS", "JS"]
    },
    {
      title: "Semi Humanoid Robot",
      description: "Advanced robotics project with AI integration and autonomous capabilities",
      source: "https://github.com/",
      tech: ["Python", "AI", "Hardware"]
    },
    {
      title: "Project Website",
      description: "Personal portfolio showcasing projects and technical expertise",
      source: "https://namiieey.github.io/NamithRN/",
      tech: ["React", "CSS", "JS"]
    }
  ];

  const classes = [
    {
      title: "Python Malayalam",
      description: "Comprehensive Python programming course in Malayalam language for beginners",
      source: "https://youtu.be/ihnWXGPxNEk?feature=shared",
      duration: "12+ hours"
    },
    {
      title: "HTML Malayalam", 
      description: "Master HTML fundamentals and build your first websites in Malayalam",
      source: "https://youtu.be/M-0ry2QghVk?feature=shared",
      duration: "8+ hours"
    },
    {
      title: "C++ Malayalam",
      description: "Advanced C++ programming concepts explained clearly in Malayalam", 
      source: "https://youtu.be/iOfUlcUy0as?feature=shared",
      duration: "15+ hours"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900/90 to-slate-900 relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/8 rounded-full blur-3xl floating-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl floating"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="ultra-glass inline-block p-12 rounded-3xl mb-8">
            <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-4 animate-pulse" />
            <h1 className="text-7xl md:text-9xl font-black text-shimmer mb-6 tracking-tight">
              Namith Here...
            </h1>
            <p className="text-2xl text-purple-200/80 mb-6 font-light">
              Passionate Developer & Tech Enthusiast
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Badge variant="outline" className="bg-purple-500/20 border-purple-400/50 text-purple-200 px-4 py-2">
                Full Stack Developer
              </Badge>
              <Badge variant="outline" className="bg-pink-500/20 border-pink-400/50 text-pink-200 px-4 py-2">
                UI/UX Designer
              </Badge>
            </div>
          </div>
          
          <p className="text-xl text-purple-100/70 max-w-2xl mx-auto leading-relaxed">
            Welcome to my digital universe where creativity meets cutting-edge technology. 
            Let's build the future together, one line of code at a time.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gradient mb-4">My Expertise</h2>
            <p className="text-xl text-purple-200/70">Specialized skills that drive innovation</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="glow-card border-purple-400/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-8 text-center relative z-10">
                  <skill.icon className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:text-pink-400 transition-colors duration-300" />
                  <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gradient mb-4">Featured Projects</h2>
            <p className="text-xl text-purple-200/70">Showcasing innovation through code</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <Card key={index} className="gradient-border group hover:scale-105 transition-all duration-500">
                <div className="ultra-glass rounded-2xl h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white text-xl group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-purple-200/80 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-purple-500/20 text-purple-200 border-0">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/50 text-white hover:from-purple-500/30 hover:to-pink-500/30 hover:scale-105 transition-all duration-300"
                      onClick={() => window.open(project.source, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Source
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gradient mb-4">Learning Hub</h2>
            <p className="text-2xl text-purple-200/70 font-light">Study coding with us</p>
            <p className="text-lg text-purple-300/60 mt-2">Master programming in your native language</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {classes.map((classItem, index) => (
              <Card key={index} className="gradient-border group hover:scale-105 transition-all duration-500">
                <div className="ultra-glass rounded-2xl h-full">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-white text-xl group-hover:text-red-300 transition-colors">
                        {classItem.title}
                      </CardTitle>
                      <Badge variant="outline" className="bg-red-500/20 border-red-400/50 text-red-200 text-xs">
                        {classItem.duration}
                      </Badge>
                    </div>
                    <CardDescription className="text-purple-200/80 text-base leading-relaxed">
                      {classItem.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button 
                      variant="outline" 
                      className="w-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border-red-400/50 text-white hover:from-red-500/30 hover:to-orange-500/30 hover:scale-105 transition-all duration-300"
                      onClick={() => window.open(classItem.source, '_blank')}
                    >
                      <Youtube className="w-4 h-4 mr-2" />
                      Watch Tutorial
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Upload Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gradient mb-4">Let's Connect</h2>
            <p className="text-xl text-purple-200/70">Ready to collaborate on something amazing?</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="gradient-border group hover:scale-105 transition-all duration-500">
              <div className="ultra-glass rounded-2xl h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">Get In Touch</CardTitle>
                  <CardDescription className="text-purple-200/80 text-lg">
                    Let's discuss your next project and bring your ideas to life
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg py-6 rounded-xl hover:scale-105 transition-all duration-300"
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfIxGSBqX4q_621zXMZD896NYUqDM5wVuY9QFsxx1XSiLJnnQ/viewform?usp=header', '_blank')}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Contact Form
                  </Button>
                </CardContent>
              </div>
            </Card>

            <Card className="gradient-border group hover:scale-105 transition-all duration-500">
              <div className="ultra-glass rounded-2xl h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">Share Files</CardTitle>
                  <CardDescription className="text-purple-200/80 text-lg">
                    Upload documents, images, or any files you'd like to share
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white text-lg py-6 rounded-xl hover:scale-105 transition-all duration-300"
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfIpErd9PiaO8wk0Rtn1K_fChuPChbYaKdQBCCTHrZABksSxg/viewform?usp=header', '_blank')}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Upload Files
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-purple-400/10 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="ultra-glass inline-block px-8 py-4 rounded-2xl">
            <p className="text-purple-200/80 text-lg">
              © 2024 Namith. Crafted with passion and modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
