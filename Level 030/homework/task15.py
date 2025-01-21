def get_strings_lengths(strings_list):
    # Use list comprehension to get the length of each string
    return [len(string) for string in strings_list]

# Example usage:
strings = ["apple", "banana", "cherry", "date"]
lengths = get_strings_lengths(strings)

print("Lengths of the strings:", lengths)
