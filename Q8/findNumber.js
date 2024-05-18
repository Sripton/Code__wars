// Решение 1
// const findNumber_5 = (start, end) => {
//     const array = [];
//     for(let i = start; i <= end; i++){
//         array.push(i);
//     }
//     return array.join(',')
//     .replace(/\b[0-9]?5\b/gi, '')
//     .split(',')
//     .filter((elem) => elem !== '').length;
// }
// console.log(findNumber_5(3,20)); // 16
// console.log(findNumber_5(1,20)); // 18
// console.log(findNumber_5(1,30)); // 27

// Решение 2
// const findNumber_5 = (start, end) => {
//   let i = start;
//   const arr = [];
//   while (i <= end) {
//     arr.push(i);
//     i++;
//   }
//   return arr.filter((elem) => !/\b[0-9]?5\b/gi.test(elem)).length;
// };
// console.log(findNumber_5(3, 20)); // 16
// console.log(findNumber_5(1, 20)); // 18
// console.log(findNumber_5(1, 30)); // 27


// Решение 3
// const findNumber_5  = (start, end) => {
//     let count  = 1;
//     const arr = [];
//     for(let i = start; i <= end; i++){
//     arr.push(i);
//     }
//      return arr.map((elem) => !/5/.test(elem)).filter((elem) => elem === true).length
   
// }
// console.log(findNumber_5(3, 20)); // 16
// console.log(findNumber_5(1, 20)); // 18
// console.log(findNumber_5(1, 30)); // 27

// Решение 4    
// const findNumber_5 = (start, end) => {
//     let count = 0;
//     const arr = [];
//     for(let i = start; i <= end; i++){arr.push(i)};
//       arr.forEach((elem) => /\b\d?5\b/gi.test(elem) ? count++ : elem);
//       return arr.length  - count;
//   };
//   console.log(findNumber_5(3,20)); // 16
//   console.log(findNumber_5(1, 20)); // 18
// console.log(findNumber_5(1, 30)); // 27
