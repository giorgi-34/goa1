def divide_numbers():
    try:
        a = float(input("Enter the first number: "))
        b = float(input("Enter the second number: "))
        result = a / b
        print(f"Result: {result}")
    except ZeroDivisionError:
        print("Error: Cannot divide by zero.")
    except ValueError:
        print("Error: Please enter valid numbers.")

divide_numbers()


def access_list_index():
    my_list = ['apple', 'banana', 'cherry']
    try:
        index = int(input("Enter an index (0-2): "))
        print(f"Item at index {index}: {my_list[index]}")
    except IndexError:
        print("Error: Index out of range.")
    except ValueError:
        print("Error: Please enter a valid integer.")

access_list_index()



def access_dictionary_key():
    my_dict = {'name': 'Ana', 'age': 20}
    key = input("Enter a key to access: ")
    try:
        print(f"Value: {my_dict[key]}")
    except KeyError:
        print("Error: Key not found in dictionary.")

access_dictionary_key()


def convert_to_integer():
    user_input = input("Enter a number: ")
    try:
        number = int(user_input)
        print(f"Integer: {number}")
    except ValueError:
        print("Error: That is not a valid integer.")

convert_to_integer()


def say_hello():
    print("Hello, nice to see you!")

def greet(func):
    func()

greet(say_hello)


def multiplier(factor):
    def multiply_by(n):
        return n * factor
    return multiply_by

times3 = multiplier(3)
print(times3(5))  # Output: 15


def multiplier(factor):
    def multiply_by(number):
        return number * factor
    return multiply_by
