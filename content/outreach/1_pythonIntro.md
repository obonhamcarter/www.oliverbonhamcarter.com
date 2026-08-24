---
title: "1. Intro to Python - Learn by Doing!"
date: 2023-02-08T19:09:12-05:00
draft: false
---

<center>
&#x200B;
<img src="/images/outreach/helloworld_greenblue.png" alt="Hello World in Python" style="width:400px;"/>
</center>

<!-- add a line drop -->
<center>
&#x200B;
</center>

## Welcome to Python Programming! 🐍

Welcome to the wonderful world of Python programming! 🐍

Python is one of the most beginner-friendly programming languages out there. It reads almost like English, which makes it perfect for learning. Once you master the basics, you'll be able to build games, analyze data, create websites, automate tasks, and so much more!

This tutorial will guide you through Python step-by-step with lots of examples you can try yourself. Don't worry if you make mistakes - that's how we learn! Every programmer started exactly where you are now. 

**Before we begin:** Open up <a href="http://oliverbonhamcarter.com/live/" target="_blank">Jupyter Interactive Python</a> so you can try these examples as we go!

---

## Part 1: Your Very First Python Program 🎉

Every programmer's journey begins with "Hello, World!" It's a tradition that dates back decades. Let's continue that tradition:

```python
print("Hello, World!")
```

**What just happened?**
- `print()` is a **function** that displays text on the screen
- The text inside quotes `"..."` is called a **string** (just fancy programmer talk for "text")
- When you run this, Python will display: `Hello, World!`

**Try it yourself:**
```python
print("Hello, my name is [Your Name]!")
print("I am learning Python!")
print("This is awesome!")
```

Notice how each `print()` creates a new line? You can print as many things as you want!

---

## Part 2: Variables - Giving Names to Things 📦

Variables are like labeled boxes where you store information. You can put data in them and use them later!

### Simple Variables

```python
# This is a comment - Python ignores it (the # symbol makes a comment)
name = "Alex"
age = 14
height = 5.5  # in feet
is_student = True

print("Name:", name)
print("Age:", age)
print("Height:", height)
print("Is a student:", is_student)
```

**What's happening here?**
- `name = "Alex"` stores the text "Alex" in a variable called `name`
- `age = 14` stores the number 14
- Variables can hold different **types** of data:
  
  - **Strings**: Text in quotes like `"Hello"`
  - **Integers**: Whole numbers like `14`, `100`, `-5`
  - **Floats**: Decimal numbers like `5.5`, `3.14`
  - **Booleans**: True or False values

### Variables Can Change!

```python
score = 0
print("Starting score:", score)

score = 10
print("After getting points:", score)

score = score + 5  # Add 5 to the current score
print("After bonus points:", score)
```

**Output:**
```
Starting score: 0
After getting points: 10
After bonus points: 15
```

**Cool trick:** The line `score = score + 5` might look weird, but it means "take the current value of score, add 5, and store the result back in score."

---

## Part 3: Math in Python 🧮

Python can be your super-powered calculator!

### Basic Operations

```python
# Addition
result = 10 + 5
print("10 + 5 =", result)

# Subtraction
result = 20 - 7
print("20 - 7 =", result)

# Multiplication
result = 6 * 7
print("6 × 7 =", result)

# Division (always gives a decimal)
result = 15 / 3
print("15 ÷ 3 =", result)

# Integer Division (gives whole number, no decimal)
result = 17 // 5
print("17 ÷ 5 (whole number) =", result)

# Modulo (remainder after division)
result = 17 % 5
print("17 mod 5 (remainder) =", result)

# Exponents (powers)
result = 2 ** 8
print("2 to the power of 8 =", result)
```

### Fun with Math

```python
# Calculate the area of a rectangle
length = 10
width = 5
area = length * width
print(f"A rectangle with length {length} and width {width} has area {area}")

# Convert temperature from Fahrenheit to Celsius
fahrenheit = 68
celsius = (fahrenheit - 32) * 5/9
print(f"{fahrenheit}°F is {celsius:.1f}°C")

# Calculate how many hours in a year
hours_per_day = 24
days_per_year = 365
hours_per_year = hours_per_day * days_per_year
print(f"There are {hours_per_year} hours in a year!")
```

**Pro tip:** The `f` before the quotes in `f"..."` lets you put variables directly in the string using `{variable_name}`!

---

## Part 4: Playing with Text (Strings) 📝

Strings are super versatile in Python. Let's explore what we can do with them!

### String Basics

```python
# Creating strings
greeting = "Hello"
name = "Sam"

# Combining strings (concatenation)
message = greeting + " " + name + "!"
print(message)  # Hello Sam!

# Repeating strings
laugh = "ha" * 5
print(laugh)  # hahahahaha

# Multi-line strings
poem = """Roses are red,
Violets are blue,
Python is fun,
And so are you!"""
print(poem)
```

### Cool String Methods

```python
text = "python is awesome"

# Make uppercase
print(text.upper())  # PYTHON IS AWESOME

# Make lowercase
print(text.lower())  # python is awesome

# Capitalize first letter
print(text.capitalize())  # Python is awesome

# Make Title Case
print(text.title())  # Python Is Awesome

# Count how many times a letter appears
print(text.count("o"))  # 2

# Replace words
print(text.replace("awesome", "amazing"))  # python is amazing

# Check if text starts with something
print(text.startswith("python"))  # True

# Get the length of a string
print(len(text))  # 17
```

### String Slicing (Getting Parts of Text)

```python
word = "PYTHON"

# Get individual characters (starts counting at 0!)
print(word[0])  # P (first character)
print(word[1])  # Y (second character)
print(word[-1])  # N (last character)

# Get a slice of the string
print(word[0:3])  # PYT (characters 0, 1, 2)
print(word[2:5])  # THO (characters 2, 3, 4)
print(word[2:])   # THON (from position 2 to end)
print(word[:4])   # PYTH (from start to position 4)
```

**Why does counting start at 0?** It's a programming convention! The first item is at position 0, the second at position 1, and so on. It seems weird at first, but you'll get used to it!

---

## Part 5: Lists - Collections of Things 📚

Lists let you store multiple items in one variable. Think of it like a shopping list or a playlist!

### Creating and Using Lists

```python
# A list of favorite foods
foods = ["pizza", "tacos", "ice cream", "sushi"]
print(foods)

# A list of numbers
lucky_numbers = [7, 13, 21, 42]
print(lucky_numbers)

# A mixed list (different types!)
random_stuff = ["apple", 42, 3.14, True]
print(random_stuff)

# Access items by position (index)
print("First food:", foods[0])  # pizza
print("Second food:", foods[1])  # tacos
print("Last food:", foods[-1])  # sushi
```

### Modifying Lists

```python
# Start with a list
colors = ["red", "blue", "green"]
print("Original:", colors)

# Add an item to the end
colors.append("yellow")
print("After append:", colors)

# Insert an item at a specific position
colors.insert(1, "orange")  # Insert at position 1
print("After insert:", colors)

# Remove an item
colors.remove("blue")
print("After remove:", colors)

# Get the last item and remove it
last_color = colors.pop()
print("Popped:", last_color)
print("Remaining:", colors)

# Change an item
colors[0] = "purple"
print("After change:", colors)

# How many items?
print("Number of colors:", len(colors))
```

### Fun with Lists

```python
# Sort a list
numbers = [5, 2, 8, 1, 9]
numbers.sort()
print("Sorted numbers:", numbers)

# Reverse a list
numbers.reverse()
print("Reversed:", numbers)

# Check if something is in a list
fruits = ["apple", "banana", "cherry"]
if "banana" in fruits:
    print("Yes, banana is in the list!")

# Combine lists
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2
print("Combined:", combined)
```

---

## Part 6: Making Decisions with If Statements 🤔

Programs need to make decisions! "If" statements let your code choose what to do based on conditions.

### Basic If Statements

```python
age = 16

if age >= 18:
    print("You can vote!")
else:
    print("You're not old enough to vote yet.")
```

### If-Elif-Else (Multiple Conditions)

```python
score = 85

if score >= 90:
    print("Grade: A - Excellent!")
elif score >= 80:
    print("Grade: B - Great job!")
elif score >= 70:
    print("Grade: C - Good work!")
elif score >= 60:
    print("Grade: D - You passed!")
else:
    print("Grade: F - Study more next time!")
```

### Comparison Operators

```python
x = 10
y = 20

# Equal to
print(x == y)  # False

# Not equal to
print(x != y)  # True

# Greater than
print(x > y)   # False

# Less than
print(x < y)   # True

# Greater than or equal to
print(x >= 10)  # True

# Less than or equal to
print(y <= 30)  # True
```

### Combining Conditions

```python
age = 17
has_permission = True

# Using "and" (both must be True)
if age >= 16 and has_permission:
    print("You can drive!")

# Using "or" (at least one must be True)
is_weekend = True
is_holiday = False

if is_weekend or is_holiday:
    print("No school today!")

# Using "not" (reverses True/False)
is_raining = False
if not is_raining:
    print("Let's go outside!")
```

### Real-World Example: Password Checker

```python
password = "python123"
user_input = "python123"

if len(user_input) < 8:
    print("Password too short!")
elif user_input == password:
    print("Access granted! Welcome!")
else:
    print("Incorrect password. Try again.")
```

---

## Part 7: Loops - Repeating Actions 🔄

Loops let you repeat code multiple times without writing it over and over!

### For Loops - Counting and Iterating

```python
# Count from 0 to 4
for i in range(5):
    print("Count:", i)

# Count from 1 to 10
for i in range(1, 11):
    print(i)

# Count by 2s
for i in range(0, 11, 2):
    print(i)  # 0, 2, 4, 6, 8, 10
```

### Looping Through Lists

```python
# Loop through a list of fruits
fruits = ["apple", "banana", "cherry", "date"]

for fruit in fruits:
    print("I like", fruit)

# With index numbers
for i in range(len(fruits)):
    print(f"{i+1}. {fruits[i]}")
```

### While Loops - Repeat Until a Condition Changes

```python
# Countdown
count = 5
while count > 0:
    print(count)
    count = count - 1  # or count -= 1
print("Blast off! 🚀")

# Keep asking until we get the right answer
secret_number = 7
guess = 0

while guess != secret_number:
    guess = int(input("Guess the number (1-10): "))
    if guess < secret_number:
        print("Too low!")
    elif guess > secret_number:
        print("Too high!")
    else:
        print("Correct! You win!")
```

### Loop Control: Break and Continue

```python
# Break - stops the loop immediately
for i in range(10):
    if i == 5:
        break  # Stop when we reach 5
    print(i)  # Prints 0, 1, 2, 3, 4

# Continue - skips to the next iteration
for i in range(5):
    if i == 2:
        continue  # Skip 2
    print(i)  # Prints 0, 1, 3, 4
```

### Nested Loops (Loops Inside Loops)

```python
# Print a multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        result = i * j
        print(f"{i} × {j} = {result}")
    print()  # Blank line after each row
```

---

## Part 8: Functions - Reusable Code Blocks 🔧

Functions are like recipes - you define them once, then use them whenever you need!

### Creating Your First Function

```python
# Define a function
def greet():
    print("Hello, there!")
    print("Welcome to Python!")

# Call (use) the function
greet()
greet()  # You can call it multiple times!
```

### Functions with Parameters

```python
# Function that takes input
def greet_person(name):
    print(f"Hello, {name}!")
    print("Nice to meet you!")

# Call with different names
greet_person("Alice")
greet_person("Bob")
greet_person("Charlie")
```

### Functions with Multiple Parameters

```python
def introduce(name, age, hobby):
    print(f"Hi! My name is {name}.")
    print(f"I am {age} years old.")
    print(f"I love {hobby}!")

introduce("Sam", 15, "playing guitar")
introduce("Jamie", 14, "reading books")
```

### Functions That Return Values

```python
# Function that calculates and returns a value
def add_numbers(a, b):
    result = a + b
    return result

# Use the returned value
sum1 = add_numbers(5, 3)
print("5 + 3 =", sum1)

sum2 = add_numbers(10, 20)
print("10 + 20 =", sum2)
```

### Practical Function Examples

```python
# Calculate the area of a circle
def circle_area(radius):
    pi = 3.14159
    area = pi * radius ** 2
    return area

print("Circle area:", circle_area(5))

# Check if a number is even
def is_even(number):
    if number % 2 == 0:
        return True
    else:
        return False

print(is_even(10))  # True
print(is_even(7))   # False

# Convert temperature
def fahrenheit_to_celsius(f):
    c = (f - 32) * 5/9
    return round(c, 1)  # Round to 1 decimal place

print(f"68°F = {fahrenheit_to_celsius(68)}°C")
```

### Functions with Default Parameters

```python
# If no age is provided, it uses 0 as default
def greet_with_age(name, age=0):
    if age == 0:
        print(f"Hello, {name}!")
    else:
        print(f"Hello, {name}! You are {age} years old.")

greet_with_age("Alice", 15)  # Uses the provided age
greet_with_age("Bob")        # Uses default age (0)
```

---

## Part 9: Dictionaries - Storing Related Information 📖

Dictionaries store data in **key-value pairs**. Think of it like a real dictionary: you look up a word (key) to find its definition (value)!

### Creating Dictionaries

```python
# A dictionary of a person's info
person = {
    "name": "Alex",
    "age": 16,
    "city": "New York",
    "hobby": "gaming"
}

# Access values using keys
print("Name:", person["name"])
print("Age:", person["age"])
```

### Modifying Dictionaries

```python
# Start with a student's grades
grades = {
    "math": 85,
    "science": 92,
    "english": 88
}

print("Original grades:", grades)

# Add a new subject
grades["history"] = 90
print("After adding history:", grades)

# Update an existing grade
grades["math"] = 95
print("After updating math:", grades)

# Remove a subject
del grades["science"]
print("After removing science:", grades)

# Get all keys
print("Subjects:", list(grades.keys()))

# Get all values
print("Scores:", list(grades.values()))
```

### Looping Through Dictionaries

```python
# Loop through keys and values
favorite_foods = {
    "Alice": "pizza",
    "Bob": "tacos",
    "Charlie": "sushi"
}

for person in favorite_foods:
    food = favorite_foods[person]
    print(f"{person}'s favorite food is {food}")

# Or use .items() for cleaner code
for person, food in favorite_foods.items():
    print(f"{person} loves {food}!")
```

### Nested Dictionaries

```python
# A dictionary of students, each with their own dictionary
students = {
    "student1": {
        "name": "Emma",
        "age": 15,
        "grade": "A"
    },
    "student2": {
        "name": "Noah",
        "age": 16,
        "grade": "B"
    }
}

print(students["student1"]["name"])  # Emma
print(students["student2"]["grade"])  # B
```

---

## Part 10: Mini Projects to Practice! 🚀

Now let's combine everything you've learned into some fun mini-projects!

### Project 1: Simple Calculator

```python
def calculator():
    print("=== Simple Calculator ===")
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    operation = input("Choose operation (+, -, *, /): ")
    
    if operation == "+":
        result = num1 + num2
    elif operation == "-":
        result = num1 - num2
    elif operation == "*":
        result = num1 * num2
    elif operation == "/":
        if num2 != 0:
            result = num1 / num2
        else:
            print("Error: Cannot divide by zero!")
            return
    else:
        print("Invalid operation!")
        return
    
    print(f"Result: {num1} {operation} {num2} = {result}")

# To use it: calculator()
```

### Project 2: Number Guessing Game

```python
import random

def guessing_game():
    print("=== Number Guessing Game ===")
    secret = random.randint(1, 20)
    attempts = 0
    max_attempts = 5
    
    print("I'm thinking of a number between 1 and 20!")
    
    while attempts < max_attempts:
        guess = int(input(f"Attempt {attempts + 1}/{max_attempts} - Your guess: "))
        attempts += 1
        
        if guess == secret:
            print(f"🎉 Correct! You won in {attempts} attempts!")
            return
        elif guess < secret:
            print("Too low! Try higher.")
        else:
            print("Too high! Try lower.")
    
    print(f"Game over! The number was {secret}")

# To play: guessing_game()
```

### Project 3: To-Do List Manager

```python
def todo_list():
    tasks = []
    
    while True:
        print("\n=== To-Do List ===")
        print("1. View tasks")
        print("2. Add task")
        print("3. Remove task")
        print("4. Quit")
        
        choice = input("Choose an option (1-4): ")
        
        if choice == "1":
            if len(tasks) == 0:
                print("No tasks yet!")
            else:
                print("\nYour tasks:")
                for i, task in enumerate(tasks, 1):
                    print(f"{i}. {task}")
        
        elif choice == "2":
            task = input("Enter new task: ")
            tasks.append(task)
            print(f"Added: {task}")
        
        elif choice == "3":
            if len(tasks) == 0:
                print("No tasks to remove!")
            else:
                for i, task in enumerate(tasks, 1):
                    print(f"{i}. {task}")
                index = int(input("Enter task number to remove: ")) - 1
                if 0 <= index < len(tasks):
                    removed = tasks.pop(index)
                    print(f"Removed: {removed}")
                else:
                    print("Invalid task number!")
        
        elif choice == "4":
            print("Goodbye!")
            break
        
        else:
            print("Invalid choice!")

# To run: todo_list()
```

### Project 4: Word Counter

```python
def word_counter(text):
    # Count words
    words = text.split()
    word_count = len(words)
    
    # Count characters (without spaces)
    char_count = len(text.replace(" ", ""))
    
    # Count vowels
    vowels = "aeiouAEIOU"
    vowel_count = sum(1 for char in text if char in vowels)
    
    # Results
    print(f"Text: {text}")
    print(f"Words: {word_count}")
    print(f"Characters: {char_count}")
    print(f"Vowels: {vowel_count}")

# Try it:
word_counter("Python is an amazing programming language!")
```

---

## Tips for Success 💡

1. **Practice every day** - Even 15 minutes makes a difference!
2. **Make mistakes** - They're how you learn. Every error message teaches you something!
3. **Experiment** - Change values, try new things, break code and fix it
4. **Start small** - Don't try to build a video game on day one. Master the basics first!
5. **Use print statements** - When confused, print everything to see what's happening
6. **Read error messages** - They usually tell you exactly what's wrong
7. **Comment your code** - Future you will thank present you!
8. **Have fun** - Programming is creative and exciting!

---

## What's Next? 🎯

Now that you know the fundamentals, you can:
- Build simple games
- Automate repetitive tasks
- Analyze data and create visualizations
- Build web applications
- Create chatbots
- And so much more!

Remember: Every expert programmer was once a beginner who refused to give up. You've got this! 🌟

---

## Additional Python Programming Resources

## Additional Python Programming Resources

Want to learn even more? Here are some fantastic resources to continue your Python journey:

* **Interactive Tutorials**
    - Play with code from W3's super <a href="https://www.w3schools.com/python/" target="_blank">Python Tutorial</a> - Great for practicing specific topics!
    - Write code locally using <a href="http://oliverbonhamcarter.com/live/" target="_blank">Jupyter Interactive Python</a> - Perfect for experimenting!

* **Books and Documentation**
    - Need a Python textbook? Try <a href="https://greenteapress.com/wp/think-python-2e/" target="_blank">Think Python</a>, a free open-source textbook by Allen B. Downey. It's beginner-friendly and thorough!
    - <a href="https://greenteapress.com/wp/" target="_blank">Green Tea Press</a> offers other free textbooks for programming, data science, statistics and more!
    - <a href="https://docs.python.org/3/" target="_blank">Official Python Documentation</a> - The complete reference guide (great for looking up specific functions)

* **Getting Python on Your Computer**
    - Want to download and install Python on your own machine? Check out <a href="https://www.python.org/downloads/" target="_blank">Python.org</a> for the latest version!

**Pro tip:** The best way to learn is by doing! Try to code something every day, even if it's just for 10 minutes. Build small projects that interest you - that's how you'll really master Python!

Happy coding, and welcome to the programming community! 🎉🐍

---

<center>
&#x200B;
</center>

<center>
  <img src="/images/outreach/fc2.jpg" alt="A Futuristic Classroom" style="width:400px;"/>
</center>
