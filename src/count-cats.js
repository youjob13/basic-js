const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce(
    (val, item) => item.filter((elem) => elem === "^^").length + val,
    0
  );
};
