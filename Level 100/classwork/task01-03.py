# 1) Sum of numbers from 0 to N
# თუ n უარყოფითია, აბრუნებს 0, სხვაგვარად იყენებს ფორმულას n*(n+1)//2
def sum_to_n(n):
    if n < 0:
        return 0
    return n * (n + 1) // 2


# 2) Find the vowels
# ითვლის ხმოვანების რაოდენობას (a, e, i, o, u) სტრიქონში
def find_vowels(s):
    return sum(1 for ch in s if ch.lower() in "aeiou")


# 3) Largest pair sum in array
# აბრუნებს ორი ყველაზე დიდი ელემენტის ჯამს
def largest_pair_sum(arr):
    max1, max2 = float('-inf'), float('-inf')
    for x in arr:
        if x > max1:
            max2 = max1
            max1 = x
        elif x > max2:
            max2 = x
    return max1 + max2


# --- სატესტო მაგალითები ---
if __name__ == "__main__":
    print("Sum to n examples:")
    print(sum_to_n(6))      # 21  (0+1+2+3+4+5+6)
    print(sum_to_n(-5))     # 0

    print("\nFind vowels examples:")
    print(find_vowels("Hello World!"))   # 3
    print(find_vowels("AEIOUaeiou"))     # 10

    print("\nLargest pair sum examples:")
    print(largest_pair_sum([10, 14, 2, 23, 19]))   # 42
    print(largest_pair_sum([-10, -8, -16, -18]))   # -18
