---
title: "Overview Python Data Visualization"
date: 2025-10-24T14:00:00Z
draft: false
weight: 20
tags: ["python", "matplotlib", "seaborn", "visualization"]
categories: ["quarto-demo"]
---

## Data Visualization with Python

This Quarto demo demonstrates how to create compelling visualizations for programming education using popular Python libraries.

### Required Libraries

```python
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import pandas as pd
from datetime import datetime, timedelta

# Set style for better-looking plots
plt.style.use('seaborn-v0_8')
sns.set_palette("husl")
```

### Basic Plotting with Matplotlib

#### Line Plots

```python
# Generate sample data
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

# Create the plot
plt.figure(figsize=(10, 6))
plt.plot(x, y1, label='sin(x)', linewidth=2)
plt.plot(x, y2, label='cos(x)', linewidth=2)
plt.title('Trigonometric Functions', fontsize=16, fontweight='bold')
plt.xlabel('x values')
plt.ylabel('Function values')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()
```

#### Bar Charts for Grade Distribution

```python
# Student grade data
grades = ['A', 'B', 'C', 'D', 'F']
counts = [25, 30, 20, 15, 10]
colors = ['#2E8B57', '#4169E1', '#FFD700', '#FF8C00', '#DC143C']

plt.figure(figsize=(8, 6))
bars = plt.bar(grades, counts, color=colors, alpha=0.8, edgecolor='black')
plt.title('Student Grade Distribution', fontsize=16, fontweight='bold')
plt.xlabel('Grade')
plt.ylabel('Number of Students')

# Add value labels on bars
for bar, count in zip(bars, counts):
    plt.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.5, 
             str(count), ha='center', va='bottom', fontweight='bold')

plt.show()
```

### Advanced Visualizations with Seaborn

#### Scatter Plot with Regression Line

```python
# Generate sample student performance data
np.random.seed(42)
n_students = 100

study_hours = np.random.normal(5, 2, n_students)
study_hours = np.clip(study_hours, 0, 10)  # Limit to 0-10 hours

# Create correlation between study hours and test scores
test_scores = 60 + 3 * study_hours + np.random.normal(0, 5, n_students)
test_scores = np.clip(test_scores, 0, 100)  # Limit to 0-100

# Create DataFrame
df = pd.DataFrame({
    'Study Hours': study_hours,
    'Test Score': test_scores
})

# Create scatter plot with regression line
plt.figure(figsize=(10, 6))
sns.scatterplot(data=df, x='Study Hours', y='Test Score', alpha=0.7, s=60)
sns.regplot(data=df, x='Study Hours', y='Test Score', scatter=False, color='red')
plt.title('Study Hours vs Test Scores', fontsize=16, fontweight='bold')
plt.xlabel('Study Hours per Week')
plt.ylabel('Test Score (%)')
plt.show()
```

#### Heatmap for Correlation Matrix

```python
# Create a more comprehensive dataset
np.random.seed(42)
n = 200

data = {
    'Study Hours': np.random.normal(5, 2, n),
    'Class Attendance': np.random.beta(2, 1, n) * 100,
    'Previous GPA': np.random.normal(3.0, 0.5, n),
    'Assignment Score': np.random.normal(80, 15, n),
    'Final Exam': np.random.normal(75, 20, n)
}

# Add some correlations
data['Assignment Score'] += data['Study Hours'] * 2
data['Final Exam'] += data['Study Hours'] * 3 + data['Class Attendance'] * 0.2
data['Final Exam'] += data['Previous GPA'] * 5

df_comprehensive = pd.DataFrame(data)

# Create correlation heatmap
plt.figure(figsize=(10, 8))
correlation_matrix = df_comprehensive.corr()
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', center=0,
            square=True, linewidths=0.5, cbar_kws={"shrink": .8})
plt.title('Correlation Matrix of Academic Performance Factors', 
          fontsize=14, fontweight='bold')
plt.tight_layout()
plt.show()
```

### Interactive Plotting Concepts

#### Subplots for Multiple Visualizations

```python
# Create a figure with multiple subplots
fig, axes = plt.subplots(2, 2, figsize=(15, 12))
fig.suptitle('Programming Concept Performance Dashboard', fontsize=16, fontweight='bold')

# Subplot 1: Algorithm Complexity Understanding
concepts = ['Arrays', 'Sorting', 'Searching', 'Trees', 'Graphs']
scores = [85, 78, 82, 65, 58]
axes[0, 0].bar(concepts, scores, color='lightblue', edgecolor='navy')
axes[0, 0].set_title('Algorithm Concept Scores')
axes[0, 0].set_ylabel('Average Score (%)')
axes[0, 0].tick_params(axis='x', rotation=45)

# Subplot 2: Programming Language Preference
languages = ['Python', 'Java', 'JavaScript', 'C++', 'Go']
popularity = [35, 25, 20, 15, 5]
axes[0, 1].pie(popularity, labels=languages, autopct='%1.1f%%', startangle=90)
axes[0, 1].set_title('Programming Language Preferences')

# Subplot 3: Learning Progress Over Time
weeks = range(1, 16)
python_progress = [20, 35, 50, 62, 70, 75, 80, 82, 85, 87, 89, 90, 92, 94, 95]
java_progress = [10, 20, 30, 45, 55, 65, 70, 75, 78, 80, 82, 84, 85, 87, 88]

axes[1, 0].plot(weeks, python_progress, marker='o', label='Python', linewidth=2)
axes[1, 0].plot(weeks, java_progress, marker='s', label='Java', linewidth=2)
axes[1, 0].set_title('Learning Progress Over Semester')
axes[1, 0].set_xlabel('Week')
axes[1, 0].set_ylabel('Proficiency (%)')
axes[1, 0].legend()
axes[1, 0].grid(True, alpha=0.3)

# Subplot 4: Error Distribution by Type
error_types = ['Syntax', 'Logic', 'Runtime', 'Type', 'Import']
error_counts = [45, 30, 20, 15, 10]
axes[1, 1].barh(error_types, error_counts, color='salmon')
axes[1, 1].set_title('Common Error Types')
axes[1, 1].set_xlabel('Frequency')

plt.tight_layout()
plt.show()
```

### Mathematical Visualizations

#### Function Plotting for Algorithm Analysis

```python
# Visualize Big O notation complexities
n = np.arange(1, 101)

# Different time complexities
constant = np.ones_like(n)
logarithmic = np.log2(n)
linear = n
n_log_n = n * np.log2(n)
quadratic = n ** 2
cubic = n ** 3

plt.figure(figsize=(12, 8))
plt.plot(n, constant, label='O(1) - Constant', linewidth=2)
plt.plot(n, logarithmic, label='O(log n) - Logarithmic', linewidth=2)
plt.plot(n, linear, label='O(n) - Linear', linewidth=2)
plt.plot(n, n_log_n, label='O(n log n) - Linearithmic', linewidth=2)
plt.plot(n, quadratic, label='O(n²) - Quadratic', linewidth=2)
plt.plot(n[n<=20], cubic[n<=20], label='O(n³) - Cubic', linewidth=2)

plt.title('Algorithm Time Complexity Comparison', fontsize=16, fontweight='bold')
plt.xlabel('Input Size (n)')
plt.ylabel('Time Units')
plt.legend()
plt.grid(True, alpha=0.3)
plt.xlim(1, 100)
plt.ylim(0, 1000)
plt.show()
```

## Visualization Best Practices for Education

### 1. Clear and Descriptive Titles
Always use titles that clearly explain what the visualization shows.

### 2. Proper Axis Labels
Label your axes with units when applicable.

### 3. Color Considerations
- Use colorblind-friendly palettes
- Ensure sufficient contrast
- Use colors meaningfully (e.g., red for errors, green for success)

### 4. Interactive Elements
Consider adding interactivity for engagement:
- Hover tooltips
- Zoom capabilities
- Filter options

### 5. Annotations
Add text annotations to highlight key insights or learning points.

## Code Example: Creating Educational Plots

```python
def create_educational_plot(data, title, learning_objective):
    """
    Create a standardized educational visualization.
    
    Parameters:
    - data: Dictionary with x and y values
    - title: Plot title
    - learning_objective: What students should learn
    """
    plt.figure(figsize=(10, 6))
    plt.plot(data['x'], data['y'], marker='o', linewidth=2, markersize=6)
    plt.title(f"{title}\nLearning Objective: {learning_objective}", 
              fontsize=14, fontweight='bold')
    plt.xlabel('Input')
    plt.ylabel('Output')
    plt.grid(True, alpha=0.3)
    
    # Add annotation for key insight
    max_idx = np.argmax(data['y'])
    plt.annotate(f'Peak: ({data["x"][max_idx]}, {data["y"][max_idx]:.1f})',
                xy=(data['x'][max_idx], data['y'][max_idx]),
                xytext=(10, 10), textcoords='offset points',
                bbox=dict(boxstyle='round,pad=0.3', facecolor='yellow', alpha=0.7),
                arrowprops=dict(arrowstyle='->', connectionstyle='arc3,rad=0'))
    
    plt.tight_layout()
    plt.show()

# Example usage
sample_data = {
    'x': np.linspace(0, 2*np.pi, 50),
    'y': np.sin(np.linspace(0, 2*np.pi, 50))
}

create_educational_plot(
    sample_data, 
    "Sine Wave Function", 
    "Understand periodic behavior in trigonometric functions"
)
```

## Assignment Ideas

1. **Create a visualization comparing sorting algorithm performance**
2. **Plot memory usage vs. input size for different data structures**
3. **Visualize the concept of recursion with tree diagrams**
4. **Show the distribution of programming bugs by category**

Next: Learn about [mathematical concepts in programming](/quarto-demo/math-concepts/)!