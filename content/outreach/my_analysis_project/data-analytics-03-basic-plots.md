---
title: "Data Analytics Lesson 3: Creating Your First Data Visualizations"
date: 2025-10-25T13:00:00Z
draft: false
weight: 22
tags: ["python", "data-analytics", "visualization", "matplotlib", "plots"]
categories: ["data-analytics-series"]
---

## Making Data Come Alive with Pictures

They say "a picture is worth a thousand words" - and this is especially true with data! Today we'll learn how to create charts and graphs that make patterns jump out at us. It's much easier to spot trends in a picture than in a table of numbers.

### Setting Up for Visualization

First, let's import the tools we need and recreate our student dataset:

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
import matplotlib.pyplot as plt  # This is our main plotting tool
import seaborn as sns           # This makes our plots look prettier

# Set up nice-looking plots
plt.style.use('default')  # Clean, simple style
sns.set_palette("husl")   # Pretty colors

# Our student dataset with all the information we've been using
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

print("Ready to visualize our data!")
```

### 1. Bar Charts - Comparing Categories

Bar charts are perfect for comparing different groups. Let's see how each grade level performs:

```python
# Calculate average scores by grade
grade_averages = df.groupby('Grade')['Average_Score'].mean()

# Create our first bar chart
plt.figure(figsize=(8, 6))  # Set the size of our plot
plt.bar(grade_averages.index, grade_averages.values, 
        color=['lightblue', 'lightgreen', 'lightcoral'])

# Make it look nice with labels
plt.title('Average Scores by Grade Level', fontsize=16, fontweight='bold')
plt.xlabel('Grade Level', fontsize=12)
plt.ylabel('Average Score', fontsize=12)
plt.ylim(80, 95)  # Set the range of the y-axis for better visibility

# Add value labels on top of each bar
for i, v in enumerate(grade_averages.values):
    plt.text(i, v + 0.5, f'{v:.1f}', ha='center', fontweight='bold')

plt.tight_layout()  # Make sure everything fits nicely
plt.show()

# Let's also print the numbers
print("Grade Level Performance:")
for grade, avg in grade_averages.items():
    print(f"{grade} grade: {avg:.1f} points")
```

### 2. Horizontal Bar Charts - When Names Are Long

Sometimes horizontal bars work better, especially when we have names:

```python
# Let's look at individual student performance
plt.figure(figsize=(10, 6))

# Create horizontal bar chart
plt.barh(df['Name'], df['Average_Score'], color='skyblue')

# Add labels and title
plt.title('Individual Student Performance', fontsize=16, fontweight='bold')
plt.xlabel('Average Score', fontsize=12)
plt.ylabel('Student Name', fontsize=12)

# Add score values at the end of each bar
for i, (name, score) in enumerate(zip(df['Name'], df['Average_Score'])):
    plt.text(score + 0.5, i, f'{score:.1f}', va='center', fontweight='bold')

plt.tight_layout()
plt.show()

# Find the top and bottom performers
top_student = df.loc[df['Average_Score'].idxmax()]
bottom_student = df.loc[df['Average_Score'].idxmin()]
print(f"Top performer: {top_student['Name']} with {top_student['Average_Score']:.1f}")
print(f"Needs support: {bottom_student['Name']} with {bottom_student['Average_Score']:.1f}")
```

### 3. Line Plots - Showing Trends and Relationships

Line plots are great for showing how one thing changes with another:

```python
# Let's see if more study hours lead to better performance
plt.figure(figsize=(10, 6))

# Sort by study hours to make the line make sense
df_sorted = df.sort_values('Hours_Studied')

plt.plot(df_sorted['Hours_Studied'], df_sorted['Average_Score'], 
         marker='o', linewidth=2, markersize=8, color='darkblue')

# Add labels for each point
for _, student in df_sorted.iterrows():
    plt.annotate(student['Name'], 
                (student['Hours_Studied'], student['Average_Score']),
                xytext=(5, 5), textcoords='offset points', fontsize=10)

plt.title('Study Hours vs. Average Performance', fontsize=16, fontweight='bold')
plt.xlabel('Hours Studied per Week', fontsize=12)
plt.ylabel('Average Score', fontsize=12)
plt.grid(True, alpha=0.3)  # Add a light grid to make it easier to read
plt.tight_layout()
plt.show()

# Calculate if there's a relationship
correlation = df['Hours_Studied'].corr(df['Average_Score'])
print(f"Correlation between study hours and performance: {correlation:.2f}")
if correlation > 0.7:
    print("Strong positive relationship - more study time = better grades!")
elif correlation > 0.3:
    print("Moderate positive relationship - study time helps somewhat")
else:
    print("Weak relationship - other factors might be more important")
```

### 4. Scatter Plots - Exploring Relationships

Scatter plots help us see relationships between two continuous variables:

```python
# Create a scatter plot showing study hours vs performance
plt.figure(figsize=(10, 8))

# Different colors for different grades
grade_colors = {'10th': 'red', '11th': 'blue', '12th': 'green'}
colors = [grade_colors[grade] for grade in df['Grade']]

plt.scatter(df['Hours_Studied'], df['Average_Score'], 
           c=colors, s=100, alpha=0.7, edgecolors='black')

# Add student names as labels
for _, student in df.iterrows():
    plt.annotate(student['Name'], 
                (student['Hours_Studied'], student['Average_Score']),
                xytext=(5, 5), textcoords='offset points', fontsize=9)

plt.title('Study Hours vs. Performance by Grade Level', fontsize=16, fontweight='bold')
plt.xlabel('Hours Studied per Week', fontsize=12)
plt.ylabel('Average Score', fontsize=12)

# Create a legend for the colors
for grade, color in grade_colors.items():
    plt.scatter([], [], c=color, label=grade, s=100, alpha=0.7, edgecolors='black')
plt.legend(title='Grade Level')

plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()

print("What does this tell us?")
print("- Red dots = 10th graders")  
print("- Blue dots = 11th graders")
print("- Green dots = 12th graders")
print("Look for patterns: Do different grades cluster together?")
```

### 5. Histograms - Understanding Distributions

Histograms show us how values are distributed:

```python
# Let's look at the distribution of test scores
fig, axes = plt.subplots(2, 2, figsize=(12, 10))
fig.suptitle('Distribution of Test Scores', fontsize=16, fontweight='bold')

# Math scores
axes[0, 0].hist(df['Math_Score'], bins=6, color='lightblue', edgecolor='black', alpha=0.7)
axes[0, 0].set_title('Math Scores')
axes[0, 0].set_xlabel('Score')
axes[0, 0].set_ylabel('Number of Students')

# Science scores
axes[0, 1].hist(df['Science_Score'], bins=6, color='lightgreen', edgecolor='black', alpha=0.7)
axes[0, 1].set_title('Science Scores')
axes[0, 1].set_xlabel('Score')
axes[0, 1].set_ylabel('Number of Students')

# English scores
axes[1, 0].hist(df['English_Score'], bins=6, color='lightcoral', edgecolor='black', alpha=0.7)
axes[1, 0].set_title('English Scores')
axes[1, 0].set_xlabel('Score')
axes[1, 0].set_ylabel('Number of Students')

# Study hours
axes[1, 1].hist(df['Hours_Studied'], bins=5, color='lightyellow', edgecolor='black', alpha=0.7)
axes[1, 1].set_title('Study Hours per Week')
axes[1, 1].set_xlabel('Hours')
axes[1, 1].set_ylabel('Number of Students')

plt.tight_layout()
plt.show()

# Analyze what we see
print("What do these distributions tell us?")
for subject in ['Math_Score', 'Science_Score', 'English_Score']:
    mean_score = df[subject].mean()
    std_score = df[subject].std()
    print(f"{subject.replace('_', ' ')}: Average = {mean_score:.1f}, Spread = {std_score:.1f}")
```

### 6. Box Plots - Comparing Groups

Box plots are excellent for comparing different groups:

```python
# Compare subject performance across all students
plt.figure(figsize=(10, 6))

# Prepare data for box plot
subjects_data = [df['Math_Score'], df['Science_Score'], df['English_Score']]
subject_names = ['Math', 'Science', 'English']

box_plot = plt.boxplot(subjects_data, labels=subject_names, patch_artist=True)

# Make it colorful
colors = ['lightblue', 'lightgreen', 'lightcoral']
for patch, color in zip(box_plot['boxes'], colors):
    patch.set_facecolor(color)

plt.title('Score Distribution by Subject', fontsize=16, fontweight='bold')
plt.ylabel('Score', fontsize=12)
plt.xlabel('Subject', fontsize=12)
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()

print("Understanding Box Plots:")
print("- The box shows where the middle 50% of scores fall")
print("- The line in the middle is the median (middle value)")
print("- The 'whiskers' show the range of most scores")
print("- Dots outside are outliers (unusual values)")
```

### 7. Multiple Variables in One Plot

Sometimes we want to show several things at once:

```python
# Create a comprehensive view of our data
fig, axes = plt.subplots(2, 2, figsize=(15, 12))
fig.suptitle('Complete Student Performance Analysis', fontsize=18, fontweight='bold')

# 1. Performance by Grade (Bar Chart)
grade_avg = df.groupby('Grade')['Average_Score'].mean()
axes[0, 0].bar(grade_avg.index, grade_avg.values, color=['lightblue', 'lightgreen', 'lightcoral'])
axes[0, 0].set_title('Average Performance by Grade')
axes[0, 0].set_ylabel('Average Score')

# 2. Study Hours Effect (Scatter Plot)
axes[0, 1].scatter(df['Hours_Studied'], df['Average_Score'], 
                   c=df['Age'], cmap='viridis', s=100, alpha=0.7)
axes[0, 1].set_title('Study Hours vs. Performance (Color = Age)')
axes[0, 1].set_xlabel('Hours Studied')
axes[0, 1].set_ylabel('Average Score')

# 3. Subject Comparison (Box Plot)
subject_data = [df['Math_Score'], df['Science_Score'], df['English_Score']]
box_plot = axes[1, 0].boxplot(subject_data, labels=['Math', 'Science', 'English'])
axes[1, 0].set_title('Score Distribution by Subject')
axes[1, 0].set_ylabel('Score')

# 4. Individual Performance (Horizontal Bar)
axes[1, 1].barh(df['Name'], df['Average_Score'], color='skyblue')
axes[1, 1].set_title('Individual Student Performance')
axes[1, 1].set_xlabel('Average Score')

plt.tight_layout()
plt.show()

print("This comprehensive view helps us see:")
print("1. Which grades perform best overall")
print("2. How study time relates to performance")  
print("3. Which subjects are most/least challenging")
print("4. How individual students compare")
```

## Key Learning Points

1. **Different plots for different purposes**:
   - Bar charts: Compare categories
   - Line plots: Show trends over time or relationships
   - Scatter plots: Explore relationships between variables
   - Histograms: Understand distributions
   - Box plots: Compare groups

2. **Always add clear labels** - title, axis labels, and legends make plots understandable

3. **Colors and formatting matter** - they help tell your story

4. **Start simple, then add complexity** - basic plots first, then enhance

5. **Look for patterns** - that's why we make visualizations!

## Practice Exercises

1. **Create Your Movie Plots**: Using your movie dataset:
   - Bar chart of movies per decade
   - Scatter plot of year vs. rating
   - Histogram of movie ratings

2. **Experiment with Colors**: Try different color schemes for your plots

3. **Tell a Story**: Create a 2x2 subplot showing different views of your movie data

4. **Add Annotations**: Label interesting points in your scatter plots

## What's Next?

Now that we can create beautiful visualizations, we're ready to dive deeper into the numbers! In the next lesson, we'll learn about basic statistics that help us understand what our data is really telling us.

Next: [Understanding Basic Statistics and Summaries](/data-analytics-04-basic-statistics/)