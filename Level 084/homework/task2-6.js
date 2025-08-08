# 1. Reverse List
def reverse_list(l):
    return l[::-1]

# 2. Convert Number to String
def number_to_string(num):
    return str(num)

# 3. Multiply
def multiply(n, m):
    return n * m

# 4. Remove Duplicates (Preserve Order)
def remove_duplicates(lst):
    result = []
    for item in lst:
        if item not in result:
            result.append(item)
    return result

# 5. Greet User
def greet(name):
    return f"Hello, {name} how are you doing today?"


# ✅ Optional: ტესტირების მაგალითები

if __name__ == "__main__":
    # 1. Reverse List
    print(reverse_list([1, 2, 3]))          # ➜ [3, 2, 1]

    # 2. Number to String
    print(number_to_string(123))           # ➜ "123"

    # 3. Multiply
    print(multiply(5, 4))                  # ➜ 20

    # 4. Remove Duplicates
    print(remove_duplicates([1, 2, 2, 3, 1, 4]))  # ➜ [1, 2, 3, 4]

    # 5. Greet
    print(greet("Giorgi"))                 # ➜ "Hello, Giorgi how are you doing today?"
