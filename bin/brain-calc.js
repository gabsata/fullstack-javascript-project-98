import readlineSync from 'readline-sync';
console.log('¡Bienvenido a Brain Games!');
const name = readlineSync.question('Cual es tu nombre?');
console.log(`¡Hola, ${name}!`);
console.log('Cual es el resultado de esta operación?');
function generarOperacion(){
    const operaciones = ['+', '-' '*', '/'];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

  const operacion = operaciones[Math.floor(Math.random() * operaciones.length)];
   let resultado;

  switch (operacion) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
     resultado = num1 / num2;
  }

  return `${num1} ${operacion} ${num2}`;
}
