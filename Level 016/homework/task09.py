# Correct username and password
correct_username = "admin"
correct_password = "secret123"

# while loop that continues until both username and password are correct
while True:
    # Ask the user to input a username
    username = input("gachex")

    # Ask the user to input a password
    password = input("giorgi11232")

    # Check if both username and password are correct
    if username == correct_username and password == correct_password:
        print("Access granted!")
        break  # Exit the loop if both username and password are correct
    else:
        print("Incorrect username or password, please try again.")
