const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: "",
  getLength() {
    return this.chain.replace(/\D/gi, "").split("").length;
  },
  addLink(val = " ") {
    this.chain += this.chain ? `~~( ${val} )` : `( ${val} )`;
    return this;
  },
  removeLink(val) {
    if (typeof val !== "string") throw new CustomError("Not implemented");
    this.chain = this.chain
      .split(/~~/)
      .filter((item, index) => index + 1 !== val)
      .join("~~");
    return this;
  },
  reverseChain() {
    this.chain = this.chain.split(/~~/).reverse().join("~~");
    return this;
  },
  finishChain() {
    return this.chain;
  },
};
module.exports = chainMaker;
