module.exports = function getZerosCount(number, base) {
  // a perfect example of StackOverflow Programming
  // a copy-translate-from-c solution
  // https://stackoverflow.com/questions/23202489/how-does-this-code-find-the-number-of-trailing-zeros-from-any-base-number-factor
  var i, p, c, k, zeroesCount;
  zeroesCount = number
  for (i = 2; i <= base; i++) {
    if (base % i == 0) {
      p = 0;
      while (base % i == 0) {
        p++;
        base = Math.floor(base / i);
      }
      c = 0;
      k = number;
      while (k / i > 0) {
        c += Math.floor(k / i);
        k = Math.floor(k / i);
      }
      zeroesCount = Math.min(zeroesCount, Math.floor(c / p));
    }
  }
  return zeroesCount;
}
