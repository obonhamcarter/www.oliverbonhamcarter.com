---
title: BeagleTM
description: A text mining tool for developing visual and interactive relationship networks from PubMed article information.
date: "2020-05-02T19:47:09+02:00"
jobDate: 2023
work: [Text mining, Visualizing intersecting ideas]
techs: []
designs: []
thumbnail: sample-project/beagleTM_logo2.png
projectUrl: https://github.com/developmentAC/beagleTM2.git
testimonial:
  name: Flint the Beagle!
  role: Inspiration
  image: sample-project/flintSmiles.png
  text: This text mining tool was built from inspiration from me. How cool is that!? I approve this software.
---
### Abstract
Investigators in bioinformatics are often confronted with the difficult task of connecting ideas, which are found scattered around the literature, using robust keyword searches. It is often customary to identify only a few keywords in a research article to facilitate search algorithms, which is usually completed in absence of a general approach that would serve to index all possible keywords of an article’s characteristic attributes. Based on only a hand-full of keywords, articles are therefore prioritized by search algorithms that point investigators to seeming subsets of their knowledge. In addition, many articles escape algorithm search strategies due to the fact that their keywords were vague, or have become unfashionable terms. In this case, the article, as well as its source of knowledge, may be lost to the community. Owing to the growing size of the literature, we introduce a text mining method and tool, (BeagleTM), for knowledge harvesting from papers in a literature corpus without the use of article meta-data. Unlike other text mining tools that only highlight found keywords in articles, our method allows users to visually ascertain which keywords have been featured in studies together with others in peer-reviewed work. Drawing from an arbitrarily-sized corpus, BeagleTM creates visual networks describing interrelationships between user-defined terms to facilitate the discovery of connected or parallel studies. We report the effectiveness of BeagleTM by illustrating its ability to connect the keywords from types of PTMs (post-translational modifications), stress-factors, and disorders together according to their relationships. These relationships facilitate the discovery of connected studies, which is often challenging to determine due to the frequently unrelated keywords that were tied to relevant articles containing this type of information.

___

## Published Works

+ Bonham-Carter, Oliver. "BeagleTM: An adaptable text mining method for relationship discovery in literature." Advances in Information and Communication: Proceedings of the 2020 Future of Information and Communication Conference (FICC), Volume 2. Springer International Publishing, 2020.  <a href="https://www.researchgate.net/publication/339224324_BeagleTM_An_Adaptable_Text_Mining_Method_for_Relationship_Discovery_in_Literature" target="_blank"> Article</a>

  + Future of Information and Communication Conference (FICC) 2020 <a href="/talks/beagleTM_ficc2020.pdf" target="_blank"> Presentation</a>


+ Bonham-Carter, Oliver. "Text Analysis of Ethical Influence in Bioinformatics and Its Related Disciplines." Future of Information and Communication Conference. Cham: Springer Nature Switzerland, 2024. <a href="https://www.researchgate.net/publication/379244449_Text_Analysis_of_Ethical_Influence_in_Bioinformatics_and_its_Related_Disciplines" target="_blank"> Article</a>

  +  Future of Information and Communication Conference (FICC) 2024 <a href="/talks/pres_ethics-BeagleTM_ficc2024.pdf" target="_blank">Presentation</a>

  + 2024 <a href="https://www.youtube.com/watch?v=vhFCqiWZo7o&list=PLzrI9twHgbWk-Ti9AgCb1KyTLTo6xenME" target="_blank">Video Presentation</a>

+ Check out my <a href="/talks/pycon2024_poster_bonham-carter.pdf" target="_blank"> PyCon 2024 Poster</a> entitled, _Breaking Barriers in Research Projects: BeagleTM, a Powerful Python-based Text Mining Tool for Visual Discovery in Scientific Literature_

+ See the code at BeagleTM2 <a href="https://github.com/developmentAC/beagleTM2" target="_blank"> GitHub repository</a>

---

The general method.

![General Idea](/images/beagletm/beagletm_research.png)

The flowchart.

![Software Flow Chart](/images/beagletm/beagletm_flowchart.png)

BeagleTM separates papers by topics.

![Sorting papers by topic](/images/beagletm/beagletm_flowchartdb.png)

Networks are produced by first parsing all available corpus articles for specific user-selected keywords. These results are used to create networks, and to provide other details about the inter-connectivity and coverage of  ideas in across corpus.

![RelationshipNetwork](/images/beagletm/beagletm_mouseOver.png)

Relationship Networks provide information about which articles are connected to others in terms of overlapping ideas.

![ConnectivityNetwork](/images/beagletm/connection-network2_large.png)

Connectivity Networks all investigator to determine how much coverage there is of a particular keyword (or set of keywords) across the literature which helps to choose effective keys for searches.

---
