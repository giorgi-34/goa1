# Function to return the sum of all numeric values in a dictionary
def sum_numeric_values(d):
    total = 0
    for value in d.values():
        if isinstance(value, (int, float)):  # Check if the value is numeric
            total += value
    return total

# Creating a dictionary
person_info = {
    "age": 25,
    "salary": 50000,
    "height": 5.8,
    "weight": 70
}

# Calling the function and printing the result
result = sum_numeric_values(person_info)
print(f"The sum of all numeric values is: {result}")
