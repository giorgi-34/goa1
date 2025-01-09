def find_maximum(numbers):
    # Assuming the first number is the maximum
    maximum = numbers[0]
    
    # Iterate through the list to find the maximum value
    for num in numbers:
        if num > maximum:
            maximum = num
    
    return maximum

# Example usage:
numbers = [3, 5, 7, 2, 8, 1]
result = find_maximum(numbers)
print(f"The maximum value is: {result}")  # Output: The maximum value is: 8
