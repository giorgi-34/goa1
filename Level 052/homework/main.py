def is_uppercase(inp):
    return inp == inp.upper()


def remove_exclamation_marks(s):
    return s.replace('!', '')


def remove(s):
    if s.endswith('!'):
        return s[:-1]
    return s


def is_divisible(n, x, y):
    return n % x == 0 and n % y == 0

def first_non_consecutive(arr):
    for i in range(1, len(arr)):
        if arr[i] != arr[i-1] + 1:
            return arr[i]
    return None


def stairs_in_20(stairs):
    return sum(sum(day) for day in stairs) * 20


def remove_vowels(string):
    vowels = "aeiouAEIOU"
    return ''.join(char for char in string if char not in vowels)
