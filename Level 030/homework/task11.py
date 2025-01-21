def find_python_position(sentence):
    # Find the position of the first occurrence of "Python"
    position = sentence.find("Python")
    return position

# Example usage:
sentence = input("Please enter a sentence: ")
position = find_python_position(sentence)

if position != -1:
    print(f"The word 'Python' first occurs at position: {position}")
else:
    print("The word 'Python' was not found in the sentence.")
