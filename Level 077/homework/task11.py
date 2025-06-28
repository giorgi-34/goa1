def odd_or_even(arr):
    arr_sum = 0
    for num in arr:
        arr_sum += num

    if arr_sum % 2 == 0:
        return "even"
    else:
        return "odd"

print(odd_or_even([1, 2, 3, 4, 5, 6]))
