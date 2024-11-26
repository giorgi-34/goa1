
correct_password = "mySecret123"

counter = 0


while True:
   
    user_input = input("gg11gg22")

  
    counter += 1
    if user_input == correct_password:
        print("Access granted")
        print(f"პაროლი სწორი {counter} ცდაში იყო.")
        break 
    else:
        print("პაროლი არასწორია, სცადეთ კიდევ ერთხელ.")
