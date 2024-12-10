# Take two integers as input from the user
start = int(input("Enter the starting number: "))
end = int(input("Enter the ending number: "))

# Initialize the sum variable
total_sum = 0

# Use a loop to calculate the sum of numbers between start and end (inclusive)
for num in range(start, end + 1):
    total_sum += num

# Print the result
print("The sum of numbers between", start, "and", end, "is:", total_sum)
