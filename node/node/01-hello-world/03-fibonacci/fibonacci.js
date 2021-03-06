
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...]

const fibonacci = {
    numerodaposicao(posicao) {
        if (posicao < 0){
            return null;
        } else if (posicao == 0){
            return 0;
        } else if (posicao == 1){
            return 1;
        } else{
            let i = 2;
            let anterior = 0;
            let atual = 1;
            let resultado = 0;
            while (i <= posicao){
                resultado = anterior + atual;
                anterior = atual;
                atual = resultado;
                i++;
            }
            return resultado;
        }
    }
}

module.exports = fibonacci;