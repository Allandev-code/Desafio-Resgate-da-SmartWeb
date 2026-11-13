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

function mostraAba(aba) {
  const abas = ["empresa", "produtos", "contato", "faq"];
  abas.forEach(id => {
    document.getElementById(id).style.display = (id === aba) ? "block" : "none";
  });
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
      html = html + "<div class='card' style='float:left;width:240px;height:330px;margin:5px;border:1px solid #eee'>";
      html = html + "<img src='produto" + realIndex + ".png' width='120' alt=''>";
      html = html + "<font size='1' color='#ccc'>" + produto.sku + "</font><br>";
      html = html + "<h4>" + produto.nome + "</h4>";
      html = html + "<font size='2' color='#bbb'>" + produto.desc + "</font><br><br>";
      html = html + "<b style='font-size:20px'>R$ " + produto.preco.toFixed(2) + "</b><br>";
      html = html + "<button class='botao' onclick='adiciona(" + realIndex + ")'>Adicionar ao pedido</button>";
      html = html + "</div>";
    });
  }
  document.getElementById("catalogo").innerHTML = html;
}

function filtra(linha) {
  linhaAtual = linha;
  montaCatalogo();
}

function busca() {
  const termo = document.getElementById("busca").value;
  document.getElementById("resultadoBusca").innerHTML = termo ? "Você buscou por: <b>" + termo + "</b>" : "";
  montaCatalogo(termo);
}

function adiciona(index) {
  carrinho.push(produtos[index]);
  atualizaCarrinho();
}

function limpar() {
  carrinho = [];
  atualizaCarrinho();
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
    resultado.innerHTML = "<span style='color:red'>" + erros.join("<br>") + "</span>";
  } else {
    resultado.innerHTML = "<span style='color:green'>Mensagem montada com sucesso!<br>Nome: " + nome + "<br>Email: " + email + "<br>Mensagem: " + msg + "</span>";
  }
}

function copiar(id) {
  const texto = document.getElementById(id).innerText;
  navigator.clipboard.writeText(texto).then(() => {
    alert("Copiado com sucesso!"); 
  });
}

function configuraFAQ() {
  const perguntas = document.querySelectorAll("#faq h6");
  perguntas.forEach(pergunta => {
    pergunta.onmouseover = null;
    pergunta.onmouseout = null;
    pergunta.style.cursor = "pointer";
    pergunta.addEventListener("click", () => {
      const resposta = pergunta.nextElementSibling;
      resposta.style.display = resposta.style.display === "block" ? "none" : "block";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  montaCatalogo();
  configuraFAQ();
});