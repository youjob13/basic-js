const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
   	if (arr.every((item) => typeof item === "number")) return arr;
    let res;
    arr.forEach((item, index, array) => {
      if (item === "--double-next") {
        if (index === array.length - 1) {
          res = [...arr.slice(0, array.length - 1)];
        } else {
          res = [
            ...arr.slice(0, index),
            array[index + 1],
            ...arr.slice(index + 1),
          ];
        }
      }
      if (item === "--double-prev") {
        if (index === 0) {
          res = [...arr.slice(1, array.length)];
        } else {
          res = [
            ...arr.slice(0, index),
            array[index - 1],
            ...arr.slice(index + 1),
          ];
        }
      }
      if (item === "--discard-next") {
        if (index === array.length - 1) {
          res = [...arr.slice(0, array.length - 1)];
        } else {
          res = [...arr.slice(0, index), ...arr.slice(index + 2)];
        }
      }
      if (item === "--discard-prev") {
        if (index === 0) {
          res = [...arr.slice(1, array.length)];
        } else {
          res = [...arr.slice(0, index - 1), ...arr.slice(index + 1)];
        }
      }
    });
    if (arr.every((item) => typeof item === "number")) return res;
    else return transform(res);
};
