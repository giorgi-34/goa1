def is_completely_lowercase(input_string):
    # Check if the string is completely in lowercase
    return input_string.islower()

# Example usage:
input_string = input("Please enter a string: ")

# Check if the string is completely in lowercase
if is_completely_lowercase(input_string):
    print("The string is completely in lowercase.")
else:
    print("The string is not completely in lowercase.")
