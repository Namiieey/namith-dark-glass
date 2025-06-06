
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Youtube, FileText, Upload, Code, Shield, Edit, User } from "lucide-react";

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
            Namith Here...
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Passionate Developer & Tech Enthusiast
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Badge variant="outline">Full Stack Developer</Badge>
            <Badge variant="outline">UI/UX Designer</Badge>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">My Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <skill.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-medium">{skill.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(project.source, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Source
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Learning Hub</h2>
          <p className="text-center text-muted-foreground mb-12">Master programming in your native language</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((classItem, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{classItem.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {classItem.duration}
                    </Badge>
                  </div>
                  <CardDescription>{classItem.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(classItem.source, '_blank')}
                  >
                    <Youtube className="w-4 h-4 mr-2" />
                    Watch Tutorial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Let's Connect</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>
                  Let's discuss your next project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfIxGSBqX4q_621zXMZD896NYUqDM5wVuY9QFsxx1XSiLJnnQ/viewform?usp=header', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Contact Form
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Upload className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Share Files</CardTitle>
                <CardDescription>
                  Upload documents or files you'd like to share
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfIpErd9PiaO8wk0Rtn1K_fChuPChbYaKdQBCCTHrZABksSxg/viewform?usp=header', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Upload Files
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Namith. Crafted with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
