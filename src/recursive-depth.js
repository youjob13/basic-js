const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  constructor() {
    this.depth = 1;
    this.depthArr = [];
  }

  calculateDepth(arr, firstCall = true) {
    if (firstCall) {
      this.depth = 1;
      this.depthArr.length = 0;
    }

    arr.forEach((elem) => {
      if (elem instanceof Array) {
        this.depth++;
        this.calculateDepth(elem, false);
      }
    });

    this.depthArr.push(this.depth);
    this.depth--;

    return Math.max(...this.depthArr);
  }
};
