# Take the score as input from the user
score = int(input("Enter the score (0-100): "))

# Check the grade based on the score
if 90 <= score <= 100:
    grade = 'A'
elif 80 <= score <= 89:
    grade = 'B'
elif 70 <= score <= 79:
    grade = 'C'
elif 60 <= score <= 69:
    grade = 'D'
elif score < 60:
    grade = 'F'
else:
    grade = 'Invalid score'

# Output the grade
print("The grade is:", grade)
