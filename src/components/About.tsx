import React from 'react';
import { Code, Database, Gamepad2, Palette, Brain, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Développement Web",
      icon: Globe,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Bootstrap", "jQuery"]
    },
    {
      category: "Développement Desktop",
      icon: Code,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      technologies: ["Java", "VB.NET"]
    },
    {
      category: "Frameworks",
      icon: Database,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      technologies: ["Node.js", "Express.js", "Laravel"]
    },
    {
      category: "Développement de jeux",
      icon: Gamepad2,
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      technologies: ["Unreal Engine 5", "Unity", "C#", "C++", "BluePrint"]
    },
    {
      category: "Modélisation 3D",
      icon: Palette,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      technologies: ["Blender"]
    },
    {
      category: "Modélisation",
      icon: Brain,
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      technologies: ["MERISE", "UML"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              À propos de <span className="text-blue-400">moi</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="space-y-6">
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Mon parcours</h3>
                <div className="space-y-4 text-gray-300">
                  <p className="flex items-center space-x-3">
                    <span className="text-blue-400 font-semibold">Âge:</span>
                    <span>20 ans</span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <span className="text-blue-400 font-semibold">Formation:</span>
                    <span>Étudiant en Génie Logiciel à l'Institut Universitaire de la Côte (IUC)</span>
                  </p>
                  <p className="leading-relaxed">
                    Passionné par la technologie depuis mon plus jeune âge, je me spécialise dans le développement 
                    d'applications web, desktop et de jeux vidéo. Mon objectif est de créer des solutions innovantes 
                    qui allient performance et expérience utilisateur exceptionnelle.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className={`${skill.bgColor} p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105`}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 rounded-lg ${skill.bgColor}`}>
                        <IconComponent className={`${skill.color} w-6 h-6`} />
                      </div>
                      <h4 className="text-white font-semibold">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;