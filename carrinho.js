
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
    

    <img src="${produto.imgProduto}">

    <div class="hiscrita">

        <p class="nomeProduto pe">
            Nome: ${produto.nome}
        </p>

        <p class="qtd pe">
            Quantidade: ${produto.quantidade}
        </p>

        <p class="preco pe">
            Preço: ${produto.preco}
        </p>

        <button onclick="limparProduto(this, 
            '${produto.nome}')">
                Remover Item
            </button>


    </div>
    </div>

    `

})
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

// ALTERAR FORMA DE REMOVEITEM, ESTA FILTRANDO APENAS PELO NOME E TIRANDO TODOS DE UM VEZ, REALIZAR TESTE PARA VER E LEMBRAR


