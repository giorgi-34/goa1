// ობიექტის შექმნა
const person = {
  name: "გიორგი",
  surname: "მამულაშვილი",
  academy: "Frontend Academy",
  city: "თბილისი",
  role: "მოსწავლე",
  favColor: "ლურჯი",
  isStudent: true,

  // მეთოდი: სრული სახელი
  fullName: function() {
    console.log("სრული სახელი:", this.name, this.surname);
  },

  // მეთოდი: საყვარელი ფერი
  showFavColor: function() {
    console.log("საყვარელი ფერი:", this.favColor);
  }
};

// 1. დაბეჭდე მთლიანი ობიექტი
console.log("მთლიანი ობიექტი:", person);

// 2. დაბეჭდე კონკრეტული კუთვნილება (მაგ: city)
console.log("ქალაქი:", person.city);

// 3. გამოიძახე ობიექტის მეთოდი (მაგ: fullName)
person.fullName();

// 4. შეცვალე favColor და დაბეჭდე
person.favColor = "წითელი";
console.log("განახლებული საყვარელი ფერი:", person.favColor);

// სურვილისამებრ გამოიძახე მეორე მეთოდიც
person.showFavColor();
