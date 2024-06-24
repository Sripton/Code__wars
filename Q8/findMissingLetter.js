// Задача: найдите недостающую букву
// Напишите метод, который принимает на вход массив последовательных (возрастающих) букв
// и возвращает отсутствующую букву в массиве. Вы всегда получите допустимый массив. И
// всегда будет отсутствовать ровно одна буква. Длина массива всегда будет не менее 2.
// Массив всегда будет содержать буквы только в одном регистре.

// Требуемый результат
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

//  Решение 1
// function findMissingLetter(array) {
//   const first = array[0].charCodeAt(0); // 97
//   const a = [];
//   for (let i = 1; i < array.length; i++) {
//     if (first + i === array[i].charCodeAt(0)) {
//       continue;
//     } else {
//       return String.fromCharCode(first + i);
//     }
//   }
// }
// console.log(findMissingLetter(["a", "b", "c", "d", "f"])); // e
// console.log(findMissingLetter(["O", "Q", "R", "S"])); // p

//  Решение 2
// const findMissingLetter = (array) => {
//   const first = array[0].charCodeAt(0);
//   for (let i = 1; i < array.length; i++) {
//     if (first + i !== array[i].charCodeAt(0)) {
//       return String.fromCharCode(first + i);
//     }
//   }
// };
// console.log(findMissingLetter(["a", "b", "c", "d", "f"])); // e
// console.log(findMissingLetter(["O", "Q", "R", "S"])); // p

//  Решение 3
// const findMissingLetter = (array) => {
//   const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const start = alphabet.indexOf(array[0]);
//   return alphabet
//     .slice(start, start + array.length)
//     .split("")
//     .find((elem) => {
//       if (!array.includes(elem)) {
//         return elem;
//       }
//     });
// };
// console.log(findMissingLetter(["a", "b", "c", "d", "f"])); // e
// console.log(findMissingLetter(["O", "Q", "R", "S"])); // P

//  Решение 4
// const findMissingLetter = (array) => {
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   if (array[0] === array[0].toUpperCase()) {
//     alphabet = alphabet.toUpperCase();
//   }
//   alphabet = alphabet.split("");
//   const start = alphabet.indexOf(array[0]);
//   const strip = alphabet.slice(start, start + array.length);
//   // return strip.filter(x => !array.includes(x))[0];
//   return strip.filter(elem => !array.includes(elem))[0];
// };
// console.log(findMissingLetter(["a", "b", "c", "d", "f"])); // e
// console.log(findMissingLetter(["O", "Q", "R", "S"])); // P

