def check_if_uppercase(input_string):
    # Check if the string is in uppercase
    return input_string.isupper()

# Example usage:
input_string = input("Please enter a string: ")

# Check if the string is in uppercase and display the result
if check_if_uppercase(input_string):
    print("The string is in uppercase.")
else:
    print("The string is not in uppercase.")
