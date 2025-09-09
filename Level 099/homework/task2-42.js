// 2-6) find()
let arrStr = ["Banana", "Apple", "Avocado"];
console.log("2) First string starting with A:", arrStr.find(s => s.startsWith("A")));

let users = [{name:"Tom", age:25}, {name:"Bob", age:35}];
console.log("3) First user age > 30:", users.find(u => u.age > 30));

let words = ["hi", "banana", "cat", "elephant"];
console.log("4) First word >5 chars:", words.find(w => w.length > 5));

let products = [{name:"Pen", price:5}, {name:"Book", price:25}, {name:"Eraser", price:2}];
console.log("5) First product <20:", products.find(p => p.price < 20));

let students = [{name:"Ana", grade:"B"}, {name:"Luka", grade:"A"}];
console.log("6) First student grade A:", students.find(s => s.grade === "A"));


// 7-11) findIndex()
let nums1 = [10, 5, -3, 7];
console.log("7) First number <0 index:", nums1.findIndex(n => n < 0));

let verbs = ["run", "playing", "eat"];
console.log("8) First string ending with ing index:", verbs.findIndex(v => v.endsWith("ing")));

let users2 = [{isActive:false}, {isActive:true}, {isActive:false}];
console.log("9) First isActive true index:", users2.findIndex(u => u.isActive));

let nums2 = [3, 7, 20, 25];
console.log("10) First multiple of 10 index:", nums2.findIndex(n => n % 10 === 0));

let fruits = ["apple", "mango", "peach", "grape"];
console.log("11) First fruit length 5 index:", fruits.findIndex(f => f.length === 5));


// 12-16) findLast()
let nums3 = [50, 120, 80, 200];
console.log("12) Last number >100:", nums3.findLast(n => n > 100));

let arrStr2 = ["cat", "tree", "lion", "snake"];
console.log("13) Last string with 'e':", arrStr2.findLast(s => s.includes("e")));

let users3 = [{age:30}, {age:20}, {age:18}];
console.log("14) Last user age<25:", users3.findLast(u => u.age < 25));

let nums4 = [2, 4, 7, 10, 15];
console.log("15) Last odd number:", nums4.findLast(n => n % 2 !== 0));

let arrStr3 = ["dog", "elephant", "owl"];
console.log("16) Last word starts with vowel:", arrStr3.findLast(w => /^[aeiou]/i.test(w)));


// 17-21) findLastIndex()
let nums5 = [40, 60, 80, 55];
console.log("17) Last number >50 index:", nums5.findLastIndex(n => n > 50));

let arrStr4 = ["Sam", "Alex", "Steve", "Mike"];
console.log("18) Last string starting with S index:", arrStr4.findLastIndex(s => s.startsWith("S")));

let users4 = [{isActive:false}, {isActive:true}, {isActive:true}];
console.log("19) Last isActive true index:", users4.findLastIndex(u => u.isActive));

let nums6 = [4, 9, 15, 18, 20];
console.log("20) Last divisible by 3 index:", nums6.findLastIndex(n => n % 3 === 0));

let fruits2 = ["pear", "kiwi", "plum", "lime"];
console.log("21) Last word length=4 index:", fruits2.findLastIndex(f => f.length === 4));


// 22-26) indexOf()
let nums7 = [10, 25, 30];
console.log("22) Index of 25:", nums7.indexOf(25));

let fruits3 = ["apple", "banana", "apple"];
console.log("23) Index of 'apple':", fruits3.indexOf("apple"));

let letters = ["a", "b", "c"];
console.log("24) Index of 'a':", letters.indexOf("a"));

let animals = ["dog", "cat", "lion"];
console.log("25) Index of 'cat':", animals.indexOf("cat"));

let nums8 = [5, 10, 50];
console.log("26) Index of 100 (not exist):", nums8.indexOf(100));


// 27-31) lastIndexOf()
let nums9 = [10, 20, 10, 30];
console.log("27) Last index of 10:", nums9.lastIndexOf(10));

let fruits4 = ["apple", "mango", "apple"];
console.log("28) Last index of 'apple':", fruits4.lastIndexOf("apple"));

let chars = ["a", "b", "a", "c"];
console.log("29) Last index of 'a':", chars.lastIndexOf("a"));

let animals2 = ["dog", "cat", "dog"];
console.log("30) Last index of 'dog':", animals2.lastIndexOf("dog"));

let nums10 = [0, 5, -1, 0];
console.log("31) Last index of 0:", nums10.lastIndexOf(0));


// 32-36) pop()
let nums11 = [1,2,3,4];
console.log("32) Removed last:", nums11.pop(), nums11);

let fruits5 = ["apple","banana","pear"];
console.log("33) Removed last fruit:", fruits5.pop(), fruits5);

let arr5 = [1,2,3];
while(arr5.length) console.log("34) Pop:", arr5.pop());

let users5 = [{id:1},{id:2},{id:3}];
console.log("35) Remove last user:", users5.pop(), users5);

let arr6 = [100,200,300];
let last = arr6.pop();
console.log("36) Stored last element:", last, arr6);


// 37-41) splice()
let arr7 = [1,2,3,4,5];
console.log("37) Remove first 2:", arr7.splice(0,2), arr7);

let fruits6 = ["apple","banana","cherry"];
fruits6.splice(2,0,"orange","grape");
console.log("38) Insert at index2:", fruits6);

let arr8 = ["a","b","c","d","e"];
arr8.splice(3,1,"mango");
console.log("39) Replace index3:", arr8);

let arr9 = [1,2,3,4,5,6,7];
arr9.splice(-3);
console.log("40) Remove last3:", arr9);

let arr10 = [10,20,40,50];
arr10.splice(2,0,30);
console.log("41) Insert number middle:", arr10);
