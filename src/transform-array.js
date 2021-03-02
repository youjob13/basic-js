const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  function a(str, index, array) {
    if (str === "--discard-next") {
      if (index !== res.length - 1) {
        if (typeof res[index + 1] === "number") {
          res.splice(index + 1, 1);
        }
      } else {
        res.splice(index, 1);
      }
    }
    if (str === "--double-prev") {
      if (index !== 0) {
        if (typeof res[index - 1] === "number") {
          res.splice(index, 1, array[index - 1]);
        } else {
          res.splice(index, 1);
        }
      }
    }
    if (str === "--double-next") {
      if (index !== res.length - 1) {
        if (typeof res[index + 1] === "number") {
          res.splice(index, 1, array[index + 1]);
        } else {
          res.splice(index, 1);
        }
      }
    }
    if (str === "--discard-prev") {
      if (index !== 0) {
        if (typeof res[index - 1] === "number") {
          res.splice(index - 1, 1);
        }
      } else {
        res.splice(index, 1);
      }
    }
  }

  let res = [...arr];
  res.forEach((item, index, array) => {
    if (
      item === "--double-next" ||
      item === "--double-prev" ||
      item === "--discard-next" ||
      "--discard-prev"
    ) {
      a(item, index, array);
    }
  });
  return res.filter((item) => typeof item === "number");
};
