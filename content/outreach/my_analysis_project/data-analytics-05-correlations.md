---
title: "Data Analytics Lesson 5: Discovering Relationships with Correlations"
date: 2025-10-25T15:00:00Z
draft: false
weight: 24
tags: ["python", "data-analytics", "correlation", "relationships", "heatmap"]
categories: ["data-analytics-series"]
---

## Finding Hidden Connections in Your Data

Correlation helps us discover if two things tend to change together. Do students who study more get better grades? Are older students better at math? Today we'll learn how to find these hidden relationships in our data!

### Setting Up Our Enhanced Dataset

Let's expand our student dataset with more variables to explore relationships:

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Enhanced student dataset with more variables for correlation analysis
student_data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eva', 'Frank', 'Grace', 'Henry'],
    'Age': [16, 17, 16, 18, 17, 16, 17, 18],
    'Grade': ['10th', '11th', '10th', '12th', '11th', '10th', '11th', '12th'],
    'Math_Score': [85, 92, 78, 95, 88, 76, 91, 87],
    'Science_Score': [89, 87, 82, 98, 85, 79, 93, 89],
    'English_Score': [92, 85, 88, 91, 94, 83, 89, 86],
    'Hours_Studied': [5, 8, 4, 10, 6, 3, 9, 7],
    'Extracurriculars': [2, 1, 3, 2, 4, 1, 2, 3],
    'Sleep_Hours': [7, 6, 8, 6, 7, 9, 6, 7],         # New: hours of sleep per night
    'Screen_Time': [4, 6, 3, 2, 5, 7, 3, 4],          # New: recreational screen hours per day
    'Books_Read': [12, 8, 15, 20, 10, 5, 18, 14]      # New: books read per year
}

df = pd.DataFrame(student_data)
df['Average_Score'] = df[['Math_Score', 'Science_Score', 'English_Score']].mean(axis=1)

print("Enhanced Student Dataset for Correlation Analysis:")
print(df[['Name', 'Hours_Studied', 'Average_Score', 'Sleep_Hours', 'Screen_Time', 'Books_Read']])
```

### Understanding Correlation

Correlation measures how strongly two variables are related on a scale from -1 to +1:

```python
print("UNDERSTANDING CORRELATION COEFFICIENTS:")
print("┌─────────────────┬────────────────────────────────────┐")
print("│ Correlation     │ What it means                      │")
print("├─────────────────┼────────────────────────────────────┤")
print("│ +1.0            │ Perfect positive relationship      │")
print("│ +0.7 to +0.9    │ Strong positive relationship       │")
print("│ +0.3 to +0.7    │ Moderate positive relationship     │") 
print("│ +0.1 to +0.3    │ Weak positive relationship         │")
print("│ 0.0             │ No relationship                    │")
print("│ -0.1 to -0.3    │ Weak negative relationship         │")
print("│ -0.3 to -0.7    │ Moderate negative relationship     │")
print("│ -0.7 to -0.9    │ Strong negative relationship       │")
print("│ -1.0            │ Perfect negative relationship      │")
print("└─────────────────┴────────────────────────────────────┘")

print("\nPositive correlation: As one goes up, the other goes up")
print("Negative correlation: As one goes up, the other goes down")
print("No correlation: The variables are independent of each other")
```

### 1. Single Correlation Analysis

Let's start by examining specific relationships:

```python
# Do students who study more get better grades?
study_grade_corr = df['Hours_Studied'].corr(df['Average_Score'])

print("RELATIONSHIP: Study Hours vs. Average Score")
print(f"Correlation coefficient: {study_grade_corr:.3f}")

# Interpret the correlation
if study_grade_corr > 0.7:
    interpretation = "Strong positive - More study time strongly linked to better grades!"
elif study_grade_corr > 0.3:
    interpretation = "Moderate positive - More study time somewhat linked to better grades"
elif study_grade_corr > 0.1:
    interpretation = "Weak positive - Slight tendency for more study to help grades"
elif study_grade_corr > -0.1:
    interpretation = "No clear relationship between study time and grades"
else:
    interpretation = "Negative relationship - This would be surprising!"

print(f"Interpretation: {interpretation}")

# Let's see the data points
print(f"\nData points:")
for _, student in df.iterrows():
    print(f"{student['Name']}: {student['Hours_Studied']} hours → {student['Average_Score']:.1f} avg score")

# Visualize this relationship
plt.figure(figsize=(10, 6))
plt.scatter(df['Hours_Studied'], df['Average_Score'], s=100, alpha=0.7, color='blue')

# Add names to each point
for _, student in df.iterrows():
    plt.annotate(student['Name'], 
                (student['Hours_Studied'], student['Average_Score']),
                xytext=(5, 5), textcoords='offset points', fontsize=9)

# Add a trend line
z = np.polyfit(df['Hours_Studied'], df['Average_Score'], 1)
p = np.poly1d(z)
plt.plot(df['Hours_Studied'], p(df['Hours_Studied']), "r--", alpha=0.8, linewidth=2)

plt.title(f'Study Hours vs. Average Score\n(Correlation: {study_grade_corr:.3f})', 
          fontsize=14, fontweight='bold')
plt.xlabel('Hours Studied per Week')
plt.ylabel('Average Score')
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()
```

### 2. Multiple Correlations at Once

Let's examine several relationships simultaneously:

```python
# Look at multiple interesting relationships
relationships = [
    ('Hours_Studied', 'Average_Score', 'Study Time vs Performance'),
    ('Sleep_Hours', 'Average_Score', 'Sleep vs Performance'), 
    ('Screen_Time', 'Average_Score', 'Screen Time vs Performance'),
    ('Books_Read', 'English_Score', 'Reading vs English Scores'),
    ('Age', 'Average_Score', 'Age vs Performance'),
    ('Extracurriculars', 'Average_Score', 'Activities vs Performance')
]

print("MULTIPLE CORRELATION ANALYSIS:")
print("="*60)

for var1, var2, description in relationships:
    correlation = df[var1].corr(df[var2])
    
    # Determine strength
    if abs(correlation) > 0.7:
        strength = "STRONG"
    elif abs(correlation) > 0.3:
        strength = "MODERATE"
    elif abs(correlation) > 0.1:
        strength = "WEAK"
    else:
        strength = "NONE"
    
    # Determine direction
    direction = "POSITIVE" if correlation > 0 else "NEGATIVE" if correlation < 0 else "NONE"
    
    print(f"\n{description}:")
    print(f"  Correlation: {correlation:.3f}")
    print(f"  Strength: {strength}")
    print(f"  Direction: {direction}")
    
    # Explain what this means
    if strength != "NONE":
        if direction == "POSITIVE":
            print(f"  Meaning: Higher {var1.replace('_', ' ').lower()} tends to mean higher {var2.replace('_', ' ').lower()}")
        else:
            print(f"  Meaning: Higher {var1.replace('_', ' ').lower()} tends to mean lower {var2.replace('_', ' ').lower()}")
```

### 3. Correlation Matrix - See All Relationships at Once

A correlation matrix shows the correlation between every pair of variables:

```python
# Create a correlation matrix for all numeric variables
numeric_columns = ['Age', 'Math_Score', 'Science_Score', 'English_Score', 
                  'Hours_Studied', 'Extracurriculars', 'Sleep_Hours', 
                  'Screen_Time', 'Books_Read', 'Average_Score']

correlation_matrix = df[numeric_columns].corr()

print("CORRELATION MATRIX:")
print("(Each number shows correlation between row and column variables)")
print(correlation_matrix.round(3))

# Create a heatmap to visualize the correlation matrix
plt.figure(figsize=(12, 10))
mask = np.triu(np.ones_like(correlation_matrix))  # Hide upper triangle (it's redundant)

# Create the heatmap
sns.heatmap(correlation_matrix, 
            annot=True,          # Show correlation numbers
            cmap='RdBu_r',       # Red-Blue color scheme
            center=0,            # Center the color map at 0
            mask=mask,           # Apply the mask
            square=True,         # Make cells square
            fmt='.2f',           # Format numbers to 2 decimal places
            cbar_kws={'label': 'Correlation Coefficient'})

plt.title('Student Data Correlation Matrix', fontsize=16, fontweight='bold', pad=20)
plt.tight_layout()
plt.show()

# Find the strongest correlations
print("\nSTRONGEST CORRELATIONS (excluding perfect self-correlations):")
# Get correlations and remove self-correlations (diagonal)
corr_pairs = []
for i in range(len(correlation_matrix.columns)):
    for j in range(i+1, len(correlation_matrix.columns)):
        var1 = correlation_matrix.columns[i]
        var2 = correlation_matrix.columns[j]
        corr_val = correlation_matrix.iloc[i, j]
        corr_pairs.append((abs(corr_val), var1, var2, corr_val))

# Sort by absolute correlation value
corr_pairs.sort(reverse=True)

for abs_corr, var1, var2, corr in corr_pairs[:5]:  # Top 5 correlations
    print(f"{var1} ↔ {var2}: {corr:.3f}")
```

### 4. Subject-Specific Correlations

Let's see how different subjects relate to other factors:

```python
# Analyze correlations for each subject separately
subjects = ['Math_Score', 'Science_Score', 'English_Score']
factors = ['Hours_Studied', 'Sleep_Hours', 'Screen_Time', 'Books_Read', 'Age', 'Extracurriculars']

print("SUBJECT-SPECIFIC CORRELATION ANALYSIS:")
print("="*50)

for subject in subjects:
    subject_name = subject.replace('_Score', '')
    print(f"\n{subject_name.upper()} CORRELATIONS:")
    
    subject_correlations = []
    for factor in factors:
        corr = df[factor].corr(df[subject])
        subject_correlations.append((abs(corr), factor, corr))
    
    # Sort by absolute correlation strength
    subject_correlations.sort(reverse=True)
    
    for abs_corr, factor, corr in subject_correlations:
        factor_name = factor.replace('_', ' ').title()
        strength = "Strong" if abs_corr > 0.7 else "Moderate" if abs_corr > 0.3 else "Weak" if abs_corr > 0.1 else "None"
        direction = "↗" if corr > 0 else "↘" if corr < 0 else "→"
        print(f"  {factor_name:15} {direction} {corr:6.3f} ({strength})")
```

### 5. Correlation vs. Causation Warning

This is crucial to understand:

```python
print("⚠️  IMPORTANT: CORRELATION ≠ CAUSATION ⚠️")
print("="*50)
print()
print("Just because two things are correlated doesn't mean one CAUSES the other!")
print()
print("Examples from our data:")

# Find a strong correlation
books_english_corr = df['Books_Read'].corr(df['English_Score'])
print(f"Books Read ↔ English Score: {books_english_corr:.3f}")
print()
print("Possible explanations:")
print("1. 📚 Reading more books improves English skills (books → English)")
print("2. 🎓 Students good at English enjoy reading more (English → books)")  
print("3. 👨‍👩‍👧‍👦 Family values education (causes both reading AND good English)")
print("4. 💰 Family income affects both book access AND tutoring")
print()

print("How to think about correlation:")
print("• Correlation suggests a relationship exists")
print("• It helps us ask better questions")  
print("• We need experiments or more data to prove causation")
print("• Always consider alternative explanations")

# Show a surprising correlation
screen_performance_corr = df['Screen_Time'].corr(df['Average_Score'])
print(f"\nSurprising finding:")
print(f"Screen Time ↔ Average Score: {screen_performance_corr:.3f}")

if screen_performance_corr < -0.3:
    print("This suggests students with more screen time have lower grades.")
    print("But remember: correlation ≠ causation!")
    print("Maybe students who struggle academically use screens to relax?")
    print("Or maybe high achievers have less free time for screens?")
```

### 6. Creating a Correlation Story

Let's create a narrative about our findings:

```python
# Create subplots showing our key correlations
fig, axes = plt.subplots(2, 2, figsize=(15, 12))
fig.suptitle('Key Correlation Findings', fontsize=16, fontweight='bold')

# 1. Study Hours vs Performance
axes[0, 0].scatter(df['Hours_Studied'], df['Average_Score'], color='blue', s=100, alpha=0.7)
z1 = np.polyfit(df['Hours_Studied'], df['Average_Score'], 1)
p1 = np.poly1d(z1)
axes[0, 0].plot(df['Hours_Studied'], p1(df['Hours_Studied']), "r--", alpha=0.8)
corr1 = df['Hours_Studied'].corr(df['Average_Score'])
axes[0, 0].set_title(f'Study Hours vs Performance\n(r = {corr1:.3f})')
axes[0, 0].set_xlabel('Hours Studied')
axes[0, 0].set_ylabel('Average Score')

# 2. Sleep vs Performance  
axes[0, 1].scatter(df['Sleep_Hours'], df['Average_Score'], color='green', s=100, alpha=0.7)
z2 = np.polyfit(df['Sleep_Hours'], df['Average_Score'], 1)
p2 = np.poly1d(z2)
axes[0, 1].plot(df['Sleep_Hours'], p2(df['Sleep_Hours']), "r--", alpha=0.8)
corr2 = df['Sleep_Hours'].corr(df['Average_Score'])
axes[0, 1].set_title(f'Sleep Hours vs Performance\n(r = {corr2:.3f})')
axes[0, 1].set_xlabel('Sleep Hours')
axes[0, 1].set_ylabel('Average Score')

# 3. Screen Time vs Performance
axes[1, 0].scatter(df['Screen_Time'], df['Average_Score'], color='red', s=100, alpha=0.7)
z3 = np.polyfit(df['Screen_Time'], df['Average_Score'], 1)
p3 = np.poly1d(z3)
axes[1, 0].plot(df['Screen_Time'], p3(df['Screen_Time']), "r--", alpha=0.8)
corr3 = df['Screen_Time'].corr(df['Average_Score'])
axes[1, 0].set_title(f'Screen Time vs Performance\n(r = {corr3:.3f})')
axes[1, 0].set_xlabel('Screen Hours')
axes[1, 0].set_ylabel('Average Score')

# 4. Books vs English
axes[1, 1].scatter(df['Books_Read'], df['English_Score'], color='purple', s=100, alpha=0.7)
z4 = np.polyfit(df['Books_Read'], df['English_Score'], 1)
p4 = np.poly1d(z4)
axes[1, 1].plot(df['Books_Read'], p4(df['Books_Read']), "r--", alpha=0.8)
corr4 = df['Books_Read'].corr(df['English_Score'])
axes[1, 1].set_title(f'Books Read vs English Score\n(r = {corr4:.3f})')
axes[1, 1].set_xlabel('Books per Year')
axes[1, 1].set_ylabel('English Score')

plt.tight_layout()
plt.show()

# Summary of findings
print("CORRELATION STORY SUMMARY:")
print("="*40)
strongest_corr = max([abs(corr1), abs(corr2), abs(corr3), abs(corr4)])
if strongest_corr == abs(corr1):
    strongest_relationship = "study time and performance"
elif strongest_corr == abs(corr2):
    strongest_relationship = "sleep and performance"
elif strongest_corr == abs(corr3):
    strongest_relationship = "screen time and performance"  
else:
    strongest_relationship = "reading and English scores"

print(f"Strongest relationship: {strongest_relationship}")
print(f"This tells us where to focus for improving student outcomes.")
```

## Key Learning Points

1. **Correlation measures relationship strength** from -1 to +1
2. **Positive correlation**: Both variables increase together
3. **Negative correlation**: One increases as the other decreases
4. **Correlation matrices** show all relationships at once
5. **Correlation ≠ Causation** - always consider alternative explanations
6. **Strong correlations** (>0.7 or <-0.7) suggest important relationships worth investigating

## Practice Exercises

1. **Movie Data Correlations**: Analyze your movie dataset:
   - Do newer movies have higher ratings?
   - Is there a relationship between movie length and rating?
   - Create a correlation matrix for all numeric variables

2. **Find Surprising Correlations**: Look for unexpected relationships in your data

3. **Interpret Results**: Practice explaining what correlations mean in plain English

4. **Visualize Relationships**: Create scatter plots for your strongest correlations

## What's Next?

Now that we can find relationships in our data, we're ready to create more advanced visualizations and dive into statistical significance testing! In the next lesson, we'll explore advanced plotting techniques and learn about p-values and t-tests.

Next: [Advanced Analysis: P-values, T-tests, and Linear Regression](/data-analytics-06-advanced-analysis/)