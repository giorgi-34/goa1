# Creating a dictionary
car = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 2020,
    "color": "Red"
}

# Checking if a specific key exists
if "model" in car:
    print("The key 'model' exists in the dictionary.")
else:
    print("The key 'model' does not exist in the dictionary.")

# Checking if a key that doesn't exist
if "price" in car:
    print("The key 'price' exists in the dictionary.")
else:
    print("The key 'price' does not exist in the dictionary.")
