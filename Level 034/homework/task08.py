def find_maximum(numbers):
    max_num = numbers[0]  # Assume the first number is the max initially
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num

# Call the function with a list of numbers
result = find_maximum([3, 5, 7, 2, 8, 6])
print("The maximum number is:", result)
