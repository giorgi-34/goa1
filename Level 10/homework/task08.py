# ორი რიცხვის შეყვანა
num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))

# გამოთვლები
sum_result = num1 + num2            # ჯამი
difference = num1 - num2             # სხვაობა
product = num1 * num2                # ნამრავლი
quotient = num1 / num2               # განაყოფი
power1 = num1 ** num2                # პირველი რიცხვი ხარისხად მეორეზე
power2 = num2 ** num1                # მეორე რიცხვი ხარისხად პირველზე

# შედეგების გამოტანა
print("ჯამი:", sum_result)
print("სხვაობა:", difference)
print("ნამრავლი:", product)
print("განაყოფი:", quotient)
print("პირველი რიცხვი ხარისხად მეორეზე:", power1)
print("მეორე რიცხვი ხარისხად პირველზე:", power2)