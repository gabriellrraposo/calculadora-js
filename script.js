function calculadora() {
    const operacao = prompt("Selecione o tipo de operação que você deseja realizar\n1 - Soma [+]\n2 - Subtração [-]\n3 - Multiplicação [*]\n4 - Divisão [/]\n5 - Divisão Inteira [%]\n6 - Potenciação [**]")

    let n1 = prompt('Insira o primeiro número da operação:')
    let n2 = prompt('Insira o segundo número da operação:')
    let resultado

    function soma() {
        n1 = Number(n1)
        n2 = Number(n2)
        alert(`${n1} + ${n2} = ${n1 + n2}`)
    }

    function subtracao() {
        n1 = Number(n1)
        n2 = Number(n2)
        alert(`${n1} - ${n2} = ${n1 - n2}`)
    }
    
    function multiplicacao() {
        n1 = Number(n1)
        n2 = Number(n2)
        alert(`${n1} * ${n2} = ${n1 * n2}`)
    }
    
    function divisao() {
        n1 = Number(n1)
        n2 = Number(n2)
        alert(`${n1} / ${n2} = ${n1 / n2}`)
    }
    
    function divInteira() {
        n1 = Number(n1)
        n2 = Number(n2)
        alert(`${n1} % ${n2} = ${n1 % n2}`)
    }
    
    function potenciacao() {
        n1 = Number(n1)
        n2 = Number(n2)
        alert(`${n1} ** ${n2} = ${n1 ** n2}`)
    }

    if (operacao == 1) {
        soma()
    } else if (operacao == 2) {
        subtracao()
    } else if (operacao == 3) {
        multiplicacao()
    } else if (operacao == 4) {
        divisao()
    } else if (operacao == 5) {
        divInteira()
    } else if (operacao == 6) {
        potenciacao()
    } else {
        alert('Digite uma opção válida!')
    }
}

calculadora()