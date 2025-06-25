// import React from 'react';
import { ExternalLink, Github, Code, Gamepad2, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Application E-commerce",
      description: "Plateforme de commerce électronique complète avec gestion des produits, panier d'achat et système de paiement intégré.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      category: "web",
      demoLink: "#",
      githubLink: "https://github.com/Martial-Atems"
    },
    {
      title: "Jeu d'Aventure 3D",
      description: "Jeu d'aventure immersif développé avec Unreal Engine 5, featuring des environnements détaillés et une gameplay engageante.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Unreal Engine 5", "C++", "BluePrint", "Blender"],
      category: "game",
      demoLink: "#",
      githubLink: "https://github.com/Martial-Atems"
    },
    {
      title: "API REST Node.js",
      description: "API robuste pour gestion d'utilisateurs avec authentification JWT, validation des données et documentation Swagger.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Node.js", "Express.js", "MySQL", "JWT"],
      category: "web",
      demoLink: "#",
      githubLink: "https://github.com/Martial-Atems"
    },
    {
      title: "Application Desktop Java",
      description: "Système de gestion d'inventaire avec interface graphique intuitive et base de données intégrée.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Java", "SQLite", "XML"],
      category: "desktop",
      demoLink: "#",
      githubLink: "https://github.com/Martial-Atems"
    },
    {
      title: "Jeu Mobile Unity",
      description: "Jeu mobile casual avec mécaniques de gameplay addictives et système de progression.",
      image: "https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Unity", "C#", "Android SDK"],
      category: "game",
      demoLink: "#",
      githubLink: "https://github.com/Martial-Atems"
    },
    {
      title: "Portfolio Responsive",
      description: "Site portfolio moderne et responsive avec animations CSS et optimisation SEO.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      category: "web",
      demoLink: "#",
      githubLink: "https://github.com/Martial-Atems"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web':
        return Globe;
      case 'game':
        return Gamepad2;
      case 'desktop':
        return Code;
      default:
        return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web':
        return 'text-blue-400';
      case 'game':
        return 'text-red-400';
      case 'desktop':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mes <span className="text-blue-400">Projets</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Découvrez une sélection de mes réalisations dans le développement web, logiciel et de jeux vidéo.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105 group"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <div className={`p-2 rounded-lg bg-gray-900/80 ${getCategoryColor(project.category)}`}>
                        <CategoryIcon size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-4">
                      <a
                        href={project.demoLink}
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Démo</span>
                      </a>
                      <a
                        href={project.githubLink}
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;