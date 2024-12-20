
my_list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]


index = int(input("5: "))


if 0 <= index < len(my_list):
    print(f"სიის ინდექს {index} - ელემენტი: {my_list[index]}")


elif -1 - len(my_list) <= index <= -1:
    print(f"სიის ინდექს {index} - ელემენტი: {my_list[index]}")
else:
    print("შეყვანილი რიცხვი არ შეესაბამება მოთხოვნილ მნიშვნელობებს")
