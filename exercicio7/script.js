
function calcular() {
let num = document.querySelector('input#num1')
let tab = document.getElementById('seltab')


  if (num.value.length == 0) {

    window.alert('[ERRO] Digite um número acima para gerar a tabuada')
  } else {
    let n = Number(num.value)
    //let c = 0
    tab.innerHTML = ''

  /*
    while (c <= 10) {
      let item = document.createElement(`option`)
      item.text = `${n} x ${c} = ${n * c}`
      item.value = `tab${c}`
      tab.appendChild(item)
      c++
    }
  */
   
   for ( var c = 0; c <= 10; c++) {
      let item = document.createElement (`option`)
      item.text = `${n} X ${c} = ${n * c}`
      item.value = `tab ${c}`
      tab.appendChild(item)
    }
  }

}




