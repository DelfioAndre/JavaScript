function caregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('imgen')
    var data = new Date() //Levar a hora do sistema
    var hora = data.getHours() //Exibe a hora do sistema nessa variavel

    msg.innerHTML = `Agora são: ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Bom Dia
        img.src = 'manha.png'
        document.body.style.background ='#c4bb92'

    } else if (hora >= 12 && hora <= 17) {
        //Boa Tarde
        img.src = 'tarde.png'
        document.body.style.background ='#bc7041'

    }else {
        //Boa Noite
        img.src = 'noite1.png'
        //document.body.style.background = '#554b4a'
        document.body.style.background = '#010111'
    }

}
//1f0706 noite alternativo
//manha #b8beb8
//tarde

