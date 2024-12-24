function calcular() {
    var num1 = document.querySelector('input#num1')
    var num2 = document.querySelector('input#num2')
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)

    var ope = document.getElementsByName('ope')
    var res  = document.getElementById('resultado')

    if (ope[0].checked) {
      res.innerHTML = `${n1} + ${n2} = ${n1 + n2}` 
    } else if (ope[1].checked) {
      res.innerHTML = `${n1} X ${n2} = ${n1 * n2}` 
    } else if (ope[2].checked) {
      res.innerHTML = `${n1} / ${n2} = ${n1 / n2}` 
    } else if (ope[3].checked) {
      res.innerHTML = `${n1} - ${n2} = ${n1 - n2}` 
    }

}
