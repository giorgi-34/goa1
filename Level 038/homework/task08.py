# Create a list with duplicate elements
my_list = [10, 20, 20, 30, 40, 50, 10, 30, 40]

# Convert the list to a set to remove duplicates
unique_set = set(my_list)

# Convert the set back to a list
unique_list = list(unique_set)

# Output the results
print("Original List:", my_list)
print("List after removing duplicates:", unique_list)
