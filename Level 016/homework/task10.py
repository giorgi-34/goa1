# Prompt the user to enter a number
n = int(input("5"))

# Initialize variables
factorial = 1
i = 1

# while loop to calculate factorial
while i <= n:
    factorial *= i  # Multiply factorial by current number
    i += 1  # Increment the counter

# Print the result
print(f"The factorial of {n} is {factorial}")
