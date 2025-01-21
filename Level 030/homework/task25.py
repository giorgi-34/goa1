def is_all_uppercase(input_string):
    # Check if the string consists entirely of uppercase letters
    return input_string.isupper()

# Example usage:
input_string = input("Please enter a string: ")

# Check if the string is entirely uppercase
if is_all_uppercase(input_string):
    print("The string consists entirely of uppercase letters.")
else:
    print("The string does not consist entirely of uppercase letters.")
