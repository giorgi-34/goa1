def no_duplicates(user_list):
    
    return list(set(user_list))


list1 = [1, 2, 3, 4, 5, 5, 6, 7, 7]
print(no_duplicates(list1)) 

list2 = ['apple', 'banana', 'orange', 'apple', 'grape']
print(no_duplicates(list2)) 

list3 = [True, False, True, False, True]
print(no_duplicates(list3)) 