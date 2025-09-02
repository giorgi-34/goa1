def all_active(arr):
    return all(item.get("status") == "active" for item in arr)

# მაგალითები
users = [
    {"name": "Alice", "status": "active"},
    {"name": "Bob", "status": "active"},
    {"name": "Charlie", "status": "active"}
]
print(all_active(users))  # True

users2 = [
    {"name": "Alice", "status": "active"},
    {"name": "Bob", "status": "inactive"}
]
print(all_active(users2)) # False
