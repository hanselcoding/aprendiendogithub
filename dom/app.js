
/*  const lista = document.querySelector('#lista')

const arraylista = ['item 1', 'item 2', 'item 3']

const  template = document.querySelector('#template-li').content
const fragment= cratedocumentfragment()
>
   arraylista.forEach(item => {
      template.querySelector('span').textcontent = item
      const clone = template.CloneNode(true)
      fragment.appendchilld(clone)
   })
   lista.appendChild(fragment) */








/* const fragment = document.createDocumentFragment()
arraylista.forEach(item =>{
   const li = document.createElement('li')
   li.classList.add('list')
   const b = document.createElement('b')
   b.textContent = 'nombre: ' 
   const span = document.createElement('span')
   span.classList.add('text-danger')
   span.textContent= item
   li.appendChild(b)
   li.appendChild(span)
   fragment.appendChild(li)
})
lista.appendChild(fragment) */ 


/* <li class="list">
   <b>nombre:</b> <span class= "text-danger">descripcion...</span>
</li> */
/* let fragment = ''
arraylista.forEach(item =>{
   fragment += `
   <li class="list">
   <b>nombre:</b> <span class= "text-danger">${item}</span>
</li>
`
})
lista.innerHTML = fragment */


