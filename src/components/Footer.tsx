// import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Martial-Atems',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/martial-atem%E2%80%99s-219828367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:martialatems128@gmail.com',
      color: 'hover:text-purple-400'
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                <span className="text-blue-400">Atemena</span> Martial
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Développeur junior passionné par la création d'expériences numériques innovantes 
                et l'apprentissage continu des nouvelles technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Navigation</h4>
              <div className="space-y-2">
                {['Accueil', 'À propos', 'Projets', 'Contact'].map((link, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase().replace('à propos', 'about'));
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>📞 +237 678 518 089</p>
                <p>✉️ martialatems128@gmail.com</p>
                <p>🎓 Institut Universitaire de la Côte (IUC)</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800/50 rounded-full text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:bg-gray-700/50`}
                  aria-label={social.name}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Atemena Tsafack Arcel Martial. Tous droits réservés.
              </p>
              <p className="text-gray-400 text-sm flex items-center space-x-1">
                <span>Fait avec</span>
                <Heart className="text-red-400 w-4 h-4" />
                <span>et React</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;