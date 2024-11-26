import random


my_num = random.randint(1, 10)


counter = 0


while True:
    
    user_guess = int(input("6 "))
    
  
    counter += 1
    
    
    if user_guess == my_num:
        print(f"You guessed it! Correct number was {my_num}.")
        print(f"It took you {counter} tries.")
        break
    else:
        print("Incorrect guess, try again.")
