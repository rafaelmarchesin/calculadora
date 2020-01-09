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
}