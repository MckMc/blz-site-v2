import type { Metadata } from 'next';

import LegalPage from '@/components/legal/LegalPage/LegalPage';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Conheça como a BLZ Site trata e protege os dados pessoais de seus visitantes e clientes.',
  alternates: {
    canonical: '/politica-de-privacidade'
  }
};

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      lastUpdated="27 de julho de 2026"
    >
      <h2>1. Introdução</h2>

      <p>
        A BLZ Site valoriza a privacidade, a transparência e a
        confiança de seus clientes e visitantes.
      </p>

      <p>
        Esta Política de Privacidade explica como tratamos as
        informações compartilhadas por pessoas que acessam nosso
        website ou entram em contato conosco por meio de nossos
        canais oficiais.
      </p>

      <p>
        O tratamento de dados pessoais é realizado em conformidade
        com a Lei Geral de Proteção de Dados Pessoais, Lei nº
        13.709/2018, conhecida como LGPD.
      </p>

      <h2>2. Quem somos</h2>

      <p>
        A BLZ Site é uma agência especializada no desenvolvimento de
        websites profissionais para empresas, empreendedores e
        negócios locais, com foco especial nos setores de turismo,
        hospedagem, gastronomia e serviços.
      </p>

      <p>
        Enquanto não houver constituição de pessoa jurídica própria,
        os serviços são prestados pelo responsável pela BLZ Site.
      </p>

      <p>
        <strong>Responsável:</strong> Manuel Cecchin Kuhn
      </p>

      <p>
        <strong>Localização:</strong> Armação dos Búzios – RJ –
        Brasil
      </p>

      <p>
        <strong>E-mail:</strong>{' '}
        <a href="mailto:blzsite.buzios@gmail.com">
          blzsite.buzios@gmail.com
        </a>
      </p>

      <h2>3. Abrangência desta Política</h2>

      <p>
        Esta Política aplica-se aos visitantes do website da BLZ
        Site e às pessoas que entram em contato conosco por meio de:
      </p>

      <ul>
        <li>WhatsApp;</li>
        <li>e-mail;</li>
        <li>Instagram;</li>
        <li>ligações telefônicas;</li>
        <li>indicações de clientes ou conhecidos;</li>
        <li>outros canais oficiais disponibilizados pela BLZ Site.</li>
      </ul>

      <h2>4. Dados que podemos receber</h2>

      <p>
        Atualmente, a BLZ Site não possui formulário próprio de
        coleta de dados pessoais em seu website.
      </p>

      <p>
        As informações tratadas são aquelas compartilhadas
        voluntariamente pelo próprio usuário ao entrar em contato
        conosco.
      </p>

      <p>Essas informações poderão incluir:</p>

      <ul>
        <li>nome;</li>
        <li>número de telefone;</li>
        <li>endereço de e-mail;</li>
        <li>nome da empresa ou negócio;</li>
        <li>segmento de atuação;</li>
        <li>cidade ou região;</li>
        <li>mensagens e solicitações enviadas;</li>
        <li>
          informações relacionadas ao website ou projeto solicitado.
        </li>
      </ul>

      <p>
        Caso sejam incorporados novos recursos, como formulários,
        contas de usuário, área do cliente ou sistemas de pagamento,
        esta Política poderá ser atualizada.
      </p>

      <h2>5. Finalidades do tratamento</h2>

      <p>Os dados poderão ser utilizados para:</p>

      <ul>
        <li>responder dúvidas, solicitações e mensagens;</li>
        <li>elaborar propostas e orçamentos;</li>
        <li>realizar acompanhamento comercial;</li>
        <li>prestar os serviços contratados;</li>
        <li>
          manter comunicação durante o desenvolvimento dos projetos;
        </li>
        <li>oferecer manutenção e suporte técnico;</li>
        <li>cumprir obrigações legais ou regulatórias;</li>
        <li>proteger os direitos da BLZ Site e de seus clientes.</li>
      </ul>

      <p>
        A BLZ Site não comercializa dados pessoais e não utiliza os
        dados recebidos para envio de publicidade não solicitada.
      </p>

      <h2>6. Bases legais</h2>

      <p>
        O tratamento de dados pessoais poderá ocorrer com fundamento
        nas bases legais previstas na LGPD, especialmente:
      </p>

      <ul>
        <li>consentimento do titular, quando aplicável;</li>
        <li>
          execução de contrato ou procedimentos preliminares
          relacionados à contratação;
        </li>
        <li>cumprimento de obrigação legal ou regulatória;</li>
        <li>
          exercício regular de direitos em processos judiciais,
          administrativos ou arbitrais;
        </li>
        <li>
          legítimo interesse da BLZ Site, respeitados os direitos e
          liberdades fundamentais do titular.
        </li>
      </ul>

      <h2>7. Compartilhamento de dados</h2>

      <p>
        A BLZ Site não vende, aluga ou compartilha dados pessoais com
        terceiros para finalidades comerciais.
      </p>

      <p>
        Algumas informações poderão ser processadas por fornecedores
        necessários ao funcionamento dos serviços, como:
      </p>

      <ul>
        <li>Vercel, responsável pela hospedagem do website;</li>
        <li>
          Google Analytics, utilizado para análise estatística após
          consentimento;
        </li>
        <li>Google, responsável pelos serviços de e-mail;</li>
        <li>WhatsApp e Instagram, utilizados para comunicação;</li>
        <li>Registro.br, relacionado ao domínio do website;</li>
        <li>
          outros fornecedores necessários à prestação dos serviços.
        </li>
      </ul>

      <p>
        O código-fonte dos projetos poderá ser armazenado no GitHub.
        Dados pessoais de visitantes não são adicionados
        intencionalmente aos repositórios públicos.
      </p>

      <h2>8. Transferência internacional de dados</h2>

      <p>
        Alguns fornecedores utilizados pela BLZ Site podem armazenar
        ou processar informações fora do Brasil.
      </p>

      <p>
        Nessas situações, o tratamento será realizado conforme as
        regras aplicáveis e as políticas de privacidade dos
        respectivos fornecedores.
      </p>

      <h2>9. Conservação dos dados</h2>

      <p>
        Os dados poderão ser conservados pelo tempo necessário para:
      </p>

      <ul>
        <li>responder solicitações;</li>
        <li>realizar acompanhamento de propostas e orçamentos;</li>
        <li>prestar os serviços contratados;</li>
        <li>cumprir obrigações legais;</li>
        <li>resguardar direitos da BLZ Site.</li>
      </ul>

      <p>
        Pessoas que solicitarem um orçamento e não realizarem a
        contratação poderão ter seus dados de contato conservados por
        período razoável para eventual acompanhamento comercial.
      </p>

      <p>
        O titular poderá solicitar a exclusão de seus dados a qualquer
        momento, salvo quando existir obrigação legal ou necessidade
        legítima de conservação.
      </p>

      <h2>10. Direitos do titular</h2>

      <p>
        Nos termos da LGPD, o titular poderá solicitar, quando
        aplicável:
      </p>

      <ul>
        <li>confirmação da existência de tratamento;</li>
        <li>acesso aos dados pessoais;</li>
        <li>correção de dados incompletos ou incorretos;</li>
        <li>
          anonimização, bloqueio ou eliminação de dados desnecessários
          ou tratados em desconformidade;
        </li>
        <li>portabilidade dos dados, quando aplicável;</li>
        <li>
          informação sobre entidades com as quais os dados foram
          compartilhados;
        </li>
        <li>revogação do consentimento;</li>
        <li>eliminação dos dados tratados com consentimento;</li>
        <li>oposição ao tratamento, quando cabível.</li>
      </ul>

      <p>
        As solicitações poderão ser enviadas para{' '}
        <a href="mailto:blzsite.buzios@gmail.com">
          blzsite.buzios@gmail.com
        </a>
        .
      </p>

      <h2>11. Segurança da informação</h2>

      <p>
        A BLZ Site adota medidas técnicas e organizacionais
        compatíveis com seu porte e com a natureza de seus serviços
        para proteger as informações contra:
      </p>

      <ul>
        <li>acesso não autorizado;</li>
        <li>perda ou destruição acidental;</li>
        <li>alteração indevida;</li>
        <li>divulgação não autorizada;</li>
        <li>uso inadequado.</li>
      </ul>

      <p>
        Apesar dos cuidados adotados, nenhum sistema conectado à
        internet pode garantir segurança absoluta.
      </p>

      <h2>12. Cookies e ferramentas de análise</h2>

      <p>
        O website utiliza cookies necessários para seu funcionamento
        e poderá utilizar cookies analíticos após o consentimento do
        visitante.
      </p>

      <p>
        A BLZ Site utiliza o Google Analytics para compreender como o
        website é acessado e utilizado, incluindo informações como
        páginas visitadas, dispositivo, navegador e localização
        aproximada.
      </p>

      <p>
        O visitante poderá aceitar ou recusar cookies analíticos por
        meio do banner de consentimento disponibilizado no website.
      </p>

      <h2>13. Menores de idade</h2>

      <p>
        Os serviços da BLZ Site destinam-se principalmente a empresas,
        empreendedores e pessoas maiores de idade.
      </p>

      <p>
        Caso seja identificado o envio de dados de menores sem
        autorização de seus responsáveis, a BLZ Site poderá adotar as
        medidas necessárias para sua exclusão.
      </p>

      <h2>14. Atualizações desta Política</h2>

      <p>
        Esta Política poderá ser atualizada quando houver mudanças na
        legislação, nos serviços prestados ou na forma de tratamento
        dos dados pessoais.
      </p>

      <p>
        Sempre que ocorrer uma alteração relevante, a data da última
        atualização será modificada nesta página.
      </p>

      <h2>15. Contato</h2>

      <p>
        Para dúvidas, solicitações ou assuntos relacionados à
        privacidade e ao tratamento de dados pessoais, entre em
        contato:
      </p>

      <p>
        <strong>BLZ Site</strong>
      </p>

      <p>Armação dos Búzios – RJ – Brasil</p>

      <p>
        <a href="mailto:blzsite.buzios@gmail.com">
          blzsite.buzios@gmail.com
        </a>
      </p>
    </LegalPage>
  );
}