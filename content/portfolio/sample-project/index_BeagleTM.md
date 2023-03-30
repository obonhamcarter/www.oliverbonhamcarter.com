---
title: BeagleTM
description: A text mining tool for developing visual and interactive relationship networks from PubMed article information.
date: "2020-05-02T19:47:09+02:00"
jobDate: 2020
work: [Text mining, Visualizing intersecting ideas]
techs: []
designs: []
thumbnail: sample-project/beagleTM_logo2.png
projectUrl: https://github.com/developmentAC/beagleTM.git
testimonial:
  name: Flint the Beagle!
  role: Inspiration
  image: sample-project/flintSmiles.png
  text: This text mining tool was built from inspiration from me. How cool is that!? I approve this software.
---
### Abstract
Investigators in bioinformatics are often confronted with the difficult task of connecting ideas, which are found scattered around the literature, using robust keyword searches. It is often customary to identify only a few keywords in a research article to facilitate search algorithms, which is usually completed in absence of a general approach that would serve to index all possible keywords of an article’s characteristic attributes. Based on only a hand-full of keywords, articles are therefore prioritized by search algorithms that point investigators to seeming subsets of their knowledge. In addition, many articles escape algorithm search strategies due to the fact that their keywords were vague, or have become unfashionable terms. In this case, the article, as well as its source of knowledge, may be lost to the community. Owing to the growing size of the literature, we introduce a text mining method and tool, (BeagleTM), for knowledge harvesting from papers in a literature corpus without the use of article meta-data. Unlike other text mining tools that only highlight found keywords in articles, our method allows users to visually ascertain which keywords have been featured in studies together with others in peer-reviewed work. Drawing from an arbitrarily-sized corpus, BeagleTM creates visual networks describing interrelationships between user-defined terms to facilitate the discovery of connected or parallel studies. We report the effectiveness of BeagleTM by illustrating its ability to connect the keywords from types of PTMs (post-translational modifications), stress-factors, and disorders together according to their relationships. These relationships facilitate the discovery of connected studies, which is often challenging to determine due to the frequently unrelated keywords that were tied to relevant articles containing this type of information.

---

Links

---

+ View the [Presentation](/images/beagletm/poster_beagleTM_ficc.pdf)

+ Read the [Paper](https://www.researchgate.net/publication/339224324_BeagleTM_An_Adaptable_Text_Mining_Method_for_Relationship_Discovery_in_Literature?_sg%5B0%5D=CBV90Y88sWRV8RGpxoC-C_IJ053qZlgmygsNBt48COg5zd0rW-HPVPqwmFQ-jG6UL3VhTnhWtUMWLmoibG9fGIAIsSW4MBA4FEKgMy70.GU5m7UphTzCKbODUA1XLjsoYwyc_qB-wNPLmdibStUNVpxAlAPOQcrdRsV8Q0aVwvvTNHUONvZHCmXIzNssSLA)

---

The software is run in a Docker container using `bash` commands and then `Streamlit`.


The general method.

![General Idea](/images/beagletm/beagletm_research.png)

The flowchart.

![Software Flow Chart](/images/beagletm/beagletm_flowchart.png)

BeagleTM separates papers by topics.

![Sorting papers by topic](/images/beagletm/beagletm_flowchartdb.png)

Networks are produced to determine relationships between ideas.

![Network](/images/beagletm/beagletm_mouseOver.png)
