---
title: "CoolPlotsAndBasicModels"
date: 2023-03-29T23:43:43-04:00
draft: False
---


### Clustering: A demo of structured Ward hierarchical clustering on an image of coins


<center>
&#x200B;
<img src="/images/outreach/coolPlots/coins.png" alt="logo" style="width:400px;"/>
</center>

[MiniTutorial](https://scikit-learn.org/stable/auto_examples/cluster/plot_coin_ward_segmentation.html#)

``` python
### Generate data
from skimage.data import coins

orig_coins = coins()

import numpy as np
from scipy.ndimage import gaussian_filter
from skimage.transform import rescale

smoothened_coins = gaussian_filter(orig_coins, sigma=2)
rescaled_coins = rescale(
    smoothened_coins,
    0.2,
    mode="reflect",
    anti_aliasing=False,
)
X = np.reshape(rescaled_coins, (-1, 1))

# Define structure of the data
from sklearn.feature_extraction.image import grid_to_graph
connectivity = grid_to_graph(*rescaled_coins.shape)

# Compute clustering
import time as time
from sklearn.cluster import AgglomerativeClustering

print("Compute structured hierarchical clustering...")
st = time.time()
n_clusters = 27  # number of regions
ward = AgglomerativeClustering(
    n_clusters=n_clusters, linkage="ward", connectivity=connectivity
)
ward.fit(X)
label = np.reshape(ward.labels_, rescaled_coins.shape)
print(f"Elapsed time: {time.time() - st:.3f}s")
print(f"Number of pixels: {label.size}")
print(f"Number of clusters: {np.unique(label).size}")

# plotting
import matplotlib.pyplot as plt
plt.figure(figsize=(5, 5))
plt.imshow(rescaled_coins, cmap=plt.cm.gray)
for l in range(n_clusters):
    plt.contour(
        label == l,
        colors=[
            plt.cm.nipy_spectral(l / float(n_clusters)),
        ],
    )
plt.axis("off")
plt.show()
```

---

### Scatter 

<center>
&#x200B;
<img src="/images/outreach/coolPlots/bigScatter.png" alt="logo" style="width:400px;"/>
</center>


[MiniTutorial](https://matplotlib.org/stable/gallery/lines_bars_and_markers/scatter_masked.html#sphx-glr-gallery-lines-bars-and-markers-scatter-masked-py)
``` python
import matplotlib.pyplot as plt
import numpy as np

# Fixing random state for reproducibility
np.random.seed(19680801)

N = 100
r0 = 0.6
x = 0.9 * np.random.rand(N)
y = 0.9 * np.random.rand(N)
area = (20 * np.random.rand(N))**2  # 0 to 10 point radii
c = np.sqrt(area)
r = np.sqrt(x ** 2 + y ** 2)
area1 = np.ma.masked_where(r < r0, area)
area2 = np.ma.masked_where(r >= r0, area)
plt.scatter(x, y, s=area1, marker='^', c=c)
plt.scatter(x, y, s=area2, marker='o', c=c)
# Show the boundary between the regions:
theta = np.arange(0, np.pi / 2, 0.01)
plt.plot(r0 * np.cos(theta), r0 * np.sin(theta))
plt.show()
```


#### Dolphin plot

<center>
&#x200B;
<img src="/images/outreach/coolPlots/dolphin.png" alt="logo" style="width:400px;"/>
</center>

[MiniTutorial](https://matplotlib.org/stable/gallery/shapes_and_collections/dolphin.html#sphx-glr-gallery-shapes-and-collections-dolphin-py)

---

### SunSpots!


<center>
&#x200B;
<img src="/images/outreach/coolPlots/sunSpots.png" alt="sunspots" style="width:400px;"/>
</center>

[MiniTutorial](https://notebook.community/stencila/stencila/demos/examples/ipynb/sunspots)

``` python
# https://notebook.community/stencila/stencila/demos/examples/ipynb/sunspots
import statsmodels.api as sm
import pandas as pd
import matplotlib.pyplot as plt

data_loader = sm.datasets.sunspots.load_pandas()
df = data_loader.data

df
df.head()
df.tail()
fractional_nums = df['SUNACTIVITY'].apply(lambda x: x % 1) #Take the modulo of each value with 1 to get the fractional part
fractional_nums[fractional_nums > 0].head()
print(df['SUNACTIVITY'].describe())
#pd.tools.plotting.autocorrelation_plot(df['SUNACTIVITY'])

myX = list(df["YEAR"])
myY = list(df["SUNACTIVITY"])

plt.plot(myX, myY)
plt.show()
```