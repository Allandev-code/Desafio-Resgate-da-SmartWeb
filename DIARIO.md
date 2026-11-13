# Diário de Bordo - Resgate da SmartWeb

| Nº | Data | Sintoma observado | Causa encontrada | Seção da apostila | O que foi feito | Commit | Responsável |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 01 | 12/11 | [JavaScript/Funcionamento] O catálogo de produtos não carrega e o Console apresenta um erro fatal: TypeError: Cannot read properties of undefined (reading 'sku'). | Script executava antes de o HTML existir; o laço estourava o limite do array (<=); o if usava = em vez de ===; innerHTML estava mal escrito. | Unidade 6 (6.2, 6.4 e 6.5) | Script movido para o fim do body, window.onload trocado por DOMContentLoaded, corrigido limite do laço e sintaxe. | d4e5fc4 | Allan |
| 02 | 12/11 | [HTML] O validador do W3C apontou 46 erros/avisos, incluindo a falta de `<!DOCTYPE html>`, falta do atributo `lang`, imagens sem `alt`, e uso de tags obsoletas (`<font>`, `<center>`, `<marquee>`). | | | | | Allan |
| 03 | 12/11 | [Acessibilidade] É impossível navegar no site usando apenas o teclado (tecla Tab não foca nas abas nem nos botões de adicionar ao pedido). | | | | | Allan |
| 04 | 12/11 | [CSS/Responsividade] O layout não se adapta a telas pequenas (mobile). Ao testar a 360px ou com zoom a 200%, o conteúdo fica cortado, exigindo scroll horizontal. | | | | | Allan |
| 05 | 12/11 | [Acessibilidade/CSS] Falta de contraste visual adequado em vários textos cinzentos sobre fundos claros, dificultando a leitura. | | | | | Allan |
| 06 | 12/11 | [JavaScript/Funcionamento] Carrinho não somava corretamente (dava NaN), formulário usava alertas invasivos (alert) e FAQ usava onmouseover (inacessível). | Soma tentava iterar variáveis vazias, validação não atualizava o DOM e eventos de mouse bloqueavam acessibilidade. | Unidades 6 (6.7) e 8 (8.3) | Funções refatoradas: uso de reduce() no carrinho, mensagens dinâmicas no DOM e click no FAQ. | dee27a0 | Allan |
| 07 | 13/11 | [Arquitetura/Organização] Código monolítico com estrutura (HTML), estilos (CSS) e comportamento (JS) misturados no mesmo arquivo. | Prática obsoleta que dificulta a manutenção, polui o HTML e viola o princípio de Separação de Responsabilidades (Separation of Concerns). | Boas Práticas (Etapa 4) | Separação do código em três arquivos distintos (HTML, estilos.css e app.js) e lincagem correta no head e no fim do body. | e575fa4 | Allan |
| 08 | 13/11 | [HTML/Acessibilidade] Uso de tags obsoletas do HTML4 (como `<font>`, `<marquee>` e `<center>`) que invalidavam o documento no W3C e bloqueavam leitores de ecrã. | O W3C proíbe tags de formatação visual no HTML. Estas tags misturam conteúdo com design e não são semânticas. | Boas Práticas (Etapa 4) | Remoção das tags obsoletas, substituição por tags semânticas (`<span>`, `<p>`, `<strong>`, `<h2>`) e estilização delegada para classes CSS. | e0c96e1 | Allan |
| 09 | 13/11 | [Acessibilidade/Estrutura] Uso inadequado da tag `<table>` para estruturar o layout visual (cabeçalho, secções e formulários). | Tabelas lidas por leitores de ecrã geram ruído e confundem utilizadores cegos, pois anunciam dados tabulares inexistentes. | Boas Práticas (Etapa 4) | Remoção das tabelas de layout e implementação de estrutura baseada em `<div>` com CSS Flexbox e Grid Layout. | 451db76 | Allan |
| 10 | 13/11 | [Acessibilidade/Semântica] Campos de formulário sem `<label>` associada e input de email utilizando o tipo genérico `text`. | Leitores de ecrã não identificam a finalidade dos campos apenas pelo atributo `placeholder`. | Boas Práticas (Etapa 4) | Inclusão de tags `<label>` com classe CSS `.leitor-ecra` (ocultas visualmente) e alteração do input para `type="email"`. | 1ec99a4 | Allan |

### Reflexão da Etapa 1
Um utilizador comum perceberia de imediato que a página tem problemas de funcionamento, pois os produtos não carregam e os botões parecem não responder. Já o utilizador cego ficaria completamente bloqueado desde o primeiro segundo, uma vez que o site não permite navegação por teclado e as imagens não possuem texto alternativo (`alt`) para o leitor de ecrã. Para um utilizador idoso que precise aplicar zoom a 200%, ou para alguém que navege através do celular, a experiência seria igualmente frustrante, dado que o layout não é responsivo e o texto fica ilegível ou cortado devido à largura fixa da página.

### Reflexão da Etapa 2
Durante a correção do JavaScript, ficou claro como a ordem de execução do código afeta toda a aplicação. Na Etapa 2, compreendi que o script não pode tentar manipular elementos HTML que ainda não foram carregados na tela, sendo essencial o uso do `DOMContentLoaded` (ou mover o script para o final do `body`) para evitar erros fatais de leitura (`undefined`). 

### Reflexão da Etapa 3
Na Etapa 3, a refatoração das funcionalidades mostrou a importância de modernizar o código. A substituição de práticas antigas e bloqueantes (como os `alert()` invasivos no formulário) por validações dinâmicas injetadas diretamente no DOM melhorou drasticamente a experiência do usuário. Sem deixar de falar que a troca de eventos como `onmouseover` por eventos de `click` no FAQ tornou a interface muito mais acessível e profissional, permitindo que qualquer pessoa consiga interagir com o conteúdo de forma clara.

### Respostas às Perguntas-guia (Etapa 3)

* **Qual é o tipo de cada valor que o código soma ou compara? O JavaScript está comparando ou atribuindo? (seção 6.2):** 
Os valores somados no carrinho (preços) precisam ser do tipo `Number` (no código original, o erro de lógica somava valores indefinidos ou concatenava texto, gerando `NaN`). Além disso, no código original, o `if` do filtro estava fazendo uma atribuição (usando `=`) em vez de uma comparação de igualdade estrita (usando `===`), o que causava falhas na lógica de filtragem.

* **Os laços percorrem exatamente os itens da lista, nem um a mais, nem um a menos?:** 
No código original não, pois o laço `for` utilizava a condição `<= produtos.length`, o que forçava a leitura de um item a mais (inexistente), causando o erro fatal `TypeError: Cannot read properties of undefined`. Na nossa refatoração, passámos a usar os métodos `filter()` e `forEach()`, que iteram com precisão matemática apenas sobre os itens reais da lista.

* **Os identificadores usados no JavaScript existem no HTML, exatamente com a mesma grafia, e são únicos?:** 
Sim, identificadores como `"catalogo"`, `"busca"` e `"resultado"` são atributos `id` únicos no HTML. Agora o JavaScript passa a se referenciar com a grafia exata, e resolvemos falhas de sintaxe anteriores (como a propriedade `innerHTML`, que estava mal capitalizada no original).

* **O que acontece com um formulário quando um botão é acionado dentro dele? (seções 6.5 e 8.3):** 
O comportamento padrão do navegador é submeter o formulário e recarregar a página imediatamente. Isso faz com que todo o estado do JavaScript (como o carrinho de compras) seja perdido. Para resolver isto, adicionámos `evento.preventDefault()` na função do formulário, interceptando o envio e validando via DOM.

* **O elemento que o código chama de 'próximo' é realmente o que você imagina? Verifique na aba Elements.:** 
Na navegação do DOM (como no nosso FAQ), chamar apenas o "próximo nó" pode capturar simplesmente espaços em branco ou quebras de linha invisíveis no HTML. Para contornar isto, utilizámos `nextElementSibling` no JavaScript, garantindo que o elemento alvo a ser aberto/fechado é, de facto, a tag HTML que contém a resposta.