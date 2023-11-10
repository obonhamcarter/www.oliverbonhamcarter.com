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

We will spend a moment to study different ways of visually describing data using plots. Here we will develope some Python programming techniques to create some data to be used for plotting. In specific, we will look at several types of plots and then decide what types of features each plot has and how it could be helpful when describing data.

But first, let's get into a <a href="http://oliverbonhamcarter.com/live/" target="_blank">Jupyter</a> client where we can run Python code.


### A (Normal) Distribution of data :: Values

``` python
from numpy import random
import statistics
from scipy.stats import norm
import numpy as np

# Calculating mean and standard deviation
x_axis = np.arange(-20, 20, 0.01)
mean = statistics.mean(x_axis)
sd = statistics.stdev(x_axis)
norm.pdf(x_axis, mean, sd)
x = random.normal(size=(2, 3))
print(x)
```
(What can we see in these numbers? Would it be easier to plot this data instead?)



### A Basic Histogram

``` python
# libraries to help the code to perform
# new functions
import matplotlib.pyplot as plt
import numpy as np

# define the x axis.
#x = np.random.normal(170, 10, 250)
x = [10,20,30]
# x-axis label
plt.xlabel('x-axis')
# frequency label
plt.ylabel('y-axise')
# plot title
plt.title('My Cool Histogram')
# plot the histogram in memory.
plt.hist(x)
# Draw the histogram to the screen.
plt.show()
```

### Another basic histogram

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
Read more about this type of code at [RealPython](https://realpython.com/python-histograms/)

### Distributions

Let's start making some random data for plotting! There are different types of data to use. For instance, we could study typical data from several different __distributions__ of numbers. 

A Reference: <a href="https://www.ibm.com/docs/en/SSEP7J_11.1.0/com.ibm.swg.ba.cognos.ug_ca_dshb.doc/statisticaldistribution.html" target="_blank">distribution</a> type provides us with a statistical vocabulary with which we can use to explain what kinds of values are common, and which are uncommon for a field of numbers.

Reference: <a href="https://www.w3schools.com/python/numpy/" target="_blank">W3schools</a>

---

 <!-- Reference: [w3schools](https://www.w3schools.com/python/numpy/) -->

### Line plot :: Normal

``` python
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm
import statistics

# Plot between -10 and 10 with .001 steps.
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
plt.plot(x_axis, age )
plt.show()
```

### Histogram :: Normal

``` python
import numpy
import matplotlib.pyplot as plt

x = numpy.random.normal(5.0, 1.0, 100000)
plt.hist(x, 100)
plt.show()
```

### Chronological Plot :: Normal

``` python
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm
import statistics
from numpy import random

# Plot between -10 and 10 with .001 steps.
x_axis = np.arange(-10, 10, 0.01)
ages = random.normal(size=(2000,1))
# x-axis label
plt.xlabel('age')
# frequency label
plt.ylabel('No. of people')
# plot title
plt.title('A Normal Distribution')

plt.plot(x_axis, ages)
plt.show()
```

### Laplace Distribution

``` python
import matplotlib.pyplot as plt
import numpy as np

# An "interface" to matplotlib.axes.Axes.hist() method
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
# Set a clean upper y-axis limit.
plt.ylim(ymax=np.ceil(maxfreq / 10) * 10
if maxfreq % 10 else maxfreq + 10)
plt.show()
```

### Chronological plot :: Laplace

``` python
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm
import statistics
from numpy import random

# Plot between -10 and 10 with .001 steps.
x_axis = np.arange(-10, 10, 0.01)
ages = random.normal(size=(2000,1))
# x-axis label
plt.xlabel('age')
# frequency label
plt.ylabel('No. of people')
# plot title
plt.title('A Normal Distribution')
plt.plot(x_axis, ages)
plt.show()
```

### Binomial Distribution :: Values

``` python
from numpy import random

x = random.binomial(n=10, p=0.5, size=10)
print(x)
```

### Histogram :: Binomial

``` python
from numpy import random
import matplotlib.pyplot as plt

# frequencies
ages = list(random.binomial(n=10, p=0.5, size=1000))
# print(f" {ages}, {type(ages)}")  
# setting the ranges and no. of intervals
range = (0, 10)
bins = 10
# plotting a histogram
plt.hist(ages, bins, range, 
color = 'blue', 
histtype = 'bar',
rwidth = 0.9)
# x-axis label
plt.xlabel('Age')
# frequency label
plt.ylabel('No. of people')
# plot title
plt.title('A Binomial Distribution')
# function to show the plot
plt.show()
```

---

### Poisson Distribution :: Values

``` python
from numpy import random

x = random.poisson(lam=2, size=10)
print(x)
```

### Histogram :: Poisson

``` python
from numpy import random
import matplotlib.pyplot as plt

# frequencies
ages = random.uniform(size=(2, 10)) 
print(f"{ages}, {type(ages)}")  
# setting the ranges and no. of intervals
range = (0, 20)
bins = 1
# plotting a histogram
plt.hist(
    ages, 
    bins, 
    range, 
    histtype = 'bar', 
    rwidth = 1)
# x-axis label
plt.xlabel('age')
# frequency label
plt.ylabel('No. of people')
# plot title
plt.title('A Uniform Distribution')
# function to show the plot
plt.show()
```

---

### Histogram :: Uniform Distribution

``` python
import numpy
import matplotlib.pyplot as plt

x = numpy.random.uniform(0.0, 5.0, 250)
plt.hist(x, 5)
plt.show()
```

### Line Plot :: Uniform

``` python
import numpy
import matplotlib.pyplot as plt

x = numpy.random.uniform(0.0, 5.0, 100000)
plt.hist(x, 100)
plt.show()
```

### Another Histogram Plot :: Uniform

``` python
import numpy as np 
import matplotlib.pyplot as plt

values = np.random.uniform(0.01, 0.99, 1000) 
count, bins, ignored = plt.hist(values, 20, density=True)
plt.plot(bins, np.ones_like(bins),color='r')
# add title
plt.title('Uniform Distribution')
# label the axes
plt.ylabel('Density')
plt.xlabel('Values')
# function to show the plot
plt.show()
```

### Chronological Plot :: Uniform

``` python
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm
import statistics
from numpy import random

# Plot between -10 and 10 with .001 steps.
x_axis = np.arange(-10, 10, 0.01)
ages = random.uniform(size=(2000,1))
# x-axis label
plt.xlabel('age')
# frequency label
plt.ylabel('No. of people')
# plot title
plt.title('A Uniform Distribution')
plt.plot(x_axis, ages)
plt.show()
```

---

### Normal Inverse Gaussian Continuous Random Variable Distribution :: Values

``` python
from scipy.stats import norminvgauss

a, b = 1.25, 0.5
r = norminvgauss.rvs(a, b, size=10)
print(r)
```

### Line Plot :: Normal Inverse Gaussian Continuous Random Variable

``` python
import numpy as np
from scipy.stats import norminvgauss
import matplotlib.pyplot as plt

fig, ax = plt.subplots(1, 1)
a, b = 1.25, 0.5
mean, var, skew, kurt = norminvgauss.stats(
    a, b, moments='mvsk')


x = np.linspace(norminvgauss.ppf(0.01, a, b),
norminvgauss.ppf(0.99, a, b), 100)
ax.plot(x, norminvgauss.pdf(x, a, b),
'r-', lw=5, alpha=0.6, label='norminvgauss pdf')


rv = norminvgauss(a, b)
ax.plot(x, rv.pdf(x), 'k-', lw=2, label='frozen pdf')


vals = norminvgauss.ppf([0.001, 0.5, 0.999], a, b)
np.allclose([0.001, 0.5, 0.999], norminvgauss.cdf(
    vals, a, b))

r = norminvgauss.rvs(a, b, size=1000)

ax.hist(r, density=True, 
bins='auto', histtype='stepfilled', alpha=0.2)
ax.set_xlim([x[0], x[-1]])
ax.legend(loc='best', frameon=False)
plt.show()
```

---

### Logistic Distribution :: Values

``` python
from numpy import random
x = random.logistic(loc=1, scale=2, size=(2, 3))
print(x)
```

### Histogram plot :: Logistic

``` python
import matplotlib.pyplot as plt

values = random.logistic(loc=1, scale=.5, size=(200, 1))
count, bins, ignored = plt.hist(values, 20, density=True)
plt.plot(bins, np.ones_like(bins),color='r')
plt.title('Logistic Distribution')
plt.ylabel('Density')
plt.xlabel('Values')
# function to show the plot
plt.show()
```

### Chronological Plot :: Logistic

``` python
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm
import statistics

# Plot between -10 and 10 with .001 steps.
x_axis = np.arange(-10, 10, 0.01)
ages = random.logistic(loc=1, scale=.5, size=(2000, 1))
# x-axis label
plt.xlabel('age')
# frequency label
plt.ylabel('No. of people')
# plot title
plt.title('A Logistic Distribution')
plt.plot(x_axis, ages)
plt.show()
```

---

Plots can also look different from these too!

### Bubble Plot

``` python
from matplotlib import pyplot as plt
import numpy as np

# Generate 100 random data points along 3 dimensions
x, y, scale = np.random.randn(3, 100)
# x = [1,2,3,4,5,6]
# y = [1,2,3,4,5,6]
# scale = [1,2,3,4,5,6]
fig, ax = plt.subplots()
# Map each onto a scatterplot we'll create with Matplotlib
ax.scatter(x=x, y=y, c=scale, s=np.abs(scale)*500)
ax.set(title="Some random data, plotted as bubbles!")
plt.show()
```

### Heatmaps

``` python
import matplotlib.pyplot as plt
import numpy as np

a = np.random.random((16, 16))
plt.imshow(a, cmap='hot', interpolation='nearest')
plt.show()
```

[Reference](https://stackoverflow.com/questions/33282368/plotting-a-2d-heatmap) 

### Another Heatmap

``` python
import matplotlib.pyplot as plt
import numpy as np

# generate 2 2d grids for the x & y bounds
y, x = np.meshgrid(
    np.linspace(-3, 3, 100), np.linspace(-3, 3, 100))

tmp = np.exp(-x ** 2 - y ** 2)
z = (1 - x / 2. + x ** 5 + y ** 3) * tmp
# x and y are bounds, so z 
# should be the value *inside* those bounds.
# Therefore, remove the last value 
# from the z array.
z = z[:-1, :-1]
z_min, z_max = -np.abs(z).max(), np.abs(z).max()

fig, ax = plt.subplots()

c = ax.pcolormesh(x, y, z, 
cmap='RdBu', 
vmin=z_min, 
vmax=z_max)
ax.set_title('pcolormesh')
# set the limits of the plot to the limits of the data
ax.axis([x.min(), x.max(), y.min(), y.max()])
fig.colorbar(c, ax=ax)

plt.show()
```
<!-- [Reference](https://stackoverflow.com/questions/33282368/plotting-a-2d-heatmap)  -->

Reference: <a href="https://stackoverflow.com/questions/33282368/plotting-a-2d-heatmap" target="_blank">Stackoverflow</a>

### Scatter plots

``` python
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
 
from sklearn.datasets import load_iris
iris = load_iris()
 
df= pd.DataFrame(
    data= np.c_[iris['data'], iris['target']],
    columns= iris['feature_names'] + ['target'])
 
# select setosa and versicolor
y = df.iloc[0:100, 4].values
y = np.where(y == 'Iris-setosa', 0, 1)
 
# extract sepal length and petal length
X = df.iloc[0:100, [0, 2]].values
 
# plot data
plt.scatter(X[:50, 0], X[:50, 1],
            color='blue', marker='o', label='Setosa')
plt.scatter(X[50:100, 0], X[50:100, 1],
            color='green', marker='s', label='Versicolor')
 
plt.xlabel('Sepal length [cm]')
plt.ylabel('Petal length [cm]')
plt.legend(loc='upper left')
 
# plt.savefig('images/02_06.png', dpi=300)
plt.show()
```
<!-- Reference: [vitalflux](https://vitalflux.com/python-creating-scatter-plot-with-iris-dataset/) -->

Reference: <a href="https://vitalflux.com/python-creating-scatter-plot-with-iris-dataset/" target="_blank">Vitalflux</a>

What kind of plot does the following code produce? What can we learn from this plot?

```
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

---

Check out more plotting and Python code at the following URLs. Note, you may have to copy and paste code into your browser's <a href="https://www.oliverbonhamcarter.com/live/" target="_blank"> Jupyter notebook</a>. 
* <a href="https://www.w3schools.com/python/numpy/" target="_blank">W3schools</a>

* <a href="https://matplotlib.org/stable/gallery/lines_bars_and_markers/index.html" target="_blank">MatplotLib</a>