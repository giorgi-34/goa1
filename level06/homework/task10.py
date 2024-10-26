import turtle

# Create turtle object
castle = turtle.Turtle()

# Function to draw a rectangle (for walls and towers)
def draw_rectangle(t, width, height, color):
    t.fillcolor(color)
    t.begin_fill()
    for _ in range(2):
        t.forward(width)
        t.left(90)
        t.forward(height)
        t.left(90)
    t.end_fill()

# Function to draw a square (for base of towers)
def draw_square(t, size, color):
    draw_rectangle(t, size, size, color)

# Function to draw battlements (top castle wall design)
def draw_battlements(t, length, num):
    for _ in range(num):
        draw_square(t, length, "gray")
        t.penup()
        t.forward(length * 2)
        t.pendown()

# Drawing the main castle wall
castle.penup()
castle.goto(-300, -100)
castle.pendown()
draw_rectangle(castle, 600, 200, "lightgray")

# Drawing the left tower
castle.penup()
castle.goto(-350, -100)
castle.pendown()
draw_rectangle(castle, 100, 300, "gray")

# Drawing the right tower
castle.penup()
castle.goto(250, -100)
castle.pendown()
draw_rectangle(castle, 100, 300, "gray")

# Drawing the door in the middle
castle.penup()
castle.goto(-50, -100)
castle.pendown()
draw_rectangle(castle, 100, 150, "brown")

# Drawing battlements for the wall
castle.penup()
castle.goto(-300, 100)
castle.pendown()
draw_battlements(castle, 20, 15)

# Drawing battlements for the left tower
castle.penup()
castle.goto(-350, 200)
castle.pendown()
draw_battlements(castle, 20, 5)

# Drawing battlements for the right tower
castle.penup()
castle.goto(250, 200)
castle.pendown()
draw_battlements(castle, 20, 5)

# Hide the turtle after drawing
castle.hideturtle()

# Keep the window open
turtle.done()