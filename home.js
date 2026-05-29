function addCar () {
    const modal = document.getElementById('modal')
    modal.style.display = "flex"
    
}

function closeModal () {
    const modalClose = document.getElementById('modalClose')
    modal.style.display = "none"
}

function addQtd () {

    let input = document.getElementById('qtd')
    let valor = Number(input.value) // Transforma o valor do input em numero

    valor = valor + 1  // Transforma o valor do imput em +1 após executar a função

    input.value = valor // Joga no input

   
}

function subQtd () {
    let input = document.getElementById('qtd')
    let valor = Number(input.value)

    valor = valor - 1

    

    if (valor < 0) {
        valor = 0
    }

    input.value = valor
}

