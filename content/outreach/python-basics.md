---
title: "Overview Python Programming Basics"
date: 2024-10-25T10:00:00Z
draft: false
weight: 10
tags: ["python", "programming", "basics"]
categories: ["quarto-demo"]
---

## Introduction to Python Programming

This Quarto demo shows how to teach Python programming basics with interactive code examples and visualizations.

### Variables and Data Types

Python supports various data types. Let's explore them:

```python
# Basic data types
name = "Alice"          # String
age = 25               # Integer
height = 5.6           # Float
is_student = True      # Boolean

print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height}")
print(f"Is Student: {is_student}")
```

**Output:**
```
Name: Alice
Age: 25
Height: 5.6
Is Student: True
```

### Working with Lists

Lists are one of the most useful data structures in Python:

```python
# Creating and manipulating lists
fruits = ["apple", "banana", "cherry", "date"]
numbers = [1, 2, 3, 4, 5]

# List operations
print("Original fruits:", fruits)
fruits.append("elderberry")
print("After adding elderberry:", fruits)

# List comprehension
squares = [x**2 for x in numbers]
print("Squares:", squares)
```

**Expected Output:**
```
Original fruits: ['apple', 'banana', 'cherry', 'date']
After adding elderberry: ['apple', 'banana', 'cherry', 'date', 'elderberry']
Squares: [1, 4, 9, 16, 25]
```

### Control Structures

#### Conditional Statements

```python
def grade_classifier(score):
    """Classify grades based on score."""
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

# Test the function
test_scores = [95, 87, 72, 58, 91]
for score in test_scores:
    grade = grade_classifier(score)
    print(f"Score {score}: Grade {grade}")
```

#### Loops

```python
# For loop example
print("Counting with for loop:")
for i in range(1, 6):
    print(f"Count: {i}")

# While loop example
print("\nCountdown with while loop:")
countdown = 5
while countdown > 0:
    print(f"T-minus {countdown}")
    countdown -= 1
print("Blast off! 🚀")
```

### Functions and Modules

```python
import math

def calculate_circle_area(radius):
    """Calculate the area of a circle."""
    return math.pi * radius ** 2

def calculate_rectangle_area(length, width):
    """Calculate the area of a rectangle."""
    return length * width

# Using the functions
circle_radius = 5
rectangle_length = 8
rectangle_width = 6

circle_area = calculate_circle_area(circle_radius)
rectangle_area = calculate_rectangle_area(rectangle_length, rectangle_width)

print(f"Circle area (radius {circle_radius}): {circle_area:.2f}")
print(f"Rectangle area ({rectangle_length} x {rectangle_width}): {rectangle_area}")
```

### Error Handling

```python
def safe_division(numerator, denominator):
    """Perform division with error handling."""
    try:
        result = numerator / denominator
        return f"{numerator} ÷ {denominator} = {result}"
    except ZeroDivisionError:
        return "Error: Cannot divide by zero!"
    except TypeError:
        return "Error: Invalid input types!"

# Test error handling
test_cases = [(10, 2), (5, 0), (10, "2"), (15, 3)]

for num, den in test_cases:
    result = safe_division(num, den)
    print(result)
```

## Key Learning Points

1. **Python syntax is clean and readable**
2. **Dynamic typing makes variables flexible**
3. **List comprehensions provide powerful data processing**
4. **Functions promote code reusability**
5. **Error handling prevents program crashes**

## Exercises for Students

1. Create a function that finds the maximum number in a list
2. Write a program that counts vowels in a string
3. Implement a simple calculator with error handling
4. Create a class to represent a bank account with deposit/withdraw methods

Next: Explore [data visualization with Python](/outreach/python-data-visualization/)!