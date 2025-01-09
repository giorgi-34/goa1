def even_or_odd(number):
    # Checking if the number is even or odd
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

# Example usage:
result = even_or_odd(7)
print(f"The number 7 is {result}.")  # Output: The number 7 is Odd.

result = even_or_odd(10)
print(f"The number 10 is {result}.")  # Output: The number 10 is Even.
