def filter_positive_numbers(numbers):
    positive_numbers = []
    for num in numbers:
        if num > 0:
            positive_numbers.append(num)
    return positive_numbers

# Call the function with a list of integers
result = filter_positive_numbers([-5, 3, -2, 7, 0, -1])
print("Positive numbers:", result)
