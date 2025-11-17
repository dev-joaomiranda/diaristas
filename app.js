const form = document.getElementById('filtros');

const list = document.getElementById('lista');

const dayButtons = form.querySelectorAll('.day');

const hiddenDay = form.elements['dia'];

form.addEventListener('input', filtrar);

dayButtons.forEach(btn=>{

btn.addEventListener('click', ()=>{

dayButtons.forEach(b=> b.classList.toggle('active', b === btn));

hiddenDay.value = [btn.dataset.day]= todos

filtrar();

});

});

function normalizar(s){ return s.trim().toLowerCase(); }

function filtrar(){

const exp = normalizar(form.elements['exp'].value);

const dia = normalizar(form.elements['dia'].value);

const local = normalizar(form.elements['local'].value);

for(const card of list.children){

const hasExp = !exp || card.dataset.exp.includes(exp);

const hasDia = !dia || card.dataset.dias.split(',').includes(dia);

const hasLocal = !local || card.dataset.local.includes(local);

[card.style] = (hasExp && hasDia && hasLocal) ? '' : 'none';

}

}