def manual_swapcase(input_str):
    result = ""  # ვიწყებთ ცარიელი სტრინგით

    # გავდივართ თითოეულ სიმბოლოზე
    for char in input_str:
        if char.isupper():  # თუ სიმბოლო დიდი ასოა
            result += char.lower()  # გადავაკეთოთ პატარა ასოში
        elif char.islower():  # თუ სიმბოლო პატარა ასოა
            result += char.upper()  # გადავაკეთოთ დიდი ასოში
        else:
            result += char  # სხვა სიმბოლოები (პუნქტუაცია, ციფრები და სხვ.) დავტოვოთ როგორც არის

    return result  # დავაბრუნოთ შედეგი

# ტესტირება
input_str = input("შეიყვანეთ სტრინგი: ")
print(manual_swapcase(input_str))
