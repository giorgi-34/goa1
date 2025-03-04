# Initialize dictionary with at least five key-value pairs
person_info = {
    "name": "Alice",
    "age": 25,
    "city": "New York",
    "occupation": "Software Engineer",
    "fav_language": "Python"
}

# Print all keys
print("Keys:", person_info.keys())

# Print all values
print("Values:", person_info.values())

# Print all key-value pairs
print("Key-Value Pairs:", person_info.items())

# Iterate over dictionary and print formatted output
for key, value in person_info.items():
    print(f"{key}: {value}")
