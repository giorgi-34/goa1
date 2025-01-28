def reverse_and_format(input_string):
    # Reversing the string
    reversed_string = input_string[::-1]
    
    # Returning the reversed string within a sentence
    return f"The reversed string is: {reversed_string}"

# Example usage
input_text = "hello"
result = reverse_and_format(input_text)
print(result)
