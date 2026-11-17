# Autor: Miguel de Lucena Souza Nazare - FATESE - Curso: Análise e Desenvolvimento de Sistemas - Turma: 2026.15.11

## Integrantes da Equipe

| Equipe | Integrantes (nome e matrícula) |
| :--- | :--- |
| Rachadinha | Allan Lima Ramalheira |
| Rachadinha | Leticia Gomes Vilar |
| Rachadinha | Luís Miguel de Carvalho Pereira |
| Rachadinha | Miguel de Lucena Souza Nazare |

## Ficha da Equipe (Requisitos Exclusivos)

Abaixo estão listados os requisitos exclusivos definidos para a equipe e a justificativa técnica de como foram aplicados no código do projeto:

* **Código da equipe:** `sw` (SmartWeb).
  * **Onde/Como foi aplicado:** Utilizado como prefixo em todas as variáveis globais no CSS para isolar o escopo do projeto (ex: `--sw-cor-primaria`, `--sw-espaco-m`). Além disso, o comentário de autoria foi inserido na linha 1 de todos os arquivos (`index.html`, `css/estilos.css`, `js/app.js`), contendo a identificação do aluno (Allan Lima Ramalheira - FATESE - Turma 2026.15.11).

* **Cor de destaque (hexadecimal):** `#255a8f`.
  * **Justificativa de Ajuste:** A cor azul original da marca não atingia a taxa de contraste mínimo exigida pelas diretrizes de acessibilidade WCAG (4.5:1) quando aplicada sobre fundo branco. Escurecemos a tonalidade para o hexadecimal `#255a8f`, garantindo legibilidade total e alcançando a nota 100/100 na auditoria de acessibilidade do Lighthouse.

* **Breakpoint principal (px):** `768px`.
  * **Onde/Como foi aplicado:** O projeto foi construído sob a arquitetura *Mobile-First*. O layout padrão global (fora de *media queries*) foi desenhado em uma única coluna (`grid-template-columns: 1fr`). O breakpoint de `768px` (`@media (min-width: 768px)`) foi o ponto de quebra escolhido para expandir o conteúdo para múltiplas colunas (desktop e tablets).

* **Produto extra:** Antena de Internet via Satélite Compacta.
  * **Onde/Como foi aplicado:** Inserido como o 13º item (índice 12 no array) dentro do arquivo `js/app.js`. O produto foi categorizado corretamente e renderizado dinamicamente na DOM com o seu respectivo ícone (`produto12.png`).

* **Pergunta extra do FAQ:** (Ex: "Vocês oferecem suporte técnico após a compra?")
  * **Onde/Como foi aplicado:** Adicionada como o 8º item interativo na estrutura HTML da seção de Perguntas Frequentes (`#faq`), seguindo a mesma estrutura semântica dos itens anteriores. 

* **Recurso extra:** Botão "Limpar Pedido".
  * **Onde/Como foi aplicado:** Criada a funcionalidade de reset. No CSS, implementamos a classe `.btn-limpar` e, no JavaScript, a lógica que zera os itens selecionados e atualiza a interface, melhorando a experiência do utilizador na gestão do seu carrinho de orçamentos.

# SmartWeb - Informática e Redes

## 1. Descrição do Projeto

O **SmartWeb** é um catálogo online responsivo de uma loja de informática focada em infraestrutura de redes para empresas (B2B). Este projeto foi desenvolvido como um desafio de refatoração, onde um código legado, inacessível e com estilos misturados no HTML foi completamente reestruturado. 

Os principais objetivos alcançados foram:
* Separação de camadas (HTML semântico, CSS externo e JavaScript modular).
* Implementação de uma arquitetura **Mobile-First** e design limpo (*Flat Design*).
* Acessibilidade digital (WCAG), garantindo navegação por teclado, foco visível e contraste adequado (4.5:1).
* Otimização de performance e 0 erros de validação no W3C Validator.

## 2. Como Executar

Para rodar o projeto localmente no seu computador, siga os passos abaixo:
1. Faça o download ou clone a pasta do projeto.
2. Certifique-se de que os arquivos estão organizados com o `index.html` na raiz e as subpastas `css/`, `js/` e `imagens/` devidamente preenchidas.
3. Abra a pasta do projeto no **Visual Studio Code (VS Code)**.
4. Clique com o botão direito sobre o arquivo `index.html` e selecione **"Open with Live Server"** (requer a extensão *Live Server* instalada).
5. O site será aberto automaticamente no seu navegador padrão.

## 3. Resolução de Problemas (Problema | Seção da apostila | Como corrigimos)

A tabela abaixo resume os principais erros encontrados no código legado e como foram solucionados com base nos conceitos da disciplina:

| Problema Encontrado | Seção da Apostila | Como Corrigimos |
| :--- | :--- | :--- |
| **Tags HTML obsoletas e estilo inline** (ex: `<font>`, `<center>`, `bgcolor`, `width` em tabelas). | Separação de Camadas (HTML/CSS) | Removemos as marcações visuais do HTML e criamos variáveis e classes correspondentes no `css/estilos.css`. |
| **Layout fixo e quebrado em telas menores** (elementos não responsivos e uso de floats). | CSS Mobile-First / Media Queries | Refatoramos a estrutura para CSS Grid e Flexbox, criando um layout base para mobile e usando `@media (min-width: 768px)` para desktop. |
| **Imagens sem descrição** (falta de atributos `alt` apontada no W3C). | Acessibilidade e SEO | Adicionamos o atributo `alt` detalhado em todos os elementos `<img>` do catálogo e cabeçalho, favorecendo leitores de tela. |
| **Baixo contraste e foco ausente** (Lighthouse indicou nota 44 em Acessibilidade). | Diretrizes WCAG | Escurecemos a cor primária para atingir o rácio 4.5:1 e adicionamos a regra `*:focus-visible` com *outline* azul para navegação por teclado. |
| **Scripts e lógicas dentro do HTML**. | JavaScript em Arquivos Externos | O conteúdo de `<script>` foi movido para o arquivo `js/app.js`, modernizando a geração do catálogo com *Template Literals*. |

## 4. Declaração de Uso de Inteligência Artificial

Em cumprimento às diretrizes do projeto, declaramos o uso de Inteligência Artificial como ferramenta de tutoria e apoio ao desenvolvimento.

* **Ferramenta utilizada:** Google Gemini.
* **Papel da IA:** Atuou como um tutor/instrutor, auxiliando na compreensão de erros de código, boas práticas de CSS e geração de recursos gráficos, sem substituir a autoria e a tomada de decisão da equipa.
* **Etapas em que foi utilizada:** 
  * Etapa 3 e 8: Resolução de dúvidas para correção de erros apontados no W3C Validator e melhoria de métricas no Lighthouse (Acessibilidade).
  * Etapa 5 e 8: Orientação sobre como estruturar a arquitetura CSS em *Mobile-First* e aplicação de *Flat Design*.
  * Etapa 8: Geração das imagens (logotipo e ícones dos produtos) utilizadas no catálogo.
* **Exemplos de perguntas (prompts) realizadas:**
  * *"O validador do W3C apontou o erro 'font elemento está obsoleto'. Como refatoro o HTML para usar CSS no lugar?"*
  * *"Como ajusto o CSS para deixar os botões de filtro com formato de pílula, mantendo a responsividade?"*
  * *"Meu layout da grid quebrou depois que o JavaScript renderizou os produtos. O que pode estar conflitando com o CSS?"*
  * *"Crie ícones no formato flat outline, com traços em azul escuro e claro, para um catálogo de infraestrutura de redes (ex: switch 24 portas, notebook, roteador)."*

## Etapa 8: Verificação Final e Comparação

| Métrica de Qualidade | Antes (Código Original) | Depois (Refatoração e UI) |
| :--- | :--- | :--- |
| **W3C Validator (HTML)** | 46 erros e avisos | 0 erros (Validação Verde) |
| **Lighthouse: Acessibilidade** | 44 / 100 | 100 / 100 |
| **Lighthouse: Boas Práticas** | 92 / 100 | 96 / 100 |

# Etapa 8: (Passo 4) Revisão Cruzada 

Durante o teste final de usabilidade simulando o ambiente mobile e navegação estrita por teclado, os seguintes pontos foram validados:
* **Navegação por Teclado (Tabulação):** Todos os botões, links de filtro e campos de formulário recebem o foco visual com o contorno azul definido na classe `:focus-visible`, garantindo a leitura e interação sem rato.
* **Layout Mobile-First:** A interface colapsa perfeitamente numa única coluna em ecrãs pequenos. O logotipo redimensiona corretamente, as abas de navegação empilham-se em formato de lista e a imagem do switch adapta o seu `max-width` a 100% da largura do ecrã, evitando rolagem horizontal.
* **Contraste e Legibilidade:** As novas cores cumprem o rácio exigido (4.5:1), e a leitura flui naturalmente tanto em desktop como em dispositivos móveis.



  