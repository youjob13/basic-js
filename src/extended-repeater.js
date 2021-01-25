const CustomError = require("../extensions/custom-error");

module.exports = function repeater(
  str,
  {
    repeatTimes = 1,
    additionRepeatTimes = 1,
    addition = "",
    additionSeparator = "|",
    separator = "+",
  }
) {
  const obj = {
    currentStr: String(str),
    arrStr: [],
  };
  for (let i = 0; i < repeatTimes; i++) {
    for (let j = 0; j < additionRepeatTimes; j++) {
      j < additionRepeatTimes - 1
        ? (str += String(addition) + String(additionSeparator))
        : (str += String(addition));
    }
    if (i < repeatTimes - 1) str += String(separator);
    obj.arrStr.push(str);
    str = obj.currentStr;
  }
  if (!repeatTimes) return str;
  else return obj.arrStr.join("");
};
