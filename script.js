function calculadora() {
    let operacao = prompt("Selecione o tipo de operação que você deseja realizar\n1 - Soma [+]\n2 - Subtração [-]\n3 - Multiplicação [*]\n4 - Divisão [/]\n5 - Divisão Inteira [%]\n6 - Potenciação [**]")
    operacao = Number(operacao)
    if (!operacao || operacao < 1 || operacao > 6) {
        alert('Digite uma opção válida!')
        calculadora()
    } else {
        let n1 = prompt('Insira o primeiro número da operação:')
        let n2 = prompt('Insira o segundo número da operação:')

        if (!n1 || !n2) {
            alert('Digite os dois números!')
            calculadora()
        } else {
            function novaOperacao() {
                let opcao = Number(prompt("Deseja fazer outra operação?\n1 - SIM\n2 - NÃO"))

                if (opcao == 1) {
                    calculadora()
                } else if (opcao == 2) {
                    alert('Até mais!')
                } else {
                    alert('Digite uma opção válida!')
                    novaOperacao()
                }
            }

            function soma() {
                n1 = Number(n1)
                n2 = Number(n2)
                alert(`${n1} + ${n2} = ${n1 + n2}`)
                novaOperacao()
            }

            function subtracao() {
                n1 = Number(n1)
                n2 = Number(n2)
                alert(`${n1} - ${n2} = ${n1 - n2}`)
                novaOperacao()
            }

            function multiplicacao() {
                n1 = Number(n1)
                n2 = Number(n2)
                alert(`${n1} * ${n2} = ${n1 * n2}`)
                novaOperacao()
            }

            function divisao() {
                n1 = Number(n1)
                n2 = Number(n2)
                alert(`${n1} / ${n2} = ${n1 / n2}`)
                novaOperacao()
            }

            function divInteira() {
                n1 = Number(n1)
                n2 = Number(n2)
                alert(`${n1} % ${n2} = ${n1 % n2}`)
                novaOperacao()
            }

            function potenciacao() {
                n1 = Number(n1)
                n2 = Number(n2)
                alert(`${n1} ** ${n2} = ${n1 ** n2}`)
                novaOperacao()
            }

            // if (operacao == 1) {
            //     soma()
            // } else if (operacao == 2) {
            //     subtracao()
            // } else if (operacao == 3) {
            //     multiplicacao()
            // } else if (operacao == 4) {
            //     divisao()
            // } else if (operacao == 5) {
            //     divInteira()
            // } else if (operacao == 6) {
            //     potenciacao()
            // }

            switch (operacao) {
                case 1:
                    soma()
                    break
                case 2:
                    subtracao()
                    break
                case 3:
                    multiplicacao()
                    break
                case 4:
                    divisao()
                    break
                case 5:
                    divInteira()
                    break
                case 6:
                    potenciacao()
                    break
            }
        }
    }
}

calculadora()