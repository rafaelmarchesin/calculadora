/**
 * =================== Tarefas =====================
 * 2. Configurar ação dos operadores.
 * 
 * 3. Resolver problemas descritos abaixo.
 * 
 * 4. Acrescentar "(" e ")".
 * 
 * 5. Se não existir nenhum valor digitado na caixa 
 * e for digitado um operado em primeiro lugar, usar
 * o valor contido na variável "resultado" para a 
 * primeira operação.
 * 
 * 6. 
 * =================== Tarefas =====================
 */

 /**
  * ============== Problema / Solução ==============
  * 1.
  * Problema: O número zero não é exibido na caixa de texto
  * Solução: converter todos os valores que forem exibidos na
  * caixa de texto para o tipo STRING. Salvar em formato número
  * apenas no vetor destinado aos valores da operação.
  * 
  * 2.
  * Problema: Um operador não pode ser inserido junto de outro operador
  * Solução: [[[[[[[[[[[[[Ainda não sei]]]]]]]]]]]]]
  * ============== Problema / Solução ==============
 */


//Foi preciso colocar a variável "valorConcatenado" no escopo global
let valorConcatenado = ""
let resultado = ""

function entradaDados(valorClicado){
    let caixaEntradaDados = document.getElementById('entradaDados')

    //Concatenando os valores que aparecem no visor da calculadora:
    valorConcatenado += valorClicado
    
    caixaEntradaDados.value = valorConcatenado
}

//Insere espaço antes e depois do operador para executar o método "split"
function entradaOperador(valorClicado, idElemento){
    let caixaEntradaDados = document.getElementById('entradaDados')

    if (idElemento[5] === 'P'){
        valorConcatenado += `${valorClicado}`
    } else {
        valorConcatenado += ` ${valorClicado} `
    }
    
    caixaEntradaDados.value = valorConcatenado
}

function btnClicado(idElemento){

    let valorClicado = document.getElementById(idElemento).value

    if(idElemento == 'btnResultado'){
        exibeResultado()
    }else{
        if(idElemento[3] == 'O'){
            entradaOperador(valorClicado, idElemento)
        }else{
            entradaDados(valorClicado)
        }
    }

    
    
}

function exibeResultado(){
    /**
     * Aqui devo quebrar a strig fazendo uso do método split(' '),
     * depois devo verificar todos os operadores e realizar as
     * devidas operações
    */
}