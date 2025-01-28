def append_multiple_items(my_list, items):
    # Append each item in the list of items to the original list
    my_list.extend(items)

# Example usage
my_list = [1, 2, 3]
items_to_append = [4, 5, 6]
append_multiple_items(my_list, items_to_append)
print(my_list)
