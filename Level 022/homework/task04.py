# 1. შევქმნათ სია 10 ელემენტით
my_list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

# 2. მიიღოთ ორი მთელი რიცხვი მომხმარებლისგან
num1 = int(input("შეიყვანეთ პირველი რიცხვი (num1): "))
num2 = int(input("შეიყვანეთ მეორე რიცხვი (num2): "))

# 3. დარწმუნდეთ, რომ num1 და num2 არ გადის სიის საზღვრებს
if num1 >= 0 and num1 < len(my_list) and num2 >= 0 and num2 < len(my_list):
    # 4. შეამოწმოთ მათი შედარება და განხორციელდეს slicing
    if num1 > num2:
        print(my_list[num2:num1])  # num1 მეტია num2-ზე
    elif num2 > num1:
        print(my_list[num1:num2])  # num2 მეტია num1-ზე
    else:
        print([])  # num1 და num2 ტოლია
else:
    print("შეიყვანეთ სწორი რიცხვები (0-დან 9-მდე).")

