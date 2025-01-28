def format_name(first_name, last_name):
    # Capitalizing the first and last name
    formatted_first_name = first_name.capitalize()
    formatted_last_name = last_name.capitalize()
    
    # Returning the formatted name as a single string
    return f"{formatted_first_name} {formatted_last_name}"

# Example usage
first = "john"
last = "doe"
full_name = format_name(first, last)
print(full_name)
