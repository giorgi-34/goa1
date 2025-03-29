# # 1) 

num = 17

try:
    result = num + "17"  
    print(result)
except TypeError :
      print(f" you have TypeError")


# 2)

age = int(input("enter your age :"))
try:
    print(len(age))

except TypeError:
    print("TypeError")