def factorial(n):
    # Initialize the result to 1 (because factorial of 0 is 1)
    result = 1
    
    # Multiply result by each number from 1 to n
    for i in range(1, n + 1):
        result *= i
    
    return result

# Example usage:
num = 5
result = factorial(num)
print(f"The factorial of {num} is {result}")  # Output: The factorial of 5 is 120
