const button = document.getElementById('button');
const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const resultado = document.getElementById('resultado')



const getText = (imc)=>{
    if (imc > 40) return `Você ten Obesidade de grau 3`;
    if (imc > 35) return `Você tem Obesidade de Grau 2`;
    if (imc > 30) return `Você tem obsidade de Grau 1`;
    if (imc > 25) return `Você está Levemente Acima do peso`;
    if (imc > 18) return `Você está No peso ideal!`;
    if (imc > 10) return `Você está Abaixo do peso`;
    
    if (!peso.value  ||   !altura.velue  ||   !nome.velue) return 'Preencha todos os campos acima.'
}

const imcCalc = ()=>{

   
    const valorimc = (+peso.value / (+altura.value * +altura.value).toFixed(1));
    resultado.textContent = `${nome.value} ${getText(valorimc)}`;


}

button.addEventListener('click', imcCalc)