// Задача: перемещение нулей в конец
// Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя
// порядок остальных элементов.

// Требуемый результат
// moveZeros([false,1,0,1,2,0,1,3,"a"])
// returns[false,1,1,2,1,3,"a",0,0]


// Решение 1
// const moveZeros = (array) => {
//   const newArrayFreeZero = [];
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 0) {
//       count++;
//     } else {
//       newArrayFreeZero.push(array[i]);
//     }
//   }
//   for(let i = 0; i < count; i++){
//     newArrayFreeZero.push(0);
//   }
//   return newArrayFreeZero;
// };
// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
// console.log(moveZeros([false, 1, 0, 1, 0, 0, 1, 0, "a"]));
// console.log(moveZeros([0, 1, 0, 0, 2, 0, 1, true, "a"]));



// Решение 2
// const moveZeros = (array) => {
//     const newArrayFreeZero = [];
//     const newArrayZero = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i] !== 0){
//             newArrayFreeZero.push(array[i]);
//         }else {
//             newArrayZero.push(array[i]);
//         }
//     }
//     return newArrayFreeZero.concat(newArrayZero);
// }
// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
// console.log(moveZeros([false, 1, 0, 1, 0, 0, 1, 0, "a"]));
// console.log(moveZeros([0, 1, 0, 0, 2, 0, 1, true, "a"]));


// Решение 3
// const moveZeros = (array) => {
// const result = [];
// for(let i = 0; i < array.length; i++){
//     if(array[i] !== 0){
//         result.unshift(array[i]);
//     }else {
//         result.push(array[i]);
//     }
// }
// return result
// }
// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
// console.log(moveZeros([false, 1, 0, 1, 0, 0, 1, 0, "a"]));
// console.log(moveZeros([0, 1, 0, 0, 2, 0, 1, true, "a"]));



// Решение 4
// const moveZeros = (array) =>  {
//     return array.reduce((acum, elem) => {
//         if(elem !== 0){
//             acum.unshift(elem);
//         }else {
//             acum.push(elem);
//         }
//         return acum;
//     },[]);
// }

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
// console.log(moveZeros([false, 1, 0, 1, 0, 0, 1, 0, "a"]));
// console.log(moveZeros([0, 1, 0, 0, 2, 0, 1, true, "a"]));
