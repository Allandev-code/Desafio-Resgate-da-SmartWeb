# Diário de Bordo - Resgate da SmartWeb

| Nº | Data | Sintoma observado | Causa encontrada | Seção da apostila | O que foi feito | Commit | Responsável |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 01 | 12/11 | [JavaScript/Funcionamento] O catálogo de produtos não carrega e o Console apresenta um erro fatal: TypeError: Cannot read properties of undefined (reading 'sku'). | Script executava antes de o HTML existir; o laço estourava o limite do array (<=); o if usava = em vez de ===; innerHTML estava mal escrito. | Unidade 6 (6.2, 6.4 e 6.5) | Script movido para o fim do body, window.onload trocado por DOMContentLoaded, corrigido limite do laço e sintaxe. | d4e5fc4 | Allan |
| 02 | 12/11 | [HTML] O validador do W3C apontou 46 erros/avisos, incluindo a falta de `<!DOCTYPE html>`, falta do atributo `lang`, imagens sem `alt`, e uso de tags obsoletas (`<font>`, `<center>`, `<marquee>`). | | | | | Allan |
| 03 | 12/11 | [Acessibilidade] É impossível navegar no site usando apenas o teclado (tecla Tab não foca nas abas nem nos botões de adicionar ao pedido). | | | | | Allan |
| 04 | 12/11 | [CSS/Responsividade] O layout não se adapta a telas pequenas (mobile). Ao testar a 360px ou com zoom a 200%, o conteúdo fica cortado, exigindo scroll horizontal. | | | | | Allan |
| 05 | 12/11 | [Acessibilidade/CSS] Falta de contraste visual adequado em vários textos cinzentos sobre fundos claros, dificultando a leitura. | | | | | Allan |
| 06 | 12/11 | [JavaScript/Funcionamento] Carrinho não somava corretamente (dava NaN), formulário usava alertas invasivos (alert) e FAQ usava onmouseover (inacessível). | Soma tentava iterar variáveis vazias, validação não atualizava o DOM e eventos de mouse bloqueavam acessibilidade. | Unidades 6 (6.7) e 8 (8.3) | Funções refatoradas: uso de reduce() no carrinho, mensagens dinâmicas no DOM e click no FAQ. | dee27a0 | Allan |

### Reflexão da Etapa 1
Um utilizador comum perceberia de imediato que a página tem problemas de funcionamento, pois os produtos não carregam e os botões parecem não responder. Já o utilizador cego ficaria completamente bloqueado desde o primeiro segundo, uma vez que o site não permite navegação por teclado e as imagens não possuem texto alternativo (`alt`) para o leitor de ecrã. Para um utilizador idoso que precise aplicar zoom a 200%, ou para alguém que navege através do celular, a experiência seria igualmente frustrante, dado que o layout não é responsivo e o texto fica ilegível ou cortado devido à largura fixa da página.

### Reflexão da Etapa 2
Durante a correção do JavaScript, ficou claro como a ordem de execução do código afeta toda a aplicação. Na Etapa 2, compreendi que o script não pode tentar manipular elementos HTML que ainda não foram carregados na tela, sendo essencial o uso do `DOMContentLoaded` (ou mover o script para o final do `body`) para evitar erros fatais de leitura (`undefined`). 

### Reflexão da Etapa 3
Na Etapa 3, a refatoração das funcionalidades mostrou a importância de modernizar o código. A substituição de práticas antigas e bloqueantes (como os `alert()` invasivos no formulário) por validações dinâmicas injetadas diretamente no DOM melhorou drasticamente a experiência do usuário. Sem deixar de falar que a troca de eventos como `onmouseover` por eventos de `click` no FAQ tornou a interface muito mais acessível e profissional, permitindo que qualquer pessoa consiga interagir com o conteúdo de forma clara.