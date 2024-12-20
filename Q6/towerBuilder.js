// Задача: построить башню
// Постройте башню в форме пирамиды, учитывая положительное целое число этажей. Башенный
// блок представлен символом «*».

// Требуемый результат
// Например, башня в 3 этажа выглядит так:

// "  *  ",
// " *** ",
// "*****"

// Решение 1
// const towerBuilder = (n) => {
//   const result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(" ".repeat(n - i) + "*".repeat(2 * i - 1) + "\n");
//   }
//   let str = "";
//   for (let i = 0; i < result.length; i++) {
//     str += result[i];
//   }
//   return str;
// };
// console.log(towerBuilder(3));
// console.log(towerBuilder(5));
// console.log(towerBuilder(7));

// Решение 2
// const towerBuilder = (n) => {
//   const array = [];
//   for (let i = 1; i <= n; i++) {
//     let spaces = " ".repeat(n - i);
//     let stars = "*".repeat(2 * i - 1);
//     array.push(spaces + stars + spaces);
//   }
//   return array.join("\n")
// };
// console.log(towerBuilder(3));
// console.log(towerBuilder(5));
// console.log(towerBuilder(7));