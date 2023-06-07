const nome = document.querySelector('.nome');
const altura = document.querySelector('.altura');
const peso = document.querySelector('.peso');
const cal = document.querySelector('#calc');
const form = document.querySelector('form');

nome.focus();

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    let input = nome.value;
    let alt = altura.value;
    let pes = peso.value;
    let imc = pes / (alt * alt);
    let result = imc.toFixed(3);
    
    document.querySelector('.resultado').innerHTML = input + ", seu IMC é <br> " + result;

    if (imc <= 24.9) {
        document.querySelector('.dica').innerHTML = "Normal";
    }

    if (imc >= 25.9) {
        document.querySelector('.dica').innerHTML = "Sobrepeso";
    }
    
    if (imc >= 30.0) {
        document.querySelector('.dica').innerHTML = "Obesidade";
    }
    
    if (imc >= 40.0) {
        document.querySelector('.dica').innerHTML = "Obesidade Grave";
    }
});
