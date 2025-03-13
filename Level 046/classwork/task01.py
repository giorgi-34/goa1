ef manual_list(start, end, step, user_num):
    result = [num for num in range(start, end, step) if num > user_num]
    return result


list1 = manual_list(1, 20, 2, 5)
list2 = manual_list(10, 50, 5, 25)
list3 = manual_list(-10, 10, 3, -2)


print("First list:", list1)
print("Second list:", list2)
print("Third list:", list3)