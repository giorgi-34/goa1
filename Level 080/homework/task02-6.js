// 1) Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  let countPos = 0;
  let sumNeg = 0;
  for (let n of input) {
    if (n > 0) countPos++;
    else sumNeg += n;
  }
  return [countPos, sumNeg];
}

// 2) Fake binary
function fakeBin(x){
  return x.split('').map(n => n < '5' ? '0' : '1').join('');
}

// 3) Printer Errors
function printerError(s) {
  let errors = s.split('').filter(c => c > 'm').length;
  return errors + "/" + s.length;
}

// 4) Remove duplicates from list
function distinct(a) {
  return [...new Set(a)];
}

// 5) Who's Online?
function whosOnline(friends) {
  let online = {online: [], away: [], offline: []};
  friends.forEach(f => {
    if (f.status === "online" && f.lastActivity <= 10) online.online.push(f.username);
    else if (f.status === "online" && f.lastActivity > 10) online.away.push(f.username);
    else online.offline.push(f.username);
  });
  return online;
}

// --- ტესტები ---

console.log(countPositivesSumNegatives([1,2,3,-4,-5,-6])); // [3, -15]
console.log(fakeBin("45385593107843568")); // "01011110001100111"
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")); // "8/22"
console.log(distinct([1,2,2,3,4,4,5])); // [1,2,3,4,5]
console.log(whosOnline([
  {username: "a", status: "online", lastActivity: 5},
  {username: "b", status: "offline", lastActivity: 0},
  {username: "c", status: "online", lastActivity: 15}
]));
// {online:["a"], away:["c"], offline:["b"]}
