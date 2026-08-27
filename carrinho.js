
window.onload = carrinho 

let produtos = JSON.parse(

        // transforma o JSON em array novamente
        // Busca os dados salvos na chave "carrinho" na home.js
        localStorage.getItem("carrinho")

    ) || [] // Se não existir nada salvo, cria um array vazio

    console.log(produtos)

function carrinho() {

    

let listaProdutos = document.querySelector(".listaProdutos")  // Cria uma variável que guarda a referência da div com a classe "listaProdutos" para que ela possa ser manipulada pelo JavaScript

produtos.forEach (produto => {   // ARROW FUNCTION para cada produto dentro do array produtos
    listaProdutos.innerHTML +=  // Adiciona um novo bloco de HTML dentro da div listaProdutos




    ` 
    <div class="imagin">  
    
    <div class="fundoPro">

    <img src="${produto.imgProduto}" class="fotoPro">

    

    <div class="hiscrita">

        <p class="nomeProduto pe">
            Nome: ${produto.nome}
        </p>

            <div class="inputin">
            <p class="preco pe">
                Quantidade: 
            </p>

                    <button onclick="subQtd(this)" class="subQtd menos" >
                        -
                    </button>

                    <input class="qtd" 
                    type="number" 
                    value="${produto.quantidade}"
                    onchange="atualizarQuantidade('${produto.nome}', this)">

                    <button onclick="addQtd(this)" class="addQtd mais">
                        +
                    </button>

                </div>

        <p class="preco pe">
            Preço Unitário: ${produto.preco} R$
        </p>

        <p class= "preco pe">
            Preço Total: ${(produto.quantidade * produto.preco)} R$
        </p>

        <button onclick="limparProduto(this, 
            '${produto.nome}') " class="removerItem">
                Remover Item
            </button>

            </div>

            


    </div>
    </div>

    `

})
}





function addQtd(botao) {
    let input = botao.parentElement.querySelector(".qtd");

    input.value = Number(input.value) + 1;

    input.dispatchEvent(new Event("change"));
}

function subQtd(botao) {
    let input = botao.parentElement.querySelector(".qtd");

    if (Number(input.value) > 1) {
        input.value = Number(input.value) - 1;
    }


    input.dispatchEvent(new Event("change")); 
    
    // Garante que o onchange seja executado mesmo quando
// o valor do input é alterado via JavaScript
// "Javascript alterou o valor, mas quero que você se comporte como se o usuário tivesse alterado e faça o "change" do mesmo jeito ."
}


function atualizarQuantidade(nomeProduto, input) {

    // Pega o valor digitado no input e transforma em número
    let novaQuantidade = Number(input.value)

    // Busca o carrinho salvo no Local Storage
    // Se não existir, cria um array vazio
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

    // Procura no carrinho o produto que tem o mesmo nome
    let produto = carrinho.find(produto => {
        return produto.nome === nomeProduto
    })

    // Atualiza a quantidade do produto
    produto.quantidade = novaQuantidade

    // Recalcula o preço total do produto
    // Preço unitário × quantidade
    produto.precoTotal = produto.preco * novaQuantidade

    // Salva o carrinho atualizado novamente no Local Storage
    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    )

    // Recarrega a página para mostrar os novos valores
    location.reload()
}



 
function limparCarrinho () {
    localStorage.removeItem("carrinho")
    window.location.reload()
}

function limparProduto(botao, nomeProduto) {
        
    let novoCarrinho = produtos.filter( produto => {
        return produto.nome !== nomeProduto
    })

    localStorage.setItem (
        "carrinho",
        JSON.stringify(novoCarrinho)
    )

    console.log("CLICOU")
    console.log(novoCarrinho)

    window.location.reload()

    
}




