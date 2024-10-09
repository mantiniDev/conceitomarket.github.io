

![Logo](https://www.conceitomarket.com.br/assets/pictures/logo_300.png)


# **Documento de Desenvolvimento de Site - Conceito Market**

## 1. **Introdução**
   - **Objetivo do Projeto**: Desenvolver um site para o **Conceito Market** que apresente informações sobre a empresa, oportunidades para franqueados, uma página de contato, e uma página inicial que mostre a proposta da empresa e seus diferenciais.
   - **Escopo do Projeto**: O projeto inclui o desenvolvimento completo do site com as seguintes páginas: Home, Quem Somos, Franqueados e Contato. O site será responsivo, otimizado para SEO e terá uma navegação fácil e intuitiva.

## 2. **Planejamento do Projeto**
   - **Cronograma de Desenvolvimento**:
     - **Fase 1: Pesquisa e Análise**: Análise de concorrentes e público-alvo, definição de metas.
     - **Fase 2: Wireframes e Design**: Criação da estrutura do site e protótipos.
     - **Fase 3: Desenvolvimento Frontend e Backend**: Implementação da interface e do backend.
     - **Fase 4: Testes e Revisões**: Testes de usabilidade, compatibilidade e performance.
     - **Fase 5: Lançamento**: Deploy do site e monitoramento inicial.
   

## 3. **Requisitos**
   - **Funcionais**:
     - Página "Home" com uma visão geral dos serviços e diferenciais do **Conceito Market**.
     - Página "Quem Somos" com a história e missão da empresa.
     - Página "Franqueados" com informações sobre como se tornar um franqueado e formulário de contato para interessados.
     - Página "Contatos" com um formulário de contato, endereço e redes sociais.
   
   - **Não Funcionais**:
     - O site deve ser responsivo e funcionar em todos os dispositivos.
     - Tempo de carregamento das páginas deve ser inferior a 2 segundos.
     - O site deve ser compatível com os principais navegadores (Chrome, Firefox, Safari, Edge).
     - Garantir acessibilidade para usuários com deficiências, com recursos como leitores de tela.
## 4. **Pesquisa e Análise**
   - **Análise de Concorrentes**: Sites de empresas que oferecem serviços semelhantes foram analisados, como Zaitt e Amazon Go, para identificar boas práticas de design, estrutura de conteúdo e navegação.
   - **Estudo do Público-Alvo**: O público-alvo inclui potenciais franqueados, clientes em busca de praticidade e tecnologia, e parceiros de negócios.
   - **Definição de Metas de Sucesso**:
     - Aumentar o interesse de franqueados, com pelo menos 20 novos contatos mensais via formulário.
     - Melhorar o engajamento com a marca, com pelo menos 5.000 visitas mensais ao site.
     - Reduzir a taxa de rejeição (bounce rate) para menos de 40%.

## 5. **Arquitetura da Informação**
   - **Estrutura do Site (Sitemap)**:
     - **Home**: Página principal apresentando a empresa, seus diferenciais, e links para as principais páginas.
     - **Quem Somos**: Página com a história, missão, visão e valores da empresa.
     - **Franqueados**: Informações sobre oportunidades de franquias e formulário para interessados.
     - **Contatos**: Formulário de contato, endereços de lojas físicas (se aplicável), e links para redes sociais.
   
   - **Wireframes**:
     - Foram criados wireframes para garantir uma navegação intuitiva, destacando a organização clara das seções em todas as páginas do site.

## 6. **Design**
   - **Identidade Visual**:
     - Utilizamos uma paleta de cores que reflete inovação e confiança, complementando a proposta tecnológica do **Conceito Market**:


| Cor       | Hexadecimal | Exemplo     |
|-----------|-------------|-------------|
| Primária  | `#ED7A07`   | ![#ED7A07](https://via.placeholder.com/20/ED7A07/000000?text=+) |
| Preta     | `#000000`   | ![#000000](https://via.placeholder.com/20/000000/FFFFFF?text=+) |
| Secundária| `#ED9C07`   | ![#ED9C07](https://via.placeholder.com/20/ED9C07/000000?text=+) |
| Alerta    | `#ED2A07`   | ![#ED2A07](https://via.placeholder.com/20/ED2A07/000000?text=+) |
| Complementar| `#EDB807` | ![#EDB807](https://via.placeholder.com/20/EDB807/000000?text=+) |
| Acento    | `#EDA256`   | ![#EDA256](https://via.placeholder.com/20/EDA256/000000?text=+) |

  - **Protótipos de Alta Fidelidade**: Protótipos de todas as páginas (Home, Quem Somos, Franqueados e Contato) foram criados para aprovação do cliente.
   - **Experiência do Usuário (UX)**: O foco é garantir uma navegação intuitiva e rápida, facilitando o acesso às informações por clientes e potenciais franqueados.

## 7. **Desenvolvimento**
   - **Frontend**:
     - Desenvolvido com HTML5, CSS3 e JavaScript (React.js). Layout responsivo e adaptado para dispositivos móveis.
     - Uso de animações leves e interações para aprimorar a experiência do usuário.
   
   - **Backend**:
     - Construído com Node.js e MongoDB, responsável pela manipulação de dados de formulários de contato e gerenciamento de conteúdo.
   
   - **Integração de APIs**: 
     - Integração com serviços de terceiros, como APIs de geolocalização para mapear lojas físicas (se aplicável), e integração com Google Maps para exibição do local na página de Contato.

## 8. **Testes**
   - **Testes Funcionais**: Verificação completa de todas as funcionalidades, especialmente os formulários de contato e franqueados.
   - **Testes de Usabilidade**: Testes com usuários reais para garantir uma navegação fácil e que as informações essenciais estejam acessíveis.
   - **Testes de Compatibilidade**: Realizados em navegadores e dispositivos móveis para garantir que o site funcione corretamente em todos os ambientes.
   - **Testes de Performance**: Teste de tempo de carregamento e resposta do servidor para garantir uma experiência rápida.

## 9. **Otimização para SEO**
   - **Otimização On-Page**: Implementação de práticas de SEO em todas as páginas, como meta tags, títulos otimizados, e URLs amigáveis.
   - **Performance**: Otimização de imagens, minimização de scripts CSS/JS, e uso de cache para melhorar o desempenho.
   - **Google Analytics**: Configuração para monitorar tráfego, comportamento de visitantes e conversão no formulário de franqueados.

## 10. **Lançamento**
   - **Hospedagem e Domínio**:
     - O site será hospedado no **GitHub Pages**, uma solução gratuita e estável para sites estáticos, integrando facilmente com o fluxo de desenvolvimento usando Git.
     - A escolha do **GitHub Pages** permite fácil deploy e atualizações contínuas diretamente do repositório GitHub.
     - **Customização do Domínio**: O domínio personalizado será configurado para o **Conceito Market**, permitindo que os usuários acessem o site com um URL profissional.
   
   - **Deploy**: 
     - O deploy será realizado diretamente a partir do repositório no GitHub, utilizando integração contínua para garantir que cada nova versão do site seja automaticamente publicada no **GitHub Pages**.
   
   - **Monitoramento Inicial**: Ferramentas como Google Analytics serão integradas para monitoramento de desempenho, tráfego e eventuais problemas após o lançamento.


## 11. **Manutenção e Suporte**
   - **Atualizações Regulares**: Atualizações periódicas para manter o site seguro e compatível com novos dispositivos e navegadores. Alterações previamente definidas com o cliente e o custo para as mesmas.
   - **Monitoramento**: Uso de ferramentas de monitoramento contínuo para garantir disponibilidade e performance do site.
   - **Suporte Técnico**: Oferecimento de suporte técnico 24/7 para resolver problemas e garantir a continuidade dos serviços.


## 12. Autor

- [@mantiniDev](https://www.github.com/mantiniDEv)

