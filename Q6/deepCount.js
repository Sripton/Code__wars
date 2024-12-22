// Задача: глубокий подсчет массива
// Array.prototype.length даст вам количество элементов верхнего уровня в массиве. Ваша
// задача — создать функцию deepCount, которая возвращает количество ВСЕХ элементов в
// массиве, включая любые внутри массивов внутреннего уровня.
// Требуемый результат
// deepCount([1, 2, 3]);
// //>>>>> 3
// deepCount(["x", "y", ["z"]]);
// //>>>>> 4
// deepCount([1, 2, [3, 4, [5]]]);
// // >>>>> 7

// Решение 1
// const deepCount = (array) => {
//   let count = array.length;
//   for(let i = 0; i < array[i].length; i++){
//     if(Array.isArray(array[i])){
//         count += deepCount(array[i]);
//     }
//   }
//   return count;
// };
// console.log(deepCount([1, 2, [3, 4, [5]]]));

// Решение 2
// const deepCount = (array) => {
//     let count = 0;
//     for(let i = 0; i < array.length; i++)
//         {
//             count++;
//             if(Array.isArray(array[i])){
//                 count += deepCount(array[i]);
//             }
//         }
//         return count;
// }
// console.log(deepCount([1, 2, [3, 4, [5]]]));

// Решение 3
// const deepCount = (array) => {
//   return array.reduce((count, elem) => {
//     if (Array.isArray(elem)) {
//       return count + 1 + deepCount(elem);
//     }
//     return count + 1;
//   }, 0);
// };
// console.log(deepCount([1, 2, [3, 4, [5]]]));


