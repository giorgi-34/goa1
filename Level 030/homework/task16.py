def count_the(paragraph):
    # Convert the paragraph to lowercase to handle case insensitivity
    paragraph_lower = paragraph.lower()
    
    # Count the occurrences of the word "the"
    count = paragraph_lower.split().count("the")
    
    return count

# Example usage:
paragraph = input("Please enter a paragraph: ")
the_count = count_the(paragraph)

print(f"The word 'the' appears {the_count} times in the paragraph.")
