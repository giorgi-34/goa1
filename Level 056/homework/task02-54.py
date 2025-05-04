# 2) Print your name
print("John Doe")

# 3) Print a favorite quote
print('"The only limit to our realization of tomorrow is our doubts of today."')

# 4) Print multiple lines
print("Roses are red,")
print("Violets are blue,")
print("Coding is fun,")
print("And so are you!")

# 5) Print a simple math result
print(2 + 3)

# 6) Print a shape with symbols
print("*")
print("**")
print("***")
print("****")

# 7) Convert string to integer
num_str = "42"
num_int = int(num_str)
print(num_int)

# 8) Add two floats
float1 = 3.5
float2 = 2.5
result = float1 + float2
print(result)

# 9) Concatenate two strings
str1 = "Hello"
str2 = "World"
greeting = str1 + " " + str2
print(greeting)

# 10) Print data types
int_var = 10
str_var = "Python"
float_var = 3.14

print(type(int_var))
print(type(str_var))
print(type(float_var))
# 11) User input and type conversion
age = int(input("Enter your age: "))
print(f"Next year, you will be {age + 1} years old.")

# 12) Ask for your name
name = input("What is your name? ")
print(f"Hello, {name}!")

# 13) Ask for age and calculate next year’s age
age_now = int(input("How old are you? "))
print(f"Next year, you will be {age_now + 1} years old.")

# 14) Simple calculator: addition
num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))
print(f"The sum is {num1 + num2}.")

# 15) Favorite color
color = input("What is your favorite color? ")
print(f"Your favorite color is {color}!")

# 16) Check if the user is tall enough
height = int(input("Enter your height in cm: "))
if height > 150:
    print("You are tall enough!")
else:
    print("You are not tall enough yet!")

# 17) Print numbers from 1 to 5
for i in range(1, 6):
    print(i)

# 18) Print each letter of a string
word = "Python"
for letter in word:
    print(letter)

# 19) Sum of numbers 1 to 10
total = 0
for i in range(1, 11):
    total += i
print(f"The sum of numbers from 1 to 10 is {total}.")

# 20) Print a multiplication table (1 to 5)
for i in range(1, 6):
    print(f"2 x {i} = {2 * i}")
# 21) For loop: print all even numbers between 2 and 20
for i in range(2, 21, 2):
    print(i)

# 22) While loop: print numbers from 1 to 5
i = 1
while i <= 5:
    print(i)
    i += 1

# 23) While loop: sum of numbers 1 to 5
i = 1
total = 0
while i <= 5:
    total += i
    i += 1
print(f"Sum of numbers from 1 to 5 is {total}.")

# 24) While loop: countdown from 10 to 1
i = 10
while i >= 1:
    print(i)
    i -= 1

# 25) While loop: print all odd numbers between 1 and 10
i = 1
while i <= 10:
    if i % 2 != 0:
        print(i)
    i += 1

# 26) While loop: ask for input until user types "exit"
user_input = ""
while user_input.lower() != "exit":
    user_input = input("Type something (or 'exit' to quit): ")

# 27) Print all elements of a list
my_list = ["apple", "banana", "cherry"]
for item in my_list:
    print(item)

# 28) Find the length of a list
fruits = ["apple", "banana", "cherry", "date"]
print(f"The list has {len(fruits)} elements.")

# 29) Access a specific element from the list
numbers = [10, 20, 30, 40]
print(f"The second element is {numbers[1]}.")

# 30) Add an element to the list
animals = ["cat", "dog", "rabbit"]
animals.append("hamster")
print("Updated list of animals:", animals)
# 31) Remove an element from the list
colors = ["red", "green", "blue"]
colors.remove("green")
print("List after removal:", colors)

# 32) Create a list of squares (1 to 5)
squares = [x ** 2 for x in range(1, 6)]
print("Squares:", squares)

# 33) Create a list of even numbers (2 to 10)
evens = [x for x in range(2, 11) if x % 2 == 0]
print("Even numbers:", evens)

# 34) Filter odd numbers from a list
numbers = [1, 2, 3, 4, 5, 6, 7]
odds = [x for x in numbers if x % 2 != 0]
print("Odd numbers:", odds)

# 35) Convert a list of strings to uppercase
words = ["hello", "world", "python"]
uppercased = [word.upper() for word in words]
print("Uppercased words:", uppercased)

# 36) Create a list of numbers squared if divisible by 2
nums = [1, 2, 3, 4, 5, 6]
squared_evens = [x ** 2 for x in nums if x % 2 == 0]
print("Squared evens:", squared_evens)

# 37) Function to greet a user
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")

# 38) Function to add two numbers
def add_numbers(a, b):
    return a + b

sum_result = add_numbers(5, 7)
print("Sum:", sum_result)

# 39) Function to check if a number is even or odd
def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

print("5 is", even_or_odd(5))
print("8 is", even_or_odd(8))

# 40) Function to calculate the area of a rectangle
def rectangle_area(length, width):
    return length * width

area = rectangle_area(5, 3)
print("Area of rectangle:", area)
# 41) Function to reverse a string
def reverse_string(s):
    return s[::-1]

print(reverse_string("hello"))

# 42) Create and print a tuple
my_tuple = (10, "apple", 3.14)
print("Tuple:", my_tuple)

# 43) Access an element in a tuple
example_tuple = (1, 2, 3, 4, 5)
print("Second element:", example_tuple[1])

# 44) Find the length of a tuple
length_tuple = ("a", "b", "c", "d")
print("Length of tuple:", len(length_tuple))

# 45) Concatenate two tuples
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
combined = tuple1 + tuple2
print("Concatenated tuple:", combined)

# 46) Check if an item exists in a tuple
items = ("pen", "pencil", "eraser")
if "pencil" in items:
    print("Found")
else:
    print("Not found")

# 47) Create and print a set
my_set = {1, 2, 3}
print("Set:", my_set)

# 48) Check if an element is in a set
fruit_set = {"apple", "banana", "cherry"}
if "banana" in fruit_set:
    print("Yes")
else:
    print("No")

# 49) Add an element to a set
number_set = {1, 2, 3}
number_set.add(4)
print("Updated set:", number_set)
# 50) Remove an element from a set
fruits = {"apple", "banana", "cherry"}
fruits.remove("banana")
print("Updated set:", fruits)

# 51) Find the union of two sets
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union_set = set1 | set2
print("Union of sets:", union_set)

# 52) Create and print a dictionary
person = {"name": "Alice", "age": 25}
print("Dictionary:", person)

# 53) Access a value by key
print("Name:", person["name"])

# 54) Add a new key-value pair to a dictionary
person["city"] = "New York"
print("Updated dictionary:", person)
