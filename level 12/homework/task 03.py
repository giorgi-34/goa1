# 1.  გამოცდა: არის თუ არა რიცხვი დადებითი და სახლის ნომერი ლუწი
number = 25
house_number = 12
result1 = (number > 0) and (house_number % 2 == 0)  # number არის დადებითი და house_number არის ლუწი
print(f"number > 0 and house_number is even: {result1}")

# 2.  გამოცდა: არის თუ არა რიცხვი 10-ის მეტი ან 5-ზე ნაკლები
value = 7
result2 = (value > 10) or (value < 5)  # value არის ან 10-ზე მეტი ან 5-ზე ნაკლები
print(f"value > 10 or value < 5: {result2}")

# 3.  გამოცდა: არის თუ არა ასაკი 18-ზე მეტი და პასპორტი გვაქვს
age = 20
has_passport = True
result3 = (age > 18) and has_passport  # ასაკი 18-ზე მეტი და პასპორტი არსებობს
print(f"age > 18 and has_passport: {result3}")

# 4.  გამოცდა: არის თუ არა რიცხვი არასრულყოფილი (კარგად იყოფა 2-ზე, მაგრამ არა 4-ზე)
num = 6
result4 = (num % 2 == 0) and (num % 4 != 0)  # num-ი იყოფა 2-ზე, მაგრამ არ იყოფა 4-ზე
print(f"num % 2 == 0 and num % 4 != 0: {result4}")

# 5.  გამოცდა: არის თუ არა რიცხვი დამრეცი
height = 150
weight = 45
result5 = (height >= 140) and (weight >= 40)  # height >= 140 და weight >= 40
print(f"height >= 140 and weight >= 40: {result5}")

# 6.  გამოცდა: არის თუ არა ორი ციფრი ერთი და იგივე
digit1 = 8
digit2 = 8
result6 = (digit1 == digit2)  # digit1 და digit2 უნდა იყოს ერთი და იგივე
print(f"digit1 == digit2: {result6}")

# 7.  გამოცდა: უნდა იყოს თუ არა ასაკი 30-ზე ნაკლები ან დღევანდელი თარიღი ზაფხულში
current_month = 7  # ივლისი
age2 = 25
result7 = (age2 < 30) or (current_month in [6, 7, 8])  # ასაკი 30-ზე ნაკლები ან ზაფხული
print(f"age < 30 or current month is summer: {result7}")

# 8.  გამოცდა: უნდა იყოს თუ არა ერთი პირობა სიმართლე, მაგრამ არა ორივე
x = 10
y = 20
result8 = (x > 5) != (y < 15)  # ერთი პირობა სიმართლე, მაგრამ არა ორივე
print(f"(x > 5) != (y < 15): {result8}")

# 9.  გამოცდა: არის თუ არა რიცხვი ნამატრიან სერიის წევრი
number = 8
result9 = (number % 2 == 0) and (number % 4 == 0)  # რიცხვი არის დააჯექი სერიის წევრი (მატრიანია)
print(f"number is multiple of 4: {result9}")

# 10.  გამოცდა: განისაზღვროს რიცხვი შერჩეული ან პირველი
first_choice = "apple"
second_choice = "banana"
result10 = (first_choice == "apple") or (second_choice == "banana")  # არცერთი არც არაფერს
print(f"first choice is apple or second choice is banana: {result10}")
