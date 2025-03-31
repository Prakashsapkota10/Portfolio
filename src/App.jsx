import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, BookOpen, Trophy, Coffee, Facebook, Instagram, Twitter, Music, Plane, Book,   FolderRoot as Football } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import TimelineItem from './components/TimelineItem';
import HobbyCard from './components/HobbyCard';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sampleProjects = [
    {
      id: 1,
      name: "ArogyaNepal",
      description: "A healthcare appointment management platform in Nepal to reduce pen and paper based booking ",
      html_url: "https://github.com/arjun-gtm/ArogyaNepal",  
      homepage: "https://arogyanepal.arjungtm.com.np/",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      id: 2,
      name: "Task Management System",
      description: "A PHP-based task management system with .NET integration for enterprise task tracking and team collaboration.",
      html_url: "https://github.com/yourusername/task-manager",
      homepage: "https://task-manager-demo.herokuapp.com",
      technologies: ["PHP", ".NET", "MySQL", "Bootstrap"]
    },
    {
      id: 3,
      name: "Social Media Dashboard",
      description: "Real-time social media analytics dashboard built with React and Node.js, featuring live data visualization.",
      html_url: "https://github.com/yourusername/social-dashboard",
      homepage: "https://social-dashboard-demo.vercel.app",
      technologies: ["React", "Node.js", "Socket.io", "Chart.js"]
    }
  ];

  const skills = [
    { name: 'MERN Stack', level: 90 },
    { name: 'PHP', level: 85 },
    { name: '.NET', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'React.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'MySQL', level: 85 },
    { name: 'C#', level: 69}
  ];

  const hobbies = [
    { name: 'Travelling', icon: Plane, description: 'Exploring new places and cultures' },
    { name: 'Music', icon: Music, description: 'Listening to various genres' },
    { name: 'Reading', icon: Book, description: 'Books on technology and fiction' },
    { name: 'Cricket', icon: "CricketIcon", description: 'Playing and watching cricket' },
    { name: 'Football', icon: Football, description: 'Playing and watching football' }
  ];

  const education = [
    {
      title: 'Bachelor of Computer Applications (BCA)',
      institution: 'Tribhuwan University',
      period: '2022 - Present',
      description: 'Currently pursuing BCA with focus on software development and computer science fundamentals.'
    },
    {
      title: 'High School',
      institution: 'Janapriya Secondary School',
      period: '2018 - 2022',
      description: 'Completed school education with a focus on computer Science and management.'
    }
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Mitras Tech',
      period: '2024 - Present',
      description: 'Working on MERN stack applications, PHP projects, and .NET solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
         
  <img src="/Logo.png" alt="Logo" className="h-14 w-14 rounded-full" />
</div>
            

            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                key={item}
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-gray-600 hover:text-indigo-600 transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-indigo-600' : ''
                }`}
              >
                {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden rounded-md p-2 text-gray-600 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-indigo-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
    
    {/* Developer's Photo (Left Side) */}
    <div className="md:w-1/3 flex justify-start -ml-25 mr-10"> {/* Push image more left */}
  <img
    src="Logo.png"
    alt="Developer's Photo"
    className="rounded-full shadow-lg w-60 h-60"
  />
</div>

    {/* Text Content (Right Side) */}
    <div className="md:w-1/2 text-center md:text-left ml-3">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
        Full Stack Developer
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Crafting digital experiences with MERN, PHP, and .NET
      </p>

      {/* Social Links */}
      <div className="flex justify-center md:justify-start space-x-6">
        <a href="https://github.com/Prakashsapkota10" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="https://www.facebook.com/Prakash Sapkota" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
          <Facebook size={24} />
        </a>
        <a href="https://www.instagram.com/prakash___sapkota/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
          <Instagram size={24} />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
          <Twitter size={24} />
        </a>
        <a href="mailto:sapkotaprakash820@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
          <Mail size={24} />
        </a>
      </div>
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Coding workspace"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 mb-6">
                I'm a passionate full-stack developer currently pursuing my BCA at Tribhuwan University. 
                With expertise in MERN stack, PHP, and .NET, I love building robust and scalable web applications.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Code2 className="text-indigo-600 mr-2" size={20} />
                  <span>Full Stack Development</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="text-indigo-600 mr-2" size={20} />
                  <span>Continuous Learning</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="text-indigo-600 mr-2" size={20} />
                  <span>Problem Solving</span>
                </div>
                <div className="flex items-center">
                  <Coffee className="text-indigo-600 mr-2" size={20} />
                  <span>Team Collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Hobbies & Interests</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hobbies.map((hobby) => (
              <HobbyCard key={hobby.name} hobby={hobby} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Experience</h2>
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <TimelineItem key={index} item={item} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Education</h2>
              <div className="space-y-8">
                {education.map((item, index) => (
                  <TimelineItem key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 Prakash Sapkota. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;