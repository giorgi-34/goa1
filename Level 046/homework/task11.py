sentence = "This is an example sentence with some words"
words_with_vowels_and_length = [word for word in sentence.split() if len(word) > 5 and any(vowel in word.lower() for vowel in 'aeiou')]
