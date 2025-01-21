def find_hello_index(input_string):
    # Use the find() method to find the index of the first occurrence of "hello"
    return input_string.find("hello")

# Example usage:
input_string = input("Please enter a string: ")

# Find the index of the first occurrence of the word "hello"
index = find_hello_index(input_string)

if index != -1:
    print(f"The word 'hello' first occurs at index: {index}")
else:
    print("The word 'hello' was not found in the string.")
