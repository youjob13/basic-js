const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date && date !== 0) return "Unable to determine the time of year!";
  if (typeof date === "string") date = new Date(Date.parse(date));
  if (typeof date === "number") date = new Date(date);
  if (date.getMonth() === 11) return "winter";
  if (date.getMonth() === 0) return "winter";
  if (date.getMonth() === 1) return "winter";
  if (date.getMonth() === 2) return "spring";
  if (date.getMonth() === 3) return "spring";
  if (date.getMonth() === 4) return "spring";
  if (date.getMonth() === 5) return "summer";
  if (date.getMonth() === 6) return "summer";
  if (date.getMonth() === 7) return "summer";
  if (date.getMonth() === 8) return "fall";
  if (date.getMonth() === 9) return "fall";
  if (date.getMonth() === 10) return "fall";
};
