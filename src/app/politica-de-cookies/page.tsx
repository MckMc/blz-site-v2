import type { Metadata } from 'next';

import LegalPage from '@/components/legal/LegalPage/LegalPage';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description:
    'Saiba como a BLZ Site utiliza cookies necessários e analíticos em seu website.',
  alternates: {
    canonical: '/politica-de-cookies'
  }
};

export default function PoliticaDeCookiesPage() {
  return (
    <LegalPage
      title="Política de Cookies"
      lastUpdated="27 de julho de 2026"
    >
      <h2>1. O que são cookies?</h2>

      <p>
        Cookies são pequenos arquivos armazenados no navegador ou no
        dispositivo do usuário durante o acesso a um website.
      </p>

      <p>
        Eles podem ser utilizados para permitir o funcionamento de
        recursos essenciais, lembrar preferências e gerar informações
        estatísticas sobre a navegação.
      </p>

      <h2>2. Como a BLZ Site utiliza cookies</h2>

      <p>
        O website da BLZ Site poderá utilizar cookies necessários e
        cookies analíticos.
      </p>

      <p>
        Os cookies necessários permitem o funcionamento de recursos
        básicos, como o armazenamento da escolha do visitante sobre o
        uso de cookies analíticos.
      </p>

      <p>
        Os cookies analíticos são carregados somente quando o
        visitante seleciona a opção de aceitar no banner de
        consentimento.
      </p>

      <h2>3. Cookies necessários</h2>

      <p>
        Os cookies ou mecanismos de armazenamento necessários são
        utilizados para:
      </p>

      <ul>
        <li>registrar a escolha de consentimento do visitante;</li>
        <li>manter o funcionamento adequado do website;</li>
        <li>proteger a navegação e a estabilidade do serviço;</li>
        <li>permitir recursos básicos da página.</li>
      </ul>

      <p>
        Esses recursos não são utilizados para publicidade
        personalizada.
      </p>

      <h2>4. Cookies analíticos</h2>

      <p>
        Com o consentimento do visitante, a BLZ Site utiliza o Google
        Analytics para compreender como o website é acessado e
        utilizado.
      </p>

      <p>
        As informações geradas podem incluir:
      </p>

      <ul>
        <li>páginas visitadas;</li>
        <li>tempo aproximado de navegação;</li>
        <li>tipo de dispositivo;</li>
        <li>navegador utilizado;</li>
        <li>origem aproximada do acesso;</li>
        <li>interações com botões e links;</li>
        <li>cliques em WhatsApp, Instagram, e-mail e portfólio.</li>
      </ul>

      <p>
        A BLZ Site utiliza essas informações para melhorar o
        desempenho, o conteúdo, a experiência de navegação e a
        eficiência comercial do website.
      </p>

      <h2>5. Google Analytics</h2>

      <p>
        O Google Analytics é uma ferramenta fornecida pelo Google
        para análise estatística de websites.
      </p>

      <p>
        O Google poderá processar dados técnicos relacionados à
        navegação conforme seus próprios termos e políticas de
        privacidade.
      </p>

      <p>
        A BLZ Site não utiliza o Google Analytics para identificar
        diretamente o nome, telefone, e-mail ou identidade civil dos
        visitantes.
      </p>

      <h2>6. Consentimento</h2>

      <p>
        Ao acessar o website pela primeira vez, o visitante poderá
        aceitar ou recusar os cookies analíticos.
      </p>

      <p>
        Caso o visitante recuse, o Google Analytics não será carregado
        pela BLZ Site naquele navegador, enquanto a preferência
        permanecer armazenada.
      </p>

      <p>
        A escolha realizada será armazenada localmente no dispositivo
        para evitar que o banner seja exibido repetidamente.
      </p>

      <h2>7. Gerenciamento pelo navegador</h2>

      <p>
        A maioria dos navegadores permite visualizar, bloquear ou
        excluir cookies e dados armazenados por websites.
      </p>

      <p>
        O visitante poderá modificar essas preferências diretamente
        nas configurações de seu navegador.
      </p>

      <p>
        A exclusão dos dados do navegador poderá fazer com que o
        banner de consentimento seja apresentado novamente.
      </p>

      <h2>8. Publicidade</h2>

      <p>
        Atualmente, a BLZ Site não utiliza cookies para publicidade
        personalizada, remarketing ou acompanhamento por meio do Meta
        Pixel.
      </p>

      <p>
        Caso ferramentas publicitárias sejam implementadas no futuro,
        esta Política e o sistema de consentimento serão atualizados.
      </p>

      <h2>9. Atualizações desta Política</h2>

      <p>
        Esta Política poderá ser atualizada sempre que houver mudanças
        nas ferramentas utilizadas, na legislação ou na forma como os
        cookies são tratados.
      </p>

      <p>
        A data da última atualização será modificada quando ocorrer
        uma alteração relevante.
      </p>

      <h2>10. Contato</h2>

      <p>
        Em caso de dúvidas sobre cookies ou privacidade, entre em
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