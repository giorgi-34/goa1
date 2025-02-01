def sum_divisible_by_three():
    total_sum = 0
    for num in range(1, 101):
        if num % 3 == 0:
            total_sum += num
    return total_sum

# Call the function and print the result
result = sum_divisible_by_three()
print("Total sum of numbers divisible by 3:", result)
