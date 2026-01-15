import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Habilidades() {

      const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS', 'Shadcn/ui', 'Vite.js'],
    backend: ['Node.js', 'RESTful APIs', 'Prisma', 'Express', 'PostgreSQL', 'MongoDB'],
    tools: ['Git', 'Figma', 'VS Code', 'Docker',]
  };

    return (
        <section id="habilidades" className="flex justify-center py-24 px-6">
          <div className="w-6xl">
            <div className="flex items-center mb-12">
              <h3 className="text-4xl font-bold text-white">Habilidades</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/20 transition-all group">
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Front-end
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skills.frontend.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl text-sm text-cyan-300 hover:bg-cyan-500/20 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl hover:shadow-purple-500/20 transition-all group">
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Back-end
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skills.backend.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl text-sm text-purple-300 hover:bg-purple-500/20 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl hover:shadow-emerald-500/20 transition-all group">
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Ferramentas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skills.tools.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl text-sm text-emerald-300 hover:bg-emerald-500/20 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
    )
}