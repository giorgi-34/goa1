def all_strings(arr):
    return all(isinstance(item, str) for item in arr)

# მაგალითები
print(all_strings(["apple", "banana", "cherry"]))  # True
print(all_strings(["apple", 2, "cherry"]))         # False
