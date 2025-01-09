def manual_index(main_str, search_str):
    # იმისათვის რომ განვიხილოთ თუ არის საძიებელი სტრინგი მთავარ სტრინგში
    for i in range(len(main_str) - len(search_str) + 1):  # iterate through main string
        if main_str[i:i + len(search_str)] == search_str:  # Check if substring matches
            return i  # Return the index if match is found
    return -1  # Return -1 if search_str is not found in main_str

# მაგალითი
main_string = "hello world"
search_string = "world"

index = manual_index(main_string, search_string)
print(f"საძიებელი სტრინგი {search_string} მოიძებნა ინდექსზე: {index}")
