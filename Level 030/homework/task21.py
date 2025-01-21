def check_if_all_lowercase(input_string):
    # Use islower() to check if all characters are lowercase
    return input_string.islower()

# Example usage:
input_string = input("Please enter a string: ")

# Check if all characters in the string are lowercase
if check_if_all_lowercase(input_string):
    print("All characters are lowercase.")
else:
    print("Not all characters are lowercase.")
