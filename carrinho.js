
window.onload = carrinho 

function carrinho () {
    let qtd = localStorage.getItem("qtd")
    let preco = localStorage.getItem("preco")

    document.getElementById("qtd").innerText = "Quantidade: " + qtd
    document.getElementById("preco").innerText = "Preço: " + preco
}


