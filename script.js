let valorSenioridade = 0;
let valorProjeto = 0;
const valueParagraph = document.getElementById('project-value');

const btnjr = document.getElementById('btn-jr');
const btnpl = document.getElementById('btn-pl');
const btnsr = document.getElementById('btn-sr');
const btnCalc = document.getElementById('submitcalc');
const inputHoras = document.getElementById('hours-value');

function removeActiveClass() {
    btnjr.classList.remove('active');
    btnpl.classList.remove('active');
    btnsr.classList.remove('active');
}

btnjr.addEventListener('click', () => {
    removeActiveClass();
    btnjr.classList.add('active');
    valorSenioridade = 35;
});

btnpl.addEventListener('click', () => {
    removeActiveClass();
    btnpl.classList.add('active');
    valorSenioridade = 60;
});

btnsr.addEventListener('click', () => {
    removeActiveClass();
    btnsr.classList.add('active');
    valorSenioridade = 110;
});

function calcularValor() {
    const horasTrabalhadas = parseFloat(inputHoras.value) || 0;
    valorProjeto = valorSenioridade * horasTrabalhadas;
    valueParagraph.innerHTML = 'R$ ' + valorProjeto.toFixed(2);
}

btnCalc.addEventListener('click', calcularValor);
