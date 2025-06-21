# 2) Is n divisible by x and y?
def is_divisible(n, x, y):
    return n % x == 0 and n % y == 0

# 3) Sum of positive
def sum_positive(arr):
    return sum(x for x in arr if x > 0)

# 4) Opposites Attract
def lovefunc(flower1, flower2):
    return (flower1 + flower2) % 2 == 1

# 5) Sum The Strings
def sum_str(a, b):
    return str(int(a or '0') + int(b or '0'))

# 6) Friend or Foe?
def friend(x):
    return [name for name in x if len(name) == 4]


# OPTIONAL: ტესტებისთვის (შეგიძლია წაშალო თუ არ გინდა)
if __name__ == "__main__":
    print(is_divisible(10, 2, 5))       # True
    print(sum_positive([-1, 2, 3, -4]))  # 5
    print(lovefunc(4, 7))               # True
    print(sum_str("123", "77"))         # "200"
    print(friend(["Ryan", "Kieran", "Mark"]))  # ["Ryan", "Mark"]
