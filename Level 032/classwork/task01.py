def generate_big_sentence(name, surname, age):
    print("My name is {} {} and I am {} years old.".format(name, surname, age))

# მომხმარებლისგან შესატანად
name = input("Please enter your first name: ")
surname = input("Please enter your surname: ")
age = input("Please enter your age: ")

# ფუნქციის გამოძახება
generate_big_sentence(name, surname, age)
