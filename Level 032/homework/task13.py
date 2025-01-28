def insert_item_at_index(my_list, index, item):
    # Insert the item at the specified index
    my_list.insert(index, item)

# Example usage
my_list = [1, 2, 3, 5]
index_to_insert = 3
item_to_insert = 4
insert_item_at_index(my_list, index_to_insert, item_to_insert)
print(my_list)
