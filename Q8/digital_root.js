// Задача: сумма цифр / цифровой корень
// Учитывая n, возьмите сумму цифр n. Если это значение имеет более одной цифры,
// продолжайте уменьшать таким образом, пока не будет получено однозначное число. Ввод
// будет неотрицательным целым числом.
// Требуемый результат

// 16 --> 1+6=7
// 942 --> 9+4+2=15 --> 1+5=6
// 132189 --> 1+3+2+1+8+9=24 --> 2+4=6
// 493193 --> 4+9+3+1+9+3=29 --> 2+9=11 --> 1+1=2

// Решение 1
// const digital_root = (n) => {
//   if (n < 10) {
//     return n;
//   }
//   const strN = String(n);
//   let sum = 0;
//   for (let i = 0; i < strN.length; i++) {
//     sum += parseInt(strN[i]);
//   }
//   return digital_root(sum);
// };
// console.log(digital_root("16")); // 7
// console.log(digital_root("942")); // 6
// console.log(digital_root("132189")); // 6
// console.log(digital_root("493193")); // 2

// Решение 2
// const digital_root = (n) => {
//     if(n < 10){
//         return n
//     }
//     return (n % 9)
// }
// console.log(digital_root("16")); // 7
// console.log(digital_root("942")); // 6
// console.log(digital_root("132189")); // 6
// console.log(digital_root("493193")); // 2

// Решение 3
// const digital_root = (n) => {
//   while (n > 9) {
//     n = ("" + n).split("").reduce((acum, elem) => {
//       return +acum + +elem;
//     });
//   }
//   return n;
// };
// console.log(digital_root("16")); // 7
// console.log(digital_root("942")); // 6
// console.log(digital_root("132189")); // 6
// console.log(digital_root("493193")); // 2
