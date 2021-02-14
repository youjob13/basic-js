const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(val = true) {
    this.val = val;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890~`!@#$%^&*()_-=+/|}{][\"'><,.№;:".split(
      ""
    );
    this.punctuation = "1234567890~`!@#$%^&*()_-=+/|}{][\"'><,.№;: ".split("");
    this.keyArr = [];
    this.wordArr = [];
    this.currentIndex = 0;
    this.ans = [];
  }
  convertСharToIndex(word, key) {
    word = word.toUpperCase();
    key = key.toUpperCase();

    this.keyArr = key
      .split("")
      .map((item) => this.alphabet.findIndex((elem) => elem === item));
    this.wordArr = word
      .split("")
      .map((item) => this.alphabet.findIndex((elem) => elem === item));
  }
  createAnswer() {
    const answer = this.val ? this.ans : this.ans.reverse();
    this.ans = [];
    this.currentIndex = 0;
    return answer
      .map((item) => this.alphabet[item])
      .join("")
      .toUpperCase();
  }
  encrypt(word, key) {
    this.convertСharToIndex(word, key);

    this.wordArr.forEach((item) => {
      if (this.punctuation.includes(this.alphabet[item])) {
        this.ans.push(item);
      } else {
        if (this.currentIndex <= this.keyArr.length - 1) {
          this.ans.push((item + this.keyArr[this.currentIndex]) % 26);
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
          this.ans.push((item + this.keyArr[this.currentIndex]) % 26);
          this.currentIndex++;
        }
      }
    });

    return this.createAnswer();
  }
  decrypt(word, key) {
    this.convertСharToIndex(word, key);

    this.wordArr.forEach((item) => {
      if (this.punctuation.includes(this.alphabet[item])) {
        this.ans.push(item);
      } else {
        if (this.currentIndex <= this.keyArr.length - 1) {
          this.ans.push((item - this.keyArr[this.currentIndex] + 26) % 26);
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
          this.ans.push((item + 26 - this.keyArr[this.currentIndex]) % 26);
          this.currentIndex++;
        }
      }
    });
    return this.createAnswer();
  }
}

module.exports = VigenereCipheringMachine;
