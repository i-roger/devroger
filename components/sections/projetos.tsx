import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, FileText, Sparkles, Send, QrCode, QrCodeIcon, Utensils, MonitorSmartphone, Zap, CloudSun } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
export default function Projetos() {

    const projects = [
    {
      id: 1,
      title: 'Raiolaranja : Seu companheiro nas corridas!',
      description: 'Aplicativo interativo para planejamento de treino de corrida com previsão de tempo, conversões de pace, entre outras ferramentas que facilitam a vida do corredor. Seja na esteira ou na rua!',
      technologies: ['React', 'Next.js', 'TypeScript', 'better-auth', 'Framer-motion', 'Prisma', 'FormSubmit', 'TailWindCSS', 'react-icons'],
      image: <Zap color='white' className='w-16 h-16'/>,
      github: 'https://github.com/i-roger/raio-webapp',
      demo: 'https://raiolaranja.vercel.app',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 2,
      title: 'Rogertech',
      description: 'Landing page profissional apresentando meus serviços, projetos desenvolvidos e formulário para contato direto com clientes.',
      technologies: ['Next.js', 'TypeScript', 'TailWindCSS', 'Swiper'],
      image: <MonitorSmartphone color='white' className='w-16 h-16'/>,
      github: 'https://github.com/i-roger/rogertech',
      demo: 'https://rogertech.vercel.app/inicio',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 3,
      title: 'Clima Tempo',
      description: 'Aqui você encontra informações sobre temperatura, umidade e velocidade do vento em tempo real! Este aplicativo conta com 2 APIs, sendo uma para consulta do clima e outra para imagem do local pesquisado.',
      technologies: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'API Aggregator'],
      image: <CloudSun color='white' className='w-16 h-16'/>,
      github: 'https://github.com/i-roger/climatempo',
      demo: 'https://mrclimatempo.netlify.app/',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 4,
      title: 'Ilha Esfihas',
      description: 'Plataforma web de delivery focada em pedidos de esfihas e combos. Criada para facilitar o pedido online, exibir cardápio atualizado e permitir ao cliente acompanhar o pedido.',
      technologies: ['Next.js', 'Typescript', 'TailWindCSS','URL Scheme Integration'],
      image: <Utensils color='white' className='w-16 h-16'/>,
      github: 'https://github.com/i-roger/ilha-esfihas',
      demo: 'https://ilhaesfihas.vercel.app/',
      gradient: 'from-orange-500 to-pink-500'
    },
    {
      id: 5,
      title: 'QR Code Grátis',
      description: 'Aplicação que cria QR Codes dinâmicamente a partir do texto ou link digitado pelo usuário, permitindo baixar a imagem gerada com um clique. Desenvolvido com foco em praticidade e interface simples.',
      technologies: ['Next.js', 'Typescript', 'TailWindCSS', 'qrcode.react'],
      image: <QrCode color='white' className='w-16 h-16'/>,
      github: 'https://github.com/i-roger/gerador-de-qrcode',
      demo: 'https://qrcodegratis.vercel.app/',
      gradient: 'from-lime-500 to-emerald-500' 
    }
  ];
    return(
        <section id='projetos' className="flex justify-center py-24 px-6">
          <div className="w-6xl">
            <div className="flex items-center gap-4 mb-12">
              <h3 className="text-4xl font-bold text-white bg-">Projetos em Destaque</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card 
                  key={project.id} 
                  className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl hover:shadow-purple-500/20 transition-all group overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  <CardHeader>
                    <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform flex justify-center">
                      {project.image}
                    </div>
                    <CardTitle className="text-2xl text-white mb-3">{project.title}</CardTitle>
                    <CardDescription className="text-slate-400 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={project.github}>
                        <Button className="flex-1 cursor-pointer bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </Button>
                      </a>
                      <a href={project.demo}>
                      <Button className={`flex-1 cursor-pointer bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white rounded-xl shadow-lg`}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
    )
}