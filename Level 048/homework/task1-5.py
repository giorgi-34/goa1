def double_char(s):
    return ''.join([char * 2 for char in s])

# Test cases
print(double_char("String"))       # "SSttrriinngg"
print(double_char("Hello World"))  # "HHeelllloo  WWoorrlldd"
print(double_char("1234!_ "))      # "11223344!!__  "


def get_age(age):
    return int(age[0])  # Extract first character and convert to int

# Test cases
print(get_age("4 years old"))  # Output: 4
print(get_age("9 years old"))  # Output: 9
print(get_age("1 year old"))   # Output: 1




def feast(beast, dish):
    return beast[0] == dish[0] and beast[-1] == dish[-1]

# Test cases
print(feast("great blue heron", "garlic naan"))  # True
print(feast("chickadee", "chocolate cake"))     # True
print(feast("brown bear", "bear claw"))         # False




def array_plus_array(arr1, arr2):
    return sum(arr1) + sum(arr2)

# Test cases
print(array_plus_array([1, 2, 3], [4, 5, 6]))  # Output: 21
print(array_plus_array([-1, -2, -3], [4, 5, 6]))  # Output: 9
print(array_plus_array([0, 0, 0], [0, 0, 0]))  # Output: 0



def check_for_factor(base, factor):
    return base % factor == 0

# Test cases
print(check_for_factor(10, 2))  # True (10 is divisible by 2)
print(check_for_factor(9, 3))   # True (9 is divisible by 3)
print(check_for_factor(7, 2))   # False (7 is not divisible by 2)
print(check_for_factor(15, 5))  # True (15 is divisible by 5)
print(check_for_factor(19, 4))  # False (19 is not divisible by 4)
