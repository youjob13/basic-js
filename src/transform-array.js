const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = [];
  arr.forEach((item, index) => {
    if (item === "--discard-prev" && arr[index - 2] !== "--discard-next") {
      res.pop();
    } else if (item === "--double-prev") {
      if (index !== 0 && arr[index - 2] !== "--discard-next") {
        res.push(arr[index - 1]);
      }
    } else if (arr[index - 1] === "--double-next") {
      res.push(item);
      res.push(item);
    } else if (
      "--double-next" === item ||
      arr[index - 1] === "--discard-next"
    ) {
      return;
    } else if (
      item !== "--double-next" &&
      item !== "--discard-next" &&
      item !== "--double-prev" &&
      item !== "--discard-prev"
    ) {
      res.push(item);
    }
  });
  return res;
};
