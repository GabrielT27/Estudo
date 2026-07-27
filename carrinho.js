
window.onload = carrinho 

function carrinho () {
    let nomeProduto = localStorage.getItem("nomeProduto")
    let qtd = localStorage.getItem("qtd")
    let preco = localStorage.getItem("preco")
    let imgProduto = localStorage.getItem("imgProduto")




    document.querySelector(".nomeProduto").innerText = "Nome: " + nomeProduto
    document.querySelector(".imgProduto").src = imgProduto
    document.querySelector(".qtd").innerText = "Quantidade: " + qtd
    document.querySelector(".preco").innerText = "Preço: R$ " + preco

}



