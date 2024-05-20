// Задача
// Нвйти индекс среднего элемента в массиве

//Решение 1
// const gimme = (triplet) => {
//   const result = [];
//   for (let i = 0; i < triplet.length; i++) {
//     result.push(triplet[i]);
//   }
//   return triplet.indexOf(result.sort((a, b) => a - b)[1]);
// };
// console.log(gimme([23, 11, 5])); //  1
// console.log(gimme([2, 11, 5])); //  2
// console.log(gimme([23, 11, 76])); // 0
// console.log(gimme([2, 11, 7])); // 2

//Решение 2
// const gimme = (triplet) => {
//   const result = [...triplet];
//   for (let i = 0; i < triplet.length; i++) {
//     for (let j = result.length - 1; j > i; j--) {
//       if (result[j] < result[i]) {
//         let temp = result[i];
//         result[i] = result[j];
//         result[j] = temp;
//       }
//     }
//   }
//   let elem = result[1];
//  for(let i = 0; i < result.length; i++){
//     if(elem > result[i-1] && elem < result[i+1]){
//         return result.indexOf(elem)
//     }
//  }
// };
// console.log(gimme([23, 11, 5])); //  1
// console.log(gimme([2, 11, 5])); //  2
// console.log(gimme([23, 11, 76])); // 0
// console.log(gimme([2, 11, 7])); // 2

//Решение  3
// const gimme = (triplet) => {
//   const array = [...triplet];
//   array.sort((a,b) => a - b);
//   const min = array[0], max = array[array.length-1];
//   return triplet.map((elem, index) => elem > min && elem < max ? index : null ).filter((elem) => elem !== null).pop();
// };
// console.log(gimme([23, 11, 5])); //  1
// console.log(gimme([2, 11, 5])); //  2
// console.log(gimme([23, 11, 76])); // 0
// console.log(gimme([2, 11, 7])); // 2

//Решение  4
// const gimme = (triplet) => {
//   return triplet.indexOf([...triplet].sort((a,b) => a - b)[1]);
// }
// console.log(gimme([23, 11, 5])); //  1
// console.log(gimme([2, 11, 5])); //  2
// console.log(gimme([23, 11, 76])); // 0
// console.log(gimme([2, 11, 7])); // 2

//Решение  5
// const gimme = (triplet) => {
//   return triplet
//     .map((elem, index) => {
//       if (elem > Math.min(...triplet) && elem < Math.max(...triplet)) {
//         return index;
//       }
//     })
//     .filter((elem) => elem !== undefined).pop();
// };

// console.log(gimme([23, 11, 5])); //  1
// console.log(gimme([2, 11, 5])); //  2
// console.log(gimme([23, 11, 76])); // 0
// console.log(gimme([2, 11, 7])); // 2
