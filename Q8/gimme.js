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
const gimme = (triplet) => {
  const result = [...triplet];
  for (let i = 0; i < triplet.length; i++) {
    for (let j = result.length - 1; j > i; j--) {
      if (result[j] < result[i]) {
        let temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
    }
  }
  let elem = result[1];
 for(let i = 0; i < result.length; i++){
    if(elem > result[i-1] && elem < result[i+1]){
        return result.indexOf(elem)
    }
 }
};
console.log(gimme([23, 11, 5])); //  1
console.log(gimme([2, 11, 5])); //  2
console.log(gimme([23, 11, 76])); // 0
console.log(gimme([2, 11, 7])); // 2
