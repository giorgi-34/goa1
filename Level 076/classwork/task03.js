function pigIt(str) {
  return str.split(" ").map(word => {
    // თუ სიმბოლოა სიტყვა და არა ნიშანი
    if (/^[a-zA-Z]+$/.test(word)) {
      return word.slice(1) + word[0] + "ay";
    } else {
      return word; // სიმბოლოებს ვტოვებთ უცვლელად
    }
  }).join(" ");
}
