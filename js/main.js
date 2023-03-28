// DECLARAMOS LAS VARIABLES
const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

//GENERAMOS UN EVENTO DE ESCUCHA PARA EL BOTÓN
btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

//CREAMOS UNA FUNCIÓN QUE CREARÁ LAS CAJAS Y DIVIDIRÁ LA IMAGEN A MOSTRAR
function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div')
      box.classList.add('box')
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
      boxesContainer.appendChild(box)
    }
  }
}

//EJECUTAMOS LA FUNCIÓN PARA CREAR LAS CAJAS DE LA IMAGE DIVIDIDA
createBoxes()
