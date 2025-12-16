import { Wine } from "lucide-react"
import Link from "next/link"

export default function PoliticaDePrivacidade() {
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
        <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Política de Privacidade</h1>
        <p className="text-muted-foreground mb-8">Última atualização: 30 de outubro de 2025</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">1. Introdução</h2>
            <p className="text-muted-foreground leading-relaxed">
              A presente Política de Privacidade descreve como o Bacco ERP coleta, usa, armazena e protege suas
              informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              Sua privacidade é fundamental para nós.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">2. Dados Coletados</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Coletamos os seguintes tipos de dados:</p>

            <h3 className="font-semibold text-lg mb-3 mt-6">2.1 Dados de Cadastro</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Nome completo</li>
              <li>E-mail</li>
              <li>Telefone</li>
              <li>CPF/CNPJ</li>
              <li>Endereço da vinícola</li>
            </ul>

            <h3 className="font-semibold text-lg mb-3 mt-6">2.2 Dados de Uso do Sistema</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Informações sobre vinhedos e parcelas</li>
              <li>Dados de produção e vinificação</li>
              <li>Análises laboratoriais</li>
              <li>Registros de temperatura e densidade</li>
              <li>Histórico de tarefas e manejos</li>
            </ul>

            <h3 className="font-semibold text-lg mb-3 mt-6">2.3 Dados Técnicos</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Endereço IP</li>
              <li>Tipo de navegador</li>
              <li>Sistema operacional</li>
              <li>Logs de acesso e uso</li>
              <li>Cookies e tecnologias similares</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">3. Finalidade do Tratamento</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Utilizamos seus dados para:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Fornecer e operar o sistema Bacco ERP</li>
              <li>Processar e armazenar informações de sua vinícola</li>
              <li>Gerar relatórios e análises de produção</li>
              <li>Comunicar atualizações e novidades do sistema</li>
              <li>Prestar suporte técnico</li>
              <li>Melhorar nossos serviços e desenvolver novas funcionalidades</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Prevenir fraudes e garantir a segurança do sistema</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">4. Base Legal</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O tratamento de seus dados pessoais é fundamentado nas seguintes bases legais da LGPD:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                <strong>Execução de contrato:</strong> Para fornecer os serviços contratados
              </li>
              <li>
                <strong>Consentimento:</strong> Para comunicações de marketing e newsletters
              </li>
              <li>
                <strong>Legítimo interesse:</strong> Para melhorias do sistema e segurança
              </li>
              <li>
                <strong>Obrigação legal:</strong> Para cumprimento de obrigações fiscais e regulatórias
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">5. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Seus dados pessoais não serão vendidos, alugados ou compartilhados com terceiros, exceto nas seguintes
              situações:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                <strong>Prestadores de serviço:</strong> Empresas que nos auxiliam na operação do sistema (hospedagem,
                processamento de pagamentos), sempre sob rigorosos acordos de confidencialidade
              </li>
              <li>
                <strong>Obrigações legais:</strong> Quando exigido por lei, ordem judicial ou autoridades competentes
              </li>
              <li>
                <strong>Proteção de direitos:</strong> Para proteger nossos direitos, propriedade ou segurança
              </li>
              <li>
                <strong>Com seu consentimento:</strong> Em outras situações, mediante sua autorização expressa
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">6. Armazenamento e Segurança</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Implementamos medidas técnicas e organizacionais para proteger seus dados:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Criptografia de dados em trânsito e em repouso</li>
              <li>Controles de acesso rigorosos</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Backups regulares e redundância de dados</li>
              <li>Servidores localizados em datacenters certificados</li>
              <li>Treinamento regular da equipe sobre proteção de dados</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Seus dados são armazenados em servidores seguros no Brasil, em conformidade com a LGPD.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">7. Retenção de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política,
              ou conforme exigido por lei. Após o término do contrato, seus dados serão mantidos apenas pelo período
              legalmente exigido para fins fiscais e regulatórios, sendo posteriormente eliminados de forma segura.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">8. Seus Direitos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Conforme a LGPD, você possui os seguintes direitos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                <strong>Confirmação e acesso:</strong> Saber se tratamos seus dados e acessá-los
              </li>
              <li>
                <strong>Correção:</strong> Solicitar correção de dados incompletos ou inexatos
              </li>
              <li>
                <strong>Anonimização ou bloqueio:</strong> Solicitar anonimização ou bloqueio de dados desnecessários
              </li>
              <li>
                <strong>Eliminação:</strong> Solicitar exclusão de dados tratados com seu consentimento
              </li>
              <li>
                <strong>Portabilidade:</strong> Receber seus dados em formato estruturado
              </li>
              <li>
                <strong>Informação sobre compartilhamento:</strong> Saber com quem compartilhamos seus dados
              </li>
              <li>
                <strong>Revogação do consentimento:</strong> Retirar seu consentimento a qualquer momento
              </li>
              <li>
                <strong>Oposição:</strong> Opor-se ao tratamento em determinadas situações
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Para exercer qualquer destes direitos, entre em contato através do e-mail: lussandro@gmail.com
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">9. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Utilizamos cookies e tecnologias similares para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Manter você conectado ao sistema</li>
              <li>Lembrar suas preferências</li>
              <li>Analisar o uso do sistema</li>
              <li>Melhorar a experiência do usuário</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do
              sistema.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">10. Transferência Internacional</h2>
            <p className="text-muted-foreground leading-relaxed">
              Seus dados são armazenados e processados no Brasil. Caso seja necessária transferência internacional de
              dados, garantiremos que o país de destino oferece nível adequado de proteção ou implementaremos
              salvaguardas apropriadas, conforme exigido pela LGPD.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">11. Menores de Idade</h2>
            <p className="text-muted-foreground leading-relaxed">
              O Bacco ERP não é destinado a menores de 18 anos. Não coletamos intencionalmente dados de menores. Se
              tomarmos conhecimento de que coletamos dados de um menor, tomaremos medidas para excluí-los imediatamente.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">12. Alterações nesta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Alterações significativas serão comunicadas
              por e-mail ou através de notificação no sistema. Recomendamos que você revise esta política regularmente.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">13. Encarregado de Dados (DPO)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nosso Encarregado de Proteção de Dados está disponível para esclarecer dúvidas e receber solicitações
              relacionadas ao tratamento de dados pessoais:
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

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4">14. Autoridade Nacional</h2>
            <p className="text-muted-foreground leading-relaxed">
              Caso suas solicitações não sejam atendidas satisfatoriamente, você pode contatar a Autoridade Nacional de
              Proteção de Dados (ANPD) através do site:
              <a
                href="https://www.gov.br/anpd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline ml-1"
              >
                www.gov.br/anpd
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
