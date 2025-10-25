---
title: "Data Analytics Lesson 4: Understanding Basic Statistics and Summaries"
date: 2025-10-25T14:00:00Z
draft: false
weight: 23
tags: ["python", "data-analytics", "statistics", "mean", "median", "standard-deviation"]
categories: ["data-analytics-series"]
---

## Making Sense of Numbers with Statistics

Statistics help us summarize our data with just a few key numbers. Think of statistics as a way to describe a whole group with simple, powerful facts. Today we'll learn the most important statistical measures that every data analyst needs to know!

### Setting Up Our Data

Let's use our familiar student dataset and add some new information:

```python
# Install required packages for data analytics
import piplite
await piplite.install(['seaborn', 'matplotlib', 'pandas', 'numpy', 'scipy', 'plotly'])
print("Packages installed successfully!")
print("You can now import and use: seaborn, matplotlib, pandas, numpy, scipy, plotly")
```

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Our student dataset
student_data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eva', 'Frank', 'Grace', 'Henry'],
    'Age': [16, 17, 16, 18, 17, 16, 17, 18],
    'Grade': ['10th', '11th', '10th', '12th', '11th', '10th', '11th', '12th'],
    'Math_Score': [85, 92, 78, 95, 88, 76, 91, 87],
    'Science_Score': [89, 87, 82, 98, 85, 79, 93, 89],
    'English_Score': [92, 85, 88, 91, 94, 83, 89, 86],
    'Hours_Studied': [5, 8, 4, 10, 6, 3, 9, 7],
    'Extracurriculars': [2, 1, 3, 2, 4, 1, 2, 3]
}

df = pd.DataFrame(student_data)
df['Average_Score'] = df[['Math_Score', 'Science_Score', 'English_Score']].mean(axis=1)

print("Our student data is ready for statistical analysis!")
print(df[['Name', 'Math_Score', 'Science_Score', 'English_Score', 'Average_Score']])
```

### 1. Measures of Central Tendency - "What's Normal?"

These statistics tell us what a "typical" value looks like in our data.

#### The Mean (Average)

The mean is what most people think of as "average":

```python
# Calculate means for our test scores
math_mean = df['Math_Score'].mean()
science_mean = df['Science_Score'].mean()
english_mean = df['English_Score'].mean()

print("MEAN SCORES (Averages):")
print(f"Math: {math_mean:.1f} points")
print(f"Science: {science_mean:.1f} points") 
print(f"English: {english_mean:.1f} points")

# The mean tells us the "center" of our data
print(f"\nOverall, students average {math_mean:.1f} points in Math.")
print("This means if we added all Math scores and divided by 8 students,")
print(f"we get {math_mean:.1f}.")

# Let's verify this calculation manually
total_math_points = df['Math_Score'].sum()
number_of_students = len(df)
manual_average = total_math_points / number_of_students

print(f"\nManual calculation: {total_math_points} ÷ {number_of_students} = {manual_average:.1f}")
print("✓ This matches our mean calculation!")
```

#### The Median (Middle Value)

The median is the middle value when all scores are lined up in order:

```python
# Calculate medians
math_median = df['Math_Score'].median()
science_median = df['Science_Score'].median()
english_median = df['English_Score'].median()

print("MEDIAN SCORES (Middle Values):")
print(f"Math: {math_median:.1f} points")
print(f"Science: {science_median:.1f} points")
print(f"English: {english_median:.1f} points")

# Show how median works with Math scores
math_scores_sorted = sorted(df['Math_Score'])
print(f"\nMath scores in order: {math_scores_sorted}")
print(f"The middle values are: {math_scores_sorted[3]} and {math_scores_sorted[4]}")
print(f"Median is their average: ({math_scores_sorted[3]} + {math_scores_sorted[4]}) ÷ 2 = {math_median}")

# Compare mean vs median
print(f"\nMath - Mean: {math_mean:.1f}, Median: {math_median:.1f}")
if abs(math_mean - math_median) < 1:
    print("Mean and median are very close - data is fairly balanced!")
else:
    print("Mean and median are different - might have some extreme values.")
```

#### The Mode (Most Common Value)

The mode is the value that appears most often:

```python
# Find modes for our categorical data
grade_mode = df['Grade'].mode()[0]  # Most common grade
age_mode = df['Age'].mode()[0]      # Most common age

print("MODE (Most Common Values):")
print(f"Most common grade level: {grade_mode}")
print(f"Most common age: {age_mode}")

# Count frequencies to see why
print(f"\nGrade frequencies:")
print(df['Grade'].value_counts())
print(f"\nAge frequencies:")
print(df['Age'].value_counts())

# For continuous data like test scores, mode is less useful
# But let's see if any scores repeat
print(f"\nDo any Math scores repeat?")
math_counts = df['Math_Score'].value_counts()
repeated_scores = math_counts[math_counts > 1]
if len(repeated_scores) > 0:
    print("Yes! These scores appear multiple times:")
    print(repeated_scores)
else:
    print("No, all Math scores are unique.")
```

### 2. Measures of Spread - "How Spread Out Are the Values?"

These statistics tell us how much variation there is in our data.

#### Range (Highest - Lowest)

```python
# Calculate ranges
math_range = df['Math_Score'].max() - df['Math_Score'].min()
science_range = df['Science_Score'].max() - df['Science_Score'].min()
english_range = df['English_Score'].max() - df['English_Score'].min()

print("RANGE (Spread of Scores):")
print(f"Math: {df['Math_Score'].min()} to {df['Math_Score'].max()} (range: {math_range} points)")
print(f"Science: {df['Science_Score'].min()} to {df['Science_Score'].max()} (range: {science_range} points)")
print(f"English: {df['English_Score'].min()} to {df['English_Score'].max()} (range: {english_range} points)")

# Which subject has the most variation?
ranges = {'Math': math_range, 'Science': science_range, 'English': english_range}
most_varied = max(ranges, key=ranges.get)
least_varied = min(ranges, key=ranges.get)

print(f"\nMost variation: {most_varied} ({ranges[most_varied]} point range)")
print(f"Least variation: {least_varied} ({ranges[least_varied]} point range)")
```

#### Standard Deviation (Average Distance from Mean)

This is the most important measure of spread:

```python
# Calculate standard deviations
math_std = df['Math_Score'].std()
science_std = df['Science_Score'].std()
english_std = df['English_Score'].std()

print("STANDARD DEVIATION (Average Distance from Mean):")
print(f"Math: {math_std:.1f} points")
print(f"Science: {science_std:.1f} points")
print(f"English: {english_std:.1f} points")

# Explain what this means
print(f"\nWhat does this mean?")
print(f"In Math, most students score within {math_std:.1f} points of the average ({math_mean:.1f})")
print(f"That means most Math scores are between {math_mean-math_std:.1f} and {math_mean+math_std:.1f}")

# Let's check this prediction
math_within_1_std = df[(df['Math_Score'] >= math_mean - math_std) & 
                      (df['Math_Score'] <= math_mean + math_std)]
print(f"Actually, {len(math_within_1_std)} out of {len(df)} students ({len(math_within_1_std)/len(df)*100:.0f}%) are in this range!")

# Show individual distances from mean
print(f"\nHow far is each student from the Math average of {math_mean:.1f}?")
for _, student in df.iterrows():
    distance = abs(student['Math_Score'] - math_mean)
    print(f"{student['Name']}: {student['Math_Score']} (distance: {distance:.1f})")
```

### 3. Percentiles and Quartiles - "Where Do You Rank?"

These help us understand where individual values stand compared to the group:

```python
# Calculate quartiles (25th, 50th, 75th percentiles)
math_q1 = df['Math_Score'].quantile(0.25)  # 25th percentile
math_q2 = df['Math_Score'].quantile(0.50)  # 50th percentile (median)
math_q3 = df['Math_Score'].quantile(0.75)  # 75th percentile

print("MATH SCORE QUARTILES:")
print(f"25th percentile (Q1): {math_q1:.1f} - Bottom 25% score below this")
print(f"50th percentile (Q2): {math_q2:.1f} - Half score below this (median)")  
print(f"75th percentile (Q3): {math_q3:.1f} - Top 25% score above this")

# Show where each student ranks
print(f"\nStudent Rankings in Math:")
for _, student in df.iterrows():
    score = student['Math_Score']
    percentile = (df['Math_Score'] < score).mean() * 100
    
    if score >= math_q3:
        rank = "Top Quarter"
    elif score >= math_q2:
        rank = "Above Average"  
    elif score >= math_q1:
        rank = "Below Average"
    else:
        rank = "Bottom Quarter"
        
    print(f"{student['Name']}: {score} points - {rank} ({percentile:.0f}th percentile)")
```

### 4. Creating a Statistical Summary

Let's create a comprehensive statistical profile:

```python
# Generate complete statistical summary
print("="*60)
print("COMPLETE STATISTICAL SUMMARY")
print("="*60)

subjects = ['Math_Score', 'Science_Score', 'English_Score']
for subject in subjects:
    subject_name = subject.replace('_', ' ')
    print(f"\n{subject_name.upper()}:")
    
    # Central tendency
    mean_val = df[subject].mean()
    median_val = df[subject].median()
    
    # Spread
    std_val = df[subject].std()
    range_val = df[subject].max() - df[subject].min()
    
    # Quartiles
    q1 = df[subject].quantile(0.25)
    q3 = df[subject].quantile(0.75)
    iqr = q3 - q1  # Interquartile Range
    
    print(f"  Central Tendency:")
    print(f"    Mean (average): {mean_val:.1f}")
    print(f"    Median (middle): {median_val:.1f}")
    
    print(f"  Spread:")
    print(f"    Standard deviation: {std_val:.1f}")
    print(f"    Range: {range_val:.0f} (from {df[subject].min()} to {df[subject].max()})")
    print(f"    IQR (middle 50%): {iqr:.1f}")
    
    print(f"  Distribution:")
    print(f"    25th percentile: {q1:.1f}")
    print(f"    75th percentile: {q3:.1f}")
```

### 5. Comparing Statistics Across Subjects

Let's create a comparison table:

```python
# Create a statistical comparison
stats_summary = pd.DataFrame({
    'Subject': ['Math', 'Science', 'English'],
    'Mean': [df['Math_Score'].mean(), df['Science_Score'].mean(), df['English_Score'].mean()],
    'Median': [df['Math_Score'].median(), df['Science_Score'].median(), df['English_Score'].median()],
    'Std_Dev': [df['Math_Score'].std(), df['Science_Score'].std(), df['English_Score'].std()],
    'Range': [df['Math_Score'].max()-df['Math_Score'].min(), 
             df['Science_Score'].max()-df['Science_Score'].min(),
             df['English_Score'].max()-df['English_Score'].min()]
})

print("\nSTATISTICAL COMPARISON TABLE:")
print(stats_summary.round(1))

# Find interesting patterns
highest_avg = stats_summary.loc[stats_summary['Mean'].idxmax(), 'Subject']
most_consistent = stats_summary.loc[stats_summary['Std_Dev'].idxmin(), 'Subject']
most_varied = stats_summary.loc[stats_summary['Range'].idxmax(), 'Subject']

print(f"\nKEY FINDINGS:")
print(f"• Highest average scores: {highest_avg}")
print(f"• Most consistent performance: {most_consistent} (lowest std dev)")
print(f"• Most varied performance: {most_varied} (highest range)")
```

### 6. Visualizing Statistics

Let's create plots that show our statistical measures:

```python
# Create a visualization of our statistics
fig, axes = plt.subplots(2, 2, figsize=(15, 12))
fig.suptitle('Statistical Analysis of Student Performance', fontsize=16, fontweight='bold')

# 1. Box plot showing quartiles and outliers
subjects_data = [df['Math_Score'], df['Science_Score'], df['English_Score']]
box_plot = axes[0, 0].boxplot(subjects_data, labels=['Math', 'Science', 'English'], patch_artist=True)
axes[0, 0].set_title('Distribution Summary (Box Plot)')
axes[0, 0].set_ylabel('Score')

# Color the boxes
colors = ['lightblue', 'lightgreen', 'lightcoral']
for patch, color in zip(box_plot['boxes'], colors):
    patch.set_facecolor(color)

# 2. Histogram with mean and median lines
axes[0, 1].hist(df['Math_Score'], bins=5, alpha=0.7, color='lightblue', edgecolor='black')
axes[0, 1].axvline(df['Math_Score'].mean(), color='red', linestyle='--', linewidth=2, label=f'Mean: {df["Math_Score"].mean():.1f}')
axes[0, 1].axvline(df['Math_Score'].median(), color='orange', linestyle='-', linewidth=2, label=f'Median: {df["Math_Score"].median():.1f}')
axes[0, 1].set_title('Math Score Distribution')
axes[0, 1].set_xlabel('Score')
axes[0, 1].set_ylabel('Frequency')
axes[0, 1].legend()

# 3. Standard deviation visualization
subjects = ['Math', 'Science', 'English']
means = [df['Math_Score'].mean(), df['Science_Score'].mean(), df['English_Score'].mean()]
stds = [df['Math_Score'].std(), df['Science_Score'].std(), df['English_Score'].std()]

axes[1, 0].bar(subjects, means, yerr=stds, capsize=5, color=colors, alpha=0.7, edgecolor='black')
axes[1, 0].set_title('Mean ± Standard Deviation')
axes[1, 0].set_ylabel('Score')

# 4. Range comparison
ranges = [df['Math_Score'].max()-df['Math_Score'].min(),
          df['Science_Score'].max()-df['Science_Score'].min(), 
          df['English_Score'].max()-df['English_Score'].min()]

axes[1, 1].bar(subjects, ranges, color=colors, alpha=0.7, edgecolor='black')
axes[1, 1].set_title('Score Range by Subject')
axes[1, 1].set_ylabel('Range (Max - Min)')

plt.tight_layout()
plt.show()
```

## Key Learning Points

1. **Central Tendency (Typical Values)**:
   - Mean: Mathematical average
   - Median: Middle value (less affected by extremes)
   - Mode: Most common value

2. **Spread (Variation)**:
   - Range: Difference between highest and lowest
   - Standard deviation: Average distance from mean
   - Quartiles: Divide data into four equal parts

3. **When to Use Which**:
   - Use median when you have extreme values (outliers)
   - Use mean for normally distributed data
   - Use standard deviation to understand consistency

4. **Statistics tell stories** - they help us compare and understand our data

## Practice Exercises

1. **Analyze Your Movie Data**: Calculate mean, median, and standard deviation for movie ratings
2. **Compare Decades**: Calculate statistics for movies from different decades
3. **Find Outliers**: Which movies have ratings more than 2 standard deviations from the mean?
4. **Create Rankings**: Use percentiles to rank movies within each genre

## What's Next?

Now that we understand basic statistics, we're ready to explore how different variables relate to each other! In the next lesson, we'll learn about correlations - discovering which things tend to go together.

Next: [Discovering Relationships with Correlations](/data-analytics-05-correlations/)