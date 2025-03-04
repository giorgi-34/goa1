# Dictionary-ის შექმნა
student_info = {
    "name": "გიორგი",
    "surname": "მამულაშვილი",
    "academy": "GOA",
    "fav-color": "ლურჯი",
    "city": "თბილისი",
    "goa-student": True,
    "age": 20,
    "fav-programming-lang": "Python"
}

# თითოეული მნიშვნელობის დაბეჭდვა
for key, value in student_info.items():
    print(f"{key}: {value}")
