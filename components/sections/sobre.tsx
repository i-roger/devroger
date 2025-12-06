import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Sobre() {
    return(
        <section id='sobre' className="flex justify-center py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <h3 className="text-4xl font-bold text-white">Sobre Mim</h3>
            </div>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl">
              <CardContent className="p-10">
                <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                  <p>
                    Sou um desenvolvedor apaixonado por criar soluções web modernas e eficientes. 
                    Com experiência sólida em desenvolvimento front-end e back-end, tenho as habilidades 
                    necessárias para construir aplicações completas desde o conceito inicial até a implementação final.
                  </p>
                  <p>
                    Minha expertise abrange <span className="text-cyan-400 font-semibold">React</span>, <span className="text-cyan-400 font-semibold">Next.js</span>, <span className="text-cyan-400 font-semibold">TypeScript</span> e <span className="text-cyan-400 font-semibold">Node.js</span>, 
                    sempre mantendo o foco nas melhores práticas e nas tecnologias mais recentes do mercado. 
                    Tenho experiência trabalhando em ambientes ágeis e entregando projetos de alta qualidade.
                  </p>
                  <p>
                    Estou constantemente buscando novos desafios que me permitam evoluir como profissional 
                    e contribuir para projetos que gerem impacto real.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
    )
}