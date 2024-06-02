// Решение 1
// const solution = (str, ending) => {
//     return str.toLowerCase().slice(ending.length) === ending.toLowerCase();
// };

// console.log(solution("ScriPt", "ipt")); //  true
// console.log(solution("ScriPt", "ift")); // false

// Решение 2

// const solution = (str, ending) => {
//     return str.toLowerCase().slice(-ending.length) === ending
// }
// console.log(solution("ScriPt", "ipt")); //  true
// console.log(solution("ScriPt", "ift")); // false

// Решение 3

// const alphabetLower = "abcdefghijklmnopqrstuvwxyz";  // 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122
// let alphabetUper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90

// const solution = (str, ending) => {
//   let string = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
//       string += String.fromCharCode(str.charCodeAt(i) + 32);
//     } else {
//       string += str[i];
//     }
//   }
//   let result = '';
//   for(let i = ending.length; i < string.length; i++){
//     result += string[i];
//   }
//   return result === ending
// };
// console.log(solution("ScriPt", "ipt")); //  true
// console.log(solution("ScriPt", "ift")); // false
