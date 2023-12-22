# SAMueL Examples

Replication of Stroke Audit Machine Learning with artificial patient data.

These examples replicate key work from the SAMueL project. They cover two areas:

1) Choice of use of thrombolysis at each stroke team.
2) Predicted outcomes for patients with and without thrombolysis

Both sets of models are for patients arriving within 4 hours of known stroke onset (onset time may be known precisely, or may have been estimated).

## Artificial patient data

Artificial patient data is created by sampling feature values (with replacement) independently from patients attending 119 different stroke teams. Sampling is performed for each stroke team. These data do not maintain covariances in the original data - they are intended to demonstrate our machine learning models. Each artificial patient is a composite of 12 real patients, with features:

* Stroke team
* Infarction (Y/N)
* Age (5 year age bands)
* Onset-to-arrival time (minutes)
* Arrival-to-scan time (minutes)
* Scan-to-thrombolysis time (if appropriate)
* Onset-to-thrombolysis time (calculated, if appropriate)
* Onset time known precisely (Y/N)
* Onset during sleep (all have imprecise onset times)
* Stroke Severity (NIHSS)
    Stroke severity is sampled separately for ischaemic and non-ischaemic strokes
* Atrial fibrillation coagulant (all with a diagnosis of atrial fibrillation)

Stroke teams have been anonymised, and all stroke teams have 500 artificial patients generated.

These patient data were passed to models to predict probabilities of those patients receiving thrombolysis, and then passed to a model to predict outcome disability. Use of thrombolysis and outcomes were sampled from distributions based on probabilities, and these outputs added to the artificial patients. 
