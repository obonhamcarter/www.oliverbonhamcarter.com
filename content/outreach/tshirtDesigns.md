---
title: "Which design of t-shirt?!"
date: 2023-01-25T21:30:44-05:00
draft: true
---

Welcome! Here, we will collect some data from the members of the classroom. We will then put that data into computer code and prepare some plots of the 



<center>
<img src="/images/outreach/01week/countingStars.jpg" alt="Counting Stars" style="width:400px;"/>
</center>


<!-- add a line drop -->
<center>
&#x200B;
</center>


# Setting up an experiment
We will work through the steps of creating a simple research project. The steps include defining the research question, designing the research project, collecting appropriate data, running the analysis, preparing plots and reaching conclusions.


## The Research Question: What do you want to know?!


Imagine that you are a researcher for a t-shirt designing company and you want to know what type of t-shirt logo would be most preferable across a group of people. The logos are the following: "Little Froggy", "Unicorn", "Tiger", "Doggie", "little elephant" and "rocket ship"


 You are put on this research project by the company with instructions that you are to explain your conclusions to them once you have finished the project. How could y




To make this research problem easy to understand for us, we need to state the problem that we want to know in a

# Collecting Data








and you  wanted to know what percentage of the class liked the colors blue, red, yellow, green and purple. 


To know such a thing, you would need to get some data. By "Data" we mean a count of hands in the room for each color.



## Collecting 

---

## Code

We will be modifying the following code for the above analysis.

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
ref: https://matplotlib.org/stable/gallery/lines_bars_and_markers/bar_colors.html#sphx-glr-gallery-lines-bars-and-markers-bar-colors-py