def validate_hello(greetings):
    greetings = greetings.lower()
    hellos = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"]
    return any(hello in greetings for hello in hellos)

2: Convert boolean to "Yes"/"No"
def bool_to_word(b):
    return "Yes" if b else "No"

