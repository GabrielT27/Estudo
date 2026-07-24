
window.onload = carrinho 

function carrinho () {
    let nomeProduto = localStorage.getItem("nomeProduto")
    let qtd = localStorage.getItem("qtd")
    let preco = localStorage.getItem("preco")
    let imgProduto = localStorage.getItem("imgProduto")




    document.getElementById("nomeProduto").innerText = "Nome: " + nomeProduto
    document.getElementById("imgProduto").src = imgProduto
    document.getElementById("qtd").innerText = "Quantidade: " + qtd
    document.getElementById("preco").innerText = "Preço: R$ " + preco

}


