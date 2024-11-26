# Correct password
correct_password = "secret123"

# while loop that continues to ask for the password until it's correct
while True:
    # Ask the user to input a password
    user_input = input("Please enter the password: ")

    # Check if the entered password is correct
    if user_input == correct_password:
        print("Access granted!")
        break  # Exit the loop when the correct password is entered
    else:
        print("Incorrect password, try again.")
