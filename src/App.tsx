import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faHeart } from "@fortawesome/free-solid-svg-icons";
import verseIcon from '/src/assets/images/Verse.jpg'; // Local image for Verse Programming
import HomeUserIcon from '/src/assets/images/user2.png';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Mail, ChevronLeft, ChevronRight, Download, Code, Gamepad2, Home, Code2, Cog, ArrowLeft, Palette, Cpu, Joystick, Layers, Brain, Rocket, Target, Copy, Play, Info
} from 'lucide-react';
import { projectsData } from "./data/projectsData"; // Import the data
import { Project } from "./types"; // Correct path (go back one level)
import toast, { Toaster } from "react-hot-toast";
import ResumePDF from './assets/AnjaiahUEFNGameDev.pdf';


function App() {
  
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [activeSubSection, setActiveSubSection] = useState({
    about: 'skills',
    projects: 'uefn'
  });

  const [currentPage, setCurrentPage] = useState({
    uefn: 1,
    unity: 1,
    unreal: 1
  });
  const [selectedProject, setSelectedProject] = useState<null | Project>(null);

  

  const programmingIcons = [
    { 
      icon: verseIcon,
      name: "VerseProgramming"
    },
    { 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      name: "C++"
    },
    {
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      name: "C#"
    }
    
  ];

  const gameEngineIcons = [
    { 
      name: 'UEFN', 
      icon: 'https://raw.githubusercontent.com/kenangundogan/fontisto/master/icons/svg/brand/unreal-engine.svg' 
    },
    {
      name: "Unity",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg"
      
    },
    {
      name: "Unreal Engine",
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg'
      
    }
  ];
  const experienceDetails = [
    {
      position: 'UEFN Game Developer',
      company: 'PropVR',
      duration: 'Feb 2025 - Present',
      description: 'Developed more than 3+ games in UEFN.',
    },
    {
      position: 'UEFN Game Developer',
      company: 'Mayaavi Game Studio',
      duration: 'Mar 2024 - Feb 2025',
      description: 'Developed more than 25+ games in UEFN.',
    },
    {
      position: 'Unity Game Developer',
      company: 'Mayaavi Game Studio',
      duration: 'Feb 2024 - Mar 2024',
      description: 'Developed a snake and ladder game in 3D using Unity Engine.',
    },
    
  ];
  const educationDetails = [
    {
      degree: 'BE in Electronics and Communication',
      year: '2019 - 2023',
    },
    {
      degree: 'Intermediate Education',
      year: '2017 - 2019',
    },
    {
      degree: 'Secondary Education',
      year: 'Completed in 2017',
    },
  ];

  const services = [
    {
      icon: <Gamepad2 size={40} />,
      title: 'Game Development',
      description: 'Creating immersive gaming experiences using Unreal Engine, Unity, and UEFN.'
    },
    {
      icon: <Code2 size={40} />,
      title: 'Game Programming',
      description: 'Implementing game mechanics and systems using C++, C#, and Blueprint.'
    },
    {
      icon: <Palette size={40} />,
      title: 'Level Design',
      description: 'Designing engaging and balanced game levels with compelling gameplay.'
    },
    {
      icon: <Cpu size={40} />,
      title: 'Game Optimization',
      description: 'Optimizing game performance for smooth gameplay across platforms.'
    },
    {
      icon: <Joystick size={40} />,
      title: 'Game Mechanics',
      description: 'Developing unique and engaging gameplay mechanics and systems.'
    },
    {
      icon: <Layers size={40} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and responsive game interfaces and menus.'
    },
    {
      icon: <Brain size={40} />,
      title: 'AI Development',
      description: 'Implementing intelligent NPCs and game AI systems.'
    },
    {
      icon: <Rocket size={40} />,
      title: 'Game Prototyping',
      description: 'Rapid development of game concepts and mechanics.'
    },
    {
      icon: <Target size={40} />,
      title: 'Multiplayer Systems',
      description: 'Implementing networking and multiplayer functionality.'
    }
  ];

  

  

  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  const [copied, setCopied] = useState(false); 

  const handleCopyProjectCode = () => {
    if (selectedProject?.gameCode) {
      navigator.clipboard.writeText(selectedProject.gameCode);
      setCopied(true);
      toast.success("Game Code Copied!");
  
      setTimeout(() => setCopied(false), 2000);
    }
  };
  

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds for splash screen

    return () => clearTimeout(timer);
  }, []);

  // Page transition variants for animations
  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  };

  // Splash screen variants
  const splashVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const letterVariants = {
    initial: { y: 50, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }),
  };
  const experienceVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const skillsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };
  
  const educationVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };
  
  

  // Project grid item variants for staggered animations
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!selectedProject) {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section.id);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProject]);

  

  useEffect(() => {
    if (selectedProject) {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Ensures smooth scrolling
        });
      }, 100); // Small delay to allow state updates before scrolling
    }
  }, [selectedProject]);
  

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const handleSubSectionChange = (section: string, subsection: string) => {
    setActiveSubSection(prev => ({ ...prev, [section]: subsection }));
    document.dispatchEvent(new Event('subsectionChange'));
  };

  const handleProjectClick = (project: typeof selectedProject) => {
    setLastScrollPosition(window.scrollY);
    setSelectedProject(project);
    window.scrollTo(0, 0); // Scroll to top when opening the project
  };

  

  
const handleBackToPortfolio = () => {
  setSelectedProject(null);

  requestAnimationFrame(() => {
    document.dispatchEvent(new Event("returnFromProject"));

    requestAnimationFrame(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: lastScrollPosition, behavior: "smooth" });
      }
    });
  });
};

  

  

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About Me' },
    { id: 'services', icon: Cog, label: 'Services' },
    { id: 'projects', icon: Code2, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact Me' }
  ];

  

  
  const ITEMS_PER_PAGE = 6;

  const SubSectionButton = ({ section, subsection, label }: { section: string, subsection: string, label: string }) => (
    <button
      onClick={() => handleSubSectionChange(section, subsection)}
      className={`px-6 py-2 rounded-full transition-all duration-300 ${
        activeSubSection[section as keyof typeof activeSubSection] === subsection
          ? 'bg-[#ff004f] text-white'
          : 'bg-gray-800 text-gray-400 hover:bg-[#ff004f]/20 hover:text-white'
      }`}
    >
      {label}
    </button>
  );

  const Pagination = ({ type }: { type: 'uefn' | 'unity' | 'unreal' }) => {
    const totalPages = Math.ceil((projectsData[type]?.length || 0) / ITEMS_PER_PAGE);
    
    return (
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => setCurrentPage(prev => ({ ...prev, [type]: Math.max(1, prev[type] - 1) }))}
          disabled={currentPage[type] === 1}
          className="p-2 rounded-full bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-white">
          Page {currentPage[type]} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => ({ ...prev, [type]: Math.min(totalPages, prev[type] + 1) }))}
          disabled={currentPage[type] === totalPages}
          className="p-2 rounded-full bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  };

  if (loading) {
    return (
      <motion.div
        className="fixed inset-0 bg-black flex items-center justify-center z-50"
        variants={splashVariants}
        initial="initial"
        exit="exit"
      >
        <div className="text-center">
          <motion.div className="flex items-center justify-center mb-4">
            {Array.from("Anjaiah Chowdary M").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="initial"
                animate="animate"
                className={`text-5xl font-bold ${letter === " " ? "mr-4" : ""} ${
                  i < 7 ? "text-[#ff004f]" : "text-white"
                }`}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="w-24 h-1 bg-[#ff004f] mx-auto rounded-full"
          />
        </div>
      </motion.div>
    );
  }

  if (selectedProject) {
    return (
      <motion.div
        className="min-h-screen bg-gray-900 text-white p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Back Button */}
        <button
          onClick={handleBackToPortfolio}
          className="flex items-center gap-2 text-white bg-gray-800 border-2 border-gray-900 rounded-full p-2 hover:bg-[#ff004f] hover:text-white transition-colors mb-8 group transition-all duration-300"
        >
          <ArrowLeft className="w-6 h-6 transform group-hover:-translate-x-2 transition-transform duration-300" />
          Back to Portfolio
        </button>
  
        {/* Project Details */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-5xl font-bold text-white text-center mb-8">
            {selectedProject.title}
          </h1>
          <div className="absolute top-0 right-0 flex flex-col gap-2 items-end z-10">
            <div className="flex flex-col gap-4 items-end">
              {selectedProject.playUrl && (
                <a
                  href={selectedProject.playUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#ff004f] text-white px-6 py-3 rounded-full hover:bg-[#ff004f]/80 transition-all"
                >
                  <Play className="w-5 h-5" />
                  <span className="text-lg font-semibold">Play Game</span>
                </a>
              )}
  
              {selectedProject.gameCode && (
                <button
                  onClick={handleCopyProjectCode}
                  className="flex items-center justify-center gap-2 bg-[#ff004f] text-white px-6 py-3 rounded-full hover:bg-[#ff004f]/80 transition-all"
                >
                  <Copy className="w-5 h-5" />
                  {copied ? "Copied!" : selectedProject.gameCode}
                </button>
              )}  
            </div>
          </div>
          
  
          {/* Video Section */}
          <motion.div
            className="w-full flex justify-center items-center mb-16"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {selectedProject.videoUrl ? (
              <div className="relative w-full max-w-xl aspect-video rounded-2xl overflow-hidden mx-auto">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  src={selectedProject.videoUrl}
                  title={selectedProject.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-w-xl rounded-2xl object-cover mx-auto aspect-video"
              />
            )}
          </motion.div>
          {/* {selectedProject.videoUrl && (
            <motion.div
              className="w-full flex justify-center items-center mb-16"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative w-full max-w-xl aspect-video rounded-2xl overflow-hidden mx-auto">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  src={selectedProject.videoUrl}
                  title={selectedProject.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          )} */}
  
          {/* About the Game - Fully Left & Extended Width */}
          <motion.div
            className="mb-10 bg-gray-800 p-6 rounded-lg w-full max-w-3xl mx-auto"
            // style={{ width: "93vw", marginLeft: "-200px" }} // Shift left using pixels
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">About the Game</h2>
            <p className="text-lg text-[#ababab] leading-relaxed">
              {selectedProject.about}
            </p>
          </motion.div>

  
          {/* Game Details */}
          {selectedProject.gameDetails && (
            <motion.div
              className="mb-10 bg-gray-800 p-6 rounded-lg w-full max-w-3xl mx-auto"
              // style={{ width: "93vw", marginLeft: "-200px" }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Game Details</h2>
              <p className="text-lg text-[#ababab] leading-relaxed">🎮 Game Mode: {selectedProject.gameDetails.gameMode}</p>
              <p className="text-lg text-[#ababab] leading-relaxed">🕹 Genre: {selectedProject.gameDetails.genre}</p>
              <p className="text-lg text-[#ababab] leading-relaxed">👥 Max Players: {selectedProject.gameDetails.maxPlayers}</p>
              <p className="text-lg text-[#ababab] leading-relaxed">⏳ Session Length: {selectedProject.gameDetails.sessionLength}</p>
              
            </motion.div>
          )}
  
          {/* Key Features */}
          {selectedProject.keyFeatures && (
            <motion.div
              className="mb-10 bg-gray-800 p-6 rounded-lg w-full max-w-3xl mx-auto"
              // style={{ width: "93vw", marginLeft: "-200px" }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Key Features</h2>
              <ul className="list-disc list-inside text-lg text-[#ababab] leading-relaxed pl-6">
                {selectedProject.keyFeatures.map((feature, index) => (
                  <li key={index} className="mb-2">{feature}</li>
                ))}
              </ul>
            </motion.div>
          )}
  
          {/* My Contributions */}
          {selectedProject.contributions && (
            <motion.div
              className="mb-10 bg-gray-800 p-6 rounded-lg w-full max-w-3xl mx-auto"
              // style={{ width: "93vw", marginLeft: "-200px" }} // Increased width & moved left
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">My Contributions</h2>

              {/* Optional paragraph */}
              {selectedProject.showContributionIntro && (
                <p className="text-lg text-[#ababab] leading-relaxed mb-4">
                  This game was developed while working at my previous company, where I was responsible for:
                </p>
              )}

              <ul className="list-disc list-inside text-lg text-[#ababab] leading-relaxed pl-6">
                {selectedProject.contributions.split("|").map((item, index) => (
                  <li key={index} className="mb-2">✅ {item.trim()}</li>
                ))}
              </ul>
            </motion.div>
          )}

        </div>
      </motion.div>
    );
  }
  
  
  
  return (
    <div className="min-h-screen bg-black">
      {/* Fixed Name in Top Left */}
      <div className="fixed top-8 left-10 z-50">
        <motion.h1 
          className="text-6xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white">A</span>
          <span className="text-[#ff004f]">njaiah</span>
        </motion.h1>
      </div>

      <nav className="fixed top-4 right-4 z-50">
        <div className="bg-gray-800/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl">
          <div className="flex gap-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex flex-col items-center p-2 rounded-xl transition-all duration-300 group relative hover:bg-[#ff004f]/20 ${
                    activeSection === item.id ? 'bg-[#ff004f] text-white scale-110' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="min-h-screen flex items-center px-8 bg-black">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 -mt-16">
            {/* Move this block to the top */}
            <div className="space-y-2 mb-8">
              <motion.p 
                className="text-3xl font-semibold text-[#fff]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Game Developer
              </motion.p>
              <motion.h1 
                className="text-5xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="block">Hi, I'm</span>
                <span className="block text-[#ff004f]">Anjaiah Chowdary M</span>
                <span className="block">From India</span>
              </motion.h1>
              <motion.p
                className="text-2xl font-bold text-[#ff004f] mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                UEFN games contributed 5 Million minutes playtime
              </motion.p>
            </div>
              
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex flex-col items-start gap-4">
                  <a
                    href={ResumePDF}
                    download
                    className="flex items-center gap-2 bg-[#ff004f] hover:bg-[#ff004f]/80 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                  </a>

                  {/* Social Links */}
                  <div className="flex gap-8 mt-4">
                    <a
                        href="https://www.linkedin.com/in/anjaiahmcwork/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ababab] text-6xl transition-all duration-300 hover:text-[#ff004f] transition-all duration-300 transform hover:scale-105"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                      href="https://github.com/AnjaiahMCWork"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ababab] text-6xl transition-all duration-300 hover:text-[#ff004f] transition-all duration-300 transform hover:scale-105"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    
                  </div>
                </div>

              </motion.div>
            </div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <img
                src={HomeUserIcon}
                alt="Game Developer"
                className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover rounded-2xl mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="min-h-screen px-8 py-20 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            
            <motion.div 
              className="flex gap-4 mb-12 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SubSectionButton section="about" subsection="skills" label="Skills & Experience" />
              <SubSectionButton section="about" subsection="education" label="Education" />
            </motion.div>
            <AnimatePresence mode="wait">
              {activeSubSection.about === 'skills' && (
                <motion.div
                  key="Skills & Experience" // Unique key to reset animation
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start w-full"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={skillsVariants}
                >
                  {/* Left: Skills */}
                    <div className="flex flex-col gap-6 w-full">
                      <motion.div 
                        className="bg-gray-900 p-6 rounded-lg w-full transform hover:scale-105 transition-all duration-300"
                        variants={itemVariants}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <Code className="w-8 h-8 text-[#ff004f] animate-bounce" />
                          <h4 className="text-2xl font-semibold text-white">Programming Languages</h4>
                        </div>
                        <div className="grid grid-cols-3 gap-6 mt-6">
                          {programmingIcons.map((lang, index) => (
                            <motion.div 
                              key={lang.name} 
                              className="flex flex-col items-center"
                              animate={{ y: [-5, 5, -5] }}
                              transition={{ 
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: index * 0.2
                              }}
                            >
                              <img
                                src={lang.icon}
                                alt={lang.name}
                                className="w-16 h-16 mb-2 hover:scale-110 transition-transform duration-300"
                              />
                              <span className="text-gray-300 text-sm">{lang.name}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Game Engines */}
                      <motion.div 
                        className="bg-gray-900 p-6 rounded-lg w-full transform hover:scale-105 transition-all duration-300"
                        variants={itemVariants}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <Gamepad2 className="w-6 h-6 text-[#ff004f] animate-pulse" />
                          <h4 className="text-2xl font-semibold text-white">Game Engines</h4>
                        </div>
                        <div className="grid grid-cols-3 gap-6 mt-6">
                          {gameEngineIcons.map((engine, index) => (
                            <motion.div 
                              key={engine.name} 
                              className="flex flex-col items-center"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ 
                                duration: 1.2,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: index * 0.2
                              }}
                            >
                              <img
                                src={engine.icon}
                                alt={engine.name}
                                className="w-16 h-16 mb-2 hover:scale-110 transition-transform duration-300 filter invert"
                              />
                              <span className="text-white text-sm">{engine.name}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                    {/* Right: Experience */}
                    <div className="flex flex-col gap-6 w-full">
                      {experienceDetails.map((exp, index) => (
                        <motion.div 
                          key={index} 
                          className="bg-gray-900 p-6 rounded-lg shadow-lg w-full"
                          variants={experienceVariants} 
                        >
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                          <p className="text-[#ababab] mb-2">{exp.company}</p>
                          <p className="text-[#ff004f] mb-2">{exp.duration}</p>
                          <p className="text-gray-300">{exp.description}</p>
                        </motion.div>
                      ))}
                    </div>
                </motion.div>
              )}

              {activeSubSection.about === 'education' && (
                <motion.div
                  key="education" // Unique key
                  className="space-y-6"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={educationVariants}
                >
                  <div className="flex flex-col items-center gap-6 mt-6">
                    {educationDetails.map((edu, index) => (
                      <motion.div 
                        key={index} 
                        className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-2xl"
                        variants={educationVariants}
                      >
                        <h3 className="text-[#fff] text-2xl font-bold mb-2">{edu.degree}</h3>
                        <p className="text-[#ff004f]">{edu.year}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>
        </section>

        <section id="services" className="min-h-screen flex items-center py-20 bg-black">
              <div className="max-w-6xl mx-auto px-4 "> {/* Adjusted margin */}
                
                {/* Animated Title */}
                <motion.h2 
                  className="text-4xl font-bold text-white mb-12 text-center scale-in"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}  // Faster animation
                >
                  Services
                </motion.h2>

                {/* Services Grid */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6 justify-center"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.05 } } // Faster stagger
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-900 p-6 rounded-lg shadow-lg min-h-[150px] w-[350px] border border-[#333] transition-all duration-200 mx-auto"
                      variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      transition={{ duration: 0.3, delay: index * 0.05 }} // Faster animations
                      whileHover={{ 
                        y: -5, 
                        scale: 1.03, 
                        borderColor: "#ff004f", 
                        transition: { duration: 0.2 } // Faster hover effect
                      }} 
                    >
                      <div className="text-[#ff004f] mb-4">{service.icon}</div>
                      <h3 className="text-white text-xl font-bold mb-4">{service.title}</h3>
                      <p className="text-[#ababab]">{service.description}</p>
                    </motion.div>
                  ))}
                </motion.div>

              </div>
            </section>





        <section id="projects" className="min-h-screen px-8 py-20 bg-black">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Projects
            </motion.h2>
            
            <motion.div 
              className="flex gap-4 mb-12 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SubSectionButton section="projects" subsection="uefn" label="UEFN" />
              <SubSectionButton section="projects" subsection="unity" label="Unity" />
              <SubSectionButton section="projects" subsection="unreal" label="Unreal" />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSubSection.projects}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  variants={containerVariants}
                >
                  {projectsData[activeSubSection.projects as keyof typeof projectsData]?.slice(
                      (currentPage[activeSubSection.projects as keyof typeof currentPage] - 1) * ITEMS_PER_PAGE,
                      currentPage[activeSubSection.projects as keyof typeof currentPage] * ITEMS_PER_PAGE
                    )
                    .map((project, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="group relative overflow-hidden rounded-lg cursor-pointer bg-gray-700 flex flex-col h-full"
                        onClick={() => handleProjectClick(project)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-4 flex-1 flex flex-col bg-gray-900 rounded-b-lg">
                          <h3 className="text-lg font-bold mb-1 text-white text-center">{project.title}</h3>
                          {/* <p className="text-sm text-[#ababab]">{project.description}</p> */}
                        </div>
                      </motion.div>

                    ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Pagination type={activeSubSection.projects as 'uefn' | 'unity' | 'unreal'} />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section id= "contact"className="min-h-screen flex items-center py-20 bg-black">
            <div className="container mx-auto px-4">
              {/* Contact Me Heading */}
              <h2 className="text-5xl font-bold mb-12 text-left text-[#fff] scale-in text-center">
                Contact Me
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Section */}
                <div className="space-y-10 scale-in">
                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <FontAwesomeIcon icon={faEnvelope} className="text-[#ff004f]" size="2x" />
                    <div>
                      <h3 className="text-[#fff] text-2xl font-bold">Email</h3>
                      <p className="text-[#fff]">anjaiahmcwork@gmail.com</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-4">
                    <FontAwesomeIcon icon={faPhone} className="text-[#ff004f]" size="2x" />
                    <div>
                      <h3 className="text-[#fff] text-2xl font-bold">Phone</h3>
                      <p className="text-[#fff]">+91 6360396339</p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center space-x-6">
                    <a href="https://www.linkedin.com/in/anjaiahmcwork/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} className="text-[#ababab] hover:text-[#ff004f]" size="3x" />
                    </a>
                    <a href="https://github.com/AnjaiahMCWork" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} className="text-[#ababab] hover:text-[#ff004f]" size="3x" />
                    </a>
                    <a
                      href={ResumePDF}
                      target="_blank"
                      className="inline-block bg-[#ff004f] px-6 py-3 rounded-lg hover:bg-[#ff6b7f] transition-colors duration-300 text-white"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>

                {/* Right Section: Form */}
                <form className="space-y-6 scale-in">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-4 bg-gray-900 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff004f] transform scale-x-110 text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-4 bg-gray-900 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff004f] transform scale-x-110 text-white"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={6}
                      className="w-full p-4 bg-gray-900 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff004f] transform scale-x-110 text-white"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#ff004f] text-white px-8 py-3 text-lg rounded-lg hover:bg-[#ff6b7f] transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
          </section>
          {/* Copyright Box */}
          <div className="w-full bg-gray-900 py-4 mt-16 text-center text-white">
              <p className="text-lg">
                Copyright © Anjaiah. <FontAwesomeIcon icon={faHeart} className="text-[#ff004f] mx-1" /> Made with Love
              </p>
            </div>
      </main>
    </div>
  );
}

export default App;