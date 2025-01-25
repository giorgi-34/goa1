def my_split(main_string, string_to_split):
   
    split_result = main_string.split(string_to_split)
    print(split_result)


main_string = input(" enter the main string: ")
string_to_split = input(" enter the string to split by: ")


my_split(main_string, string_to_split)
