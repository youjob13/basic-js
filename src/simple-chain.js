const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(val = " ") {
    this.chain.push(`( ${String(val)} )`);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position <= 0 ||
      (position ^ 0) !== position ||
      position > this.getLength()
    ) {
      this.chain.length = 0;
      throw new Error("THROWN");
    }
    this.chain = this.chain.filter((item, index) => index + 1 !== position);
    return this;
  },
  finishChain() {
    const completedChain = this.chain.join("~~");
    this.chain.length = 0;
    return completedChain;
  },
};
module.exports = chainMaker;
