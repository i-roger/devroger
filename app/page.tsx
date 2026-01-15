'use client'
import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, FileText, Sparkles, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Sobre from '@/components/sections/sobre'
import Projetos from '@/components/sections/projetos'
import Habilidades from '@/components/sections/habilidades'
import Contato, { socialLinks } from '@/components/sections/contato'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('contato');

  // Configure seus links aqui

  return (
    <div className="flex-col min-h-screen bg-gradient-to-br from-[#0F1629] via-[#10172C] to-[#0F1A33]">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/40 backdrop-blur-xl z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex justify-center items-center">
            <div className="flex gap-8">
                <ul className='flex gap-2 text-xl'>
                  <li><a href="#sobre" className="h-0.5 text-slate-400 hover:text-white capitalize transition-all cursor-pointer">sobre</a></li>
                  <li><a href="#projetos" className="h-0.5 text-slate-400 hover:text-white capitalize transition-all cursor-pointer">projetos</a></li>
                  <li><a href="#habilidades" className="h-0.5 text-slate-400 hover:text-white capitalize transition-all cursor-pointer">habilidades</a></li>
                  <li><a href="#contato" className={`h-0.5 text-slate-400 hover:text-white capitalize transition-all cursor-pointer`}>contato</a></li>
                </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex justify-center pt-40">
        <div className="max-w-7xl text-center">
          {/* <div className="relative inline-block mb-8">
            <div className="w-40 h-40 mx-auto bg-white/5 border-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center text-7xl shadow-2xl shadow-cyan-500/30 transform hover:scale-105 transition-transform">
              👨‍💻
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-600 to-cyan-900 rounded-full blur-2xl opacity-60 animate-pulse"></div>
          </div> */}
          
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-6">
              Disponível para novos projetos ✨
            </span>
          </div>

          <h2 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-2">Matheus Roger</span>
            <a className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Desenvolvedor
            </a>
          </h2>
          
          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transformando ideias em experiências digitais excepcionais através de código elegante, 
            design moderno e tecnologias de ponta
          </p>
          
          <div className="flex gap-4 justify-center mb-10">
            <a href={`mailto:${socialLinks.email}`}>
            <Button className="cursor-pointer bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all">
              <Mail className="mr-2 h-5 w-5" />
              Enviar email
            </Button>
            </a>

            <a href={socialLinks.linkedin}>
            <Button className="cursor-pointer bg-white/5 hover:bg-white/10 text-white px-8 py-6 text-lg rounded-xl border border-white/10 backdrop-blur-sm">
              <Linkedin className="h-6 w-6 text-white" />
              Conversar pelo LinkedIn
            </Button>
            </a>
          </div>
          
          <div className="flex gap-6 justify-center">
            {[
              { icon: Github, href: socialLinks.github },
              { icon: Linkedin, href: socialLinks.linkedin },
              { icon: Mail, href: `mailto:${socialLinks.email}` }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Sobre/>
      <Projetos/>
      <Habilidades/>
      <Contato/>
        
    </div>
  );
}