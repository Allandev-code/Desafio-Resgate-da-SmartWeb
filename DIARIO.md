# Diário de Bordo - Resgate da SmartWeb

| Nº | Data | Sintoma observado | Causa encontrada | Seção da apostila | O que foi feito | Commit | Responsável |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 01 | 12/11 | [JavaScript/Funcionamento] O catálogo de produtos não carrega e a Consola apresenta um erro fatal: `TypeError: Cannot read properties of undefined (reading 'sku')`. | | | | | Allan |
| 02 | 12/11 | [HTML] O validador do W3C apontou 46 erros/avisos, incluindo a falta de `<!DOCTYPE html>`, falta do atributo `lang`, imagens sem `alt`, e uso de tags obsoletas (`<font>`, `<center>`, `<marquee>`). | | | | | Allan |
| 03 | 12/11 | [Acessibilidade] É impossível navegar no site usando apenas o teclado (tecla Tab não foca nas abas nem nos botões de adicionar ao pedido). | | | | | Allan |
| 04 | 12/11 | [CSS/Responsividade] O layout não se adapta a telas pequenas (mobile). Ao testar a 360px ou com zoom a 200%, o conteúdo fica cortado, exigindo scroll horizontal. | | | | | Allan |
| 05 | 12/11 | [Acessibilidade/CSS] Falta de contraste visual adequado em vários textos cinzentos sobre fundos claros, dificultando a leitura. | | | | | Allan |

### Reflexão da Etapa 1
Um utilizador comum perceberia de imediato que a página tem problemas de funcionamento, pois os produtos não carregam e os botões não parecem responder. No entanto, um utilizador cego ficaria completamente bloqueado desde o primeiro segundo, uma vez que o site não permite navegação por teclado e as imagens não possuem texto alternativo (`alt`) para o leitor de ecrã. Para um utilizador idoso que precise de aplicar zoom a 200%, ou para alguém a navegar através de um telemóvel, a experiência seria igualmente frustrante, dado que o layout não é responsivo e o texto fica ilegível ou cortado devido à largura fixa da página.