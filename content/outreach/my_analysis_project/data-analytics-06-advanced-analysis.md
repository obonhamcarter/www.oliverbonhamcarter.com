---
title: "Data Analytics Lesson 6: Advanced Analysis - P-values, T-tests, and Linear Regression"
date: 2025-10-25T16:00:00Z
draft: false
weight: 25
tags: ["python", "data-analytics", "statistics", "t-test", "p-value", "linear-regression"]
categories: ["data-analytics-series"]
---

## Advanced Statistical Analysis - Going Beyond the Basics

Welcome to our final lesson in the data analytics series! Today we'll learn about the tools that professional data scientists use to make confident conclusions from data. We'll explore p-values (are our findings real or just luck?), t-tests (comparing groups scientifically), and linear regression (predicting future outcomes).

### Setting Up for Advanced Analysis

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
from scipy import stats  # This gives us advanced statistical functions
import warnings
warnings.filterwarnings('ignore')  # Hide technical warnings

# Our complete student dataset
student_data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eva', 'Frank', 'Grace', 'Henry'],
    'Age': [16, 17, 16, 18, 17, 16, 17, 18],
    'Grade': ['10th', '11th', '10th', '12th', '11th', '10th', '11th', '12th'],
    'Math_Score': [85, 92, 78, 95, 88, 76, 91, 87],
    'Science_Score': [89, 87, 82, 98, 85, 79, 93, 89],
    'English_Score': [92, 85, 88, 91, 94, 83, 89, 86],
    'Hours_Studied': [5, 8, 4, 10, 6, 3, 9, 7],
    'Extracurriculars': [2, 1, 3, 2, 4, 1, 2, 3],
    'Sleep_Hours': [7, 6, 8, 6, 7, 9, 6, 7],
    'Screen_Time': [4, 6, 3, 2, 5, 7, 3, 4],
    'Books_Read': [12, 8, 15, 20, 10, 5, 18, 14]
}

df = pd.DataFrame(student_data)
df['Average_Score'] = df[['Math_Score', 'Science_Score', 'English_Score']].mean(axis=1)

print("Ready for advanced statistical analysis!")
print("We'll answer questions like:")
print("• Are older students REALLY better at math, or could it be random chance?")
print("• Can we PREDICT a student's English score from how many books they read?") 
print("• Is the difference between grades STATISTICALLY SIGNIFICANT?")
```

### 1. Understanding P-Values - "Could This Be Just Luck?"

P-values help us determine if our findings are real or could have happened by chance:

```python
print("UNDERSTANDING P-VALUES")
print("="*40)
print()
print("A p-value answers: 'If there was really no relationship,")
print("what's the probability we'd see results this extreme by pure chance?'")
print()
print("P-value interpretation:")
print("• p < 0.001  → Almost certainly real (99.9% confident)")
print("• p < 0.01   → Very likely real (99% confident)")  
print("• p < 0.05   → Probably real (95% confident) ← Common threshold")
print("• p < 0.10   → Possibly real (90% confident)")
print("• p > 0.10   → Could easily be due to chance")
print()
print("In science, we usually want p < 0.05 to call something 'significant'")

# Let's test if the correlation between study hours and grades is significant
study_correlation = df['Hours_Studied'].corr(df['Average_Score'])
correlation_stat, p_value = stats.pearsonr(df['Hours_Studied'], df['Average_Score'])

print(f"\nExample: Study Hours ↔ Average Score")
print(f"Correlation: {study_correlation:.3f}")
print(f"P-value: {p_value:.4f}")

if p_value < 0.05:
    print(f"✓ SIGNIFICANT! (p < 0.05)")
    print(f"  We can be confident this relationship is real, not just luck")
elif p_value < 0.10:
    print(f"? BORDERLINE (p < 0.10)")
    print(f"  Possibly real, but we can't be very confident")
else:
    print(f"✗ NOT SIGNIFICANT (p > 0.10)")
    print(f"  This could easily be due to chance")
```

### 2. T-Tests - Comparing Groups Scientifically

T-tests help us determine if differences between groups are real or just random variation:

```python
# Question: Do older students (11th/12th grade) perform better than younger students (10th grade)?

# Split students into two groups
older_students = df[df['Grade'].isin(['11th', '12th'])]
younger_students = df[df['Grade'] == '10th']

older_scores = older_students['Average_Score']
younger_scores = younger_students['Average_Score']

print("T-TEST: Do older students perform better?")
print("="*45)
print()
print("Groups:")
print(f"Older students (11th/12th): {len(older_students)} students")
for _, student in older_students.iterrows():
    print(f"  {student['Name']} ({student['Grade']}): {student['Average_Score']:.1f}")

print(f"\nYounger students (10th): {len(younger_students)} students")  
for _, student in younger_students.iterrows():
    print(f"  {student['Name']} ({student['Grade']}): {student['Average_Score']:.1f}")

print(f"\nGroup Averages:")
older_mean = older_scores.mean()
younger_mean = younger_scores.mean()
difference = older_mean - younger_mean

print(f"Older students average: {older_mean:.1f}")
print(f"Younger students average: {younger_mean:.1f}")
print(f"Difference: {difference:.1f} points")

# Perform the t-test
t_statistic, p_value_ttest = stats.ttest_ind(older_scores, younger_scores)

print(f"\nT-test Results:")
print(f"T-statistic: {t_statistic:.3f}")
print(f"P-value: {p_value_ttest:.4f}")

# Interpret the results
print(f"\nInterpretation:")
if p_value_ttest < 0.05:
    print(f"✓ SIGNIFICANT DIFFERENCE (p < 0.05)")
    print(f"  The {difference:.1f} point difference is statistically significant")
    print(f"  Older students DO perform significantly better")
elif p_value_ttest < 0.10:
    print(f"? BORDERLINE DIFFERENCE (p < 0.10)")
    print(f"  There might be a real difference, but we can't be sure")
else:
    print(f"✗ NO SIGNIFICANT DIFFERENCE (p > 0.10)")
    print(f"  The {difference:.1f} point difference could easily be due to chance")
    print(f"  We can't conclude that older students perform better")
```

### 3. One-Sample T-Test - Testing Against a Standard

```python
# Question: Are our students performing above the national average of 85?

national_average = 85
our_average = df['Average_Score'].mean()

print("ONE-SAMPLE T-TEST: Are we above national average?")
print("="*50)
print(f"National average: {national_average}")
print(f"Our school average: {our_average:.1f}")
print(f"Difference: {our_average - national_average:.1f} points")

# Perform one-sample t-test
t_stat_one, p_val_one = stats.ttest_1samp(df['Average_Score'], national_average)

print(f"\nOne-sample t-test results:")
print(f"T-statistic: {t_stat_one:.3f}")
print(f"P-value: {p_val_one:.4f}")

print(f"\nInterpretation:")
if p_val_one < 0.05:
    if our_average > national_average:
        print(f"✓ SIGNIFICANTLY ABOVE AVERAGE (p < 0.05)")
        print(f"  Our students perform significantly better than national average")
    else:
        print(f"✓ SIGNIFICANTLY BELOW AVERAGE (p < 0.05)")
        print(f"  Our students perform significantly worse than national average")
else:
    print(f"✗ NO SIGNIFICANT DIFFERENCE (p > 0.05)")
    print(f"  Our performance is not significantly different from national average")

# Visualize this
plt.figure(figsize=(10, 6))
plt.hist(df['Average_Score'], bins=5, alpha=0.7, color='lightblue', edgecolor='black')
plt.axvline(national_average, color='red', linestyle='--', linewidth=2, label=f'National Average: {national_average}')
plt.axvline(our_average, color='green', linestyle='-', linewidth=2, label=f'Our Average: {our_average:.1f}')
plt.title('Our School vs National Average', fontsize=14, fontweight='bold')
plt.xlabel('Average Score')
plt.ylabel('Number of Students')
plt.legend()
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()
```

### 4. Linear Regression - Predicting the Future

Linear regression helps us make predictions based on relationships we've found:

```python
print("LINEAR REGRESSION: Predicting English Scores from Books Read")
print("="*60)

# Set up our regression
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score

# Prepare data for regression
X = df[['Books_Read']]  # Predictor (must be 2D array)
y = df['English_Score']  # What we want to predict

# Create and fit the regression model
model = LinearRegression()
model.fit(X, y)

# Get the equation components
slope = model.coef_[0]      # How much English score changes per book
intercept = model.intercept_ # English score when books read = 0
r_squared = r2_score(y, model.predict(X))  # How well our line fits

print(f"Regression Equation:")
print(f"English Score = {intercept:.2f} + {slope:.2f} × (Books Read)")
print()
print(f"What this means:")
print(f"• Base English score (with 0 books): {intercept:.1f}")
print(f"• Each additional book read increases English score by {slope:.2f} points")
print(f"• R-squared: {r_squared:.3f} ({r_squared*100:.1f}% of variation explained)")

# Make predictions for new students
print(f"\nPredictions for new students:")
test_books = [5, 10, 15, 20, 25]
for books in test_books:
    predicted_score = intercept + slope * books
    print(f"Student who reads {books:2d} books/year: {predicted_score:.1f} English score")

# Test statistical significance of our regression
correlation_books_english = df['Books_Read'].corr(df['English_Score'])
corr_stat, p_val_regression = stats.pearsonr(df['Books_Read'], df['English_Score'])

print(f"\nStatistical Significance:")
print(f"Correlation: {correlation_books_english:.3f}")
print(f"P-value: {p_val_regression:.4f}")

if p_val_regression < 0.05:
    print(f"✓ SIGNIFICANT RELATIONSHIP (p < 0.05)")
    print(f"  We can confidently use this model for predictions")
else:
    print(f"✗ NOT SIGNIFICANT (p > 0.05)")
    print(f"  This relationship might be due to chance - predictions unreliable")
```

### 5. Visualizing Our Regression

```python
# Create a comprehensive regression plot
plt.figure(figsize=(12, 8))

# Scatter plot of actual data
plt.scatter(df['Books_Read'], df['English_Score'], s=100, alpha=0.7, color='blue', label='Actual Students')

# Add student names
for _, student in df.iterrows():
    plt.annotate(student['Name'], 
                (student['Books_Read'], student['English_Score']),
                xytext=(5, 5), textcoords='offset points', fontsize=9)

# Plot regression line
books_range = np.linspace(df['Books_Read'].min(), df['Books_Read'].max(), 100)
predicted_scores = intercept + slope * books_range
plt.plot(books_range, predicted_scores, 'r-', linewidth=2, label=f'Regression Line (R² = {r_squared:.3f})')

# Add confidence interval (simple version)
residuals = y - model.predict(X)
mse = np.mean(residuals**2)
std_error = np.sqrt(mse)

plt.fill_between(books_range, 
                predicted_scores - 1.96*std_error, 
                predicted_scores + 1.96*std_error, 
                alpha=0.2, color='red', label='95% Confidence Interval')

plt.title('Predicting English Scores from Books Read', fontsize=14, fontweight='bold')
plt.xlabel('Books Read per Year')
plt.ylabel('English Score')
plt.legend()
plt.grid(True, alpha=0.3)

# Add equation text box
equation_text = f'English Score = {intercept:.1f} + {slope:.2f} × Books\nR² = {r_squared:.3f}, p = {p_val_regression:.4f}'
plt.text(0.05, 0.95, equation_text, transform=plt.gca().transAxes, 
         bbox=dict(boxstyle='round', facecolor='wheat', alpha=0.8),
         verticalalignment='top', fontsize=10)

plt.tight_layout()
plt.show()

# Check our model's accuracy
print("MODEL ACCURACY CHECK:")
print("Actual vs Predicted English Scores:")
predictions = model.predict(X)
for i, (_, student) in enumerate(df.iterrows()):
    actual = student['English_Score']
    predicted = predictions[i]
    error = abs(actual - predicted)
    print(f"{student['Name']:8}: Actual {actual:4.1f}, Predicted {predicted:4.1f}, Error {error:4.1f}")

average_error = np.mean(np.abs(y - predictions))
print(f"\nAverage prediction error: {average_error:.1f} points")
```

### 6. Multiple Regression - Using Several Predictors

```python
print("MULTIPLE REGRESSION: Predicting Average Score from Multiple Factors")
print("="*65)

# Use multiple variables to predict average score
predictors = ['Hours_Studied', 'Sleep_Hours', 'Books_Read', 'Screen_Time']
X_multi = df[predictors]
y_multi = df['Average_Score']

# Fit multiple regression model
model_multi = LinearRegression()
model_multi.fit(X_multi, y_multi)

# Get coefficients
coefficients = model_multi.coef_
intercept_multi = model_multi.intercept_
r_squared_multi = r2_score(y_multi, model_multi.predict(X_multi))

print("Multiple Regression Equation:")
equation = f"Average Score = {intercept_multi:.2f}"
for i, (pred, coef) in enumerate(zip(predictors, coefficients)):
    sign = "+" if coef >= 0 else ""
    pred_name = pred.replace('_', ' ')
    equation += f" {sign}{coef:.2f}×{pred_name}"
print(equation)

print(f"\nR-squared: {r_squared_multi:.3f} ({r_squared_multi*100:.1f}% of variation explained)")

print(f"\nCoefficient Interpretation:")
for pred, coef in zip(predictors, coefficients):
    pred_name = pred.replace('_', ' ').title()
    direction = "increases" if coef > 0 else "decreases"
    print(f"• {pred_name}: Each unit increase {direction} score by {abs(coef):.2f} points")

# Make a prediction for a hypothetical student
print(f"\nPrediction Example:")
print(f"New student: 8 hours studied, 7 hours sleep, 15 books read, 3 hours screen time")
new_student = [[8, 7, 15, 3]]
prediction = model_multi.predict(new_student)[0]
print(f"Predicted average score: {prediction:.1f}")

# Compare single vs multiple regression
print(f"\nModel Comparison:")
print(f"Books alone (R² = {r_squared:.3f}) vs Multiple factors (R² = {r_squared_multi:.3f})")
improvement = r_squared_multi - r_squared
print(f"Improvement: {improvement:.3f} ({improvement*100:.1f}% better explanation)")
```

### 7. Statistical Summary Report

```python
print("="*70)
print("FINAL STATISTICAL ANALYSIS REPORT")
print("="*70)

print(f"\n1. CORRELATION FINDINGS:")
correlations_to_report = [
    ('Hours_Studied', 'Average_Score'),
    ('Books_Read', 'English_Score'), 
    ('Sleep_Hours', 'Average_Score'),
    ('Screen_Time', 'Average_Score')
]

for var1, var2 in correlations_to_report:
    corr = df[var1].corr(df[var2])
    corr_stat, p_val = stats.pearsonr(df[var1], df[var2])
    significance = "Significant" if p_val < 0.05 else "Not significant"
    print(f"   {var1} ↔ {var2}: r = {corr:.3f}, p = {p_val:.4f} ({significance})")

print(f"\n2. GROUP COMPARISONS:")
print(f"   Older vs Younger students: {difference:.1f} point difference, p = {p_value_ttest:.4f}")
significance_group = "Significant" if p_value_ttest < 0.05 else "Not significant"
print(f"   Result: {significance_group}")

print(f"\n3. REGRESSION MODELS:")
print(f"   Single predictor (Books → English): R² = {r_squared:.3f}")
print(f"   Multiple predictors (→ Average): R² = {r_squared_multi:.3f}")

print(f"\n4. KEY INSIGHTS:")
if p_val_regression < 0.05:
    print(f"   ✓ Reading books significantly predicts English performance")
if p_value_ttest < 0.05:
    print(f"   ✓ Grade level significantly affects academic performance")
else:
    print(f"   • Grade level differences may be due to chance")

strongest_predictor = predictors[np.argmax(np.abs(coefficients))]
print(f"   • Strongest predictor of overall performance: {strongest_predictor.replace('_', ' ')}")

print(f"\n5. RECOMMENDATIONS:")
print(f"   • Focus on factors with significant correlations")
print(f"   • Use regression models for predicting student outcomes")
print(f"   • Collect more data to improve statistical power")
print(f"   • Remember: correlation ≠ causation - design experiments to test causality")
```

## Key Learning Points

1. **P-values** tell us if our findings are likely real (p < 0.05) or could be due to chance
2. **T-tests** help compare groups scientifically (older vs younger students)
3. **Linear regression** lets us predict outcomes and understand relationships
4. **R-squared** shows how much of the variation our model explains
5. **Multiple regression** uses several factors to make better predictions
6. **Statistical significance** doesn't guarantee practical importance
7. **Always consider** whether correlations might have alternative explanations

## Practice Exercises

1. **Movie Analysis Advanced**: 
   - Test if newer movies have significantly different ratings (t-test)
   - Create a regression model predicting rating from year
   - Calculate p-values for your correlations

2. **Compare Genres**: Use t-tests to compare average ratings between genres

3. **Multiple Regression**: Predict movie ratings using multiple factors (year, length, etc.)

4. **Significance Testing**: Determine which of your findings are statistically significant

## Congratulations! 🎉

You've completed the data analytics series! You now know how to:
- Load and explore data
- Ask good analytical questions
- Create meaningful visualizations  
- Calculate important statistics
- Find correlations and relationships
- Test statistical significance
- Make predictions with regression

These skills form the foundation of data science. Keep practicing with your own datasets, and remember: good analysis combines statistical rigor with clear thinking about what the data really means!

**Continue your data science journey by exploring more advanced topics like machine learning, hypothesis testing, and experimental design.**