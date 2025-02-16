# Create two sets with some common elements
set_a = {10, 20, 30, 40, 50}
set_b = {30, 40, 50, 60, 70}

# Union: Combine all elements from both sets (without duplicates)
union_set = set_a | set_b

# Intersection: Get the common elements between both sets
intersection_set = set_a & set_b

# Difference: Get elements present in set_a but not in set_b
difference_set = set_a - set_b

# Output the results
print("Union of set_a and set_b:", union_set)
print("Intersection of set_a and set_b:", intersection_set)
print("Difference of set_a and set_b:", difference_set)
