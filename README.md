# SAMueL Examples

Replication of Stroke Audit Machine Learning with artificial patient data.

The data and code for this notebook may be found at: https://github.com/samuel-book/samuel_examples

A Jupyter Book of the code repository may be found at: https://samuel-book.github.io/samuel_examples

## Run on Binder

You may run the notebooks on Binder. If it hasn't been used for a while it make take about 5 mins to initialise.

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/samuel-book/samuel_examples/main)

## What is here?

These examples replicate key work from the SAMueL (Stroke Audit Machine Learning) project. They cover two areas:

1) Choice of use of thrombolysis at each stroke team.
2) Predicted outcomes for patients with and without thrombolysis

Both sets of models are for patients arriving within 4 hours of known stroke onset (onset time may be known precisely, or may have been estimated).

## Artificial patient data

Artificial patient data is created by sampling feature values (with replacement, and rounding) independently from patients attending 119 different stroke teams. Sampling is performed for each stroke team. These data do not maintain covariances in the original data (except that stroke severity is sampled separately for ischaemic and non-ischaemic stroke patients). These artificial patients are intended to demonstrate our machine learning models, and are not suitable for any clinical research into stroke. Each artificial patient has the following features.

* Stroke team (anonymised)
* Infarction (Y/N)
* Age (5 year age bands) - with ages censored below 35 or above 95
* Disability prior to stroke (modified Rankin Scale, mRS)
* Onset-to-arrival time (minutes, rounded to closest 5 mins)
* Arrival-to-scan time (minutes, rounded to closest 5 mins)
* Scan-to-thrombolysis time (minutes, if appropriate, rounded to closest 5 mins)
* Onset-to-thrombolysis time (calculated, if appropriate)
* Onset time known precisely (Y/N)
* Onset during sleep (all are then labelled as having imprecise onset times)
* Stroke Severity (NIHSS)
    Stroke severity is sampled separately for ischaemic and non-ischaemic strokes
* Atrial fibrillation coagulant (all also given a diagnosis of atrial fibrillation)

Stroke teams have been anonymised, and all stroke teams have 500 artificial patients generated.

Patient data was passed to models to predict probabilities of patients receiving thrombolysis, and then passed to a model to predict disability (mRS) on discharge from inpatient care. Use of thrombolysis and outcomes were sampled from distributions based on probabilities, and these outputs added to the artificial patients. While the artificial data does not maintain covariance of features, the labelling with use of thrombolysis and outcome will maintain interactions between features.

More information on generation of artificial patient data may be found [here](https://github.com/samuel-book/samuel_2_production/blob/main/5_artificial_data.ipynb).
