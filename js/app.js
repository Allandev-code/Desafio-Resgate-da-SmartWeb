const produtos = [
  {nome: "Notebook Pro 14\", i5, 16 GB, SSD 512 GB", sku: "NB-PRO14", linha: "comp", preco: 4290, desc: "Tela Full HD, teclado com numérico reduzido e bateria para o dia todo."},
  {nome: "Desktop Office, i5, 8 GB, SSD 256 GB", sku: "DT-OFFICE", linha: "comp", preco: 2890, desc: "Torre compacta para caixa e atendimento, com Windows 11 Pro."},
  {nome: "Mini PC Compacto, Ryzen 5, 16 GB", sku: "MP-R5", linha: "comp", preco: 2390, desc: "Cabe atrás do monitor e gasta pouca energia. Ideal para recepção."},
  {nome: "Monitor 24\" Full HD IPS", sku: "MN-24IPS", linha: "comp", preco: 849, desc: "Ângulo de visão aberto, entradas HDMI e DisplayPort, base ajustável."},
  {nome: "Switch gerenciável Gigabit, 24 portas", sku: "SW-GER24", linha: "rede", preco: 1690, desc: "VLANs, controle de banda e portas sobrando para a empresa crescer."},
  {nome: "Access Point Wi-Fi 6 de teto", sku: "AP-W6T", linha: "rede", preco: 780, desc: "Rede separada para visitantes e alimentação pelo cabo de rede (PoE)."},
  {nome: "Roteador dual WAN com VLAN", sku: "RT-DWAN", linha: "rede", preco: 620, desc: "Dois links de internet com troca automática se um cair."},
  {nome: "Cabo CAT6, caixa com 305 m", sku: "CB-CAT6-305", linha: "rede", preco: 690, desc: "Par trançado para pontos de rede Gigabit, com capa antichama."},
  {nome: "NAS de 2 baias", sku: "NAS-2B", linha: "prot", preco: 2190, desc: "Compartilha arquivos e faz backup automático. Discos vendidos à parte."},
  {nome: "Nobreak senoidal 1500 VA", sku: "UPS-1500S", linha: "prot", preco: 2450, desc: "Energia limpa para servidor e switch, com proteção contra queima."},
  {nome: "SSD NVMe 1 TB", sku: "SSD-NV1T", linha: "prot", preco: 520, desc: "Troca o disco antigo e deixa o computador bem mais rápido."},
  {nome: "HD externo 2 TB, USB 3.0", sku: "HD-EXT2T", linha: "prot", preco: 489, desc: "Segunda mídia local para a cópia de segurança diária."},
  {nome: "Antena de Internet via Satélite Compacta", sku: "SAT-COMP", linha: "rede", preco: 3150, desc: "Conexão estável e de baixa latência, ideal para regiões isoladas ou fluviais."}
];

let carrinho = [];
let linhaAtual = "todas";

/* =========================================
   FUNÇÕES DE ACESSIBILIDADE (Passo 6)
========================================= */
// Envia mensagens dinâmicas para leitores de ecrã sem mostrar no layout
function anunciarParaLeitor(mensagem) {
    const anunciador = document.getElementById("anunciador");
    if (anunciador) {
        anunciador.innerText = mensagem;
        // Limpa após 3s para evitar acumulação
        setTimeout(() => { anunciador.innerText = ""; }, 3000);
    }
}


/* =========================================
   LÓGICA DA INTERFACE E PRODUTOS
========================================= */
function mostraAba(abaId) {
    // Esconde todas as abas
    document.querySelectorAll('.seccao-aba').forEach(seccao => {
        seccao.classList.remove('visivel');
        seccao.classList.add('oculto');
    });
    // Mostra a aba selecionada
    document.getElementById(abaId).classList.remove('oculto');
    document.getElementById(abaId).classList.add('visivel');
    anunciarParaLeitor(`Aba ${abaId} selecionada`);
}

function montaCatalogo(termoBusca = "") {
  let html = "";
  let produtosFiltrados = produtos.filter(p => 
    (linhaAtual === "todas" || p.linha === linhaAtual) &&
    (p.nome.toLowerCase().includes(termoBusca.toLowerCase()) || p.sku.toLowerCase().includes(termoBusca.toLowerCase()))
  );

  if (produtosFiltrados.length === 0) {
    html = "<p>Nenhum produto encontrado.</p>";
  } else {
    produtosFiltrados.forEach((produto) => {
      let realIndex = produtos.findIndex(p => p.sku === produto.sku);
      html += `<div class='card-produto' style='border:1px solid var(--sw-cor-borda); padding:10px; border-radius:4px;'>
                 <img src='https://via.placeholder.com/120?text=Produto' width='120' alt=''>
                 <span class='texto-cinza-claro' style='display:block; font-size:0.75rem'>${produto.sku}</span>
                 <h4 style='margin: 8px 0'>${produto.nome}</h4>
                 <p class='texto-descritivo' style='font-size:0.875rem'>${produto.desc}</p>
                 <br>
                 <b style='font-size:1.25rem; color:var(--sw-cor-primaria)'>R$ ${produto.preco.toFixed(2)}</b><br>
                 <button class='botao btn-adicionar' data-index='${realIndex}' style='margin-top:10px; width:100%'>Adicionar ao pedido</button>
               </div>`;
    });
  }
  document.getElementById("catalogo").innerHTML = html;
}

function filtra(linha) {
  linhaAtual = linha;
  montaCatalogo();
  anunciarParaLeitor(`Filtro aplicado: ${linha}`);
}

function busca() {
  const termo = document.getElementById("busca").value;
  document.getElementById("resultadoBusca").innerHTML = termo ? "Você buscou por: <b>" + termo + "</b>" : "";
  montaCatalogo(termo);
  anunciarParaLeitor(`Resultados atualizados para a busca: ${termo}`);
}

function adiciona(index) {
  const produto = produtos[index];
  carrinho.push(produto);
  atualizaCarrinho();
  // Aviso dinâmico de que algo foi para o carrinho
  anunciarParaLeitor(`${produto.nome} adicionado ao pedido. Total agora é ${document.getElementById("total").innerText}`);
}

function limpar() {
  carrinho = [];
  atualizaCarrinho();
  anunciarParaLeitor("O carrinho de compras foi limpo.");
}

function atualizaCarrinho() {
  const total = carrinho.reduce((soma, item) => soma + item.preco, 0);
  document.getElementById("qtd").innerText = carrinho.length;
  document.getElementById("total").innerText = "R$ " + total.toFixed(2);
}

function enviar(evento) {
  if(evento) evento.preventDefault();
  
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("msg").value.trim();
  const resultado = document.getElementById("resultado");
  
  let erros = [];
  if (!nome) erros.push("O campo Nome é obrigatório.");
  if (!email.includes("@")) erros.push("Insira um email válido.");
  if (!msg) erros.push("A mensagem não pode estar vazia.");

  if (erros.length > 0) {
    resultado.innerHTML = `<span class='texto-alerta' style='color:var(--sw-cor-alerta)'>${erros.join("<br>")}</span>`;
    // Como tem aria-live, o erro será lido
  } else {
    resultado.innerHTML = `<span class='texto-sucesso' style='color:var(--sw-cor-sucesso)'>Mensagem montada com sucesso!<br>Nome: ${nome}<br>Email: ${email}<br>Mensagem: ${msg}</span>`;
  }
}

function copiar(id) {
  const texto = document.getElementById(id).innerText;
  navigator.clipboard.writeText(texto).then(() => {
    // Alerta em vez de popup irritante
    anunciarParaLeitor(`Dado copiado para a área de transferência: ${texto}`);
    // Opcional: Feedback visual rápido no botão (Substitui o botão por "Copiado")
    const btn = document.querySelector(`button[data-copia="${id}"]`);
    if(btn){
        const textoOriginal = btn.innerText;
        btn.innerText = "Copiado!";
        setTimeout(()=> btn.innerText = textoOriginal, 2000);
    }
  });
}

function configuraFAQ() {
    const perguntas = document.querySelectorAll(".item-faq h2");
    perguntas.forEach(pergunta => {
        // Torna a pergunta clicável por teclado no FAQ
        pergunta.setAttribute("tabindex", "0");
        pergunta.setAttribute("role", "button");
        
        pergunta.addEventListener("click", () => alternarFaq(pergunta));
        pergunta.addEventListener("keypress", (e) => {
            if(e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                alternarFaq(pergunta);
            }
        });
    });
}

function alternarFaq(pergunta){
    const resposta = pergunta.nextElementSibling;
    const estaVisivel = resposta.classList.contains('visivel');
    
    if(estaVisivel){
        resposta.classList.remove('visivel');
        pergunta.setAttribute("aria-expanded", "false");
    } else {
        resposta.classList.add('visivel');
        pergunta.setAttribute("aria-expanded", "true");
    }
}

function configuraBotoesHTML() {
    // Botoes das abas
    document.querySelectorAll('button.aba').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const aba = e.target.getAttribute('data-alvo');
            mostraAba(aba);
        });
    });

    // Botoes de filtro
    document.querySelectorAll('button.link-filtro').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filtro = e.target.getAttribute('data-filtro');
            filtra(filtro);
        });
    });
    
    // Botao de ir para pedido e limpar
    const btnPedido = document.querySelector('.btn-acao');
    if(btnPedido) btnPedido.addEventListener('click', () => mostraAba('contato'));
    
    const btnLimpar = document.getElementById('btn-limpar-pedido');
    if(btnLimpar) btnLimpar.addEventListener('click', limpar);

    // Formulario contato
    const form = document.getElementById('form-contato');
    if(form) form.addEventListener('submit', enviar);

    // Botoes de copiar
    document.querySelectorAll('.btn-copiar').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idCopia = e.target.getAttribute('data-copia');
            copiar(idCopia);
        });
    });
    
    // Campo de busca
    const inputBusca = document.getElementById('busca');
    if(inputBusca) inputBusca.addEventListener('input', busca);

    // Delegação de eventos para os botões "Adicionar ao pedido" (Passo 3)
    const catalogoDiv = document.getElementById('catalogo');
    if (catalogoDiv) {
        catalogoDiv.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-adicionar')) {
                const index = e.target.getAttribute('data-index');
                adiciona(index);
            }
        });
    }
}


document.addEventListener("DOMContentLoaded", () => {
  montaCatalogo();
  configuraFAQ();
  configuraBotoesHTML();
});