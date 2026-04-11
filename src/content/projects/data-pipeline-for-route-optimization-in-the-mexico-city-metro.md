---
slug: "data-pipeline-for-route-optimization-in-the-mexico-city-metro"
title: "Data pipeline for route optimization in the Mexico City Metro"
hook: "Data pipeline that transforms raw subway travel information into structured and optimized datasets for predictive models of demand and route selection."
description: "I developed a data processing pipeline that transforms raw subway travel records into structured, usable information for machine learning models. The system allows for the analysis of mobility patterns, segmenting trips by origin, destination, and time, facilitating the identification of high-demand areas and opportunities for service optimization."
context: "This academic project, developed collaboratively, focuses on data analysis and machine learning. It began with a CSV dataset containing travel records (stations, times, lines), which was not designed to feed predictive models or reflect relevant user behavior patterns."
role: "Data Engineer"

challenges:
  - "Single, large, and unoptimized dataset for analysis"
  - "Cohesive data that did not reflect relevant patterns"
  - "Absence of derived variables necessary for the model"
  - "Detection of inconsistencies and outliers"
  - "Poor performance in initial data processing"
decisions:
  - "Use Python for its ecosystem for data analysis and processing"
  - "Implement pandas, numpy, and matplotlib for manipulation and exploration"
  - "Design a modular pipeline in script form for rapid iteration"
  - "Prioritize a manual but reproducible approach to facilitate experimentation"
actions:
  - "I analyzed the initial dataset structure using univariate analysis"
  - "I identified anomalies, inconsistencies, and missing data using statistical methods and visualization tools"
  - "I defined new variables and more expressive structures for the model"
  - "I iteratively cleaned and transformed the data with the team"
  - "I reduced the complexity of the dataset while maintaining relevant information"
  - "I generated new data representations geared toward segmentation"
  - "I integrated the entire process into an executable modular pipeline"

result: "A reusable pipeline was obtained that generates clean, structured, and optimized datasets, ready to feed machine learning models focused on travel pattern classification."

impact:
  - "It enabled the effective use of data for predictive models"
  - "Improved data quality through cleaning and transformation"
  - "Allowed the identification of demand patterns not initially visible"
  - "Reduced the complexity of the dataset, facilitating its analysis"
  - "and established a repeatable process for generating new datasets"
stack:
  - "Python"
  - "Pandas"
  - "NumPy"
  - "Matplotlib"
learnings:
  - "Data processing with pandas and NumPy"
  - "Design of modular ETL pipelines"
  - "Identifying and cleaning inconsistent data"
  - "Using visualization for pattern detection"
  - "Preparing data for machine learning models"

image: "pipeline_metro.png"


---
