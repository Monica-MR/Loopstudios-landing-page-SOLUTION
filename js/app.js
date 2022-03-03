
const button = document.querySelector('#hamburger');
const buttonClose = document.querySelector('#close');
cargarEventListener();

function cargarEventListener(){
    button.addEventListener('click', menu);
    buttonClose.addEventListener('click', menu);
}

function menu(){
    const navegacion = document.querySelector('#nav-header');
    const buttonClose = document.querySelector('#close');
    
    navegacion.classList.toggle('hidden');
    buttonClose.classList.toggle('hidden');
}
