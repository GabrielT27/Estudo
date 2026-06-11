
window.onload = carrinho 

function carrinho () {
    let qtd = localStorage.getItem("qtd")
    let preco = localStorage.getItem("preco")
    let imgProduto = localStorage.getItem("imgProduto")

    
    document.getElementById("imgProduto").src = imgProduto
    document.getElementById("qtd").innerText = "Quantidade: " + qtd
    document.getElementById("preco").innerText = "Preço: R$ " + preco

}


