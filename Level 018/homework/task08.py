# Correct password
correct_password = "Goa best"

# Initialize counter for incorrect attempts
incorrect_attempts = 0

# While loop to keep asking for password until it's correct
while True:
    # Ask the user to input a password
    password = input("Enter the password: ")

    # Check if the entered password is correct
    if password == correct_password:
        print("Access granted!")
        break  # Exit the loop if the password is correct
    else:
        incorrect_attempts += 1
        print("Incorrect password. Try again.")

# Print the count of incorrect attempts
print(f"Incorrect password attempts: {incorrect_attempts}")
