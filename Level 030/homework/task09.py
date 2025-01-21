def capitalize_first_letter_of_each(strings_list):
    # Capitalize the first letter of each string in the list
    return [string.capitalize() for string in strings_list]

# Example usage:
lowercase_strings = ['hello', 'world', 'python', 'programming']
capitalized_strings = capitalize_first_letter_of_each(lowercase_strings)

print("Capitalized Strings:", capitalized_strings)
