const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members && members.constructor === Array) {
    return members
      .reduce(
        (val, item) =>
          typeof item === "string" ? item.trim()[0].toUpperCase() + val : val,
        ""
      )
      .split("")
      .sort()
      .join("")
      .trim();
  } else {
    return false;
  }
};
