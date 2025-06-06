
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Youtube, FileText, Upload } from "lucide-react";

const Index = () => {
  const skills = [
    "Web Development",
    "Cybersecurity", 
    "Editing",
    "Developer"
  ];

  const projects = [
    {
      title: "Instagram Login Screen",
      description: "A recreation of Instagram's login interface",
      source: "https://github.com/"
    },
    {
      title: "Semi Humanoid Robot",
      description: "Robotics project with advanced capabilities",
      source: "https://github.com/"
    },
    {
      title: "Project Website",
      description: "Personal portfolio and project showcase",
      source: "https://namiieey.github.io/NamithRN/"
    }
  ];

  const classes = [
    {
      title: "Python Malayalam",
      description: "Learn Python programming in Malayalam",
      source: "https://youtu.be/ihnWXGPxNEk?feature=shared"
    },
    {
      title: "HTML Malayalam", 
      description: "HTML fundamentals explained in Malayalam",
      source: "https://youtu.be/M-0ry2QghVk?feature=shared"
    },
    {
      title: "C++ Malayalam",
      description: "Master C++ programming in Malayalam", 
      source: "https://youtu.be/iOfUlcUy0as?feature=shared"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Namith Here...
          </h1>
          <p className="text-xl text-purple-200 mb-8">
            Passionate Developer & Tech Enthusiast
          </p>
          <div className="glassmorphism inline-block p-8 rounded-2xl">
            <p className="text-purple-100 text-lg">
              Welcome to my digital world where creativity meets technology
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="glassmorphism border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <h3 className="text-white font-semibold">{skill}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glassmorphism border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-purple-200">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full bg-purple-500/20 border-purple-400 text-white hover:bg-purple-500/30"
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Classes</h2>
            <p className="text-xl text-purple-200">Study coding with us</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem, index) => (
              <Card key={index} className="glassmorphism border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white">{classItem.title}</CardTitle>
                  <CardDescription className="text-purple-200">
                    {classItem.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full bg-red-500/20 border-red-400 text-white hover:bg-red-500/30"
                    onClick={() => window.open(classItem.source, '_blank')}
                  >
                    <Youtube className="w-4 h-4 mr-2" />
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Upload Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glassmorphism border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Contact Form
                </CardTitle>
                <CardDescription className="text-purple-200">
                  Send me a message and let's connect
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfIxGSBqX4q_621zXMZD896NYUqDM5wVuY9QFsxx1XSiLJnnQ/viewform?usp=header', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open Contact Form
                </Button>
              </CardContent>
            </Card>

            <Card className="glassmorphism border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Files
                </CardTitle>
                <CardDescription className="text-purple-200">
                  Share your files and documents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
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
      <footer className="py-12 px-6 border-t border-purple-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-purple-200">
            © 2024 Namith. Built with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
