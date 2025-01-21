def convert_to_uppercase(strings_list):
    # Convert each string in the list to uppercase
    return [string.upper() for string in strings_list]

# Example usage:
lowercase_list = ['hello', 'world', 'python', 'programming']
uppercase_list = convert_to_uppercase(lowercase_list)

print("Uppercase List:", uppercase_list)
