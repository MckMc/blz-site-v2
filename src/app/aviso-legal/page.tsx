import type { Metadata } from 'next';

import LegalPage from '@/components/legal/LegalPage/LegalPage';

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description:
    'Consulte as informações legais e institucionais da BLZ Site.',
  alternates: {
    canonical: '/aviso-legal'
  }
};

export default function AvisoLegalPage() {
  return (
    <LegalPage
      title="Aviso Legal"
      lastUpdated="27 de julho de 2026"
    >
      <h2>1. Identificação</h2>

      <p>
        <strong>Nome comercial:</strong> BLZ Site
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

      <p>
        A BLZ Site ainda não possui CNPJ próprio. Quando houver a
        constituição formal da empresa, este Aviso Legal será
        atualizado com as informações correspondentes.
      </p>

      <h2>2. Finalidade do website</h2>

      <p>
        Este website tem como objetivo apresentar os serviços
        oferecidos pela BLZ Site, divulgar seu portfólio, demonstrar
        projetos e disponibilizar canais de contato para potenciais
        clientes.
      </p>

      <p>
        As informações publicadas possuem caráter institucional,
        comercial e informativo.
      </p>

      <h2>3. Serviços apresentados</h2>

      <p>
        A BLZ Site presta serviços relacionados ao desenvolvimento,
        publicação, hospedagem, manutenção e suporte de websites
        profissionais.
      </p>

      <p>
        Os serviços efetivamente contratados dependerão do plano, da
        proposta comercial e do contrato celebrado com cada cliente.
      </p>

      <h2>4. Direitos autorais</h2>

      <p>
        O conteúdo deste website, incluindo textos, identidade visual,
        logotipos, layouts, elementos gráficos, vídeos, materiais
        institucionais e código desenvolvido pela BLZ Site, é
        protegido pela legislação brasileira.
      </p>

      <p>
        É proibida sua reprodução, distribuição, adaptação ou
        utilização comercial sem autorização prévia, salvo quando
        permitido por lei.
      </p>

      <h2>5. Marcas e conteúdos de terceiros</h2>

      <p>
        Marcas, logotipos, fotografias e demais elementos pertencentes
        a clientes ou terceiros permanecem de propriedade de seus
        respectivos titulares.
      </p>

      <p>
        Sua apresentação no website possui finalidade demonstrativa,
        institucional ou de portfólio.
      </p>

      <h2>6. Projetos demonstrativos</h2>

      <p>
        Alguns websites exibidos no portfólio poderão ser projetos
        demonstrativos criados pela BLZ Site para apresentar estilos,
        funcionalidades e possibilidades de desenvolvimento.
      </p>

      <p>
        A existência de um projeto demonstrativo não significa,
        necessariamente, que exista uma relação comercial com uma
        empresa real de nome semelhante.
      </p>

      <h2>7. Exatidão das informações</h2>

      <p>
        A BLZ Site procura manter o conteúdo deste website correto e
        atualizado.
      </p>

      <p>
        No entanto, poderão ocorrer erros de digitação, informações
        desatualizadas ou indisponibilidades temporárias.
      </p>

      <p>
        Informações comerciais definitivas deverão ser confirmadas por
        meio de proposta e contrato.
      </p>

      <h2>8. Limitação de responsabilidade</h2>

      <p>
        A BLZ Site não se responsabiliza por interrupções, falhas
        técnicas ou indisponibilidades causadas por serviços de
        terceiros, problemas de internet, hospedagem, domínio ou
        eventos fora de seu controle.
      </p>

      <p>
        Também não se responsabiliza pelo uso inadequado das
        informações apresentadas neste website.
      </p>

      <h2>9. Links externos</h2>

      <p>
        O website poderá conter links para WhatsApp, Instagram,
        GitHub, Vercel e outros websites ou plataformas externas.
      </p>

      <p>
        Cada plataforma é responsável por seus próprios conteúdos,
        políticas, segurança e condições de utilização.
      </p>

      <h2>10. Privacidade</h2>

      <p>
        As regras relacionadas ao tratamento de dados pessoais estão
        descritas na Política de Privacidade.
      </p>

      <p>
        As regras relacionadas ao uso de cookies estão descritas na
        Política de Cookies.
      </p>

      <h2>11. Legislação aplicável</h2>

      <p>
        Este website e suas relações jurídicas são regidos pela
        legislação brasileira.
      </p>

      <h2>12. Contato</h2>

      <p>
        Para dúvidas, solicitações ou assuntos institucionais, entre
        em contato:
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