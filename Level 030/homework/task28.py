def replace_spaces_with_underscores(input_string):
    # Replace all spaces with underscores
    return input_string.replace(" ", "_")

# Example usage:
input_string = input("Please enter a string: ")

# Replace spaces with underscores
modified_string = replace_spaces_with_underscores(input_string)

print("Modified string:", modified_string)
