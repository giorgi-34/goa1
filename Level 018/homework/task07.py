# Loop 5 times to ask the user to enter a number
for i in range(5):
    # Get the number from the user
    num = int(input(f"Enter number {i+1}: "))
    
    # Check if the number is even or odd
    if num % 2 == 0:
        print(f"The number {num} is even.")
    else:
        print(f"The number {num} is odd.")
