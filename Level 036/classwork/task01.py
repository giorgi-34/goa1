# 1)

def multiply(a, b):
    return a * b

# 2)

def even_or_odd(number):
    if number %2 == 0:
        return "Even"
    else: return "Odd"


# 3)

def number_to_string(num):
    return str(num)

# 4)

def solution(string):
    return string[::-1]

# 5)

def make_negative( number ):
    if number > 0:
        return number * -1
    else: return number

# 6)

def opposite(number):
    return number * -1

# 7)

def bool_to_word(boolean):
    if boolean==True:
        return "Yes"
    else:
        return "No"

# 8)

def positive_sum(arr):
    res = 0
    for i in arr:
        if i > 0:
            res += i
    return res

# 9)

def repeat_str(repeat, string):
    res = ""
    for i in range(repeat):
        res = res + string
    return res

# 10)

def remove_char(s):
    return s[1:-1]

# 11)

def square_sum(numbers):
    result=0
    for i in numbers:
        result+=i**2
    return result
