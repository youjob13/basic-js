const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: "",
  getLength() {
    return this.chain.split(/~~/).length;
  },
  addLink(val) {
    this.chain += this.chain ? `~~( ${val} )` : `( ${val} )`;
    return this;
  },
  reverseChain() {
    this.chain = this.chain.split(/~~/).reverse().join("~~");
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position <= 0 ||
      (position ^ 0) !== position ||
      position > this.getLength()
    ) {
      throw new Error("THROWN");
    } else {
      this.chain = this.chain
        .split(/~~/)
        .filter((item, index) => index + 1 !== position)
        .join("~~");
      return this;
    }
  },
  finishChain() {
    const completedChain = this.chain;
    this.chain = "";
    return completedChain;
  },
};
module.exports = chainMaker;
