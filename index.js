module.exports = function(number, multiple) { //http://jsperf.com/round-to-nearest
  if(Math.sign(number) != Math.sign(multiple)) {
    return NaN;
  }
  return number+(multiple/2) - (number+(multiple/2)) % multiple;
};