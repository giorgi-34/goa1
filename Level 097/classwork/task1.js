def count_words(sentence):
    # strip() აბრუნებს სტრინგს ბალიშების გარეშე თავიდან და ბოლოს
    # split() იყენებს ჭრილებს (default whitespace) სიტყვებად
    words = sentence.strip().split()
    return len(words)

# მაგალითები
print(count_words("   Hello world  "))         # 2
print(count_words("Python   is   fun"))       # 3
print(count_words("   This  is   a test   ")) # 4
