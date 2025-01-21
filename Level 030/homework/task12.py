def find_substring_index(main_string, substring):
    # Find the position of the first occurrence of the substring
    position = main_string.find(substring)
    return position

# Example usage:
main_string = input("Please enter the main string: ")
substring = input("Please enter the substring to search for: ")

position = find_substring_index(main_string, substring)

if position != -1:
    print(f"The substring '{substring}' first occurs at position: {position}")
else:
    print(f"The substring '{substring}' was not found in the main string.")
