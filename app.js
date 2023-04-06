const inputItem = document.getElementById("inputItem");
const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");
const lista = document.getElementById("lista");

const inputQuantidade = document.getElementById("inputQuantidade");
const inputPreco = document.getElementById("inputPreco");


let listaItems = [];

const redesenhaLista = (lista, listaItems) => {
  lista.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const trHeader = document.createElement("tr");
  const thDesc = document.createElement("th");
  const thQtd = document.createElement("th");
  const thPreco = document.createElement("th");
  thDesc.appendChild(document.createTextNode("Descrição"));
  thQtd.appendChild(document.createTextNode("Qtd."));
  thPreco.appendChild(document.createTextNode("Preço"));
  trHeader.appendChild(thDesc);
  trHeader.appendChild(thQtd);
  trHeader.appendChild(thPreco);
  thead.appendChild(trHeader);
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  for (let index = 0; index < listaItems.length; ++index) {
    const item = listaItems[index];
    const tr = document.createElement("tr");
    const tdDesc = document.createElement("td");
    const tdQtd = document.createElement("td");
    const tdPreco = document.createElement("td");
    tdDesc.appendChild(document.createTextNode(item.descricao));
    tdQtd.appendChild(document.createTextNode(item.qtd));
    tdPreco.appendChild(document.createTextNode(item.preco.toFixed(2)));
    tr.appendChild(tdDesc);
    tr.appendChild(tdQtd);
    tr.appendChild(tdPreco);
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  lista.appendChild(table);
};

const handleBtAdicionarClick = () => {
  const item = inputItem.value;
  const qtd = inputQuantidade.value;
  const price = inputPreco.value;
  if (!item) {
    alert("Necessário digitar um item!");
    return;
  }else if(!qtd){
    alert("Necessário digitar uma quantidade!");
    return;
  }else if(!price){
    alert("Necessário digitar um preço!");
    return;
  }
  listaItems.push({
    descricao: item,
    qtd: Number(inputQuantidade.value),
    preco: Number(inputPreco.value),
  });  
  inputItem.value = "";
  inputItem.focus();
  redesenhaLista(lista, listaItems);
};

const handleBtLimparClick = () => {
  listaItems = [];
  lista.innerHTML = "";
  inputItem.focus();
};

btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;
