// Функция RGB неполная. Завершите его так, чтобы передача десятичных значений RGB приводила к возврату шестнадцатеричного представления.
// Допустимые десятичные значения для RGB: 0–255.
// Любые значения, выходящие за пределы этого диапазона, должны быть округлены до ближайшего допустимого значения.

// Examples (input --> output):

// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

// const rgb = (r, g, b) => {
//   const min = 0;
//   const max = 255;

//   if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
//     r = Math.max(r, min);
//     r = Math.min(r, max);
//     g = Math.max(g, min);
//     g = Math.min(g, max);
//     b = Math.max(b, min);
//     b = Math.min(b, max);
//   }
//   r = r.toString(16).padStart(2, 0).toUpperCase();
//   g = g.toString(16).padStart(2, 0).toUpperCase();
//   b = b.toString(16).padStart(2, 0).toUpperCase();
//   return `${g}${g}${b}`;
// };
// console.log(rgb(255, 255, 255));
// console.log(rgb(255, 255, 300));
// console.log(rgb(0, 0, 0));
// console.log(rgb(148, 0, 211));



