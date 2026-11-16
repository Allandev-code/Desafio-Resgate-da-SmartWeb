<!--
  ==========================================================================
  DESAFIO — DESENVOLVIMENTO WEB I (2º PERÍODO) — "RESGATE DA SMARTWEB"
  Faculdade Senac AM – FATESE | Prof. João Marcos Aires Duarte
  ==========================================================================

  CONTEXTO
  A SmartWeb Informática contratou um "sobrinho que mexe com computador"
  para fazer o site da loja. O resultado está neste arquivo: a página
  abre, mas quase nada funciona, não é acessível, não é responsiva e
  ignora praticamente todas as boas práticas estudadas na apostila.

  Sua equipe foi contratada para RESGATAR o site.

  MISSÃO
  1. Fazer o site FUNCIONAR:
     - as abas (A empresa, Produtos, Contato, Perguntas frequentes)
       devem alternar o conteúdo exibido;
     - o catálogo deve exibir os 12 produtos, com busca e filtro por linha;
     - "Adicionar ao pedido" deve somar itens e o total corretamente;
     - o formulário de contato deve validar nome, e-mail e mensagem,
       exibindo os erros AO LADO DE CADA CAMPO (nada de alert);
     - as perguntas frequentes devem abrir e fechar por clique E teclado.
  2. Aplicar as BOAS PRÁTICAS da apostila em todo o arquivo:
     - Unidade 1 e 2 (HTML5): doctype, lang, charset, viewport, semântica,
       hierarquia de títulos, formulários com <label>, alt em imagens,
       tabelas apenas para dados.
     - Unidade 3 (CSS3): separação de responsabilidades, especificidade,
       box-sizing, Flexbox/Grid, mobile-first, unidades relativas (rem),
       variáveis CSS, sem abuso de !important.
     - Unidade 5 (Acessibilidade): contraste mínimo 4.5:1, foco visível,
       operação por teclado, ARIA apenas quando necessário, aria-live,
       prefers-reduced-motion, informação que não dependa só de cor.
     - Unidade 6 e 8 (JavaScript): const/let, addEventListener (nada de
       onclick no HTML), comparação estrita, textContent em vez de
       innerHTML com dados do usuário, alternância de CLASSES (não de
       element.style), sem alert(), sem document.write, sem eval.

  REGRAS
  - Não altere os textos, produtos, preços nem os contatos da loja.
  - Pode reorganizar o código livremente (inclusive separar em
    index.html, estilos.css e app.js — isso conta pontos).
  - Não use frameworks (nada de Bootstrap, Tailwind ou Vue neste desafio).
  - Cada correção deve ser registrada em um commit com mensagem descritiva
    (Unidade 1 — Conventional Commits: fix:, refactor:, feat:, style:).

  ENTREGA
  - Repositório no GitHub com o arquivo corrigido e um README.md contendo
    uma TABELA "Problema encontrado | Unidade da apostila | Como corrigi".
  - Relatório do Lighthouse (aba Acessibilidade) ANTES e DEPOIS.
  - Validação sem erros no W3C Markup Validation Service.

  AVALIAÇÃO (peso indicativo)
  - Site funcionando (abas, catálogo, pedido, formulário, FAQ) ......... 30%
  - HTML5 semântico e válido ........................................ 20%
  - CSS3 organizado, responsivo (mobile-first) ...................... 20%
  - Acessibilidade (teclado, contraste, foco, leitor de tela) ....... 20%
  - Tabela de problemas no README + histórico de commits ............ 10%

  DICA: abra o DevTools (F12) > Console. O primeiro erro que aparece NÃO
  é o único. Corrija um, recarregue, e o próximo vai surgir.
  ==========================================================================
-->