function calculateNumber(){
    const firstNumber = parseFloat(document.querySelector(".numeroEscolhido1").value)
    const secondNumber = parseFloat(document.querySelector(".numeroEscolhido2").value)
    const input = parseFloat(document.getElementById("sinalEscolhido").value)
    const result = document.querySelector(".result")
    if (input == 1) {
        const makeSoma = (firstNumber + secondNumber)
        result.innerHTML =(`Deu: ${new Intl.NumberFormat().format(makeSoma)}`)
    }

        else if (input == 2) {
            const makeSoma = (firstNumber - secondNumber)
            result.innerHTML =(`Deu: ${new Intl.NumberFormat().format(makeSoma)}`)
        }
        else if (input == 3) {
            const makeSoma = (firstNumber * secondNumber)
            result.innerHTML =(`Deu: ${new Intl.NumberFormat().format(makeSoma)}`)
        }
        else if (input == 4) {
            const makeSoma = (firstNumber / secondNumber)
            result.innerHTML =(`Deu: ${new Intl.NumberFormat().format(makeSoma)}`)
        }
        else {
            result.innerHTML =(`Você escreveu algo errado,Parceiro`)
        }



    }
function sinalMudado(){
    calculateNumber()
}






