# 2) Lambda function that adds 5 to a given number
add_five = lambda x: x + 5
print(add_five(10))  # Output: 15

# 3) Lambda function to multiply two numbers
multiply = lambda x, y: x * y
print(multiply(3, 4))  # Output: 12

# 4) Lambda function to check if a number is even
is_even = lambda x: x % 2 == 0
print(is_even(4))  # Output: True
print(is_even(7))  # Output: False

# 5) Lambda function to convert a list of temperatures from Celsius to Fahrenheit
celsius_to_fahrenheit = lambda c: (c * 9/5) + 32
temps_celsius = [0, 25, 50, 100]
temps_fahrenheit = list(map(celsius_to_fahrenheit, temps_celsius))
print(temps_fahrenheit)  # Output: [32.0, 77.0, 122.0, 212.0]

# 6) Lambda function that returns True if a string starts with the letter 'A'
starts_with_A = lambda s: s[0].lower() == 'a'
print(starts_with_A("Apple"))  # Output: True
print(starts_with_A("Banana"))  # Output: False

# 7) Use map() to add 10 to every number in a list
numbers = [1, 2, 3, 4, 5]
added_ten = list(map(lambda x: x + 10, numbers))
print(added_ten)  # Output: [11, 12, 13, 14, 15]

# 8) Use map() to convert a list of strings to uppercase
strings = ["hello", "world", "python"]
uppercase_strings = list(map(lambda x: x.upper(), strings))
print(uppercase_strings)  # Output: ['HELLO', 'WORLD', 'PYTHON']

# 9) Use map() to find the length of each word in a list of strings
words = ["apple", "banana", "cherry"]
word_lengths = list(map(lambda x: len(x), words))
print(word_lengths)  # Output: [5, 6, 6]

# 10) Use map() to square each number in a list
numbers = [1, 2, 3, 4, 5]
squared_numbers = list(map(lambda x: x ** 2, numbers))
print(squared_numbers)  # Output: [1, 4, 9, 16, 25]

# 11) Use map() to convert a list of integers to strings
numbers = [1, 2, 3, 4, 5]
string_numbers = list(map(lambda x: str(x), numbers))
print(string_numbers)  # Output: ['1', '2', '3', '4', '5']

# 12) Use map() to concatenate the string "Hello " to each name in a list of names
names = ["Alice", "Bob", "Charlie"]
greetings = list(map(lambda x: "Hello " + x, names))
print(greetings)  # Output: ['Hello Alice', 'Hello Bob', 'Hello Charlie']

# 13) Use map() to subtract 5 from every element in a list
numbers = [10, 20, 30, 40, 50]
subtracted_five = list(map(lambda x: x - 5, numbers))
print(subtracted_five)  # Output: [5, 15, 25, 35, 45]

# 14) Use map() to multiply each number in a list by 3
numbers = [1, 2, 3, 4, 5]
multiplied_by_three = list(map(lambda x: x * 3, numbers))
print(multiplied_by_three)  # Output: [3, 6, 9, 12, 15]

# 15) Use map() to convert a list of temperatures in Celsius to Fahrenheit (Again, with map())
temps_celsius = [0, 25, 50, 100]
temps_fahrenheit = list(map(celsius_to_fahrenheit, temps_celsius))
print(temps_fahrenheit)  # Output: [32.0, 77.0, 122.0, 212.0]

# 16) Use map() to check if numbers in a list are greater than 50
numbers = [10, 60, 40, 80, 30]
greater_than_50 = list(map(lambda x: x > 50, numbers))
print(greater_than_50)  # Output: [False, True, False, True, False]
# 17) Use filter() to keep only even numbers from a list
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # Output: [2, 4, 6, 8, 10]

# 18) Use filter() to select numbers greater than 10 from a list
numbers = [5, 10, 15, 20, 25, 30]
greater_than_ten = list(filter(lambda x: x > 10, numbers))
print(greater_than_ten)  # Output: [15, 20, 25, 30]

# 19) Use filter() to keep strings longer than 5 characters from a list of strings
strings = ["apple", "banana", "cherry", "kiwi", "grape"]
long_strings = list(filter(lambda x: len(x) > 5, strings))
print(long_strings)  # Output: ['banana', 'cherry']

# 20) Use filter() to remove empty strings from a list of strings
strings = ["apple", "", "banana", "", "cherry"]
non_empty_strings = list(filter(lambda x: x != "", strings))
print(non_empty_strings)  # Output: ['apple', 'banana', 'cherry']

# 21) Use filter() to select only positive numbers from a list
numbers = [-5, 10, 15, -3, 0, 8, -2]
positive_numbers = list(filter(lambda x: x > 0, numbers))
print(positive_numbers)  # Output: [10, 15, 8]

# 22) Use filter() to keep names that start with the letter 'A' from a list of names
names = ["Alice", "Bob", "Annie", "Charlie", "Andrew"]
names_starting_with_A = list(filter(lambda x: x[0].lower() == 'a', names))
print(names_starting_with_A)  # Output: ['Alice', 'Annie', 'Andrew']

# 23) Use filter() to get numbers divisible by 3 from a list
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
divisible_by_three = list(filter(lambda x: x % 3 == 0, numbers))
print(divisible_by_three)  # Output: [3, 6, 9]

# 24) Use filter() to keep words that contain the letter 'e' from a list of words
words = ["apple", "banana", "cherry", "kiwi", "grape"]
words_with_e = list(filter(lambda x: 'e' in x, words))
print(words_with_e)  # Output: ['apple', 'cherry', 'grape']

# 25) Use filter() to remove all None values from a list
values = [1, None, 2, None, 3, None]
non_none_values = list(filter(lambda x: x is not None, values))
print(non_none_values)  # Output: [1, 2, 3]

# 26) Use filter() to keep numbers that are less than or equal to 50 from a list
numbers = [10, 20, 30, 40, 50, 60, 70]
less_than_or_equal_50 = list(filter(lambda x: x <= 50, numbers))
print(less_than_or_equal_50)  # Output: [10, 20, 30, 40, 50]
