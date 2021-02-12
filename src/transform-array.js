const CustomError = require("../extensions/custom-error");

// module.exports =
function transform(arr) {
  if (arr.every((item) => typeof item === "number")) return arr;
  return arr
    .join(":")
    .replace(/--discard-next:\d+/gi, "")
    .replace(/:--discard-next:/gi, "")
    .replace(/\d+:--discard-prev/gi, "")
    .replace(/:--discard-prev:/gi, "")
    .replace(/(\d+):(--double-prev)/, "$1:$1")
    .replace(/:(--double-prev):/, "")
    .replace(/(--double-next):(\d+)/, "$2:$2")
    .replace(/:(--double-next):/, "")
    .split(":");
}

console.log(
  transform([1, 2, 3, "--double-next", 1337, "--discard-prev", 4, 5])
);
