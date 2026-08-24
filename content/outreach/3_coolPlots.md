---
title: "3. Cool Plots and Fractals - Mind-Blowing Visualizations!"
date: 2023-03-29T23:43:43-04:00
draft: False
---

## Welcome to the Extraordinary World of Visual Mathematics! 🎨✨

Get ready to have your mind blown! In this tutorial, we'll explore some of the most beautiful and fascinating visualizations in mathematics and data science. From fractals that repeat infinitely to complex patterns that emerge from simple rules, you're about to discover that math can be absolutely stunning!

These aren't your typical bar charts and line graphs. These are the artistic masterpieces of the mathematical world - the kind of plots that make people stop and say "Wait, code made THAT?!"

**What You'll Create:**
- Mesmerizing fractals that zoom infinitely
- Beautiful geometric patterns
- Mind-bending data visualizations
- Mathematical art that looks like it belongs in a museum

**Before we begin:** Open up <a href="http://oliverbonhamcarter.com/live/" target="_blank">Jupyter</a> and prepare to be amazed!

---

## Part 1: Fractals - Infinite Beauty from Simple Rules 🌀

---

## Part 1: Fractals - Infinite Beauty from Simple Rules 🌀

**What is a Fractal?**
A fractal is a never-ending pattern that looks similar at every scale. Zoom in on a fractal, and you'll see the same pattern repeat! Nature is full of fractals: snowflakes, coastlines, mountains, tree branches, and even broccoli! 

The amazing thing? These infinitely complex patterns come from incredibly simple mathematical rules.

### The Koch Snowflake - A Frozen Mathematical Wonder ❄️

The Koch Snowflake is one of the earliest fractals ever discovered (1904!). It starts as a simple triangle, but with each iteration, something magical happens...

**How it works:**
1. Start with an equilateral triangle
2. Take each edge and divide it into 3 parts
3. Add a smaller triangle in the middle of each edge
4. Repeat forever (or until your computer gets tired!)

**Mind-blowing fact:** The Koch Snowflake has an INFINITE perimeter but a FINITE area! The edge gets longer and longer forever, but the shape never gets bigger than a certain size. How is that possible?!

<center>
&#x200B;
<img src="/images/outreach/coolPlots/koch.png" alt="Koch Snowflake Fractal" style="width:400px;"/>
</center>

**Let's create this mathematical snowflake:**

``` python 
import matplotlib.pyplot as plt
import numpy as np

def koch_snowflake(order, scale=10):
    """
    Return two lists x, y of point coordinates of the Koch snowflake.

    Parameters
    ----------
    order : int
        The recursion depth (higher = more detail, try 1-6)
    scale : float
        The extent of the snowflake (edge length of the base triangle)
    """
    def _koch_snowflake_complex(order):
        if order == 0:
            # initial triangle - our starting point
            angles = np.array([0, 120, 240]) + 90
            return scale / np.sqrt(3) * np.exp(np.deg2rad(angles) * 1j)
        else:
            # This is where the magic happens!
            ZR = 0.5 - 0.5j * np.sqrt(3) / 3

            p1 = _koch_snowflake_complex(order - 1)  # start points
            p2 = np.roll(p1, shift=-1)  # end points
            dp = p2 - p1  # connection vectors

            # Create 4 new points for each edge
            new_points = np.empty(len(p1) * 4, dtype=np.complex128)
            new_points[::4] = p1
            new_points[1::4] = p1 + dp / 3
            new_points[2::4] = p1 + dp * ZR
            new_points[3::4] = p1 + dp / 3 * 2
            return new_points

    points = _koch_snowflake_complex(order)
    x, y = points.real, points.imag
    return x, y

# Create the snowflake with 5 levels of recursion
x, y = koch_snowflake(order=5)

plt.figure(figsize=(8, 8))
plt.axis('equal')
plt.fill(x, y, color='lightblue', edgecolor='darkblue', linewidth=0.5)
plt.title('Koch Snowflake Fractal (Order 5)', fontsize=14, fontweight='bold')
plt.axis('off')  # Hide axes for cleaner look
plt.show()
```

**Try this:** Change `order=5` to `order=2`, `order=3`, and `order=4` to see how the fractal evolves! Watch as smooth edges turn into incredibly intricate patterns.

**What you're seeing:** Complex numbers (numbers with real and imaginary parts) make this code elegant. Each point is represented as a complex number, making rotations and transformations super easy!

Love this? Check out more at <a href="https://matplotlib.org/stable/gallery/lines_bars_and_markers/fill.html#sphx-glr-gallery-lines-bars-and-markers-fill-py" target="_blank">MatPlotLib</a> for filled polygon analysis.

---

### The Mandelbrot Set - The Most Famous Fractal Ever! 🌌

The Mandelbrot set is arguably the most famous fractal in the world. Discovered in 1980, it reveals infinite complexity from the simplest equation: `z = z² + c`. When you zoom into the Mandelbrot set, you find endless variations of patterns - no two areas are exactly alike!

**What makes it special:**
- Infinitely detailed - you can zoom in forever and keep finding new patterns
- Self-similar but always unique
- The boundary is infinitely long!
- It's connected to deep mathematics (chaos theory, complex dynamics)

<center>
&#x200B;
<img src="/images/outreach/coolPlots/mandelbrot.png" alt="Mandelbrot Set" style="width:500px;"/>
</center>

```python
import numpy as np
import matplotlib.pyplot as plt

def mandelbrot(c, max_iter=100):
    """
    Calculate whether a complex number c is in the Mandelbrot set.
    Returns the number of iterations before escaping (or max_iter).
    """
    z = 0
    for n in range(max_iter):
        if abs(z) > 2:
            return n
        z = z*z + c
    return max_iter

def mandelbrot_set(xmin, xmax, ymin, ymax, width, height, max_iter=100):
    """Generate a Mandelbrot set image."""
    # Create a grid of complex numbers
    x = np.linspace(xmin, xmax, width)
    y = np.linspace(ymin, ymax, height)
    
    # Create the image array
    mandelbrot_image = np.empty((height, width))
    
    # Calculate Mandelbrot value for each point
    for i in range(height):
        for j in range(width):
            c = complex(x[j], y[i])
            mandelbrot_image[i, j] = mandelbrot(c, max_iter)
    
    return mandelbrot_image

# Generate the Mandelbrot set
width, height = 800, 600
xmin, xmax, ymin, ymax = -2.5, 1.0, -1.25, 1.25

mandelbrot_image = mandelbrot_set(xmin, xmax, ymin, ymax, width, height, max_iter=100)

# Plot it with beautiful colors
plt.figure(figsize=(12, 9))
plt.imshow(mandelbrot_image, extent=[xmin, xmax, ymin, ymax], 
           cmap='hot', interpolation='bilinear', origin='lower')
plt.colorbar(label='Iterations to escape', shrink=0.8)
plt.title('The Mandelbrot Set', fontsize=16, fontweight='bold')
plt.xlabel('Real axis')
plt.ylabel('Imaginary axis')
plt.tight_layout()
plt.show()
```

**What you're seeing:**
- **Black regions**: Points that never escape (actually in the Mandelbrot set!)
- **Colored regions**: Points that escape, colored by how quickly they escape
- **The boundary**: Where all the interesting, infinitely complex patterns live

**Try this:** 
1. Change the max_iter to 200 for more detail (but slower calculation)
2. Try different colormaps: 'twilight', 'viridis', 'plasma', 'inferno'
3. Zoom in by changing xmin/xmax and ymin/ymax (try: xmin=-0.8, xmax=-0.7, ymin=0, ymax=0.1)

---

### The Sierpinski Triangle - Triangles All the Way Down! 🔺

Named after Polish mathematician Wacław Sierpiński, this fractal shows what happens when you keep removing triangles from triangles... forever!

**The process:**
1. Start with a filled triangle
2. Remove the middle triangle (connecting the midpoints)
3. Repeat for each remaining triangle
4. Continue infinitely!

```python
import matplotlib.pyplot as plt
import numpy as np

def sierpinski_triangle(order, vertices=None):
    """
    Generate Sierpinski triangle using chaos game method.
    """
    if vertices is None:
        # Define the three vertices of the main triangle
        vertices = np.array([[0, 0], [1, 0], [0.5, np.sqrt(3)/2]])
    
    # Start at a random point
    point = np.array([0.5, 0.25])
    points = [point]
    
    # Chaos game: repeatedly jump halfway to a random vertex
    for _ in range(10000 * (order + 1)):
        # Choose a random vertex
        vertex = vertices[np.random.randint(3)]
        # Jump halfway toward it
        point = (point + vertex) / 2
        points.append(point.copy())
    
    return np.array(points)

# Generate Sierpinski triangle
points = sierpinski_triangle(order=5)

# Plot
plt.figure(figsize=(10, 10))
plt.scatter(points[:, 0], points[:, 1], s=0.1, color='purple', alpha=0.6)
plt.title('Sierpinski Triangle (Chaos Game Method)', fontsize=16, fontweight='bold')
plt.axis('equal')
plt.axis('off')
plt.tight_layout()
plt.show()
```

**Mind-blowing fact:** This triangle has ZERO area! As you keep removing triangles, the remaining area approaches zero, but the triangle still "exists" as an infinitely detailed pattern.

**The Chaos Game:** This code uses a surprising method - start anywhere, then repeatedly jump halfway to a random vertex. Amazingly, this creates the Sierpinski triangle! This shows how order can emerge from randomness.

**Try this:** Change the number 10000 to 50000 for more detailed results, or try different colors!

---

### The Julia Set - Mandelbrot's Beautiful Cousin 🎭

The Julia set is closely related to the Mandelbrot set, but instead of varying the starting constant, we fix it and vary the starting point. Each different constant creates a completely different Julia set!

```python
import numpy as np
import matplotlib.pyplot as plt

def julia_set(c, xmin=-2, xmax=2, ymin=-2, ymax=2, 
              width=800, height=800, max_iter=256):
    """
    Generate a Julia set for a given complex constant c.
    """
    x = np.linspace(xmin, xmax, width)
    y = np.linspace(ymin, ymax, height)
    X, Y = np.meshgrid(x, y)
    Z = X + 1j * Y
    
    # Array to store iteration counts
    julia_image = np.zeros((height, width))
    
    for i in range(max_iter):
        # Points that haven't escaped yet
        mask = np.abs(Z) <= 2
        # Apply the Julia set iteration
        Z[mask] = Z[mask]**2 + c
        # Record when points escape
        julia_image[mask] = i
    
    return julia_image

# Try different values of c for different Julia sets!
# c = -0.7 + 0.27015j  # Douady's rabbit
# c = 0.285 + 0.01j     # Nice spiral
c = -0.4 + 0.6j        # Branching structure

julia_image = julia_set(c)

# Plot with beautiful colors
plt.figure(figsize=(12, 12))
plt.imshow(julia_image, extent=[-2, 2, -2, 2], 
           cmap='twilight_shifted', interpolation='bilinear', origin='lower')
plt.colorbar(label='Iterations', shrink=0.8)
plt.title(f'Julia Set for c = {c}', fontsize=16, fontweight='bold')
plt.xlabel('Real axis')
plt.ylabel('Imaginary axis')
plt.tight_layout()
plt.show()
```

**Try different c values:**
- `c = -0.7 + 0.27015j` - Called "Douady's rabbit" (look for the rabbit!)
- `c = 0.285 + 0.01j` - Beautiful spiral patterns
- `c = -0.8 + 0.156j` - Called the "Siegel disk"
- `c = -0.4 + 0.6j` - Delicate branching structure

**Fun fact:** The Mandelbrot set is actually a map of all possible Julia sets! Each point in the Mandelbrot set represents a different Julia set.

---

### The Dragon Curve - Paper Folding Magic 🐉

The Dragon Curve is fascinating because you can create it by folding a strip of paper in half repeatedly, then unfolding it! The crease pattern forms this curve.

```python
import matplotlib.pyplot as plt
import numpy as np

def dragon_curve(order):
    """
    Generate dragon curve using L-system.
    """
    # L-system rules
    # Start: F
    # Rules: F -> F+G, G -> F-G
    # + means turn right 90°, - means turn left 90°
    
    def generate_string(order):
        string = 'F'
        for _ in range(order):
            new_string = ''
            for char in string:
                if char == 'F':
                    new_string += 'F+G'
                elif char == 'G':
                    new_string += 'F-G'
                else:
                    new_string += char
            string = new_string
        return string
    
    # Generate the string
    instructions = generate_string(order)
    
    # Follow the instructions to draw
    x, y = [0], [0]
    angle = 0
    
    for char in instructions:
        if char == 'F' or char == 'G':
            # Move forward
            x.append(x[-1] + np.cos(np.radians(angle)))
            y.append(y[-1] + np.sin(np.radians(angle)))
        elif char == '+':
            angle += 90
        elif char == '-':
            angle -= 90
    
    return x, y

# Generate dragon curve
x, y = dragon_curve(order=13)

# Plot
plt.figure(figsize=(12, 10))
plt.plot(x, y, linewidth=0.5, color='crimson')
plt.title('Dragon Curve (Order 13)', fontsize=16, fontweight='bold')
plt.axis('equal')
plt.axis('off')
plt.tight_layout()
plt.show()
```

**Amazing fact:** If you fold a strip of paper 13 times and unfold it at 90° angles, you get this exact curve!

**Try this:** Change the order from 13 to smaller numbers (like 5, 7, 10) to see how the dragon evolves. Warning: orders above 15 might be slow!

---

## Part 2: Advanced Data Visualizations 📊

Now let's look at some sophisticated ways to visualize complex data patterns!

---

### Quantile Loss - Predicting With Uncertainty 📈

In the real world, predictions aren't perfect. Instead of just predicting one value, **quantile regression** predicts a range of possible values! This plot shows three different predictions:
- **Top line (95%)**: "95% chance the value is below this"
- **Middle line (50%)**: "The median prediction"
- **Bottom line (5%)**: "95% chance the value is above this"

**Why this matters:** Imagine predicting tomorrow's temperature. Instead of saying "It will be 72°F," quantile regression says "There's a 90% chance it'll be between 68°F and 76°F." Much more useful!

<center>
&#x200B;
<img src="/images/outreach/coolPlots/quantile.png" alt="Quantile Regression Plot" style="width:400px;"/>
</center>

**What you see in this plot:**
- **Blue dots**: Actual data points (scattered around the curve)
- **Three curved lines**: Different confidence levels (5%, 50%, 95%)
- **The spread**: Shows how uncertain our predictions are (wider = more uncertain)
- **The pattern**: Notice how uncertainty increases as X gets larger?

``` python
from sklearn.ensemble import HistGradientBoostingRegressor
import numpy as np
import matplotlib.pyplot as plt

# Simple regression function for X * cos(X)
rng = np.random.RandomState(42)  # For reproducible results
X_1d = np.linspace(0, 10, num=2000)  # 2000 points from 0 to 10
X = X_1d.reshape(-1, 1)  # Reshape for sklearn
# Generate data with noise that increases with X
y = X_1d * np.cos(X_1d) + rng.normal(scale=X_1d / 3)

# Train three models for different quantiles
quantiles = [0.95, 0.5, 0.05]  # 95th percentile, median, 5th percentile
parameters = dict(loss="quantile", max_bins=32, max_iter=50)

# Create and train a model for each quantile
hist_quantiles = {
    f"quantile={quantile:.2f}": HistGradientBoostingRegressor(
        **parameters, quantile=quantile
    ).fit(X, y)
    for quantile in quantiles
}

# Plot the results
fig, ax = plt.subplots(figsize=(12, 8))
# Plot actual data points
ax.plot(X_1d, y, "o", alpha=0.5, markersize=1, label='Actual data', color='blue')
# Plot each quantile prediction
colors = ['red', 'green', 'orange']
for (quantile, hist), color in zip(hist_quantiles.items(), colors):
    ax.plot(X_1d, hist.predict(X), label=quantile, linewidth=2, color=color)

ax.legend(loc="lower left", fontsize=12)
ax.set_xlabel('X values', fontsize=12)
ax.set_ylabel('Y values', fontsize=12)
ax.set_title('Quantile Regression - Predicting with Confidence Intervals', 
             fontsize=14, fontweight='bold')
ax.grid(True, alpha=0.3)
plt.show()
```

**Code breakdown:**
- `X * cos(X)`: Creates an oscillating pattern
- `rng.normal(scale=X_1d / 3)`: Adds random noise that gets bigger as X increases
- `quantile=0.95`: Predicts where 95% of data points fall below
- Three models give us a prediction range instead of just one number!

**Real-world applications:**
- Weather forecasting with confidence intervals
- Stock price predictions with risk assessment
- Traffic prediction with best/worst case scenarios
- Medical predictions with safety margins

Love this? Check out more at <a href="https://scikit-learn.org/stable/auto_examples/release_highlights/plot_release_highlights_1_1_0.html" target="_blank">SciKit-Learn</a> for quantile analysis.

---

### Plot Classification Probability - How Sure Is the AI? 🤖

Machine learning models don't just make predictions - they also tell us how CONFIDENT they are! This visualization shows probability heatmaps from different classification algorithms.

**What this shows:** Five different AI models trying to classify iris flowers into 3 species. The colors show how confident each model is about its prediction in different regions.

<center>
&#x200B;
<img src="/images/outreach/coolPlots/probability.png" alt="Classification Probability Heatmap" style="width:500px;"/>
</center>

**Reading this visualization:**
- **Each row**: A different machine learning algorithm
- **Each column**: One of the 3 flower classes (Class 0, 1, 2)
- **Colors**: Brightness = confidence (brighter = more confident)
- **White dots**: Actual flower measurements
- **Darker regions**: "I'm not sure this is Class X"
- **Brighter regions**: "I'm very confident this is Class X!"

**Why so many subplots?** Different algorithms make decisions differently! Some draw straight boundaries, others draw curves. Comparing them helps us choose the best algorithm for our problem.

``` python
# Author: Alexandre Gramfort <alexandre.gramfort@inria.fr>
# License: BSD 3 clause

import matplotlib.pyplot as plt
import numpy as np

from sklearn import datasets
from sklearn.gaussian_process import GaussianProcessClassifier
from sklearn.gaussian_process.kernels import RBF
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.svm import SVC

# Load famous iris dataset
iris = datasets.load_iris()

# We only use first two features for 2D visualization
X = iris.data[:, 0:2]  # Sepal length and width
y = iris.target  # Species (0, 1, or 2)

n_features = X.shape[1]

C = 10
kernel = 1.0 * RBF([1.0, 1.0])  # for Gaussian Process Classifier

# Create different classifiers to compare
classifiers = {
    "L1 logistic": LogisticRegression(
        C=C, penalty="l1", solver="saga", multi_class="multinomial", max_iter=10000
    ),
    "L2 logistic (Multinomial)": LogisticRegression(
        C=C, penalty="l2", solver="saga", multi_class="multinomial", max_iter=10000
    ),
    "L2 logistic (OvR)": LogisticRegression(
        C=C, penalty="l2", solver="saga", multi_class="ovr", max_iter=10000
    ),
    "Linear SVC": SVC(kernel="linear", C=C, probability=True, random_state=0),
    "GPC": GaussianProcessClassifier(kernel),
}

n_classifiers = len(classifiers)

plt.figure(figsize=(3 * 2, n_classifiers * 2))
plt.subplots_adjust(bottom=0.2, top=0.95)

# Create a grid of points to color
xx = np.linspace(3, 9, 100)
yy = np.linspace(1, 5, 100).T
xx, yy = np.meshgrid(xx, yy)
Xfull = np.c_[xx.ravel(), yy.ravel()]

# For each classifier, train and visualize
for index, (name, classifier) in enumerate(classifiers.items()):
    classifier.fit(X, y)

    y_pred = classifier.predict(X)
    accuracy = accuracy_score(y, y_pred)
    print(f"Accuracy (train) for {name}: {accuracy * 100:.1f}%")

    # Get probabilities for every point in the grid
    probas = classifier.predict_proba(Xfull)
    n_classes = np.unique(y_pred).size
    
    # Create a subplot for each class
    for k in range(n_classes):
        plt.subplot(n_classifiers, n_classes, index * n_classes + k + 1)
        plt.title(f"Class {k}" if index == 0 else "")
        if k == 0:
            plt.ylabel(name)
        
        # Show probability as a heatmap
        imshow_handle = plt.imshow(
            probas[:, k].reshape((100, 100)), 
            extent=(3, 9, 1, 5), 
            origin="lower",
            cmap='RdYlGn',  # Red (low prob) to Green (high prob)
            vmin=0, vmax=1
        )
        plt.xticks(())
        plt.yticks(())
        
        # Plot actual flower positions
        idx = y_pred == k
        if idx.any():
            plt.scatter(X[idx, 0], X[idx, 1], marker="o", 
                       c="white", edgecolor="black", s=50)

ax = plt.axes([0.15, 0.04, 0.7, 0.05])
plt.title("Probability (0 = impossible, 1 = certain)")
plt.colorbar(imshow_handle, cax=ax, orientation="horizontal")

plt.show()
```

**What makes this visualization powerful:**
- Compares 5 different AI algorithms side-by-side
- Shows WHERE each algorithm is confident vs uncertain
- Reveals how different algorithms "think" differently
- White dots show where the training data actually is

**Key insights:**
- Some algorithms draw straight decision boundaries (Linear SVC)
- Others draw curves (Gaussian Process)
- All algorithms are most confident near training data
- Far from data points, confidence drops!

Love this? Check out more at <a href="https://scikit-learn.org/stable/auto_examples/classification/plot_classification_probability.html" target="_blank">SciKit-Learn</a> for classification probability analysis.

---

### Clustering: Finding Patterns in Coin Images 🪙

This technique uses AI to automatically find and separate different coins in an image - no manual counting needed! It's called **hierarchical clustering** and it groups similar pixels together.

<center>
&#x200B;
<img src="/images/outreach/coolPlots/coins.png" alt="Coin Segmentation" style="width:400px;"/>
</center>

**What's happening:**
- The algorithm looks at pixel brightness
- Groups nearby similar pixels into clusters
- Each colored contour = one detected coin
- 27 clusters = 27 detected coins!

**Real-world uses:**
- Medical imaging (finding tumors)
- Satellite imagery (identifying land types)
- Quality control (detecting defects)
- Astronomy (identifying celestial objects)

[Mini Tutorial](https://scikit-learn.org/stable/auto_examples/cluster/plot_coin_ward_segmentation.html#)

``` python
### Generate data
from skimage.data import coins

# Load the built-in coins image
orig_coins = coins()

import numpy as np
from scipy.ndimage import gaussian_filter
from skimage.transform import rescale

# Smooth the image to reduce noise
smoothened_coins = gaussian_filter(orig_coins, sigma=2)
# Make it smaller for faster processing
rescaled_coins = rescale(
    smoothened_coins,
    0.2,
    mode="reflect",
    anti_aliasing=False,
)
X = np.reshape(rescaled_coins, (-1, 1))

# Define structure of the data (which pixels are neighbors)
from sklearn.feature_extraction.image import grid_to_graph
connectivity = grid_to_graph(*rescaled_coins.shape)

# Compute clustering using Ward's algorithm
import time as time
from sklearn.cluster import AgglomerativeClustering

print("Computing structured hierarchical clustering...")
st = time.time()
n_clusters = 27  # number of regions (coins to find)
ward = AgglomerativeClustering(
    n_clusters=n_clusters, linkage="ward", connectivity=connectivity
)
ward.fit(X)
label = np.reshape(ward.labels_, rescaled_coins.shape)
print(f"Elapsed time: {time.time() - st:.3f}s")
print(f"Number of pixels: {label.size}")
print(f"Number of clusters found: {np.unique(label).size}")

# Plotting - show each coin with a different colored outline
import matplotlib.pyplot as plt
plt.figure(figsize=(8, 8))
plt.imshow(rescaled_coins, cmap=plt.cm.gray)
for l in range(n_clusters):
    # Draw a contour around each cluster
    plt.contour(
        label == l,
        colors=[
            plt.cm.nipy_spectral(l / float(n_clusters)),
        ],
        linewidths=2
    )
plt.title('Coin Segmentation Using Hierarchical Clustering', 
          fontsize=14, fontweight='bold')
plt.axis("off")
plt.show()
```

**What the code does:**
1. `gaussian_filter`: Blurs the image slightly (reduces noise)
2. `rescale`: Makes image smaller (speeds up computation)
3. `AgglomerativeClustering`: Groups similar neighboring pixels
4. `n_clusters=27`: Tells it to find 27 groups (coins!)
5. Each colored contour outlines one detected coin

**Try this:** Change `n_clusters` to see what happens with too few (15) or too many (40) clusters!

---

### Advanced Scatter Plots - Masks and Regions 🎯

This scatter plot uses a clever trick: it shows different regions using different marker styles and creates a beautiful circular boundary! 
---

### Advanced Scatter Plots - Masks and Regions 🎯

This scatter plot uses a clever trick: it shows different regions using different marker styles and creates a beautiful circular boundary!

<center>
&#x200B;
<img src="/images/outreach/coolPlots/bigScatter.png" alt="Masked Scatter Plot" style="width:400px;"/>
</center>

**What makes this special:**
- **Two regions**: Inside and outside a circle (radius = 0.6)
- **Different markers**: Triangles (^) inside, circles (o) outside
- **Sized by value**: Larger symbols = larger data values
- **Color coded**: Color intensity shows magnitude
- **The boundary**: Black circle shows the dividing line

[Mini Tutorial](https://matplotlib.org/stable/gallery/lines_bars_and_markers/scatter_masked.html#sphx-glr-gallery-lines-bars-and-markers-scatter-masked-py)

``` python
import matplotlib.pyplot as plt
import numpy as np

# Fixing random state for reproducible results
np.random.seed(19680801)

N = 100
r0 = 0.6  # Circle radius
x = 0.9 * np.random.rand(N)  # Random x coordinates
y = 0.9 * np.random.rand(N)  # Random y coordinates
area = (20 * np.random.rand(N))**2  # Marker sizes (0 to 400)
c = np.sqrt(area)  # Colors based on size

# Calculate distance from origin
r = np.sqrt(x ** 2 + y ** 2)

# Mask: hide points inside/outside the circle
area1 = np.ma.masked_where(r < r0, area)  # Outside circle
area2 = np.ma.masked_where(r >= r0, area)  # Inside circle

plt.figure(figsize=(10, 10))
# Scatter inside circle with triangles
plt.scatter(x, y, s=area1, marker='^', c=c, cmap='viridis', 
            alpha=0.7, edgecolors='black', linewidth=0.5, label='Outside')
# Scatter outside circle with circles
plt.scatter(x, y, s=area2, marker='o', c=c, cmap='viridis', 
            alpha=0.7, edgecolors='black', linewidth=0.5, label='Inside')

# Draw the boundary circle
theta = np.arange(0, np.pi / 2, 0.01)
plt.plot(r0 * np.cos(theta), r0 * np.sin(theta), 'k-', linewidth=2, 
         label='Boundary')

plt.colorbar(label='Value', shrink=0.8)
plt.title('Masked Scatter Plot with Circular Boundary', 
          fontsize=14, fontweight='bold')
plt.xlabel('X coordinate')
plt.ylabel('Y coordinate')
plt.legend()
plt.axis('equal')
plt.tight_layout()
plt.show()
```

**Why use masks?**
- Highlight different regions
- Show conditional data (e.g., "profitable vs unprofitable")
- Create custom data filters visually
- Separate patterns by criteria

---

### The Dolphin Plot - Creative Path Drawing 🐬

This is pure mathematical art! Using path coordinates, we can draw complex shapes like this dolphin, then transform and style them creatively.

<center>
&#x200B;
<img src="/images/outreach/coolPlots/dolphin.png" alt="Dolphin Artistic Plot" style="width:400px;"/>
</center>

**What you see:**
- **Two dolphins**: Same shape, rotated 60 degrees
- **Circular clipping**: The background image only shows inside the circle
- **Random scatter**: Light blue dots add texture
- **Layered composition**: Multiple elements create depth

**This shows:** How code can create art! Complex shapes are just lists of coordinates with instructions on how to connect them.

[Mini Tutorial](https://matplotlib.org/stable/gallery/shapes_and_collections/dolphin.html#sphx-glr-gallery-shapes-and-collections-dolphin-py)

``` python
import matplotlib.cm as cm
import matplotlib.pyplot as plt
from matplotlib.patches import Circle, PathPatch
from matplotlib.path import Path
from matplotlib.transforms import Affine2D
import numpy as np

# Fixing random state for reproducibility
np.random.seed(19680801)

# Random scatter for background texture
r = np.random.rand(50)
t = np.random.rand(50) * np.pi * 2.0
x = r * np.cos(t)
y = r * np.sin(t)

fig, ax = plt.subplots(figsize=(8, 8))

# Create a circular boundary
circle = Circle((0, 0), 1, facecolor='none',
                edgecolor=(0, 0.8, 0.8), linewidth=3, alpha=0.5)
ax.add_patch(circle)

# Create clipped image background
im = plt.imshow(np.random.random((100, 100)),
                origin='lower', cmap=cm.winter,
                interpolation='spline36',
                extent=([-1, 1, -1, 1]))
im.set_clip_path(circle)  # Only show inside circle!

# Add scatter points
plt.plot(x, y, 'o', color=(0.9, 0.9, 1.0), alpha=0.8, markersize=8)

# Dolphin shape data (from OpenClipart library)
# M = move to, C = cubic Bezier curve, L = line to
dolphin = """
M -0.59739425,160.18173 C -0.62740401,160.18885 -0.57867129,160.11183
-0.57867129,160.11183 C -0.57867129,160.11183 -0.5438361,159.89315
-0.39514638,159.81496 C -0.24645668,159.73678 -0.18316813,159.71981
-0.18316813,159.71981 C -0.18316813,159.71981 -0.10322971,159.58124
-0.057804323,159.58725 C -0.029723983,159.58913 -0.061841603,159.60356
-0.071265813,159.62815 C -0.080250183,159.65325 -0.082918513,159.70554
-0.061841203,159.71248 C -0.040763903,159.7194 -0.0066711426,159.71091
0.077336307,159.73612 C 0.16879567,159.76377 0.28380306,159.86448
0.31516668,159.91533 C 0.3465303,159.96618 0.5011127,160.1771
0.5011127,160.1771 C 0.63668998,160.19238 0.67763022,160.31259
0.66556395,160.32668 C 0.65339985,160.34212 0.66350443,160.33642
0.64907098,160.33088 C 0.63463742,160.32533 0.61309688,160.297
0.5789627,160.29339 C 0.54348657,160.28968 0.52329693,160.27674
0.50728856,160.27737 C 0.49060916,160.27795 0.48965803,160.31565
0.46114204,160.33673 C 0.43329696,160.35786 0.4570711,160.39871
0.43309565,160.40685 C 0.4105108,160.41442 0.39416631,160.33027
0.3954995,160.2935 C 0.39683269,160.25672 0.43807996,160.21522
0.44567915,160.19734 C 0.45327833,160.17946 0.27946869,159.9424
-0.061852613,159.99845 C -0.083965233,160.0427 -0.26176109,160.06683
-0.26176109,160.06683 C -0.30127962,160.07028 -0.21167141,160.09731
-0.24649368,160.1011 C -0.32642366,160.11569 -0.34521187,160.06895
-0.40622293,160.0819 C -0.467234,160.09485 -0.56738444,160.17461
-0.59739425,160.18173
"""

# Parse the dolphin path data
vertices = []
codes = []
parts = dolphin.split()
i = 0
code_map = {
    'M': Path.MOVETO,
    'C': Path.CURVE4,
    'L': Path.LINETO,
}

while i < len(parts):
    path_code = code_map[parts[i]]
    npoints = Path.NUM_VERTICES_FOR_CODE[path_code]
    codes.extend([path_code] * npoints)
    vertices.extend([[*map(float, y.split(','))]
                     for y in parts[i + 1:][:npoints]])
    i += npoints + 1

vertices = np.array(vertices)
vertices[:, 1] -= 160  # Adjust y-coordinates

# Create first dolphin
dolphin_path = Path(vertices, codes)
dolphin_patch = PathPatch(dolphin_path, 
                           facecolor=(0.6, 0.6, 0.6),
                           edgecolor=(0.0, 0.0, 0.0))
ax.add_patch(dolphin_patch)

# Create second dolphin (rotated 60 degrees)
vertices = Affine2D().rotate_deg(60).transform(vertices)
dolphin_path2 = Path(vertices, codes)
dolphin_patch2 = PathPatch(dolphin_path2, 
                            facecolor=(0.5, 0.5, 0.5),
                            edgecolor=(0.0, 0.0, 0.0))
ax.add_patch(dolphin_patch2)

plt.title('Creative Dolphin Composition', fontsize=14, fontweight='bold')
plt.axis('equal')
plt.show()
```

**Key techniques:**
- **Paths**: SVG-like instructions for drawing shapes
- **Clipping**: Restrict where images show up
- **Transforms**: Rotate, scale, move shapes mathematically
- **Layering**: Multiple elements create rich compositions

---

### Sunspots - Real Historical Data! ☀️

This plot shows actual sun activity from 1700 to 2008! Solar activity cycles roughly every 11 years. Scientists track sunspots to predict solar storms that can affect satellites, power grids, and communications on Earth!

<center>
&#x200B;
<img src="/images/outreach/coolPlots/sunSpots.png" alt="Sunspot Activity Over Time" style="width:400px;"/>
</center>

**What are sunspots?**
- Dark spots on the Sun's surface (cooler regions)
- Caused by magnetic field disturbances
- More sunspots = more solar activity
- Can cause Aurora Borealis (Northern Lights!)

**The 11-year cycle:**
Look at the peaks and valleys - they repeat! This is called the "solar cycle" and helps scientists predict:
- Satellite disruptions
- Radio communication issues
- Beautiful aurora displays
- GPS accuracy problems

[Mini Tutorial](https://notebook.community/stencila/stencila/demos/examples/ipynb/sunspots)

``` python
import statsmodels.api as sm
import pandas as pd
import matplotlib.pyplot as plt

# Load historical sunspot data (1700-2008)
data_loader = sm.datasets.sunspots.load_pandas()
df = data_loader.data

# Look at the data
print("Dataset preview:")
print(df.head())  # First 5 rows
print("\nDataset tail:")
print(df.tail())  # Last 5 rows

# Check data quality - are there fractional numbers?
fractional_nums = df['SUNACTIVITY'].apply(lambda x: x % 1) 
fractional_found = fractional_nums[fractional_nums > 0]
print(f"\nFractional values found: {len(fractional_found)}")

# Statistical summary
print("\nSunspot Activity Statistics:")
print(df['SUNACTIVITY'].describe())
print(f"Average sunspots per year: {df['SUNACTIVITY'].mean():.2f}")
print(f"Maximum activity: {df['SUNACTIVITY'].max():.1f} (year {df.loc[df['SUNACTIVITY'].idxmax(), 'YEAR']:.0f})")

# Create the plot
plt.figure(figsize=(14, 6))
plt.plot(df["YEAR"], df["SUNACTIVITY"], linewidth=1.5, color='darkorange')
plt.fill_between(df["YEAR"], df["SUNACTIVITY"], alpha=0.3, color='gold')

plt.xlabel('Year', fontsize=12, fontweight='bold')
plt.ylabel('Sunspot Activity', fontsize=12, fontweight='bold')
plt.title('Solar Activity: 308 Years of Sunspot Observations (1700-2008)', 
          fontsize=14, fontweight='bold')
plt.grid(True, alpha=0.3, linestyle='--')
plt.tight_layout()
plt.show()
```

**What the code does:**
1. `sm.datasets.sunspots.load_pandas()` - Loads real astronomical data
2. `df.head()` / `df.tail()` - Shows beginning and end of dataset
3. `apply(lambda x: x % 1)` - Checks for decimal values (data quality)
4. `describe()` - Gives statistics (mean, min, max, etc.)
5. `fill_between()` - Creates the shaded area under the curve

**Try this:**
- Calculate the average time between peaks
- Find the years with lowest activity
- Compare recent cycles to historical ones

**Fun fact:** The next solar maximum is predicted for 2025! Scientists are preparing for increased solar storm activity.

---

## Part 3: Mind-Bending Mathematical Art 🌈

### Lissajous Curves - The Math of Sound and Orbits 🎵

When two sine waves combine at different frequencies, they create beautiful patterns called **Lissajous curves**! These appear in oscilloscopes, music visualization, and even describe planetary orbits!

``` python
import numpy as np
import matplotlib.pyplot as plt

# Time parameter
t = np.linspace(0, 2 * np.pi, 1000)

fig, axes = plt.subplots(2, 3, figsize=(15, 10))
fig.suptitle('Lissajous Curves: When Sine Waves Collide!', 
             fontsize=16, fontweight='bold')

# Different frequency ratios create different patterns
patterns = [
    (1, 1, 0, "1:1 - Circle/Ellipse"),
    (2, 1, 0, "2:1 - Figure Eight"),
    (3, 2, 0, "3:2 - Complex Loop"),
    (5, 4, np.pi/2, "5:4 with phase"),
    (7, 5, 0, "7:5 - Dense Pattern"),
    (9, 8, np.pi/4, "9:8 - Very Dense")
]

for idx, (A, B, delta, title) in enumerate(patterns):
    ax = axes[idx // 3, idx % 3]
    
    # Parametric equations for Lissajous curves
    x = np.sin(A * t + delta)  # Horizontal oscillation
    y = np.sin(B * t)          # Vertical oscillation
    
    # Create gradient color
    points = np.array([x, y]).T.reshape(-1, 1, 2)
    from matplotlib.collections import LineCollection
    segments = np.concatenate([points[:-1], points[1:]], axis=1)
    
    lc = LineCollection(segments, cmap='rainbow', linewidth=2)
    lc.set_array(t)
    ax.add_collection(lc)
    
    ax.set_xlim(-1.1, 1.1)
    ax.set_ylim(-1.1, 1.1)
    ax.set_aspect('equal')
    ax.set_title(title, fontweight='bold')
    ax.grid(True, alpha=0.3)
    ax.set_xlabel('sin(A·t + δ)')
    ax.set_ylabel('sin(B·t)')

plt.tight_layout()
plt.show()
```

**What makes this special:**
- **Frequency ratio (A:B)**: Changes the pattern complexity
- **Phase shift (δ)**: Rotates the pattern
- **Rainbow gradient**: Shows the path direction over time
- **Parametric equations**: Both x and y depend on time t

**Real-world applications:**
- Audio engineering (visualizing sound waves)
- Astronomy (orbital mechanics)
- Physics (harmonic motion study)
- Art (laser light shows!)

**Try this:**
- Set A=B=1 for a circle
- Use A=3, B=2 for a trefoil knot shape
- Add phase shift δ=π/2 to rotate patterns

---

### 3D Wireframe - Mountains of Math! ⛰️

This creates a 3D surface using mathematical functions - like a digital landscape made of numbers!

``` python
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import numpy as np

# Create coordinate grid
x = np.linspace(-5, 5, 100)
y = np.linspace(-5, 5, 100)
X, Y = np.meshgrid(x, y)

# Mathematical surface: "Mexican hat" function
R = np.sqrt(X**2 + Y**2)
Z = np.sin(R) / (R + 0.1)  # Add small value to avoid division by zero

# Create the 3D plot
fig = plt.figure(figsize=(12, 9))
ax = fig.add_subplot(111, projection='3d')

# Wireframe plot
surf = ax.plot_wireframe(X, Y, Z, color='cyan', linewidth=0.5, alpha=0.7)

# Add a filled contour at the bottom
ax.contour(X, Y, Z, zdir='z', offset=-0.5, cmap='coolwarm', levels=15, alpha=0.6)

# Styling
ax.set_xlabel('X axis', fontsize=11, fontweight='bold')
ax.set_ylabel('Y axis', fontsize=11, fontweight='bold')
ax.set_zlabel('Z = sin(r)/r', fontsize=11, fontweight='bold')
ax.set_title('3D Wireframe: Mathematical Surface Visualization', 
             fontsize=14, fontweight='bold', pad=20)

# Set viewing angle
ax.view_init(elev=30, azim=45)

plt.tight_layout()
plt.show()
```

**What's happening:**
1. **meshgrid()**: Creates a 2D grid of (x, y) points
2. **R = √(x² + y²)**: Distance from origin (radius)
3. **Z = sin(R)/R**: The "Mexican hat" function (sinc function)
4. **plot_wireframe()**: Draws the 3D mesh
5. **contour()**: Projects filled contours on the bottom

**The "Mexican hat" function:**
- Also called the "sinc function"
- Appears in signal processing (Fourier analysis)
- Has a central peak and ripples outward
- Used in physics for wave interference patterns

**Try this:**
- Change to `Z = np.exp(-(X**2 + Y**2)/10)` for a Gaussian bell
- Use `Z = X**2 - Y**2` for a saddle shape
- Modify `view_init(elev=60, azim=120)` for different angles

---

### Spiral Galaxy - Parametric Polar Plots 🌌

Create a spiral galaxy using polar coordinates and parametric equations - the same math that describes real spiral galaxies!

``` python
import numpy as np
import matplotlib.pyplot as plt

# Parametric spiral equations
theta = np.linspace(0, 8 * np.pi, 2000)

fig, axes = plt.subplots(1, 3, figsize=(18, 6), subplot_kw=dict(projection='polar'))
fig.suptitle('Spiral Patterns: From Nature to Art', fontsize=16, fontweight='bold')

# 1. Archimedean Spiral (equal spacing)
r1 = theta
axes[0].plot(theta, r1, linewidth=2, color='dodgerblue')
axes[0].fill(theta, r1, alpha=0.3, color='lightblue')
axes[0].set_title('Archimedean Spiral\n(Spiderwebs, Vinyl Records)', 
                  fontweight='bold', pad=20)
axes[0].grid(True, alpha=0.3)

# 2. Logarithmic Spiral (nature's favorite!)
r2 = np.exp(0.2 * theta)
axes[1].plot(theta, r2, linewidth=2, color='forestgreen')
axes[1].fill(theta, r2, alpha=0.3, color='lightgreen')
axes[1].set_title('Logarithmic Spiral\n(Nautilus Shells, Galaxies)', 
                  fontweight='bold', pad=20)
axes[1].grid(True, alpha=0.3)

# 3. Rose Curve (flower pattern)
k = 5  # Number of petals
r3 = 5 * np.cos(k * theta)
axes[2].plot(theta, r3, linewidth=2, color='hotpink')
axes[2].fill(theta, r3, alpha=0.4, color='pink')
axes[2].set_title(f'Rose Curve (k={k})\n(Flower Petals, Gears)', 
                  fontweight='bold', pad=20)
axes[2].grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

# Bonus: Create a spiral galaxy with multiple arms!
fig2, ax = plt.subplots(figsize=(10, 10), subplot_kw=dict(projection='polar'))

# Multiple spiral arms
num_arms = 5
colors = plt.cm.Spectral(np.linspace(0, 1, num_arms))

for i in range(num_arms):
    # Offset each arm by a different angle
    offset = i * (2 * np.pi / num_arms)
    theta_arm = np.linspace(0, 6 * np.pi, 1000)
    r_arm = np.exp(0.15 * theta_arm)
    
    # Add random "stars" along the arm
    noise = np.random.normal(0, 0.2, len(theta_arm))
    
    ax.plot(theta_arm + offset, r_arm + noise, 
            alpha=0.6, linewidth=1, color=colors[i])
    
    # Scatter some bright stars
    indices = np.random.choice(len(theta_arm), 50)
    ax.scatter(theta_arm[indices] + offset, r_arm[indices], 
               s=np.random.rand(50) * 30, color=colors[i], 
               alpha=0.8, edgecolors='white', linewidth=0.5)

# Add a bright center
ax.scatter(0, 0, s=500, color='yellow', alpha=0.9, edgecolors='orange', linewidth=2)

ax.set_title('Spiral Galaxy Simulation (5 Arms)', 
             fontsize=16, fontweight='bold', pad=20)
ax.set_ylim(0, 30)
ax.grid(True, alpha=0.2)
ax.set_facecolor('black')

plt.tight_layout()
plt.show()
```

**Mathematics behind spirals:**

**Archimedean Spiral:** `r = a + b·θ`
- Constant spacing between turns
- Found in: spiderwebs, vinyl records, Archimedes screw pumps

**Logarithmic Spiral:** `r = a·e^(b·θ)`
- Grows exponentially
- Found in: nautilus shells, hurricanes, spiral galaxies, sunflower seeds

**Rose Curve:** `r = a·cos(k·θ)`
- k determines number of petals
- k odd → k petals
- k even → 2k petals

**Try this:**
- Change k in the rose curve: k=2 (4 petals), k=3 (3 petals), k=7 (7 petals)
- Adjust `num_arms` in the galaxy simulation
- Change `exp(0.15 * theta_arm)` to `exp(0.3 * theta_arm)` for tighter spirals

---

## Conclusion: Your Journey Continues! 🚀

Congratulations! You've explored:
- ✅ **Fractals**: Self-similar infinite patterns
- ✅ **AI Visualizations**: How algorithms see data
- ✅ **Historical Data**: 300+ years of solar activity
- ✅ **Mathematical Art**: Lissajous curves, 3D surfaces, spiral galaxies

### What's Next?

**Challenge yourself:**
1. Combine techniques (fractal galaxy? 3D Mandelbrot?)
2. Add animations using `matplotlib.animation`
3. Create interactive plots with `plotly`
4. Explore more at [Matplotlib Gallery](https://matplotlib.org/stable/gallery/)

**Share your creations:**
- Post your plots on social media with #PythonArt
- Contribute to open-source visualization projects
- Join data science communities

**Keep learning:**
- Study real astronomy data from NASA
- Explore climate data visualizations
- Try machine learning visualization tools

Remember: Every amazing visualization started with someone typing `import matplotlib.pyplot as plt` for the first time - just like you! Keep experimenting, keep creating, and most importantly, **have fun** with your data! 🎨🔬

---

Check out more plotting and Python code at the following URLs. Note, you may have to copy and paste code into your browser's <a href="https://www.oliverbonhamcarter.com/live/" target="_blank"> Jupyter notebook</a>. 
* <a href="https://www.w3schools.com/python/numpy/" target="_blank">W3schools</a>
* <a href="https://matplotlib.org/stable/gallery/lines_bars_and_markers/index.html" target="_blank">MatplotLib Gallery</a>
* <a href="https://scikit-learn.org/stable/auto_examples/" target="_blank">Scikit-Learn Examples</a>
* <a href="https://numpy.org/doc/stable/user/absolute_beginners.html" target="_blank">NumPy for Beginners</a>