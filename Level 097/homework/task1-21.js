# ===================== 2–6: split() =====================
print("\n--- 2–6: split() ---")
date_str = "2025-08-17"
year, month, day = date_str.split("-")
print("Date split:", year, month, day)

sentence = "one two three four five"
words = sentence.split()
print("Words:", words)

csv_str = "John,Doe,25,Developer"
values = csv_str.split(",")
print("CSV values:", values)

chars = list("abc")
print("Characters:", chars)

text = "JavaScript is fun"
words2 = text.split()
print("Second word:", words2[1])

# ===================== 7–11: startswith() =====================
print("\n--- 7–11: startswith() ---")
def starts_hello(s):
    return s.startswith("Hello")
print(starts_hello("Hello world"))

def check_img(filename):
    return "Image file" if filename.startswith("img_") else "Not an image file"
print(check_img("img_001.png"))
print(check_img("doc.txt"))

sentence = "Once upon a time"
print("Starts with 'Once upon':", sentence.startswith("Once upon"))

def starts_at(s, sub, pos):
    return s.startswith(sub, pos)
print(starts_at("abcdef", "cd", 2))

def count_dr(names):
    return sum(1 for name in names if name.startswith("Dr."))
print(count_dr(["Dr. Smith","Mr. John","Dr. Alice"]))

# ===================== 12–16: trim / strip =====================
print("\n--- 12–16: trim / strip ---")
def clean_string(s):
    return s.strip()
print(clean_string("   Hello World  "))

def trim_start(s):
    return s.lstrip()
print(trim_start("   Leading spaces"))

def trim_end(s):
    return s.rstrip()
print(trim_end("Trailing spaces   "))

def clean_usernames(users):
    return [user.strip() for user in users]
print(clean_usernames(["  Alice "," Bob ","Charlie  "]))

def is_empty(s):
    return s.strip() == ""
print(is_empty("     "))
print(is_empty("text"))

# ===================== 17–21: all() checks =====================
print("\n--- 17–21: all() checks ---")
def all_passed(students):
    return all(student['score'] >= 50 for student in students)
students = [{"name":"A","score":60},{"name":"B","score":45}]
print("All students passed:", all_passed(students))

def all_even(nums):
    return all(n % 2 == 0 for n in nums)
print("All numbers even:", all_even([2,4,6]))
print("All numbers even:", all_even([2,3,4]))

def valid_emails(emails):
    return all("@" in email for email in emails)
print("All emails valid:", valid_emails(["a@x.com","b@x.com"]))
print("All emails valid:", valid_emails(["a@x.com","bx.com"]))

def all_adults(ages):
    return all(age >= 18 for age in ages)
print("All adults:", all_adults([18,20,25]))
print("All adults:", all_adults([17,20]))

def all_below_100(prices):
    return all(p < 100 for p in prices)
print("All prices below 100:", all_below_100([20,50,99]))
print("All prices below 100:", all_below_100([20,150]))
