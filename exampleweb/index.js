const titulo = document.getElementById('titulo')
const btn = document.getElementById('btn')
const input = document.querySelector('#input')

btn.addEventListener('click', e => {
    let value = input.value
    titulo.innerHTML = value
})