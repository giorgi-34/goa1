def remove_elements(main_list, indexes_list):
    indexes_list.sort(reverse=True)
    for index in indexes_list:
        if 0 <= index < len(main_list):
            del main_list[index]
    return main_list
