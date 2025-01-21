def is_all_uppercase(input_string):
    # Check if the string is completely in uppercase
    return input_string.isupper()

# Example usage:
input_string = input("Please enter a string: ")

# Verify if all characters in the string are uppercase
if is_all_uppercase(input_string):
    print("The string contains only uppercase characters.")
else:
    print("The string does not contain only uppercase characters.")
