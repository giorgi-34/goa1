const isSquare = n => n >= 0 && Math.sqrt(n) % 1 === 0;



function getMiddle(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s[mid];
}

function isIsogram(str) {
  const lowerStr = str.toLowerCase();
  return new Set(lowerStr).size === lowerStr.length;
}



function XO(str) {
  const s = str.toLowerCase();
  return s.split('x').length === s.split('o').length;
}



String.prototype.toJadenCase = function() {
  return this.replace(/\b\w/g, char => char.toUpperCase());
};
