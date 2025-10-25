---
title: "Data Analytics Lesson 2: Exploring Data and Asking Questions"
date: 2025-10-25T12:00:00Z
draft: false
weight: 21
tags: ["python", "data-analytics", "exploration", "questions"]
categories: ["data-analytics-series"]
---

## Learning to Ask the Right Questions

In our first lesson, we learned how to load data. Now comes the exciting part - exploring our data to discover what questions we can answer! This is like being a detective looking for clues.

### Setting Up Our Data

Let's start with our student dataset from the previous lesson:

```python
import pandas as pd
import numpy as np

# Recreate our student dataset
student_data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eva', 'Frank', 'Grace', 'Henry'],
    'Age': [16, 17, 16, 18, 17, 16, 17, 18],
    'Grade': ['10th', '11th', '10th', '12th', '11th', '10th', '11th', '12th'],
    'Math_Score': [85, 92, 78, 95, 88, 76, 91, 87],
    'Science_Score': [89, 87, 82, 98, 85, 79, 93, 89],
    'English_Score': [92, 85, 88, 91, 94, 83, 89, 86],
    'Hours_Studied': [5, 8, 4, 10, 6, 3, 9, 7],  # New column: hours studied per week
    'Extracurriculars': [2, 1, 3, 2, 4, 1, 2, 3]  # New column: number of activities
}

df = pd.DataFrame(student_data)
print("Our Enhanced Student Dataset:")
print(df)
```

### Types of Questions We Can Ask

When exploring data, we can ask different types of questions:

1. **Descriptive Questions**: "What is happening?" 
2. **Comparative Questions**: "How do groups differ?"
3. **Relationship Questions**: "How are variables connected?"

Let's explore each type:

#### 1. Descriptive Questions

These help us understand the basic characteristics of our data:

```python
# Question: What's the average score in each subject?
print("Average Scores by Subject:")
print(f"Math Average: {df['Math_Score'].mean():.1f}")
print(f"Science Average: {df['Science_Score'].mean():.1f}")
print(f"English Average: {df['English_Score'].mean():.1f}")

# Question: What's the range of study hours?
print(f"\nStudy Hours - Min: {df['Hours_Studied'].min()}, Max: {df['Hours_Studied'].max()}")

# Question: How many students are in each grade?
print("\nStudents by Grade:")
print(df['Grade'].value_counts().sort_index())
```

**Expected Output:**

```text
Average Scores by Subject:
Math Average: 86.5
Science Average: 87.8
English Average: 88.5

Study Hours - Min: 3, Max: 10

Students by Grade:
10th    3
11th    3
12th    2
Name: Grade, dtype: int64
```

#### 2. Comparative Questions

These help us compare different groups:

```python
# Question: Do older students score better than younger students?
grade_performance = df.groupby('Grade')[['Math_Score', 'Science_Score', 'English_Score']].mean()
print("Average Scores by Grade:")
print(grade_performance.round(1))

# Question: Who studies the most hours by grade?
study_by_grade = df.groupby('Grade')['Hours_Studied'].mean()
print("\nAverage Study Hours by Grade:")
print(study_by_grade.round(1))

# Question: Which subject has the highest scores?
subject_averages = {
    'Math': df['Math_Score'].mean(),
    'Science': df['Science_Score'].mean(), 
    'English': df['English_Score'].mean()
}

print("\nSubject Rankings (highest to lowest average):")
sorted_subjects = sorted(subject_averages.items(), key=lambda x: x[1], reverse=True)
for i, (subject, avg) in enumerate(sorted_subjects, 1):
    print(f"{i}. {subject}: {avg:.1f}")
```

#### 3. Relationship Questions

These help us understand how different variables might be connected:

```python
# Question: Do students who study more hours get better grades?
# Let's calculate total score first
df['Total_Score'] = df['Math_Score'] + df['Science_Score'] + df['English_Score']

print("Study Hours vs. Total Scores:")
for _, student in df.iterrows():
    print(f"{student['Name']}: {student['Hours_Studied']} hours → {student['Total_Score']} total points")

# Question: Are students with more extracurriculars better at certain subjects?
print("\nExtracurriculars vs. English Scores (communication skills):")
for _, student in df.iterrows():
    print(f"{student['Name']}: {student['Extracurriculars']} activities → {student['English_Score']} English")
```

### Finding Interesting Patterns

Let's look for patterns that might surprise us:

```python
# Create some interesting comparisons
df['Average_Score'] = df[['Math_Score', 'Science_Score', 'English_Score']].mean(axis=1)

# Question: Who are the highest and lowest performers?
best_student = df.loc[df['Average_Score'].idxmax()]
struggling_student = df.loc[df['Average_Score'].idxmin()]

print("Highest Performer:")
print(f"{best_student['Name']} (Grade {best_student['Grade']}): {best_student['Average_Score']:.1f} average")
print(f"Studies {best_student['Hours_Studied']} hours/week")

print("\nNeeds More Support:")
print(f"{struggling_student['Name']} (Grade {struggling_student['Grade']}): {struggling_student['Average_Score']:.1f} average")
print(f"Studies {struggling_student['Hours_Studied']} hours/week")

# Question: Is there a "sweet spot" for extracurricular activities?
print("\nExtracurriculars vs Performance:")
activity_performance = df.groupby('Extracurriculars')['Average_Score'].mean()
for activities, avg_score in activity_performance.items():
    print(f"{activities} activities: {avg_score:.1f} average score")
```

### Identifying Data Quality Issues

Part of exploration is checking if our data makes sense:

```python
# Check for outliers (unusually high or low values)
print("Checking for Unusual Values:")

# Are any scores impossible? (over 100 or under 0)
for subject in ['Math_Score', 'Science_Score', 'English_Score']:
    max_score = df[subject].max()
    min_score = df[subject].min()
    print(f"{subject}: Range {min_score} to {max_score}")
    if max_score > 100 or min_score < 0:
        print(f"  ⚠️  Warning: Unusual scores in {subject}")

# Are study hours realistic?
max_hours = df['Hours_Studied'].max()
if max_hours > 20:
    print(f"⚠️  Warning: {max_hours} study hours per week seems very high")
else:
    print(f"✓ Study hours look reasonable (max: {max_hours} hours/week)")
```

### Generating New Questions from Exploration

Based on what we've discovered, we can ask deeper questions:

```python
# New insights lead to new questions
print("New Questions to Investigate:")
print("\n1. Effect of Study Time:")
high_study = df[df['Hours_Studied'] >= 7]['Average_Score'].mean()
low_study = df[df['Hours_Studied'] < 7]['Average_Score'].mean()
print(f"   High study time (7+ hours): {high_study:.1f} average")
print(f"   Low study time (<7 hours): {low_study:.1f} average")
print(f"   Difference: {high_study - low_study:.1f} points")

print("\n2. Grade Level Performance:")
grade_12_avg = df[df['Grade'] == '12th']['Average_Score'].mean()
grade_10_avg = df[df['Grade'] == '10th']['Average_Score'].mean()
print(f"   12th grade average: {grade_12_avg:.1f}")
print(f"   10th grade average: {grade_10_avg:.1f}")
print(f"   Improvement from 10th to 12th: {grade_12_avg - grade_10_avg:.1f} points")
```

### Creating a Data Summary Report

Let's create a simple report of what we learned:

```python
print("=" * 50)
print("STUDENT PERFORMANCE ANALYSIS REPORT")
print("=" * 50)

print(f"\nDataset Overview:")
print(f"• Total students: {len(df)}")
print(f"• Grade levels: {', '.join(sorted(df['Grade'].unique()))}")
print(f"• Subjects analyzed: Math, Science, English")

print(f"\nKey Findings:")
print(f"• Best subject overall: English ({df['English_Score'].mean():.1f} average)")
print(f"• Most challenging subject: Math ({df['Math_Score'].mean():.1f} average)")
print(f"• Study time range: {df['Hours_Studied'].min()}-{df['Hours_Studied'].max()} hours per week")

print(f"\nInteresting Patterns:")
correlation = df['Hours_Studied'].corr(df['Average_Score'])
if correlation > 0.5:
    print(f"• Strong positive link between study time and performance")
elif correlation > 0:
    print(f"• Weak positive link between study time and performance")
else:
    print(f"• No clear link between study time and performance")

print(f"\nQuestions for Further Investigation:")
print(f"• Why do some students perform well with less study time?")
print(f"• What teaching methods work best for different subjects?")
print(f"• How do extracurricular activities affect academic performance?")
```

## Key Learning Points

1. **Start with simple questions** before moving to complex ones
2. **Look for patterns and outliers** - they often tell interesting stories
3. **Always check if your data makes sense** - impossible values indicate problems
4. **Group and compare** different segments of your data
5. **New discoveries lead to new questions** - that's the beauty of data exploration!

## Practice Exercises

1. **Create Your Own Analysis**: Using the movie dataset from last lesson, explore:
   - What's the average rating by decade?
   - Which genres are most common?
   - Are newer movies rated higher or lower?

2. **Generate Questions**: Look at your movie data and write down 5 questions you could answer

3. **Find Patterns**: Group your movies by genre and compare their ratings

4. **Quality Check**: Look for any unusual values in your movie dataset

## What's Next?

Now that we know how to explore data and ask good questions, we're ready to create our first visualizations! In the next lesson, we'll learn how to make charts and graphs that help us see patterns more clearly.

Next: [Creating Your First Data Visualizations](/data-analytics-03-basic-plots/)