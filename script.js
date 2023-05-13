const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classification = ''

    if (imc < 18.5) {
      classification = 'Bajo peso'
    } else if (imc < 25) {
      classification = 'Peso normal'
    } else if (imc < 30) {
      classification = 'Sobre peso'
    } else if (imc < 35) {
      classification = 'Obesidad grado I'
    } else if (imc < 41) {
      classification = 'Obesidad grado II'
    } else {
      classification = 'Obesidad grado III'
    }
    
    resultado.innerHTML = `IMC: ${imc} (${classification})`
  } else {
    resultado.innerHTML = 'complete todos los campos'
  }
}

let menu = document.querySelector(".menu")
let menue = document.querySelectorAll(".menue")

menue.forEach(i => {
    i.addEventListener('click', ()=>{
        menu.classList.toggle("activo")
    })
});
