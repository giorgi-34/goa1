def insert_at_end(my_list, item):
    # Insert the item at the end of the list by specifying the index len(my_list)
    my_list.insert(len(my_list), item)

# Example usage
my_list = [1, 2, 3]
item_to_insert = 4
insert_at_end(my_list, item_to_insert)
print(my_list)
