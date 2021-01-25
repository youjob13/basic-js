const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === "--discard-next") {
  //     return transform([...arr.slice(0, i), ...arr.slice(i + 2)]);
  //   }
  //   if (arr[i] === "--discard-prev") {
  //     return transform([...arr.slice(0, i - 1), ...arr.slice(i + 1)]);
  //   }
  //   if (arr[i] === "--double-prev") {
  //     return transform([
  //       ...arr.slice(0, i),
  //       (arr[i] = arr[i - 1]),
  //       ...arr.slice(i + 1),
  //     ]);
  //   }
  //   if (arr[i] === "--double-next") {
  //     return transform([
  //       ...arr.slice(0, i),
  //       (arr[i] = arr[i + 1]),
  //       ...arr.slice(i + 1),
  //     ]);
  //   }
  // }
  // return arr;
};
