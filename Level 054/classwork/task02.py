# ფუნქცია, რომელიც მიიღებს ფუნქციას და სიას
def apply_to_list(func, values):
    return [func(x) for x in values]

# კვადრატის გამომთვლელი ფუნქცია
def square(x):
    return x * x

# მაგალითი გამოყენება
numbers = [1, 2, 3, 4, 5]
squared_numbers = apply_to_list(square, numbers)

print(squared_numbers)  # [1, 4, 9, 16, 25]
