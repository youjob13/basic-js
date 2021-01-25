const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(val = true) {
    this.val = val;
    this.alphabet = [];
    this.arr = [];
    this.arr2 = [];
    this.currentIndex = 0;
    this.ans = [];
  }
  encrypt(word, key) {
    if (word === undefined || key === undefined)
      throw new CustomError("THROWN");
    word = word.toUpperCase();
    key = key.toUpperCase();
    for (let i = 65; i <= 90; i++) {
      this.alphabet.push(String.fromCodePoint(i));
    }
    this.alphabet.push(" ");
    this.alphabet.push(":");
    this.alphabet.push("1");
    this.alphabet.push("2");
    this.alphabet.push(",");
    this.alphabet.push("3");
    this.alphabet.push("4");
    this.alphabet.push("5");
    this.alphabet.push("6");
    this.alphabet.push("7");
    this.alphabet.push("8");
    this.alphabet.push("9");
    this.alphabet.push("0");
    this.alphabet.push("!");
    this.alphabet.push(".");
    this.alphabet.push("(");
    this.alphabet.push(")");
    this.alphabet.push("^");
    this.alphabet.push("[");
    this.alphabet.push("]");
    key.split("").forEach((item) => {
      this.alphabet.forEach((elem, i) => {
        if (item === elem) this.arr.push(i);
      });
    });

    word.split("").forEach((item) => {
      this.alphabet.forEach((elem, i) => {
        if (item === elem) this.arr2.push(i);
      });
    });

    this.arr2.forEach((item, index) => {
      if (
        item === 26 ||
        item === 27 ||
        item === 28 ||
        item === 29 ||
        item === 30 ||
        item === 31 ||
        item === 32 ||
        item === 33 ||
        item === 34 ||
        item === 35 ||
        item === 36 ||
        item === 37 ||
        item === 38 ||
        item === 39 ||
        item === 40 ||
        item === 41 ||
        item === 42 ||
        item === 43 ||
        item === 44 ||
        item === 45
      ) {
        this.ans.push(item);
      } else {
        if (this.currentIndex <= this.arr.length - 1) {
          this.ans.push((item + this.arr[this.currentIndex]) % 26);
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
          this.ans.push((item + this.arr[this.currentIndex]) % 26);
          this.currentIndex++;
        }
      }
    });
    this.ans = this.val ? this.ans : this.ans.reverse();

    return this.ans
      .map((item, index) => this.alphabet[item])
      .join("")
      .toUpperCase();
  }
  decrypt(word, key) {
    if (word === undefined || key === undefined)
      throw new CustomError("THROWN");

    word = word.toUpperCase();
    key = key.toUpperCase();

    for (let i = 65; i <= 90; i++) {
      this.alphabet.push(String.fromCodePoint(i));
    }
    this.alphabet.push(" ");
    this.alphabet.push(":");
    this.alphabet.push("1");
    this.alphabet.push("2");
    this.alphabet.push(",");
    this.alphabet.push("3");
    this.alphabet.push("4");
    this.alphabet.push("5");
    this.alphabet.push("6");
    this.alphabet.push("7");
    this.alphabet.push("8");
    this.alphabet.push("9");
    this.alphabet.push("0");
    this.alphabet.push("!");
    this.alphabet.push(".");
    this.alphabet.push("(");
    this.alphabet.push(")");
    this.alphabet.push("^");
    this.alphabet.push("[");
    this.alphabet.push("]");
    key.split("").forEach((item) => {
      this.alphabet.forEach((elem, i) => {
        if (item === elem) this.arr.push(i);
      });
    });

    word.split("").forEach((item) => {
      this.alphabet.forEach((elem, i) => {
        if (item === elem) this.arr2.push(i);
      });
    });

    this.arr2.forEach((item, index) => {
      if (
        item === 26 ||
        item === 27 ||
        item === 28 ||
        item === 29 ||
        item === 30 ||
        item === 31 ||
        item === 32 ||
        item === 33 ||
        item === 34 ||
        item === 35 ||
        item === 36 ||
        item === 37 ||
        item === 38 ||
        item === 39 ||
        item === 40 ||
        item === 41 ||
        item === 42 ||
        item === 43 ||
        item === 44 ||
        item === 45
      ) {
        this.ans.push(item);
      } else {
        if (this.currentIndex <= this.arr.length - 1) {
          this.ans.push((item - this.arr[this.currentIndex] + 26) % 26);
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
          this.ans.push((item + 26 - this.arr[this.currentIndex]) % 26);
          this.currentIndex++;
        }
      }
    });
    this.ans = this.val ? this.ans : this.ans.reverse();
    return this.ans
      .map((item, index) => this.alphabet[item])
      .join("")
      .toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
