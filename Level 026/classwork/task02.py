def manual_range(start, end, step):
    # დავაყენოთ ციკლი, რომელიც გადის დანიშნულ დიაპაზონზე
    for num in range(start, end, step):
        if num % 2 == 0:  # მხოლოდ ლუწი რიცხვები
            print(num)

# ფუნქციის გამოძახება სხვადასხვა არგუმენტებით
manual_range(0, 10, 1)   # პირველი გამოძახება
manual_range(5, 20, 3)   # მეორე გამოძახება
manual_range(0, 50, 5)   # მესამე გამოძახება
manual_range(-10, 10, 2) # მეოთხე გამოძახება
manual_range(10, 30, 4)  # მეხუთე გამოძახება
