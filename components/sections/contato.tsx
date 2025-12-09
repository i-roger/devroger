import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, FileText, Sparkles, Send } from 'lucide-react';

export const socialLinks = {
    github: 'https://github.com/i-roger',
    linkedin: 'https://www.linkedin.com/in/matheus-roger-22555b235/',
    email: 'mroger.dev@gmail.com'
  };

export default function Contato() {

    return(
        <section id='contato' className="flex justify-center py-24 px-6">
          <div className="w-6xl">
            <div className="flex items-center gap-4 mb-12">
              <h3 className="text-4xl font-bold text-white">Vamos Trabalhar Juntos</h3>
            </div>
            
            <div className="grid md:grid-cols-1">
              {/* Informações de Contato */}
              <div className="space-y-6">
                <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Informações de Contato</CardTitle>
                    <CardDescription className="text-slate-400">
                      Você também pode me encontrar através destas plataformas
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <a
                      href={`mailto:${socialLinks.email}`}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Email</h4>
                        <p className="text-slate-400 text-sm">Envie um email</p>
                      </div>
                    </a>

                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <Linkedin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">LinkedIn</h4>
                        <p className="text-slate-400 text-sm">Conecte-se comigo</p>
                      </div>
                    </a>

                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <Github className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">GitHub</h4>
                        <p className="text-slate-400 text-sm">Veja meus projetos</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
                  <CardContent className="p-6 text-center">
                    <p className="text-slate-300 leading-relaxed">
                      💼 <strong className="text-white">Disponível</strong> para projetos freelance e oportunidades full-time
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
    )
}