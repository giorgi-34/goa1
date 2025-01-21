def count_word_occurrences(text, word):
    # Convert the text to lowercase to handle case insensitivity
    text_lower = text.lower()
    
    # Split the text into a list of words
    words = text_lower.split()
    
    # Count the occurrences of the specified word
    count = words.count(word.lower())
    
    return count

# Example usage:
text = input("Please enter the text: ")
word = input("Please enter the word to count: ")

# Get the count of the specified word
occurrences = count_word_occurrences(text, word)

print(f"The word '{word}' appears {occurrences} times in the text.")
