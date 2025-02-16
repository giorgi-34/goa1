# Create a tuple
my_tuple = (10, 20, 30, 40, 50)

# Attempt to modify an element (this will raise an error)
try:
    my_tuple[1] = 100
except TypeError as e:
    print("Error:", e)
