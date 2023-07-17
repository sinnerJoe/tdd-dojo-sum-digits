
module.exports = {
  sumDigits: (nr) => {
    if (isNaN(nr)) {
      throw new Error("Not a valid number")
    }
    if (!isFinite(nr)) {
      throw new Error("Infinity not supported")
    }
    return [...String(nr)].map((digit) => Number(digit)).filter(nr => !isNaN(nr)).reduce((acc, digit) => acc + digit, 0)
  }
}
