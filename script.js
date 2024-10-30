const botaoSomar = document.getElementById("somar");
const botaoSubtrair = document.getElementById("subtrair");
const botaoMultiplicar = document.getElementById("multiplicar");
const botaoDividir = document.getElementById("dividir");
const igual = document.getElementById("igual");

const inputNumero = document.getElementById("calculo");
const resultado = document.getElementById("resultado");

function somar(a,b) {
return a+b
}

function subtrair(a,b){
    return a-b
}

function multiplicar(a,b){
    return a*b
}

function dividir(a,b){
    return a/b
}
botaoDividir.addEventListener("click", async ()=>{
    resultado.textContent = "olá"

    botaoIgual.addEventListener("click", async () =>) {
        const resultado = parseInt(inputCalculo.value);
        resultado.textContent = "o resultado foi"
    })


botaoSomar.addEventListener("click", async () => {
    const calculo = parseInt(inputCalculo.value);
    resultado.textContent = calculo

    botaoIgual.addEventListener("click", async () =>) {
        const resultado = parseInt(inputCalculo.value);
        resultado.textContent = "o resultado foi"
    })


botaoSubtrair.addEventListener("click", async () => {
    const calculo = parseInt(inputCalculo.value);
    resultado.textContent = "coloque o segundo valor a ser subtraído"

    botaoIgual.addEventListener("click", async () =>) {
        const resultado = parseInt(inputCalculo.value);
        resultado.textContent = "o resultado foi"
    })


botaoMultiplicar.addEventListener("click", async () => {
    const calculo = parseInt(inputCalculo.value);
    resultado.textContent = "coloque o segundo valor a ser multiplicado"

    botaoIgual.addEventListener("click", async () =>) {
        const resultado = parseInt(inputCalculo.value);
        resultado.textContent = "o resultado foi"
    })
