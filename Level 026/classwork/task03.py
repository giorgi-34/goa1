def manual_len(my_list):
    count = 0  # ცვლადი, რომელიც გამოიცნობენ ელემენტების რაოდენობას
    for item in my_list:  # გადავდივართ სიის ყველა ელემენტზე
        count += 1  # ყოველ ჯერზე როცა ჩავივლით ერთ ელემენტს, ცვლადს ერთით გავუმატებთ
    return count  # დავაბრუნებთ საბოლოო რაოდენობას

# ფუნქციის გამოძახება
my_list = [1, 2, 3, 4, 5]
print(manual_len(my_list))  # უნდა დაბეჭდოს 5

my_list2 = ['a', 'b', 'c']
print(manual_len(my_list2))  # უნდა დაბეჭდოს 3

my_list3 = [True, False, True, False]
print(manual_len(my_list3))  # უნდა დაბეჭდოს 4

my_list4 = []
print(manual_len(my_list4))  # უნდა დაბეჭდოს 0

my_list5 = [1, 2, 3, 4, 5, 6, 7]
print(manual_len(my_list5))  # უნდა დაბეჭდოს 7
