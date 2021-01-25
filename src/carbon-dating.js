const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity === "number" &&
    sampleActivity > 0 && sampleActivity < 3 &&
    !String(sampleActivity).includes('.')
  ) {
    return Math.ceil(
      Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD)
    );
  } else return false;
};
