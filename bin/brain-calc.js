import readlineSync from 'readline-sync';

function getRandomOperator() {
  const operaciones = ['+', '-', '*', '/'];
  const operacion = operaciones[Math.floor(Math.random() * operaciones.length)];
  return operacion;
}
function generarOperacion(num1, num2, operacion) {
  switch (operacion) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    case '/':
      return num1 / num2;

    default:
      return num1 / num2;
  }
}
const getRound = function () {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('Cual es tu nombre?');
  console.log(`¡Hola, ${name}!`);
  for (let i = 0; i < 3; i += 1) {
    const randomOperator = getRandomOperator();
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    console.log(`${num1} ${randomOperator} ${num2}Cual es el resultado de esta operación?`);
    const resultado = generarOperacion(num1, num2, randomOperator);
  }
};
getRound()
//Tengo que pedir la respuesta del usuario, respuesta, comparar la respuesta del usuario con el rsultado
//fijarse si el resultado para que la comparación funcione
//si las respuestas son diferente debe salirse del bucle