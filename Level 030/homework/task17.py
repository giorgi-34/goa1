def count_char_occurrences(input_string, char):
    # Count the occurrences of the specified character in the string
    return input_string.count(char)

# Example usage:
input_string = input("Please enter a string: ")
char = input("Please enter the character to count: ")

# Count the occurrences of the character
occurrences = count_char_occurrences(input_string, char)

print(f"The character '{char}' appears {occurrences} times in the string.")
