# მომხმარებლის სახელი
name = input("გთხოვთ, შეიყვანოთ თქვენი სახელი: ")

# არჩევანის მიღება
choice = input("შეიყვანეთ 'u' (uppercase) ან 'l' (lowercase): ")

# ქცევის მიხედვით სახელის დამუშავება
if choice == 'u':
    print(name.upper())
elif choice == 'l':
    print(name.lower())
else:
    print("wrong information")
