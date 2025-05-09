def find_char_index(input_string, char):
    # Use the find() method to get the index of the character
    return input_string.find(char)

# Example usage:
input_string = input("Please enter a string: ")
char = input("Please enter the character to find: ")

# Get the index of the specified character
index = find_char_index(input_string, char)

if index != -1:
    print(f"The character '{char}' first occurs at index: {index}")
else:
    print(f"The character '{char}' was not found in the string.")
