# Creating a dictionary
person = {
    "name": "James",
    "age": 35,
    "city": "London",
    "job": "Teacher"
}

# Removing a key-value pair using pop()
removed_value = person.pop("job")

# Printing the removed value and the updated dictionary
print(f"Removed value: {removed_value}")
print(f"Updated dictionary: {person}")
