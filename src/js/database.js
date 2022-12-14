// Banco de dados dos produtos

const produtos = [
  {
    id: 1,
    img: "src/img/jaqueta.svg",
    nameItem: "Lightweight jaqueta",
    description:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 175.99,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
  },
  {
    id: 2,
    img: "src/img/acessórioOculos.jpg",
    nameItem: "Oculos de sol ",
    description:
      "Oculos de sol  estiloso para seu verão ...",
    value: 120.50,
    addCart: "Adicionar ao carrinho",
    tag: "Acessórios ",
  },
  {
    id: 3,
    img: "src/img/tenis esportivo.jpg",
    nameItem: "Adidas QT Racer Tenis",
    description:
      "O gorro  chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 129.90,
    addCart: "Adicionar ao carrinho",
    tag: "Calçados",
  },
  {
    id: 4,
    img: "src/img/gorro.svg",
    nameItem: "Black Hat gorro",
    description:
      "O gorro  chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 560.50,
    addCart: "Adicionar ao carrinho",
    tag: "Acessórios",
  },
  {
    id: 5,
    img: "src/img/Camisasinza.jpg",
    nameItem: "gray t-shirt Camisa",
    description:
      "O gorro  chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 560.50,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
  },
  {
    id: 6,
    img: "src/img/mascara.svg",
    nameItem: "Mask ",
    description:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui ...",
    value: 15.99,
    addCart: "Adicionar ao carrinho",
    tag: "Acessórios",
  },
  {
    id: 7,
    img: "src/img/camiseta_preta.svg",
    nameItem: "T-Shirt, Camisa",
    description:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o ...",
    value: 99.98,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
  },
  {
    id: 8,
    img: "src/img/cachecol-M.jpg",
    nameItem: "Cachecol Masculino",
    description:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o ...",
    value: 45.98,
    addCart: "Adicionar ao carrinho",
    tag: "Acessórios",
  },
  {
    id: 9,
    img: "src/img/sapatenis.jpg",
    nameItem: "Sapatenis blue",
    description:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o ...",
    value: 99.98,
    addCart: "Adicionar ao carrinho",
    tag: "Calçados",
  },
  {
    id: 10,
    img: "src/img/camiseta_branca.svg",
    nameItem: "Short-Sleeve Camisa ",
    description:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    value: 99.98,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
  },
  {
    id: 11,
    img: "src/img/acessorioBolsa.jpg",
    nameItem: " men's leather bag bolsa",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de p...",
    value: 240.00,
    addCart: "Adicionar ao carrinho",
    tag: "Acessórios",
  },
  {
    id: 12,
    img: "src/img/tenisNike.jpg",
    nameItem: "Tenis Nike",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de p...",
    value: 250.00,
    addCart: "Adicionar ao carrinho",
    tag: "Calçados",
  },
  {
    id: 13,
    img: "src/img/moletom.svg",
    nameItem: "Champion Packable Jacket",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de p...",
    value: 250.00,
    addCart: "Adicionar ao carrinho",
    tag: "Camisetas",
  },
  {
    id: 14,
    img: "src/img/acessoriorelogio.jpg",
    nameItem: "ket accessory kit + relogio",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de p...",
    value: 250.00,
    addCart: "Adicionar ao carrinho",
    tag: "Acessórios",
  },
];



function addProduto(id, img, nome, valor, tagName){

  let objetos ={
    id: id,
    img:img,
    description:
      "Adicione um pouco de energia ao seu guarda-roupa ...",
    nameItem: nome,
    value: valor,
    tag : tagName
  }
  produtos.push(objetos)

}
//fazer função para criar id 
// addProduto(15, "src/img/Camisasinza.jpg","Camisa Sinza",150.00, "Camiseta" )