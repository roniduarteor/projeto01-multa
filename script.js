function verificarMulta() {
    const velocidade = document.querySelector("#velocidade").value

    console.log(velocidade)

    const resultado = document.getElementById('resultado')

    if(velocidade <= 60){
        resultado.innerHTML = "Não recebeu multa"
        resultado.className = "verde"
    }
    else{
        resultado.innerHTML = "Recebeu multa"
        resultado.className = "vermelho"
    }
}