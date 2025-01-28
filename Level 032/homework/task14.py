def insert_at_beginning(my_list, item):
    # Insert the item at the beginning of the list (index 0)
    my_list.insert(0, item)

# Example usage
my_list = [2, 3, 4]
item_to_insert = 1
insert_at_beginning(my_list, item_to_insert)
print(my_list)
