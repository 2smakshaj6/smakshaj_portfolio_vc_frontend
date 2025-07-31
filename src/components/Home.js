import React, { useState, useEffect, Suspense } from 'react';
import { Shield, Terminal, Lock, Eye, Zap, ArrowRight, Mail, Linkedin, Github, ExternalLink, CheckCircle, Code, Server, Bug, Award, User, Camera, Download, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { usePortfolioData } from '../hooks/usePortfolioData';
import { useToast } from '../hooks/use-toast';

// Animated Sphere Component
const AnimatedSphere = ({ position, color }) => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere position={position} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

// Background Scene Component
const BackgroundScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
        <AnimatedSphere position={[-4, 2, -2]} color="#DAFF01" />
        <AnimatedSphere position={[4, -2, -3]} color="#1a1c1e" />
        <AnimatedSphere position={[0, 3, -4]} color="#3f3f3f" />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Suspense>
    </Canvas>
  );
};

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[rgb(17,17,19)] via-[rgb(26,28,30)] to-[rgb(17,17,19)]">
    <div className="text-center">
      <Loader2 className="h-12 w-12 text-[rgb(218,255,1)] animate-spin mx-auto mb-4" />
      <p className="text-[rgb(218,218,218)] text-lg">Loading portfolio data...</p>
    </div>
  </div>
);

// Error Component
const ErrorComponent = ({ error, onRetry }) => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[rgb(17,17,19)] via-[rgb(26,28,30)] to-[rgb(17,17,19)]">
    <div className="text-center max-w-md">
      <div className="text-red-500 text-6xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h2>
      <p className="text-[rgb(161,161,170)] mb-6">{error}</p>
      <Button 
        onClick={onRetry}
        className="bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] text-[rgb(17,17,19)] hover:from-[rgb(166,190,21)] hover:to-[rgb(218,255,1)]"
      >
        Try Again
      </Button>
    </div>
  </div>
);

const Home = () => {
  const { portfolioData, loading, error, refreshData } = usePortfolioData();
  const { toast } = useToast();
  
  const [terminalText, setTerminalText] = useState('');
  const [currentCommand, setCurrentCommand] = useState(0);
  
  const personalCommands = [
    'whoami >> cybersecurity_professional_akshaj',
    'ls -la /career/goals >> [Security_Engineer, SOC_Analyst, Security_Architect]',
    'cat /aspirations.txt >> [Incident_Response_Specialist, Threat_Hunter, CISO]',
    'grep -r "roles" /interests/ >> [Penetration_Tester, Security_Consultant, DevSecOps_Engineer]',
    'find /opportunities -name "*security*" >> [Cybersecurity_Manager, Risk_Analyst, Compliance_Officer]',
    'sudo apt-get install advanced-threat-detection',
    'grep -r "AI.*Security" /research/ | head -10',
    'cat /skills/expertise.txt | grep -E "(SIEM|IAM|ICS|EDR)"',
    'python detection_engine.py --target enterprise_security',
    'wazuh-control start && echo "SOC Monitoring activated"',
    'nmap -sS -A target_infrastructure | tee scan_results.txt',
    'curl -X GET https://api.security.akshaj.com/threats',
    'tail -f /var/log/security/incidents.log | grep CRITICAL'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const command = personalCommands[currentCommand];
      if (terminalText.length < command.length) {
        setTerminalText(command.substring(0, terminalText.length + 1));
      } else {
        setTimeout(() => {
          setTerminalText('');
          setCurrentCommand((prev) => (prev + 1) % personalCommands.length);
        }, 3000);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [terminalText, currentCommand, personalCommands]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Show loading state
  if (loading) {
    return <LoadingSpinner />;
  }

  // Show error state
  if (error) {
    return <ErrorComponent error={error} onRetry={refreshData} />;
  }

  // Show error if no data
  if (!portfolioData) {
    return <ErrorComponent error="No portfolio data available" onRetry={refreshData} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(17,17,19)] via-[rgb(26,28,30)] to-[rgb(17,17,19)] text-white relative overflow-hidden">
      {/* Three.js Background */}
      <BackgroundScene />
      
      {/* Enhanced Mobile-First Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-[rgb(17,17,19)]/95 via-[rgb(26,28,30)]/95 to-[rgb(17,17,19)]/95 backdrop-blur-md border-b-2 border-[rgb(218,255,1)]/30 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Logo Placeholder */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[rgb(218,255,1)] to-[rgb(166,190,21)] rounded-lg flex items-center justify-center shadow-lg shadow-[rgb(218,255,1)]/20">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[rgb(17,17,19)] rounded-md flex items-center justify-center">
                  <Shield className="h-3 w-3 sm:h-5 sm:w-5 text-[rgb(218,255,1)]" />
                </div>
              </div>
              <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] bg-clip-text text-transparent">
                
              </div>
            </div>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-[rgb(218,255,1)] transition-all duration-300 font-medium relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(218,255,1)] transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-white hover:text-[rgb(218,255,1)] transition-all duration-300 font-medium relative group">
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(218,255,1)] transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-white hover:text-[rgb(218,255,1)] transition-all duration-300 font-medium relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(218,255,1)] transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-white hover:text-[rgb(218,255,1)] transition-all duration-300 font-medium relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(218,255,1)] transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[rgb(218,255,1)] transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(218,255,1)] transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-[rgb(218,255,1)] hover:text-white transition-colors p-2"
              >
                <Terminal className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile-Optimized Hero Section */}
      <section className="pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-white">Hi, </span>{' '}
              <span className="bg-gradient-to-r from-[rgb(218,255,1)] via-[rgb(255,255,1)] to-[rgb(218,255,1)] bg-clip-text text-transparent animate-pulse">I am</span>{' '}
              <span className="text-white">Akshaj</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-[rgb(218,218,218)] mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              I am Building<span className="text-[rgb(218,255,1)] font-semibold">Safer Systems</span> at the Intersection of{' '}
              <span className="text-[rgb(218,255,1)] font-semibold">Cybersecurity and AI</span>
            </p>
          </div>

          {/* Mobile-Optimized Enhanced Terminal */}
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <div className="bg-gradient-to-r from-[rgb(26,28,30)] via-[rgb(38,40,42)] to-[rgb(26,28,30)] border-2 border-[rgb(218,255,1)]/30 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-[rgb(218,255,1)]/10 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-[rgb(38,40,42)] to-[rgb(26,28,30)] px-4 sm:px-6 py-3 sm:py-4 flex items-center border-b border-[rgb(218,255,1)]/20">
                <div className="flex space-x-2 sm:space-x-3 mr-4 sm:mr-6">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full shadow-lg animate-pulse"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full shadow-lg animate-pulse"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full shadow-lg animate-pulse"></div>
                </div>
                <div className="text-[rgb(218,255,1)] font-mono text-sm sm:text-lg font-semibold">akshaj@security-terminal:~</div>
              </div>
              <div className="p-4 sm:p-6 lg:p-8 font-mono text-left text-sm sm:text-base lg:text-lg">
                <div className="flex items-center">
                  <span className="text-[rgb(218,255,1)] mr-2 sm:mr-3 text-lg sm:text-xl font-bold">$</span>
                  <span className="text-[rgb(218,218,218)] break-all">{terminalText}</span>
                  <span className="animate-pulse text-[rgb(218,255,1)] text-lg sm:text-xl font-bold ml-1">|</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-Optimized CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20 px-4">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] text-[rgb(17,17,19)] hover:from-[rgb(166,190,21)] hover:to-[rgb(218,255,1)] px-8 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-[rgb(218,255,1)]/40 hover:scale-105 transform"
            >
              View My Arsenal <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto border-2 border-[rgb(218,255,1)]/50 text-[rgb(218,255,1)] hover:border-[rgb(218,255,1)] hover:bg-[rgb(218,255,1)]/10 px-8 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-semibold backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-[rgb(218,255,1)]/20"
            >
              Connect & Collaborate
            </Button>
          </div>

          {/* Mobile-Optimized Enhanced Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
            {portfolioData.stats?.map((stat, index) => (
              <div key={index} className="text-center p-4 sm:p-6 bg-gradient-to-br from-[rgb(26,28,30)]/60 to-[rgb(38,40,42)]/60 rounded-xl sm:rounded-2xl border border-[rgb(218,255,1)]/20 backdrop-blur-sm hover:border-[rgb(218,255,1)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[rgb(218,255,1)]/20">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] bg-clip-text text-transparent mb-2 sm:mb-3">{stat.value}</div>
                <div className="text-[rgb(161,161,170)] text-xs sm:text-sm font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile-Optimized About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-r from-[rgb(26,28,30)]/80 to-[rgb(38,40,42)]/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16">
            About <span className="bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            {/* Mobile-Optimized Photo Placeholder */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-none">
              <div className="relative group">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-[rgb(218,255,1)]/20 to-[rgb(166,190,21)]/20 rounded-2xl sm:rounded-3xl border-2 border-[rgb(218,255,1)]/30 flex items-center justify-center backdrop-blur-sm hover:border-[rgb(218,255,1)] transition-all duration-300 hover:shadow-2xl hover:shadow-[rgb(218,255,1)]/20">
                  <div className="text-center">
                    <Camera className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-[rgb(218,255,1)] mx-auto mb-3 sm:mb-4" />
                    <p className="text-[rgb(218,218,218)] font-medium text-sm sm:text-base">Professional Photo</p>
                    <p className="text-[rgb(161,161,170)] text-xs sm:text-sm mt-1 sm:mt-2">Upload your image here</p>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-[rgb(218,255,1)] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-[rgb(218,255,1)]/30 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
            
            {/* Mobile-Optimized About Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-none">
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed">
                <p className="text-[rgb(218,218,218)]">
                  {portfolioData.personalInfo?.bio || "I'm a cybersecurity professional passionate about building safer digital ecosystems through the strategic integration of AI and traditional security practices."}
                </p>
                <p className="text-[rgb(218,218,218)]">
                  Currently enhancing enterprise security at <span className="text-[rgb(218,255,1)] font-semibold">Catenactio Inc</span>, where I tune SIEM systems, manage IAM policies, and research AI-powered threat detection. My academic journey at the <span className="text-[rgb(218,255,1)] font-semibold">University at Buffalo</span> focuses on AI safety and adversarial machine learning.
                </p>
                <p className="text-[rgb(218,218,218)]">
                  From automotive security at <span className="text-[rgb(218,255,1)] font-semibold">Bosch</span> to developing detection engines and ICS simulations, I'm driven by the challenge of staying ahead of evolving threats in our interconnected world.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center p-3 sm:p-4 bg-[rgb(38,40,42)]/50 rounded-lg sm:rounded-xl border border-[rgb(218,255,1)]/20">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-[rgb(218,255,1)] mx-auto mb-2" />
                  <div className="text-white font-semibold text-sm sm:text-base">Security First</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-[rgb(38,40,42)]/50 rounded-lg sm:rounded-xl border border-[rgb(218,255,1)]/20">
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-[rgb(218,255,1)] mx-auto mb-2" />
                  <div className="text-white font-semibold text-sm sm:text-base">AI Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Now from backend */}
      <section id="experience" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            Professional <span className="bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] bg-clip-text text-transparent">Journey</span>
          </h2>
          
          <div className="max-w-5xl mx-auto">
            {portfolioData.experience?.map((exp, index) => (
              <div key={exp._id || index} className="relative mb-16 last:mb-0">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="text-[rgb(218,255,1)] text-lg font-bold">{exp.period}</div>
                    <div className="text-[rgb(161,161,170)] text-base">{exp.location}</div>
                  </div>
                  <div className="md:w-2/3">
                    <Card className="bg-gradient-to-br from-[rgb(38,40,42)]/80 to-[rgb(26,28,30)]/80 border-2 border-[rgb(63,63,63)] p-8 hover:border-[rgb(218,255,1)] transition-all duration-500 hover:shadow-2xl hover:shadow-[rgb(218,255,1)]/20 backdrop-blur-sm transform hover:-translate-y-2">
                      <h3 className="text-2xl font-bold text-white mb-3">{exp.role}</h3>
                      <div className="text-[rgb(218,255,1)] mb-6 text-lg font-semibold">{exp.company}</div>
                      <ul className="space-y-4 text-[rgb(218,218,218)] mb-6">
                        {exp.highlights?.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[rgb(218,255,1)] mr-4 mt-1 flex-shrink-0" />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-3">
                        {exp.skills?.map((skill, sIndex) => (
                          <Badge key={sIndex} className="bg-gradient-to-r from-[rgb(218,255,1)]/20 to-[rgb(166,190,21)]/20 text-[rgb(218,255,1)] border border-[rgb(218,255,1)]/30 hover:bg-[rgb(218,255,1)]/30 transition-colors px-3 py-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
                {index < portfolioData.experience.length - 1 && (
                  <div className="absolute left-0 md:left-1/3 w-px h-12 bg-gradient-to-b from-[rgb(218,255,1)] to-transparent mt-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Now from backend */}
      <section id="projects" className="py-24 px-6 bg-gradient-to-br from-[rgb(26,28,30)]/60 to-[rgb(38,40,42)]/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            Security <span className="bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] bg-clip-text text-transparent">Arsenal</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {portfolioData.projects?.map((project, index) => (
              <Card key={project._id || index} className="bg-gradient-to-br from-[rgb(26,28,30)]/90 to-[rgb(38,40,42)]/90 border-2 border-[rgb(63,63,63)] p-8 hover:border-[rgb(218,255,1)] transition-all duration-500 hover:shadow-2xl hover:shadow-[rgb(218,255,1)]/20 group backdrop-blur-sm transform hover:-translate-y-3">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-[rgb(218,255,1)]/20 to-[rgb(166,190,21)]/20 rounded-2xl mr-6 border border-[rgb(218,255,1)]/30 group-hover:border-[rgb(218,255,1)] transition-all duration-300">
                    {project.icon === 'shield' && <Shield className="h-8 w-8 text-[rgb(218,255,1)]" />}
                    {project.icon === 'terminal' && <Terminal className="h-8 w-8 text-[rgb(218,255,1)]" />}
                    {project.icon === 'server' && <Server className="h-8 w-8 text-[rgb(218,255,1)]" />}
                    {project.icon === 'bug' && <Bug className="h-8 w-8 text-[rgb(218,255,1)]" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="text-[rgb(218,255,1)] text-sm font-semibold uppercase tracking-wide">{project.status}</div>
                  </div>
                </div>
                
                <p className="text-[rgb(218,218,218)] mb-8 leading-relaxed text-lg">{project.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech?.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-[rgb(63,63,63)] text-[rgb(161,161,170)] hover:border-[rgb(218,255,1)] hover:text-[rgb(218,255,1)] transition-all duration-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <Button size="sm" variant="outline" className="border-[rgb(63,63,63)] text-[rgb(218,218,218)] hover:border-[rgb(218,255,1)] hover:text-[rgb(218,255,1)] hover:bg-[rgb(218,255,1)]/10 transition-all duration-300">
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" className="bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] text-[rgb(17,17,19)] hover:from-[rgb(166,190,21)] hover:to-[rgb(218,255,1)] font-semibold">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Now from backend */}
      <section id="skills" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            Technical <span className="bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] bg-clip-text text-transparent">Expertise</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolioData.skills?.map((category, index) => (
              <Card key={category._id || index} className="bg-gradient-to-br from-[rgb(38,40,42)]/80 to-[rgb(26,28,30)]/80 border-2 border-[rgb(63,63,63)] p-8 hover:border-[rgb(218,255,1)] transition-all duration-500 hover:shadow-xl hover:shadow-[rgb(218,255,1)]/20 backdrop-blur-sm transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-[rgb(218,255,1)]/20 to-[rgb(166,190,21)]/20 rounded-xl mr-4 border border-[rgb(218,255,1)]/30">
                    {category.icon === 'shield' && <Shield className="h-6 w-6 text-[rgb(218,255,1)]" />}
                    {category.icon === 'lock' && <Lock className="h-6 w-6 text-[rgb(218,255,1)]" />}
                    {category.icon === 'code' && <Code className="h-6 w-6 text-[rgb(218,255,1)]" />}
                    {category.icon === 'server' && <Server className="h-6 w-6 text-[rgb(218,255,1)]" />}
                    {category.icon === 'eye' && <Eye className="h-6 w-6 text-[rgb(218,255,1)]" />}
                    {category.icon === 'zap' && <Zap className="h-6 w-6 text-[rgb(218,255,1)]" />}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills?.map((skill, skillIndex) => (
                    <Badge key={skillIndex} className="bg-[rgb(218,255,1)]/10 text-[rgb(218,218,218)] hover:bg-[rgb(218,255,1)]/20 hover:text-[rgb(218,255,1)] transition-all duration-300 border border-[rgb(218,255,1)]/20 hover:border-[rgb(218,255,1)]/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section - Now from backend */}
      <section className="py-24 px-6 bg-gradient-to-r from-[rgb(26,28,30)]/80 to-[rgb(38,40,42)]/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            Academic <span className="bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] bg-clip-text text-transparent">Foundation</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {portfolioData.education?.map((edu, index) => (
              <Card key={edu._id || index} className="bg-gradient-to-br from-[rgb(38,40,42)]/80 to-[rgb(26,28,30)]/80 border-2 border-[rgb(63,63,63)] p-8 hover:border-[rgb(218,255,1)] transition-all duration-300">
                <h4 className="text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                <div className="text-[rgb(218,255,1)] text-lg font-semibold mb-2">{edu.school}</div>
                <div className="text-[rgb(161,161,170)]">{edu.location} • {edu.period}</div>
                {edu.gpa && (
                  <div className="text-[rgb(218,218,218)] mt-2">GPA: {edu.gpa}</div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section - Now from backend */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            Professional <span className="bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] bg-clip-text text-transparent">Certifications</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolioData.certifications?.map((cert, index) => (
              <Card key={cert._id || index} className="bg-gradient-to-br from-[rgb(26,28,30)]/90 to-[rgb(38,40,42)]/90 border-2 border-[rgb(63,63,63)] p-8 hover:border-[rgb(218,255,1)] transition-all duration-300 hover:shadow-lg hover:shadow-[rgb(218,255,1)]/20 group">
                <div className="flex items-start justify-between mb-4">
                  <Award className="h-8 w-8 text-[rgb(218,255,1)] flex-shrink-0" />
                  {/* Certification Image Placeholder */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[rgb(218,255,1)]/20 to-[rgb(166,190,21)]/20 rounded-lg border border-[rgb(218,255,1)]/30 flex items-center justify-center">
                    <span className="text-xs text-[rgb(218,255,1)] font-bold">CERT</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[rgb(218,255,1)] transition-colors">
                  {cert.name || cert}
                </h3>
                {cert.issuer && (
                  <div className="text-[rgb(161,161,170)] text-sm mb-2">{cert.issuer}</div>
                )}
                <div className="flex items-center text-sm text-[rgb(161,161,170)]">
                  <span>Click to verify</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-[rgb(26,28,30)]/80 to-[rgb(38,40,42)]/80 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12">
            Let's <span className="bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] bg-clip-text text-transparent">Collaborate</span>
          </h2>
          <p className="text-2xl text-[rgb(218,218,218)] mb-16 max-w-4xl mx-auto leading-relaxed">
            Ready to discuss <span className="text-[rgb(218,255,1)]">cybersecurity challenges</span>, <span className="text-[rgb(218,255,1)]">AI security research</span>, or potential collaborations? 
            Let's secure the digital future together.
          </p>
          
          <div className="flex justify-center gap-8 mb-16">
            <Button className="bg-gradient-to-r from-[rgb(218,255,1)] to-[rgb(166,190,21)] text-[rgb(17,17,19)] hover:from-[rgb(166,190,21)] hover:to-[rgb(218,255,1)] px-10 py-4 rounded-2xl text-xl font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-[rgb(218,255,1)]/40 hover:scale-105">
              <Mail className="h-6 w-6 mr-3" />
              Email Me
            </Button>
            <Button variant="outline" className="border-2 border-[rgb(218,255,1)]/50 text-[rgb(218,255,1)] hover:border-[rgb(218,255,1)] hover:bg-[rgb(218,255,1)]/10 px-10 py-4 rounded-2xl text-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[rgb(218,255,1)]/20">
              <Linkedin className="h-6 w-6 mr-3" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-6 border-t-2 border-[rgb(218,255,1)]/30 bg-gradient-to-r from-[rgb(17,17,19)] to-[rgb(26,28,30)]">
        <div className="container mx-auto text-center">
          <div className="text-[rgb(161,161,170)] mb-6 text-lg">
            © 2025 Akshaj Shivara Madhusudhan. All rights reserved.
          </div>
          <div className="text-sm text-[rgb(161,161,170)]">
            Built with React • Secured by Design • Enhanced with <span className="text-[rgb(218,255,1)]">Three.js</span> • Powered by <span className="text-[rgb(218,255,1)]">MongoDB</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;