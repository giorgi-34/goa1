# Creating the first dictionary
person = {
    "name": "David",
    "age": 30,
    "city": "New York"
}

# Creating another dictionary with updates
additional_info = {
    "job": "Artist",
    "city": "Los Angeles",  # This will update the existing 'city' value
    "hobby": "Photography"
}

# Updating the first dictionary with the second dictionary
person.update(additional_info)

# Printing the updated dictionary
print(person)
