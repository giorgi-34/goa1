# Creating a dictionary
person = {
    "name": "Alice",
    "age": 25,
    "city": "London"
}

# Using get() method to retrieve a value
name = person.get("name")  # This key exists
print(f"Name: {name}")

# Using get() method for a key that doesn't exist
country = person.get("country")  # This key does not exist

# Handling the case where the key doesn't exist
if country:
    print(f"Country: {country}")
else:
    print("The key 'country' does not exist in the dictionary.")

# Alternatively, providing a default value if the key doesn't exist
country = person.get("country", "Unknown")
print(f"Country: {country}")
