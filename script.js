/**
 * =================== Tarefas =====================
 * 1. Criar vetor para armazenar valores digitados
 * 2. Configurar ação dos operadores
 * 3. Criar função de cada OPERAÇÃO dos valores armazenados
 * 4. 
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
  * Problema: 
  * Solução: 
  * ============== Problema / Solução ==============
 */


//Foi preciso colocar a variável "valorConcatenado" no escopo global
let valorConcatenado = 0

function entradaDados(valorClicado){
    let caixaEntradaDados = document.getElementById('entradaDados')

    //Concatenando os valores que aparecem no visor da calculadora:
    valorConcatenado += valorClicado
    
    caixaEntradaDados.value = Number(valorConcatenado)
}

function btnClicado(idElemento){
    
    let valorClicado = document.getElementById(idElemento).value

    entradaDados(valorClicado)
}

function btnOperadores(){
    //Funcionalidades dos botões operadores

    /**
     * Na primeira versão da calculadora, ao clicar em qualquer operador,
     * deve-se apagar o conteúdo da caixa de texto e o operador deverá ser
     * utilizado para realizar a operação. ele não deve ser concatenado
     * com os valores que já estão na caixa de exibição.
    */

}