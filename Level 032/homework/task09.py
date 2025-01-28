def split_paragraph(paragraph):
    # Split the paragraph by periods and strip any extra spaces
    sentences = [sentence.strip() for sentence in paragraph.split('.') if sentence]
    return sentences

# Example usage
paragraph = "This is the first sentence. This is the second sentence. And here's the third."
sentences = split_paragraph(paragraph)
print(sentences)
