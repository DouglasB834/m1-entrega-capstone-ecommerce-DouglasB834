//fazer amanha a btn todos ..
// e resulver carinho vazio . 

let listaProdutos   = document.querySelector(".listaProdutos");
let listaCarinho    = document.querySelector(".listaCarinho");
let qtd_itens       = document.querySelector(".qtd_itens");
let valorCarinho    = document.querySelector(".total");
let listaCabecalho = document.querySelector(".listaCabecalho")
let textCarinho = document.createElement("div")
let carinho =[] ;
let tagproduto =[]
let carinhoDeCompras = document.querySelector(".carinhoDeCompras")
let cardCarinho = document.querySelector(".card")
//carinhoDeCompras.open
cardCarinho.addEventListener("click", ()=> carinhoDeCompras.classList.toggle("open") )

function listarProdutos(produto, secao) {
    secao.innerHTML= ""
    
    
    if(produto.length >0){
            for (let i = 0; i < produto.length; i++) {
                
                let alocarMeuObjeto = produto[i];  
                
                let produtosProCarde ;
                
                if(secao == listaProdutos){
                    
                    produtosProCarde = criarCards(alocarMeuObjeto) 
                }else {
                    
                    produtosProCarde = criarCarinho(alocarMeuObjeto)  
                }
                secao.append(produtosProCarde)
                
            }
        }else{
            console.log("esta chegando a hora")

           
            textCarinho.classList.add("carinhoVazio")
            textCarinho.innerHTML = `
            <h2>carinho vazio </h2>
            <p>Adicione itens</p>`
            listaCarinho.append(textCarinho)
            
   
        }
       
       
}
                        //tag UL html 
listarProdutos(produtos, listaProdutos)

function addCarinho(event) {

    let addCarinho = event.target
    if(addCarinho.tagName == "BUTTON" ){
        let pegarID  = addCarinho.id       
        let produto = produtos.find( product => product.id == pegarID )   

        carinho.push(produto)
        listarProdutos(carinho, listaCarinho)
    }
   
}

function criarCards(itens) {    

    // Criando Li e elementos 
    let tagLi           = document.createElement("li")  

    let divBoxImg       = document.createElement("div")  
    let tagFigure       = document.createElement("figure")  
    let tagImg          = document.createElement("img") 
    
    let divBoxContent   = document.createElement("div")  
    let tagA            = document.createElement("a")  
    let tagH3           = document.createElement("h3")  
    let tagP            = document.createElement("p")  
    let tagSpan         = document.createElement("span")  
    let tagButton       = document.createElement("button")  

   
    //add class
    divBoxImg.classList.add("box_img")
    divBoxContent.classList.add("box_content")

    //atribundo objetos
    tagImg.src            = itens.img
    tagImg.alt            = itens.nameItem

    tagA.innerHTML        = `${itens.tag}` //descobrir como muda depois 
    tagH3.innerText       = itens.nameItem
    tagP.innerHTML        = itens.description
    // tagSpan.innerText     = `R$${itens.value}`
    tagSpan.innerText     = `R$${itens.value.toFixed(2)}`.replaceAll(".",",")
    tagButton.innerHTML   = `${itens.addCart}` // ADD UM CARINHO 
    tagButton.id          = itens.id  
    
    //<i class="fa fa-trash" aria-hidden="true"></i> 
    tagFigure.append(tagImg)
    divBoxImg.append(tagFigure)
    divBoxContent.append(tagA, tagH3, tagP, tagSpan, tagButton)

    tagLi.append(divBoxImg, divBoxContent)   
    return   tagLi
}
listaProdutos.addEventListener("click", addCarinho )


function criarCarinho(itensCarinho ) {
    qtd_itens.innerHTML = ""
    qtd_itens.innerText = `${carinho.length}`
    valorCarinho.innerHTML = ""

    img   = itensCarinho.img
    nome  = itensCarinho.nameItem
    preco =itensCarinho.value    

    let tagLi               = document.createElement("li")

    let divBoxImgCarrinho   = document.createElement("div")
    let divInfoItens        = document.createElement("div")
    let tagImg              = document.createElement("img")
    let tagH4               = document.createElement("h4")
    let tagSpan             = document.createElement("span")
    let tagButton           = document.createElement("button")

    // add class
    divBoxImgCarrinho.classList.add("box_imgCarinho")
    divInfoItens.classList.add("info_itens")

    // add elementos
    
    tagImg.src          =  img
    tagImg.alt          =  nome
    tagH4.innerText     =  nome
    tagSpan.innerText   =  preco
    tagButton.innerHTML = `Remover Produto <i class="fa fa-trash" aria-hidden="true"></i>`
    tagButton.id        = itensCarinho.id
    
    somarCarinho(carinho)
    divBoxImgCarrinho.appendChild(tagImg)
    divInfoItens.append(tagH4, tagSpan, tagButton)
    tagLi.append(divBoxImgCarrinho, divInfoItens)
   
    return tagLi
}criarCarinho(carinho)

//ssomar protudos do Carinho
function somarCarinho(valorTotal) {
    valorCarinho.innerHTML = ""
    let total = 0
  
    for (const key in valorTotal) {
        let somar = valorTotal[key].value
        total +=somar
    }
    valorCarinho.innerText = `R$${total}`
    return total
   
}

//repetindo comando bubling
function removerItem(event) {
    let indexItem = event.target 

    if (indexItem.tagName == "BUTTON" || indexItem.tagName == "I") {  
        let idProduto = indexItem.id
        
        valorCarinho.innerText = `R$${0}`
        qtd_itens.innerText = `${0}`
 
        let indexProduto = carinho.find(function (getID) {     
            if (getID.id == idProduto) {                
                return true
            }else{
                return false
            } 
            
        })   
        console.log(indexProduto)
        carinho.splice(indexProduto,1)
        
        listarProdutos(carinho, listaCarinho)
               
    }

}

listaCarinho.addEventListener("click",removerItem )


//Acessorio
// ========Pesquisar =============

let inputpesquisartop  = document.querySelector(".inputPesquisar");
let formPesquisatop  = document.querySelector(".pesquisaTop");


let inputpesquisar  = document.querySelector(".pesquisar");
let formPesquisa  = document.querySelector(".pesquisa");

let todos = document.querySelector(".todos")


// pesquisa top 

function informação(pesquisa) {
    let valorPesquisa  = inputpesquisartop.value.trim()
    let resultPesquisa  =[]
    for (let i = 0; i < produtos.length; i++) { 
        let nomeProtudos = produtos[i].nameItem.toLowerCase()
        let nomeTag = produtos[i].tag.toLowerCase()
        let pesquisaUsuario = valorPesquisa.toLowerCase()
        
        if (nomeProtudos.includes(pesquisaUsuario) || nomeTag.includes(pesquisaUsuario)) {            
            resultPesquisa.push(produtos[i])
        }
        
    }//for 

    listarProdutos(resultPesquisa, listaProdutos)
   
}

formPesquisatop.addEventListener("submit", (event)=>{
    event.preventDefault ()
    informação()
    inputpesquisartop.value = ""
})


// Pesquisar normal  
function informaçãos(pesquisa) {
    let valorPesquisa  = inputpesquisar.value.trim()
    let resultPesquisa  =[]
    for (let i = 0; i < produtos.length; i++) { 
        let nomeProtudos = produtos[i].nameItem.toLowerCase()
        let nomeTag = produtos[i].tag.toLowerCase()
        let pesquisaUsuario = valorPesquisa.toLowerCase()
        
        if (nomeProtudos.includes(pesquisaUsuario) || nomeTag.includes(pesquisaUsuario)) {            
            resultPesquisa.push(produtos[i])
        }
        
    }//for 

    listarProdutos(resultPesquisa, listaProdutos)
   
}


formPesquisa.addEventListener("submit", (event)=>{
    event.preventDefault ()
    informaçãos()
    inputpesquisar.value = ""
})



//pesquisa nav
function pesquisaCabecalho(event) {
    let itensMenu = event.target
    textCarinho=""
    let  produtofiltrado = produtos.filter( produto => produto.tag == itensMenu.id )
    
    listarProdutos(produtofiltrado, listaProdutos)

}

listaCabecalho.addEventListener("click", pesquisaCabecalho )


todos.addEventListener("click", (event) =>{
    listaProdutos.innerHTML = ""
    listarProdutos(produtos, listaProdutos)
})


function addCarinho(event) {

    let addCarinho = event.target
    if(addCarinho.tagName == "BUTTON" ){

        let pegarID  = addCarinho.id
       
        let produto = produtos.find( product => product.id == pegarID )   

        carinho.push(produto)
        console.log(carinho)

        listarProdutos(carinho, listaCarinho)
    }
   
}