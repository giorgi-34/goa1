# 2) Maximum Product
# დააბრუნე ორი მეზობელი ელემენტის მაქსიმალური ნამრავლი
def maximum_product(arr):
    if len(arr) < 2:
        return None
    max_prod = arr[0] * arr[1]
    for i in range(1, len(arr) - 1):
        prod = arr[i] * arr[i + 1]
        if prod > max_prod:
            max_prod = prod
    return max_prod


# 3) Filter the number
# სტრიქონიდან დატოვე მხოლოდ ციფრები
def filter_number(s):
    return ''.join(ch for ch in s if ch.isdigit())


# 4) Odd-Even String Sort
# even ინდექსებზე მდგომი სიმბოლოები + space + odd ინდექსების სიმბოლოები
def odd_even_string_sort(s):
    evens = ''.join(s[i] for i in range(0, len(s), 2))
    odds = ''.join(s[i] for i in range(1, len(s), 2))
    return evens + ' ' + odds


# 5) My Language Skills
# დააბრუნე ენების სია, რომელთა ქულა ≥ 60, დალაგებული ქულების კლებადობით
def my_languages(results):
    return [lang for lang, score in sorted(
        results.items(),
        key=lambda item: item[1],
        reverse=True
    ) if score >= 60]


# --- სატესტო მაგალითები ---
if __name__ == "__main__":
    print("Maximum Product:")
    print(maximum_product([3, 6, -2, -5, 7, 3]))  # 21  (7*3)

    print("\nFilter Number:")
    print(filter_number("a1b2c3"))                # "123"

    print("\nOdd-Even String Sort:")
    print(odd_even_string_sort("abcdef"))         # "ace bdf"

    print("\nMy Languages:")
    print(my_languages({"Java": 10, "Ruby": 80, "Python": 65}))
    # ['Ruby', 'Python']
