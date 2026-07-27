function addCar(botao) {
    let produto = botao.closest(".produto")
    let modal = produto.querySelector(".modais")

    modal.style.display = "flex"
}

   function closeModal (botao) {
    let produto = botao.closest(".produto")
    let modal = produto.querySelector(".modais")

    modal.style.display = "none"
}

function addQtd(botao) {

    // pega a div pai
    let container = botao.parentElement

    // procura o input dentro dela
    let input = container.querySelector('.qtd')

    // lê o valor
    let valor = Number(input.value)

    // soma 1
    valor++

    // coloca de volta
    input.value = valor
}


function subQtd (botao) {
    let input = botao.parentElement.querySelector('.qtd')
    let valor = Number(input.value)

    valor--

    

    if (valor < 0) {
        valor = 0
    }

    input.value = valor
}

function irCarrinho(botao, nomeProduto, preco, imgProduto) {


//     botao = qual botão foi clicado.
// closest() = encontra o produto daquele botão.
// querySelector(".qtd") = encontra a quantidade daquele produto.
    
    let produto = botao.closest(".produto")
    let input = produto.querySelector(".qtd")
    let qtd = Number(input.value)
    let precoTotal = qtd * preco

    localStorage.setItem("nomeProduto", nomeProduto)
    localStorage.setItem("qtd", qtd)
    localStorage.setItem("preco", precoTotal)
    localStorage.setItem("imgProduto", imgProduto)

    

    window.location.href = "carrinho.html"

    
    
}

