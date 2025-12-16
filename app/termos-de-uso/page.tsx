import { Wine } from "lucide-react"
import Link from "next/link"

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Wine className="h-8 w-8 text-primary" />
            <span className="font-serif text-2xl font-bold">Bacco</span>
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Voltar ao site
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 lg:px-8 py-12 lg:py-16 max-w-4xl">
        <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Termos de Uso</h1>
        <p className="text-muted-foreground mb-8">Última atualização: 30 de outubro de 2025</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ao acessar e utilizar o Bacco ERP, você concorda em cumprir e estar vinculado aos presentes Termos de Uso.
              Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso sistema.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">2. Descrição do Serviço</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O Bacco ERP é um sistema de gestão especializado para vinícolas, oferecendo controle completo desde o
              vinhedo até a garrafa, incluindo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Gestão de vinhedos e parcelas</li>
              <li>Controle de tarefas de manejo</li>
              <li>Entrada de uvas próprias e de terceiros</li>
              <li>Lotes de vinificação e fluxo completo</li>
              <li>Controle de temperatura e densidade do mosto</li>
              <li>Gestão de análises laboratoriais</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">3. Cadastro e Conta de Usuário</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Para utilizar o Bacco ERP, você deve:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Fornecer informações verdadeiras, precisas e completas durante o cadastro</li>
              <li>Manter suas credenciais de acesso em sigilo</li>
              <li>Notificar imediatamente sobre qualquer uso não autorizado de sua conta</li>
              <li>Ser responsável por todas as atividades realizadas em sua conta</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">4. Proteção de Dados e LGPD</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), o Bacco ERP
              compromete-se a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Coletar apenas dados necessários para a prestação do serviço</li>
              <li>Utilizar os dados exclusivamente para as finalidades informadas</li>
              <li>Implementar medidas de segurança técnicas e administrativas</li>
              <li>Não compartilhar dados pessoais com terceiros sem consentimento</li>
              <li>Respeitar todos os direitos dos titulares de dados</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">5. Direitos dos Titulares de Dados</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Conforme a LGPD, você tem direito a:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Confirmar a existência de tratamento de seus dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
              <li>Solicitar a portabilidade de dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
              <li>Obter informações sobre compartilhamento de dados</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Para exercer seus direitos, entre em contato através do e-mail: lussandro@gmail.com
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">6. Uso Aceitável</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Você concorda em NÃO:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Utilizar o sistema para fins ilegais ou não autorizados</li>
              <li>Tentar acessar áreas restritas do sistema</li>
              <li>Interferir ou interromper o funcionamento do sistema</li>
              <li>Copiar, modificar ou distribuir o software sem autorização</li>
              <li>Realizar engenharia reversa do sistema</li>
              <li>Utilizar o sistema para prejudicar terceiros</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">7. Propriedade Intelectual</h2>
            <p className="text-muted-foreground leading-relaxed">
              Todo o conteúdo, design, código-fonte, logotipos e materiais do Bacco ERP são protegidos por direitos
              autorais e outras leis de propriedade intelectual. Você recebe apenas uma licença limitada de uso do
              sistema, não adquirindo nenhum direito de propriedade sobre o software.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">8. Disponibilidade do Serviço</h2>
            <p className="text-muted-foreground leading-relaxed">
              Embora nos esforcemos para manter o sistema disponível 24/7, não garantimos que o serviço será
              ininterrupto ou livre de erros. Reservamo-nos o direito de realizar manutenções programadas, que serão
              comunicadas com antecedência sempre que possível.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">9. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              O Bacco ERP não se responsabiliza por danos indiretos, incidentais, especiais ou consequenciais
              resultantes do uso ou impossibilidade de uso do sistema. Recomendamos que você mantenha backups regulares
              de seus dados.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">10. Modificações dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Alterações significativas
              serão comunicadas por e-mail ou através de notificação no sistema. O uso continuado do serviço após as
              modificações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">11. Rescisão</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos suspender ou encerrar seu acesso ao sistema imediatamente, sem aviso prévio, em caso de violação
              destes Termos de Uso. Você também pode encerrar sua conta a qualquer momento através do painel de
              configurações ou entrando em contato conosco.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">12. Lei Aplicável</h2>
            <p className="text-muted-foreground leading-relaxed">
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será
              submetida ao foro da comarca de Florianópolis, Santa Catarina.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">13. Contato</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para questões sobre estes Termos de Uso ou sobre o tratamento de dados pessoais, entre em contato:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg space-y-2">
              <p className="text-muted-foreground">
                <strong>E-mail:</strong> lussandro@gmail.com
              </p>
              <p className="text-muted-foreground">
                <strong>Telefone:</strong> (48) 99128-6399
              </p>
              <p className="text-muted-foreground">
                <strong>Endereço:</strong> Florianópolis, SC
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
