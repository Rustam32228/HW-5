/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1 = [ 1, 2, 3, 4, 5, 6 ];// your code
let dice2 = [ 1, 2, 3, 4, 5, 6 ];// your code
let randomIndex1 = Math.floor(Math.random() * dice1.length);
let randomIndex2 = Math.floor(Math.random() * dice2.length);
let randomValue1 = dice1[randomIndex1];
let randomValue2 = dice2[randomIndex2];
let isWinningDouble = (randomValue1 === randomValue2) && (randomValue1 > 3);// your code


console.log('Первый бросок: ' + randomValue1)
console.log('Второй бросок: ' + randomValue2)
if (isWinningDouble) {
  console.log('Выигрышный дубль!')
} else {
  console.log('Не выигрышный дубль.')
}

