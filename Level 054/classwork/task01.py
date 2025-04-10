def division_calculator():
    try:
        numerator = float(input("Enter the numerator: "))
        denominator = float(input("Enter the denominator: "))

        if denominator == 0:
            raise ValueError("Cannot divide by zero.")

        result = numerator / denominator
        print(f"Result: {result}")

    except ValueError as ve:
        print(f"ValueError: {ve}")
    except Exception:
        print("Invalid input. Please enter numbers only.")
    finally:
        print("Operation complete.")

# ფუნქციის გამოძახება
division_calculator()
