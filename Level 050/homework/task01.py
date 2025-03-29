# 1)

try:
    user = int(input("enter your phone number"))

except ValueError:
    print("incorecct enter phone number again")


# 2)

list = [1,2,3]

try:
    print(list[5])

except IndexError:
    print("your list doesn't contain your input number")



# 3)

try:
    k = "magaria" + 5
except TypeError:
    print("error you cant add integer")