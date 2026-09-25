---
title: "2. Plotting and Distributions"
date: 2023-03-16T23:40:01-04:00
draft: False
---

<center>
&#x200B;
<img src="/images/outreach/plotting.png" alt="A Futuristic Classroom" style="width:700px;"/>
</center>

<!-- add a line drop -->
<center>
&#x200B;
</center>

## Welcome to Data Visualization! 🎨📊

Have you ever tried to tell someone about a huge list of numbers and watched their eyes glaze over? Numbers alone can be boring and hard to understand. But turn those numbers into a colorful chart or graph, and suddenly the story becomes clear and exciting!

In this tutorial, you'll learn how to transform raw data into beautiful, meaningful visualizations using Python. We'll explore different types of plots and discover when to use each one. Think of it like learning different artistic styles - each has its own purpose and tells a different story.

### What You'll Learn:
- How to create your first plots in Python
- Understanding different types of data distributions (and why they matter!)
- Reading and interpreting various plot types
- Choosing the right visualization for your data
- Making your plots look professional and informative

### Before We Start:
Open up a <a href="http://oliverbonhamcarter.com/live/" target="_blank">Jupyter</a> notebook so you can run the code examples alongside this tutorial. Try modifying the code - breaking things and fixing them is one of the best ways to learn!

---

## Part 1: Your First Plot - The Histogram

A **histogram** is like a bar chart that shows how often different values appear in your data. Imagine you surveyed your class about their favorite numbers between 1 and 10 - a histogram would show you which numbers were most popular!

### Understanding the Parts of a Plot:
- **X-axis (horizontal)**: Shows the categories or values you're measuring
- **Y-axis (vertical)**: Shows how many times each value appears (frequency)
- **Title**: Tells us what we're looking at
- **Bars/Lines**: The visual representation of your data


### Let's Build Our First Histogram!

``` python
# libraries to help the code to perform
# new functions
import matplotlib.pyplot as plt
import numpy as np

# define the x axis - our data points
x = [10, 20, 30]
# x-axis label (what we're measuring)
plt.xlabel('x-axis')
# y-axis label (how many we counted)
plt.ylabel('y-axis')
# plot title (what's this chart about?)
plt.title('My Cool Histogram')
# plot the histogram in memory
plt.hist(x)
# Draw the histogram to the screen
plt.show()
```

**What's happening in this code?**
1. We import libraries (like toolboxes with pre-built functions)
2. We create simple data: just three numbers [10, 20, 30]
3. We label our axes so people know what they're looking at
4. `plt.hist(x)` creates the histogram bars
5. `plt.show()` displays it on your screen

**Try it yourself!** Change the numbers in the list to [5, 10, 10, 15, 15, 15, 20] and see how the histogram changes. What do you notice?

### A Real-World Example: Fruit Inventory

Let's say you run a fruit stand and want to visualize your inventory. This bar chart (a type of histogram) makes it easy to see which fruits you have the most of!

``` python
import matplotlib.pyplot as plt

fig, ax = plt.subplots()

fruits = ['apple', 'blueberry', 'cherry', 'orange']
counts = [40, 100, 30, 55]
bar_labels = ['red', 'blue', '_red', 'orange']
bar_colors = ['tab:red', 'tab:blue', 'tab:red', 'tab:orange']

ax.bar(fruits, counts, label=bar_labels, color=bar_colors)

ax.set_ylabel('fruit supply')
ax.set_title('Fruit supply by kind and color')
ax.legend(title='Fruit color')

plt.show()
```

**Reading this chart:**
- The tallest bar (blueberry at 100) shows your best-stocked fruit
- The shortest bar (cherry at 30) shows you might need to reorder
- Colors make it easy to identify each fruit type at a glance

**Challenge:** Can you modify the code to add "banana" with a count of 75 and make it yellow?

Read more about this type of code at [RealPython](https://realpython.com/python-histograms/)

---

## Part 2: Understanding Data Distributions

Now for the exciting part! Not all data looks the same when you plot it. Just like people can be tall, short, or average height, data can be distributed in different patterns. Understanding these patterns is like being a data detective! 🔍

### What is a Distribution?

A **distribution** shows us which values are common and which are rare in our dataset. Think about test scores in your class:
- Most students might score around 70-85 (common values)
- Few students score very low (under 50) or very high (over 95) (rare values)

When we plot this, we see a pattern or "distribution" that tells a story about the data.

Reference: <a href="https://www.ibm.com/docs/en/SSEP7J_11.1.0/com.ibm.swg.ba.cognos.ug_ca_dshb.doc/statisticaldistribution.html" target="_blank">Learn more about distributions</a>

---

## Part 3: The Normal Distribution (The Bell Curve)

The **Normal Distribution** is the most famous distribution in statistics! It's also called the "bell curve" because it looks like a bell. 🔔

### Why it matters:
- Heights of people follow this pattern
- Test scores often follow this pattern
- Many natural phenomena follow this pattern

### Key Features:
- **Symmetric**: The left and right sides mirror each other
- **Mean = Median = Mode**: They're all at the center
- **68-95-99.7 Rule**: About 68% of data falls within 1 standard deviation of the mean

### Visualizing the Normal Distribution

``` python
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm
import statistics

# Plot between -20 and 20 with .001 steps (creates smooth curve)
x_axis = np.arange(-20, 20, 0.01)
# Calculating mean and standard deviation
mean = statistics.mean(x_axis)
sd = statistics.stdev(x_axis)
age = norm.pdf(x_axis, mean, sd)
# x-axis label
plt.xlabel('age')
# frequency label
plt.ylabel('No. of people')
# plot title
plt.title('A Normal Distribution')
plt.plot(x_axis, age)
plt.show()
```

**Code Breakdown:**
- `np.arange(-20, 20, 0.01)`: Creates thousands of tiny steps from -20 to 20 (makes the curve smooth)
- `statistics.mean()`: Calculates the average (center point)
- `statistics.stdev()`: Calculates the spread (how wide the bell is)
- `norm.pdf()`: Creates the bell curve shape using the probability density function
- `plt.plot()`: Draws a line connecting all the points

**What you see:** A beautiful bell curve! The highest point is in the middle (most common values), and it slopes down on both sides (rare values).

### Histogram Version of Normal Distribution

Sometimes we want to see the data as bars instead of a smooth curve. This makes it easier to count how many values fall in each range!

``` python
import numpy
import matplotlib.pyplot as plt

# Generate 100,000 random values with mean=5.0 and std deviation=1.0
x = numpy.random.normal(5.0, 1.0, 100000)
# Split the data into 100 bins (bars)
plt.hist(x, 100)
plt.show()
```

**What's different here?**
- We generate 100,000 random values that follow a normal pattern
- `5.0` is the center (mean) - most values cluster around 5
- `1.0` is the spread (standard deviation) - determines how wide the bell is
- `100` bins means we divide the data into 100 bars

**Try this:** Change `5.0` to `10.0` and see how the curve shifts. Change `1.0` to `3.0` and watch it get wider!

### Scatter Plot Version (Chronological)

This plot shows how randomly generated normal data looks when plotted point-by-point over time:

``` python
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm
import statistics
from numpy import random

# Plot between -10 and 10 with .001 steps
x_axis = np.arange(-10, 10, 0.01)
# Generate 2000 random normal values
ages = random.normal(size=(2000, 1))
# x-axis label
plt.xlabel('age')
# frequency label
plt.ylabel('No. of people')
# plot title
plt.title('A Normal Distribution')

plt.plot(x_axis, ages)
plt.show()
```

**What this shows:** Each point is a randomly generated value. Notice how most points cluster in the middle and fewer appear at the edges? That's the normal distribution at work!

---

## Part 4: The Laplace Distribution (Double Peak)

The **Laplace Distribution** is like two back-to-back exponential curves. It has a sharp peak in the center and drops off quickly on both sides - steeper than the normal distribution!

### When you see this:
- Financial data (stock price changes)
- Speech recognition
- Image processing differences

### Key Feature: 
- Sharper peak than normal distribution (more values exactly at the center)
- "Heavier tails" (more extreme values than you'd expect)

``` python
import matplotlib.pyplot as plt
import numpy as np

# Generate 500 random values from Laplace distribution
# loc=15 is the center, scale=3 controls the spread
d = np.random.laplace(loc=15, scale=3, size=500)
n, bins, patches = plt.hist(x=d,
bins='auto',
color='#0504aa',
alpha=0.7, rwidth=0.85)
plt.grid(axis='y', alpha=0.75)
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.title('Laplace Distribution')
plt.text(23, 45, r'$\mu=15, b=3$')
maxfreq = n.max()
# Set a clean upper y-axis limit
plt.ylim(ymax=np.ceil(maxfreq / 10) * 10
if maxfreq % 10 else maxfreq + 10)
plt.show()
```

**Code Highlights:**
- `loc=15`: Centers the distribution at 15
- `scale=3`: Controls how spread out the data is
- `color='#0504aa'`: Uses a custom blue color (try changing this!)
- `alpha=0.7`: Makes bars slightly transparent (0=invisible, 1=solid)
- `plt.grid()`: Adds helpful gridlines for easier reading
- `plt.text()`: Adds the mathematical notation to the plot

**Notice:** The peak is sharper than the normal distribution we saw earlier!

---

## Part 5: The Binomial Distribution (Coin Flips!)

This is one of the most fun distributions because it models things like coin flips, yes/no surveys, or success/failure experiments!

### Real-World Example:
If you flip a coin 10 times, how many heads will you get? The binomial distribution tells you the probability of getting 0, 1, 2, ... up to 10 heads.

### Key Parameters:
- **n**: Number of trials (e.g., 10 coin flips)
- **p**: Probability of success (e.g., 0.5 for a fair coin)

### Let's Generate Some Values!

``` python
from numpy import random

# n=10 trials (coin flips), p=0.5 probability, generate 10 experiments
x = random.binomial(n=10, p=0.5, size=10)
print(x)
```

**Understanding the output:** Each number represents how many "successes" (heads) you got in 10 coin flips. You'll see numbers between 0 and 10. Run it multiple times and watch how the results change!

### Visualizing Binomial Distribution

``` python
from numpy import random
import matplotlib.pyplot as plt

# Generate 1000 experiments of 10 coin flips each
ages = list(random.binomial(n=10, p=0.5, size=1000))
# setting the ranges and no. of intervals
range = (0, 10)
bins = 10
# plotting a histogram
plt.hist(ages, bins, range, 
color = 'blue', 
histtype = 'bar',
rwidth = 0.9)
# x-axis label
plt.xlabel('Number of Successes')
# frequency label
plt.ylabel('Frequency')
# plot title
plt.title('A Binomial Distribution')
# function to show the plot
plt.show()
```

**Reading this chart:**
- The tallest bar should be around 5 (because with p=0.5, you expect about 5 heads in 10 flips)
- It's symmetric because the coin is fair
- Values at the edges (0 or 10) are rare - that's normal!

**Challenge:** Change `p=0.5` to `p=0.7` to simulate an unfair coin that lands on heads 70% of the time. How does the distribution shift?

---

## Part 6: The Poisson Distribution (Counting Events)

The **Poisson Distribution** answers questions like:
- How many customers will visit my store in an hour?
- How many emails will I get today?
- How many shooting stars will I see in 10 minutes?

It's perfect for counting events that happen randomly over time!

### Key Parameter:
- **λ (lambda)**: The average number of events (e.g., "on average 2 customers per hour")

### Generating Poisson Values

``` python
from numpy import random

# lam=2 means we expect an average of 2 events, generate 10 samples
x = random.poisson(lam=2, size=10)
print(x)
```

**Understanding the output:** Each number represents how many events occurred. Most will be close to 2, but some might be 0, 1, 3, or even higher!


Check the plot to discover more!

```python
import matplotlib.pyplot as plt
import numpy as np
from scipy.stats import poisson

# Define lambda (average rate of occurrence)
lam = 3

# Generate x-axis values (number of events)
x = np.arange(0, 15)

# Calculate the Poisson probability mass function (PMF)
pmf = poisson.pmf(x, lam)

# Create the bar plot
plt.figure(figsize=(8, 5))
plt.bar(x, pmf, alpha=0.7, color='steelblue', edgecolor='black')

# Add labels and title
plt.title(f'Poisson Distribution (λ = {lam})', fontsize=14)
plt.xlabel('Number of Events (k)', fontsize=12)
plt.ylabel('Probability', fontsize=12)
plt.grid(True, alpha=0.3)

# Display the plot
plt.show()
```

---

## Part 7: The Uniform Distribution (Everything is Equal!)

The **Uniform Distribution** is the simplest - every value has an equal chance of occurring. Think of it like:
- Rolling a fair die (each number 1-6 is equally likely)
- Picking a random number between 1 and 100
- Choosing a random color from a palette

### Key Feature:
Flat! No peak in the middle - all values are equally common.

### Uniform Distribution Histogram

``` python
import numpy
import matplotlib.pyplot as plt

# Generate 250 random values uniformly between 0.0 and 5.0
x = numpy.random.uniform(0.0, 5.0, 250)
# Split into 5 bins
plt.hist(x, 5)
plt.show()
```

**What you see:** All the bars should be roughly the same height! That's because every value between 0 and 5 is equally likely.

### More Detailed Uniform Distribution

``` python
import numpy as np 
import matplotlib.pyplot as plt

# Generate 1000 uniform random values between 0.01 and 0.99
values = np.random.uniform(0.01, 0.99, 1000) 
count, bins, ignored = plt.hist(values, 20, density=True)
# The red line shows the theoretical uniform distribution
plt.plot(bins, np.ones_like(bins), color='r')
# add title
plt.title('Uniform Distribution')
# label the axes
plt.ylabel('Density')
plt.xlabel('Values')
# function to show the plot
plt.show()
```

**Key Observation:** The red line shows the "perfect" uniform distribution. The bars might not be exactly at the red line due to randomness, but with more data points, they'd get closer!

Another way to plot? We can plot the Binomial Distribution.

```python
import matplotlib.pyplot as plt
import numpy as np
from scipy.stats import binom

n, p = 20, 0.5
x = np.arange(0, n + 1)
pmf_values = binom.pmf(x, n, p)

plt.figure(figsize=(9, 5))
plt.bar(x, pmf_values, color='skyblue', edgecolor='black', alpha=0.8)
plt.title(f'A Binomial Distribution (n={n}, p={p})')
plt.xlabel('Number of Successes')
plt.ylabel('Probability')
plt.show()
```

### Scatter Plot Version of Uniform Distribution

``` python
import numpy as np
import matplotlib.pyplot as plt
from numpy import random

# Plot between -10 and 10 with .001 steps
x_axis = np.arange(-10, 10, 0.01)
# Generate 2000 uniform random values
ages = random.uniform(size=(2000, 1))
# x-axis label
plt.xlabel('Position')
# frequency label
plt.ylabel('Random Values')
# plot title
plt.title('A Uniform Distribution (Scatter)')
plt.plot(x_axis, ages)
plt.show()
```

**What this shows:** Random uniform values scattered evenly across the range. No clustering anywhere - true randomness!

---

## Part 8: The Logistic Distribution (S-Curves!)

The **Logistic Distribution** looks similar to the normal distribution but has heavier tails. It's used in:
- Machine learning (logistic regression)
- Population growth models
- Neural networks

### Generating Logistic Values

``` python
from numpy import random
import numpy as np

# loc=1 is center, scale=2 controls spread, generate 2x3 array
x = np.random.logistic(loc=1, scale=2, size=(2, 3))
print(x)
```

**Parameters explained:**
- `loc=1`: Centers the distribution at 1
- `scale=2`: Controls the spread (larger = wider distribution)
- `size=(2, 3)`: Creates a 2x3 array of random values

### Visualizing the Logistic Distribution

``` python
import matplotlib.pyplot as plt
import numpy as np

# Generate 200 logistic random values
values = np.random.logistic(loc=1, scale=.5, size=(200, 1))
count, bins, ignored = plt.hist(values, 20, density=True)
plt.plot(bins, np.ones_like(bins), color='r')
plt.title('Logistic Distribution')
plt.ylabel('Density')
plt.xlabel('Values')
# function to show the plot
plt.show()
```

**Compare to Normal:** The logistic distribution looks similar to normal but has slightly thicker tails (more extreme values show up).

### Scatter Plot Version

``` python
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm
import statistics

# Plot between -10 and 10 with .001 steps
x_axis = np.arange(-10, 10, 0.01)
# Generate 2000 logistic random values
ages = np.random.logistic(loc=1, scale=.5, size=(2000, 1))
# x-axis label
plt.xlabel('Position')
# frequency label
plt.ylabel('Random Values')
# plot title
plt.title('A Logistic Distribution (Scatter)')
plt.plot(x_axis, ages)
plt.show()
```

---

## Part 9: Advanced Visualization Types

Now let's explore some exciting plot types beyond histograms! These are powerful ways to visualize relationships and patterns in data.

### Bubble Plots (Size Matters!)

A **bubble plot** is like a scatter plot, but the size of each dot represents a third variable. It's perfect for showing three dimensions of data on a 2D screen!

``` python
from matplotlib import pyplot as plt
import numpy as np

# Generate 100 random data points along 3 dimensions
x, y, scale = np.random.randn(3, 100)
fig, ax = plt.subplots()
# Map each onto a scatterplot - size is determined by 'scale' value
ax.scatter(x=x, y=y, c=scale, s=np.abs(scale)*500)
ax.set(title="Some random data, plotted as bubbles!")
plt.show()
```

**How to read this:**
- **X and Y positions**: Show two variables (could be temperature and humidity, age and height, etc.)
- **Bubble size**: Represents a third variable (larger bubbles = larger values)
- **Color**: Can represent the scale value (darker/lighter shows higher/lower)

**Real-world use:** Stock market data (x=time, y=price, size=trading volume), population data (x=longitude, y=latitude, size=population), scientific measurements

### Heatmaps (Seeing Patterns in Grids)

A **heatmap** uses colors to represent values in a grid. Hot colors (red, orange) = high values, cold colors (blue, purple) = low values. Perfect for seeing patterns at a glance!

``` python
import matplotlib.pyplot as plt
import numpy as np

# Create a 16x16 grid of random values
a = np.random.random((16, 16))
# Display as heatmap with 'hot' colormap
plt.imshow(a, cmap='hot', interpolation='nearest')
plt.show()
```

**How to read this:**
- Bright yellow/white = highest values
- Dark red/black = lowest values
- Each square represents one data point

**Real-world uses:** 
- Weather maps (temperature across a region)
- Correlation matrices (showing how variables relate)
- Game boards (2048, minesweeper)
- Website click tracking (where users click most)

[Reference](https://stackoverflow.com/questions/33282368/plotting-a-2d-heatmap) 

### Advanced Mathematical Heatmap

This creates a more complex heatmap using a mathematical function:

``` python
import matplotlib.pyplot as plt
import numpy as np

# Generate 2D grids for the x & y bounds
y, x = np.meshgrid(
    np.linspace(-3, 3, 100), np.linspace(-3, 3, 100))

# Create a complex mathematical function
tmp = np.exp(-x ** 2 - y ** 2)
z = (1 - x / 2. + x ** 5 + y ** 3) * tmp
# x and y are bounds, so z should be the value *inside* those bounds
# Therefore, remove the last value from the z array
z = z[:-1, :-1]
z_min, z_max = -np.abs(z).max(), np.abs(z).max()

fig, ax = plt.subplots()

c = ax.pcolormesh(x, y, z, 
cmap='RdBu',  # Red-Blue colormap
vmin=z_min, 
vmax=z_max)
ax.set_title('pcolormesh')
# set the limits of the plot to the limits of the data
ax.axis([x.min(), x.max(), y.min(), y.max()])
fig.colorbar(c, ax=ax)  # Adds color scale bar

plt.show()
```

**What's happening:**
- Creates a 100x100 grid of points
- Calculates a complex math function for each point
- Colors each point based on its value
- Blue = negative values, Red = positive values
- The color bar on the side shows the scale

**Try this:** Change `cmap='RdBu'` to `cmap='viridis'` or `cmap='plasma'` for different color schemes!

Reference: <a href="https://stackoverflow.com/questions/33282368/plotting-a-2d-heatmap" target="_blank">Stackoverflow</a>

### Scatter Plots (Finding Relationships)

**Scatter plots** are perfect for finding relationships between two variables. Each dot represents one data point with two measurements.

#### Using the Famous Iris Dataset

The Iris dataset contains measurements of 150 flowers. Let's visualize the relationship between sepal length and petal length!

``` python
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
 
from sklearn.datasets import load_iris
iris = load_iris()
 
df = pd.DataFrame(
    data=np.c_[iris['data'], iris['target']],
    columns=iris['feature_names'] + ['target'])
 
# select setosa and versicolor (two flower species)
y = df.iloc[0:100, 4].values
y = np.where(y == 'Iris-setosa', 0, 1)
 
# extract sepal length and petal length
X = df.iloc[0:100, [0, 2]].values
 
# plot data with different colors and shapes for each species
plt.scatter(X[:50, 0], X[:50, 1],
            color='blue', marker='o', label='Setosa')
plt.scatter(X[50:100, 0], X[50:100, 1],
            color='green', marker='s', label='Versicolor')
 
plt.xlabel('Sepal length [cm]')
plt.ylabel('Petal length [cm]')
plt.legend(loc='upper left')
plt.show()
```

**Reading this scatter plot:**
- **Blue circles**: Setosa flowers
- **Green squares**: Versicolor flowers
- **Pattern**: Notice they form two distinct clusters? This shows that these two species have different petal and sepal measurements!
- **Insight**: This is the foundation of machine learning - finding patterns that separate different groups

**What you can learn:**
- Positive correlation: As sepal length increases, petal length increases
- Clear separation: The two species are distinguishable by these measurements
- Outliers: Any points far from their cluster might be unusual specimens

Reference: <a href="https://vitalflux.com/python-creating-scatter-plot-with-iris-dataset/" target="_blank">Vitalflux</a>

---

## Part 10: Challenge Plot - What's This?

Can you figure out what this advanced plot shows? Study the code and run it to find out!

``` python
import matplotlib.pyplot as plt
import numpy as np

fig, (ax1, ax2) = plt.subplots(2, 1, layout='constrained')

dt = 0.01
t = np.arange(0, 30, dt)

# Fixing random state for reproducibility
np.random.seed(19680801)

nse1 = np.random.randn(len(t))                 # white noise 1
nse2 = np.random.randn(len(t))                 # white noise 2
r = np.exp(-t / 0.05)

cnse1 = np.convolve(nse1, r, mode='same') * dt   # colored noise 1
cnse2 = np.convolve(nse2, r, mode='same') * dt   # colored noise 2

# two signals with a coherent part and a random part
s1 = 0.01 * np.sin(2 * np.pi * 10 * t) + cnse1
s2 = 0.01 * np.sin(2 * np.pi * 10 * t) + cnse2

ax1.plot(t, s1, t, s2)
ax1.set_xlim(0, 5)
ax1.set_xlabel('Time (s)')
ax1.set_ylabel('s1 and s2')
ax1.grid(True)

cxy, f = ax2.csd(s1, s2, 256, 1. / dt)
ax2.set_ylabel('CSD (dB)')

plt.show()
```

**What does this show?**
This is a **Cross-Spectral Density (CSD)** plot! It's used in signal processing to analyze two signals over time:
- **Top plot**: Two noisy signals (like radio waves or sound)
- **Bottom plot**: Shows how similar the two signals are at different frequencies

**Real-world applications:**
- Audio processing (noise cancellation)
- Medical signals (brain waves, heart monitors)
- Communications (cell phone signals)
- Vibration analysis (earthquake detection)

---

## More Data Visualization with Python???

Here are more advanced (but compelling!) visualizations using popular Python libraries.

### Required Libraries

```python
# Install required packages for data analytics
import piplite
await piplite.install(['seaborn', 'matplotlib', 'pandas', 'numpy', 'scipy', 'plotly'])
print("Packages installed successfully!")
print("You can now import and use: seaborn, matplotlib, pandas, numpy, scipy, plotly")


# Test imports for data science libraries
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

print("✓ All libraries imported successfully!")
print(f"Pandas version: {pd.__version__}")
print(f"NumPy version: {np.__version__}")
print(f"Seaborn version: {sns.__version__}")
```

### The plotting code

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

## Congratulations! 🎉

You've learned how to:
- ✅ Create histograms, scatter plots, bubble plots, and heatmaps
- ✅ Understand different data distributions (normal, uniform, binomial, Poisson, etc.)
- ✅ Read and interpret plots to find patterns
- ✅ Choose the right visualization for your data
- ✅ Write Python code to generate professional-looking plots

### Next Steps

Experiment with the above code!

1. **Practice**: Try creating plots with your own data
2. **Explore**: Test different colors, sizes, and styles
3. **Combine**: Mix different plot types to tell richer stories
4. **Learn more**: Check out the resources below

### More Resources

Check out more plotting and Python code at the following URLs. Copy and paste code into your <a href="https://www.oliverbonhamcarter.com/live/" target="_blank">Jupyter notebook</a> and experiment!

* <a href="https://www.w3schools.com/python/numpy/" target="_blank">W3schools - NumPy Tutorial</a>
* <a href="https://matplotlib.org/stable/gallery/lines_bars_and_markers/index.html" target="_blank">Matplotlib Gallery - Examples</a>

### Remember:
> "A picture is worth a thousand words, but a well-made plot is worth a thousand numbers!" 

Keep plotting, keep learning, and most importantly - have fun with data! 🚀📊