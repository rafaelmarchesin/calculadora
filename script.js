let resultado = ''
let primeiroNumero = ''
let operador


/* Função destinada a trabalhar com os botões de números */
function clicaNumero(idElemento){

    let valorBotao = document.getElementById(idElemento).innerText

    if(primeiroNumero.length < 13){
        //A condição abaixo determina que, se o número 0 for digitado antes de qualquer outro, ele não tenha efeito nenhum
        if (primeiroNumero == '' && valorBotao == 0){
            primeiroNumero = ''
        } else {
            //Essa condição define que, ao clicar no ponto, o valor seja "0." alguma coisa
            if (primeiroNumero == '' && valorBotao == '.'){
                primeiroNumero = '0.'
            } else {
                //Senão, gera um número norma (uma string com números concatenados)
                primeiroNumero += valorBotao
            }
        }
    
        exibeNaTela()
    }
    
}

/* Função destinada a colocar os valores na tela */
function exibeNaTela(){
    let tela = document.getElementById('valorVisor')
    
    tela.innerText = primeiroNumero
}

/* Função destinada a realizar as operações */
function clicaOperador(idOperador){
    let operadorSelecionado = document.getElementById(idOperador).innerText
    let valorOperador = document.getElementById(idOperador).innerHTML

    //Com a condição abaixo, posso continuar executando operações ao clicar
    //mais vezes no operador antes de clicar em igual
    if (resultado == ''){
        resultado = Number(primeiroNumero)
    } else {
        resultadoOperacaoSemIgual()
    }


    document.getElementById('valorVisor').innerText = ''

    //Caso seja raiz quadrada, exibe o resultado de imediato
    if(valorOperador == '<span>√</span>'){
        raizQuadrada()

        //A visualização na tela ao clicar em raiz é diferente
        document.getElementById('valorVisor').innerText = resultado
        document.getElementById('valorGuardado').innerText = '√'

        operador = 'raizQuadrada'
        
    } else {
        operacoes(valorOperador)
        //Exibe 0 na tela maior
        document.getElementById('valorVisor').innerText = operadorSelecionado
        exibeNaTelaMenor()
    }
    
    
    primeiroNumero = ''

}

/* A função da raiz quadrada foi separada das demais operações
pelo fato de exigir apenas um operador */
function raizQuadrada(){
    num1 = Number(resultado)
    num2 = Number(primeiroNumero)
    
    //Pega o valor inserido após clicar em raizQuadrada
    if(resultado == ''){
        //parseFloat: 1.980000 -> 1.98
        resultado = parseFloat(Math.sqrt(num2).toFixed(11))

    //Pega o valor inserido antes de clicar em raizQuadrada, incluindo o
    //resultado de uma operação anterior
    } else {
        resultado = parseFloat(Math.sqrt(num1).toFixed(11))
    }
}


function exibeNaTelaMenor(){
    let tela = document.getElementById('valorGuardado')

    tela.innerText = resultado
}

//Esta função tem o pbjetivo de armazenar o operador selecionado
function operacoes(valorOperador){
    switch (valorOperador){
        case '<span>x<sup>y</sup></span>':
            operador = 'elevado'
            break

        case '<span>%</span>':
            operador = 'porcentagem'
            break

        case '<span>/</span>':
            operador = 'divisao'
            break

        case '<span>x</span>':
            operador = 'multiplicacao'
            break

        case '<span>-</span>':
            operador = 'subtracao'
            break

        case '<span>+</span>':
            operador = 'soma'
            break
    }
}

/* Criei a função abaixo para corrigir um erro dentro da função
clicaOperador(). Quando se clicava (numero/operador/numero/operador)
não dava prosseguimento à operação correta. Crieir, portanto, uma
condicional e acrescentei essa função dentro. Ela é muito semelhante
à função clicaIgual(), portanto, eu poderia ter usado a mesma, no entanto,
por falta de experiência, acabei executando dessa maneira, repetindo
o código -> futuramente, tentarei aprimorar o código. */
function resultadoOperacaoSemIgual(){
    let num1 = Number(resultado)
    let num2 = Number(primeiroNumero)

    switch(operador){
        case 'elevado':
            resultado = Number(Math.pow(num1, num2))
            break

        case 'porcentagem':
            resultado = (num1 / 100) * num2
            break

        case 'divisao':
            resultado = num1 / num2
            break

        case 'multiplicacao':
            resultado = num1 * num2
            break

        case 'subtracao':
            resultado = num1 - num2
            break
        
        case 'soma':
            resultado = num1 + num2
            break

    }
}

//Funcionalidades após clicar no botão igual
function clicaIgual(){
    num1 = Number(resultado)
    num2 = Number(primeiroNumero)

    switch(operador){
        case 'raizQuadrada':
            resultado = parseFloat(Math.sqrt(num2).toFixed(11))
            break

        case 'elevado':
            resultado = Number(Math.pow(num1, num2))
            break

        case 'porcentagem':
            resultado = (num1 / 100) * num2
            break

        case 'divisao':
            if (primeiroNumero == ''){
                resultado = 'Erro'
            } else {
                resultado = num1 / num2
            }
            
            break

        case 'multiplicacao':
            resultado = num1 * num2
            break

        case 'subtracao':
            resultado = num1 - num2
            break
        
        case 'soma':
            resultado = num1 + num2
            break

    }

    //Os visores recebem os novos valores
    let telaMaior = document.getElementById('valorVisor')
    telaMaior.innerText = resultado

    let telaMenor = document.getElementById('valorGuardado')
    telaMenor.innerText = '0'

    primeiroNumero = ''

    operador = ''   //Ao limpar o operador, ele não executa operação se eu
                    //clicar direto num operador após clicar em igula
}

//Inicia função para começar uma nova operação da calculadora
function limpaTela(){
    let telaMaior = document.getElementById('valorVisor')
    telaMaior.innerText = '0'

    let telaMenor = document.getElementById('valorGuardado')
    telaMenor.innerText = '0'

    resultado = ''
    primeiroNumero = ''
    
}

/* Ativando as teclas do teclado */

document.addEventListener('keypress', function(e){

    switch(e.which){
        case 48:
            clicaNumero('btn0')
            break
        case 49:
            clicaNumero('btn1')
            break
        case 50:
            clicaNumero('btn2')
            break
        case 51:
            clicaNumero('btn3')
            break
        case 52:
            clicaNumero('btn4')
            break
        case 53:
            clicaNumero('btn5')
            break
        case 54:
            clicaNumero('btn6')
            break
        case 55:
            clicaNumero('btn7')
            break
        case 56:
            clicaNumero('btn8')
            break
        case 57:
            clicaNumero('btn9')
            break        
    }
  }, false);

//Usando a função addEventListener, não consegui chamar as teclas
//listadas abaixo, por isso precisei usar onkeyup
document.onkeyup=function(e){

    switch(e.which){
        case 107:
            clicaOperador('btnSoma')
            break
        case 109:
            clicaOperador('btnSubtracao')
            break
        case 110:
            clicaNumero('btnPonto')
            break
        case 111:
            clicaOperador('btnDivisao')
            break
        case 106:
            clicaOperador('btnMultiplicacao')
            break
        case 108:
            clicaNumero('btnPonto')
            break
        case 13:
            clicaIgual()
            break
    }

 }
