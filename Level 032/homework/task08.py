def csv_to_list(csv_string):
    # Split the CSV string by commas
    return csv_string.split(',')

# Example usage
csv_data = "apple,banana,cherry,orange"
items_list = csv_to_list(csv_data)
print(items_list)
