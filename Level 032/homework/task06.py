def insert_word(sentence, word, index):
    # Split the sentence into a list of words
    sentence_list = sentence.split()
    
    # Insert the word at the given index
    sentence_list.insert(index, word)
    
    # Join the list back into a sentence and return it
    return " ".join(sentence_list)

# Example usage
sentence = "Hello there, how are you?"
word_to_insert = "world"
index_to_insert = 1
new_sentence = insert_word(sentence, word_to_insert, index_to_insert)
print(new_sentence)
