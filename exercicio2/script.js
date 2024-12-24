function clicar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#ano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert (`[ERRO]Verifique os dados e tente novamente`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        género = 'Mulher'//Variavel string vazia

        var img = document.createElement(`img`) // Criando um elemento de imagen
        img.setAttribute(`id`, `foto`) //Adicionar imagens com Js
        img.style.margin = 'auto'

        if (fsex[0].checked) {
            género = 'Homem'

            if (idade >= 0 && idade < 6) {
                //Criança
                img.setAttribute (`src`, `imagens/bebe.png`)
            } else if (idade < 18) {
                //Adolescente
                img.setAttribute (`src`, `imagens/adolescente.png`)
            } else if (idade < 25) {
                //Jovem
                img.setAttribute (`src`, `imagens/jovem.png`)
            } else if (idade < 60) {
                //Adulto
                img.setAttribute (`src`, `imagens/adulto.png`)
            } else {
                //Idoso
                img.setAttribute (`src`, `imagens/idoso.png`)
            } 

        } else {
            género = 'Mulher'

            if (idade >= 0 && idade < 6) {
                //Criança
                img.setAttribute (`src`, `imagens/baby.png`)
            } else if (idade < 18) {
                //Adolescente
                img.setAttribute (`src`, `imagens/adolescente_m.png`)
            } else if (idade < 25) {
                //Jovem
                img.setAttribute (`src`, `imagens/jovem_m.png`)
            } else if (idade < 60) {
                //Adulto
                img.setAttribute (`src`, `imagens/adulta.png`)
            } else {
                //Idoso
                img.setAttribute (`src`, `imagens/idosa.png`)
            }
        }
     
        res.style.textAlign = `center`
        res.innerHTML = `Detectamos ${género} de ${idade} anos de idade`
        res.appendChild(img) //Adiciona o conteudo do elemento introduzido pelo Js
    }

}