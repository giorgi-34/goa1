def check_even_odd(numbers):
    for num in numbers:
        if num % 2 == 0:
            print(f"{num} is Even")
        else:
            print(f"{num} is Odd")

# Call the function with a list of numbers
check_even_odd([1, 2, 3, 4, 5, 6])
