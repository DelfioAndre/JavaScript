function clic() {
    var i = document.querySelector('input#inicio')
    var f = document.querySelector('input#fim')
    var p = document.querySelector('input#passo')
    var res = document.querySelector('div#resultado')
    res.innerHTML = `<p>Contando: </p>`

    var inicio = Number(i.value)
    var fim = Number(f.value)
    var passo = Number(p.value)

    if (passo <= 0) {
        window.alert('[ERRO] O valor do passo não pode ser negativo!')

    } else {

        while (inicio <= fim) {
            res.innerHTML += `${inicio}; `
            inicio = inicio + passo
    
        }
    

    }


   // res.innerHTML += `${inicio}`
    
}