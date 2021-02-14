const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = [...arr];
  res.forEach((item, index, array) => {
    if (item === "--discard-next") {
      if (index !== res.length - 1) {
        if (typeof res[index + 1] === "number") {
          res.splice(index + 1, 1);
        }
      } else {
        res.splice(index, 1);
      }
    }
    if (item === "--double-prev") {
      if (index !== 0) {
        if (typeof res[index - 1] === "number") {
          res.splice(index, 1, array[index - 1]);
        } else {
          res.splice(index, 1);
        }
      }
    }
    if (item === "--double-next") {
      if (index !== res.length - 1) {
        if (typeof res[index + 1] === "number") {
          res.splice(index, 1, array[index + 1]);
        } else {
          res.splice(index, 1);
        }
      }
    }
    if (item === "--discard-prev") {
      if (index !== 0) {
        if (typeof res[index - 1] === "number") {
          res.splice(index - 1, 1);
        }
      } else {
        res.splice(index, 1);
      }
    }
  });
  return res.filter((item) => typeof item === "number");
};
