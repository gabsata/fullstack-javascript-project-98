import readlineSync from 'readline-sync';

console.log('¡Bienvenido a Brain Games!');
const username = readlineSync.question('Cual es tu nombre?');
console.log(`¡Hola, ${username}!`);
console.log('Responde "yes" si el número es par, de lo contrario responde "no".');
const number = Math.floor(Math.random() * 100);
console.log(`Pregunta: ${number}`);
const answer = readlineSync.question('Tu respuesta: ');
const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
if (answer === correctAnswer) {
  console.log('¡Correcto!');
} else {
  console.log('Respuesta incorrecta.');
}
