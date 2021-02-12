const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  constructor() {
    this.currentCounter = 1;
    this.counterArr = [];
  }
  calculateDepth(arr, firstCall = true) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.currentCounter++;
        this.calculateDepth(arr[i], false);
      }
    }
    this.counterArr.push(this.currentCounter);
    this.currentCounter = 1;
    return Math.max.apply(null, this.counterArr);
  }
};
