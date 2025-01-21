def manual_find(main_string, str_to_find):
    # მოძებნე str_to_find main_string-ში
    for i in range(len(main_string) - len(str_to_find) + 1):
        # შევადაროთ თითოეული სუბსტრინგი str_to_find-ს
        if main_string[i:i+len(str_to_find)] == str_to_find:
            return i
    return -1  # თუ არ ვიპოვნეთ, დავბეჭდოთ -1

# ტესტირების მაგალითი
main_string = input("შეიყვანეთ მთავარი სტრინგი: ")
str_to_find = input("შეიყვანეთ საძიებელი სტრინგი: ")

result = manual_find(main_string, str_to_find)
print(result)
