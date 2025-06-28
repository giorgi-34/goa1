function isIsogram(str) {
  str = str.toLowerCase(); // გარდავქმნათ ქვედა რეგისტრში
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false; // თუ რაიმე სიმბოლო მეორდება — არ არის იზოგრამა
      }
    }
  }
  return true; // თუ არცერთი სიმბოლო არ მეორდება
}
