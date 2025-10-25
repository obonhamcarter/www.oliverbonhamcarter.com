---
title: "Data Analytics Lesson 1: Loading and Understanding Your Data"
date: 2025-10-25T11:00:00Z
draft: false
weight: 20
tags: ["python", "data-analytics", "pandas", "csv"]
categories: ["data-analytics-series"]
---

## Introduction to Data Analytics

Welcome to your first data analytics lesson! Data analytics is like being a detective - we use data to answer questions and discover patterns. Today, we'll learn how to load data into Python and take our first look at what we're working with.

### What You'll Need

Before we start, we need to install some special Python tools (called libraries) that help us work with data:

```python
# These are the tools we'll use for data analysis
import pandas as pd    # For working with data tables
import numpy as np     # For math operations
import os             # For working with files

# Don't worry if you see warnings - that's normal!
```

### Loading Your First Dataset

Let's start with a simple dataset about students and their test scores. In real life, data often comes in CSV files (Comma Separated Values).

```python
# First, let's create some sample student data to practice with
student_data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eva', 'Frank', 'Grace', 'Henry'],
    'Age': [16, 17, 16, 18, 17, 16, 17, 18],
    'Grade': ['10th', '11th', '10th', '12th', '11th', '10th', '11th', '12th'],
    'Math_Score': [85, 92, 78, 95, 88, 76, 91, 87],
    'Science_Score': [89, 87, 82, 98, 85, 79, 93, 89],
    'English_Score': [92, 85, 88, 91, 94, 83, 89, 86]
}

# Convert this into a DataFrame (think of it as a digital spreadsheet)
df = pd.DataFrame(student_data)

# Let's see what our data looks like
print("Our Student Dataset:")
print(df)
```

**Output:**
```
Our Student Dataset:
      Name  Age Grade  Math_Score  Science_Score  English_Score
0    Alice   16  10th          85             89             92
1      Bob   17  11th          92             87             85
2  Charlie   16  10th          78             82             88
3    Diana   18  12th          95             98             91
4      Eva   17  11th          88             85             94
5    Frank   16  10th          76             79             83
6    Grace   17  11th          91             93             89
7    Henry   18  12th          87             89             86
```

### Understanding Your Data Structure

Now let's explore what we have. Think of this like getting to know a new friend - we want to learn basic facts about our data:

```python
# How big is our dataset? (rows and columns)
print("Dataset shape (rows, columns):", df.shape)

# What types of information do we have?
print("\nColumn names:")
print(df.columns.tolist())

# What kind of data is in each column?
print("\nData types:")
print(df.dtypes)
```

**Expected Output:**
```
Dataset shape (rows, columns): (8, 6)

Column names:
['Name', 'Age', 'Grade', 'Math_Score', 'Science_Score', 'English_Score']

Data types:
Name             object
Age               int64
Grade            object
Math_Score        int64
Science_Score     int64
English_Score     int64
dtype: object
```

### Getting Basic Information About Your Data

Let's learn some basic facts about our student data:

```python
# Get a quick summary of numerical columns
print("Basic Statistics Summary:")
print(df.describe())

# Count how many students are in each grade
print("\nStudents per grade:")
print(df['Grade'].value_counts())

# Look at just the first few rows (useful for large datasets)
print("\nFirst 3 students:")
print(df.head(3))

# Look at the last few rows
print("\nLast 3 students:")
print(df.tail(3))
```

**Expected Output:**
```
Basic Statistics Summary:
             Age  Math_Score  Science_Score  English_Score
count   8.000000    8.000000       8.000000       8.000000
mean   16.750000   86.500000      87.750000      88.500000
std     0.886405    6.345177       6.135528       3.778153
min    16.000000   76.000000      79.000000      83.000000
25%    16.250000   82.750000      84.000000      86.000000
50%    17.000000   87.500000      88.000000      88.500000
75%    17.750000   91.250000      92.250000      91.250000
max    18.000000   95.000000      98.000000      94.000000

Students per grade:
10th    3
11th    3
12th    2
Name: Grade, dtype: int64

First 3 students:
      Name  Age Grade  Math_Score  Science_Score  English_Score
0    Alice   16  10th          85             89             92
1      Bob   17  11th          92             87             85
2  Charlie   16  10th          78             82             88

Last 3 students:
    Name  Age Grade  Math_Score  Science_Score  English_Score
5  Frank   16  10th          76             79             83
6  Grace   17  11th          91             93             89
7  Henry   18  12th          87             89             86
```

### Loading Data from a Real File

In real projects, you'll often load data from files. Here's how to do it:

```python
# If you had a CSV file, you would load it like this:
# df = pd.read_csv('student_data.csv')

# Let's save our data to a file first, then load it back
df.to_csv('student_scores.csv', index=False)  # Save without row numbers

# Now load it back (this is what you'd do with real data)
loaded_df = pd.read_csv('student_scores.csv')

print("Data loaded from file:")
print(loaded_df.head())

# Check if it's the same as our original data
print(f"\nAre they identical? {df.equals(loaded_df)}")
```

### Handling Missing Data

Real data is often messy and has missing values. Let's see how to deal with this:

```python
# Let's create some data with missing values to practice
messy_data = student_data.copy()
messy_data['Math_Score'][2] = None    # Charlie's math score is missing
messy_data['Age'][5] = None          # Frank's age is missing

df_messy = pd.DataFrame(messy_data)

print("Data with missing values:")
print(df_messy)

# Check for missing data
print("\nMissing values per column:")
print(df_messy.isnull().sum())

# Fill in missing values (we'll learn better methods later)
df_clean = df_messy.fillna(df_messy.mean(numeric_only=True))
print("\nAfter filling missing values with averages:")
print(df_clean)
```

## Key Learning Points

1. **DataFrames are like digital spreadsheets** - they organize data in rows and columns
2. **Always explore your data first** - use `.shape`, `.head()`, `.describe()` to understand what you have
3. **Real data is often messy** - missing values and errors are common
4. **CSV files are the most common way** to store and share data
5. **pandas is your best friend** for working with data in Python

## Practice Exercises

1. **Create Your Own Dataset**: Make a DataFrame with information about your favorite movies (title, year, rating, genre)
2. **Explore the Data**: Use `.describe()`, `.head()`, and `.info()` on your movie dataset
3. **Save and Load**: Save your dataset to a CSV file and load it back
4. **Handle Missing Data**: Add some missing values to your dataset and practice filling them in

## What's Next?

Now that you can load and examine data, in the next lesson we'll learn how to ask good questions about our data and start exploring patterns. We'll discover what kinds of questions our student dataset can answer!

Next: [Exploring Data and Asking Questions](/data-analytics-02-exploring-data/)