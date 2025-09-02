def is_valid_walk(walk):
    if len(walk) != 10:
        return False
    return walk.count('n') == walk.count('s') and walk.count('e') == walk.count('w')

# მაგალითი
print(is_valid_walk(['n','s','n','s','n','s','n','s','n','s']))  # True
print(is_valid_walk(['n','n','n','s','n','s','n','s','n','s']))  # False



def validate(password):
    if len(password) < 6:
        return False
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    return has_upper and has_lower and has_digit

# მაგალითი
print(validate("Password1"))  # True
print(validate("pass"))       # False

def open_or_senior(data):
    result = []
    for age, handicap in data:
        if age >= 55 or handicap > 7:
            result.append("Senior")
        else:
            result.append("Open")
    return result

# მაგალითი
members = [(45, 2), (55, 8), (60, 3)]
print(open_or_senior(members))  # ['Open', 'Senior', 'Senior']




def fizzbuzz(n):
    for i in range(1, n+1):
        if i % 15 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)


