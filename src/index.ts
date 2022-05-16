let firstNumber: number = 0;
let secondNumber: number = 0;
let resultado: number = 0;

firstNumber = Number(prompt("ingrese el primer número"));
secondNumber = Number(prompt("ingrese el segundo número"));
console.log(firstNumber);
console.log(secondNumber);
for (firstNumber; firstNumber <= secondNumber; firstNumber++) {
  resultado = resultado + firstNumber;
}
console.log(resultado);
