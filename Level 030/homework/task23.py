def is_only_lowercase(input_string):
    # Check if the string contains only lowercase letters
    return input_string.islower() and input_string.isalpha()

# Example usage:
input_string = input("Please enter a string: ")

# Verify if the string contains only lowercase letters
if is_only_lowercase(input_string):
    print("The string contains only lowercase letters.")
else:
    print("The string does not contain only lowercase letters.")
