const fibonacci = {
    soma(num1 , num2){
        resultado = num1 + num2
        return resultado
    },
    somarnumeros(...number){
        let resultado = number[0]
        for (i = 1; i < number.length; i++){
            resultado = number[i] + resultado
        }
        return resultado
    },
    subtracao(num1 , num2){
        resultado = num1 - num2
        return resultado
    },
    subtrairnumeros(...number){
        let resultado = number[0]
        for (i = 1; i < number.length; i++){
            resultado = resultado - number[i]
        }
        return resultado
    },
    multiplicacao(num1 , num2){
        resultado = num1 * num2
        return resultado
    },
    multiplicacaonumeros(...number){
        let resultado = number[0]
        for (i = 1; i < number.length; i++){
            resultado = resultado * number[i]
        }
        return resultado
    },
    divisao(num1 , num2){
        resultado = num1 / num2
        return resultado
    },
    divisaonumeros(...number){
        let resultado = number[0]
        for (i = 1; i < number.length; i++){
            resultado = resultado / number[i]
        }
        return resultado
    }
}


module.exports = fibonacci;