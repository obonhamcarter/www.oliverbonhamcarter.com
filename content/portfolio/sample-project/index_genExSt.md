---
title: GenExSt
description: An analysis tool to detect correlations between GIS genes in Cancer.
date: "2021-05-02T19:47:09+02:00"
jobDate: 2021
work: [Gene Expression Analysis, Gene Correlation, Cancer]
techs: []
designs: []
thumbnail: sample-project/genexst_logo.png
projectUrl: https://github.com/developmentAC/genExSt
testimonial:
  name: GenExSt!
  role: Inspiration
  image: sample-project/flintSmiles.png
  text: Another amazing project!!
---
### Abstract
Interaction between genes is one driving force that can influence a biological outcome. In a genetic disease such as cancer, understanding genetic interactions may help us elucidate mechanisms sustaining cancer growth. A computational approach is one way to detect genetic interactions in the context of cancer. In this article, we introduce a tool, GenExSt, and its underlying method to study gene interactions. We applied our method to discover gene-pairs whose expressions demonstrate patterns of correlation. For this demonstration, we selected ten breast cancer gene expression data sets from the Genomic Data Commons Data Portal through National Cancer Institute. We focused on genes that suppress genome instability, or instability suppressing genes (GIS), many of which play an important role in cancer. We applied our method to an inter-comparison across data sets. Here we tested statistical normalization approaches derived from the combined expressions of randomly selected, single, housekeeping (HK) genes, and from the calculated mean of three expressions. In addition, our method derives R2 values from linear models in which the expressions of all possible pairs of GIS genes are placed in a linear model to produce heatmaps to indicate probable correlations. We show that results from our method are suited to normalized data, extracted from multiple genes simultaneously, rather than using single gene expression values. GenExSt may be used to study gene expression data in other settings provided that the concept of gene interactions is appropriate in the context.

---

### Links
<!-- add a line drop -->
<center>
&#x200B;
</center>

+ View the [Poster](/images/genexst/geneExp_poster.pdf)
+ Read the [Paper](https://www.researchgate.net/publication/350905987_GenExSt_A_Tool_to_Identify_Correlation_of_Gene_Expression_After_Normalization_with_Housekeeping_Genes?_sg%5B0%5D=CBV90Y88sWRV8RGpxoC-C_IJ053qZlgmygsNBt48COg5zd0rW-HPVPqwmFQ-jG6UL3VhTnhWtUMWLmoibG9fGIAIsSW4MBA4FEKgMy70.GU5m7UphTzCKbODUA1XLjsoYwyc_qB-wNPLmdibStUNVpxAlAPOQcrdRsV8Q0aVwvvTNHUONvZHCmXIzNssSLA)
+ View the [Slides about the tool](/talks/genExST/pres_genExST_ficc2021.pdf)
<!-- add a line drop -->
<center>
&#x200B;
</center>

![Normalizing Factors](/images/genexst/genexst1.png)
![Heatmap Creation](/images/genexst/genexst2.png)
