// Решение 1
// const binaryConvertation = (int) => {
//   if (int < 0) {
//     return int;
//   }
//   const binary = int.toString(2);
//   const newArray = [];
//   for (let i = 8; i < 40; i += 8) {
//     newArray.push(binary.slice(i - 8, i));
//   }
//   let str = "";
//   for (let i = 0; i < newArray.length; i++) {
//     if (newArray[i] === "") {
//       newArray[i] = 0;
//       str += newArray[i] + ".";
//     } else {
//       str += parseInt(newArray[i], 2) + ".";
//     }
//   }
//   return str.replace(/\.$/, "");
// };
// console.log(binaryConvertation(56557)); // 220.237.0.0


// Решение 2
// const binaryConvertation = (int) => {
//   if (int < 0) {
//     return int;
//   }
//   const binary = int.toString(2).padStart(32, "0"); // 0000 0000 0000 0000 1101 1100 1110 1101
//   const newArray = [];
//   for (let i = 0; i < 32; i += 8) {
//     newArray.push(binary.slice(i, i + 8));
//   }
//   let str = newArray
//     .map((segment) => parseInt(segment, 2))
//     .join(".")
//     .split(".")
//     .reverse().join('.');
//   return str;
// };
// console.log(binaryConvertation(56557));
