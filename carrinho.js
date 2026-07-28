
window.onload = carrinho 

function carrinho() {

    let produtos = JSON.parse(

        // transforma o JSON em array novamente
        // Busca os dados salvos na chave "carrinho" na home.js
        localStorage.getItem("carrinho")

    ) || [] // Se não existir nada salvo, cria um array vazio

    console.log(produtos)




let listaProdutos = document.querySelector(".listaProdutos")  // Cria uma variável que guarda a referência da div com a classe "listaProdutos" para que ela possa ser manipulada pelo JavaScript

produtos.forEach (produto => {   // ARROW FUNCTION para cada produto dentro do array produtos
    listaProdutos.innerHTML +=  // Adiciona um novo bloco de HTML dentro da div listaProdutos
    ` 
    <div class="imagin">  
    

    <img src="${produto.imgProduto}">

    <div class="hiscrita">

        <p class="nomeProduto pe">
            ${produto.nome}
        </p>

        <p class="qtd pe">
            ${produto.quantidade}
        </p>

        <p class="preco pe">
            ${produto.preco}
        </p>


    </div>
    </div>

    `

})
}

