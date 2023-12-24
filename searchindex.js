Search.setIndex({"docnames": ["10_thrombolysis_choice_accuracy", "README"], "filenames": ["10_thrombolysis_choice_accuracy.ipynb", "README.md"], "titles": ["Thrombolysis choice model: accuracy measurement", "SAMueL Examples"], "terms": {"caution": 0, "These": [0, 1], "result": 0, "artifici": 0, "patient": 0, "where": 0, "outcom": [0, 1], "ar": [0, 1], "from": [0, 1], "train": 0, "real": [0, 1], "indic": 0, "obtain": 0, "suitabl": [0, 1], "draw": 0, "ani": [0, 1], "clinic": [0, 1], "conclus": 0, "In": 0, "notebook": 0, "we": 0, "an": 0, "xgboost": 0, "attend": [0, 1], "differ": [0, 1], "hospit": 0, "assess": 0, "number": 0, "wai": 0, "import": 0, "warn": 0, "filterwarn": 0, "ignor": 0, "matplotlib": 0, "pyplot": 0, "plt": 0, "numpi": 0, "np": 0, "panda": 0, "pd": 0, "scipi": 0, "stat": 0, "sklearn": 0, "metric": 0, "roc_auc_scor": 0, "roc_curv": 0, "model_select": 0, "train_test_split": 0, "preprocess": 0, "onehotencod": 0, "xgbclassifi": 0, "read_csv": 0, "artificial_ml_data": 0, "csv": 0, "low_memori": 0, "fals": 0, "defin": 0, "field": 0, "x_thrombolysis_field": 0, "stroke_team": 0, "onset_to_arrival_tim": 0, "onset_during_sleep": 0, "arrival_to_scan_tim": 0, "infarct": [0, 1], "stroke_sever": 0, "precise_onset_known": 0, "prior_dis": 0, "afib_anticoagul": 0, "ag": [0, 1], "list": 0, "uniqu": 0, "sort": 0, "split": 0, "test": 0, "set": [0, 1], "stratifici": 0, "map": 0, "str": 0, "x_train": 0, "x_test": 0, "y_train": 0, "y_test": 0, "test_siz": 0, "0": 0, "25": 0, "stratifi": 0, "random_st": 0, "42": 0, "One": 0, "hot": 0, "encod": 0, "categori": 0, "spars": 0, "one_hot_encod": 0, "transform": 0, "one_hot_encoded_df": 0, "datafram": 0, "column": 0, "index": 0, "x_one_hot_train": 0, "concat": 0, "axi": 0, "1": 0, "drop": 0, "inplac": 0, "true": 0, "x_one_hot_test": 0, "def": 0, "calculate_accuraci": 0, "observ": 0, "rang": 0, "class": 0, "take": 0, "two": [0, 1], "arrai": 0, "valu": [0, 1], "return": 0, "dictionari": 0, "posit": 0, "rate": 0, "proport": 0, "case": 0, "ve": 0, "2": 0, "3": 0, "neg": 0, "4": [0, 1], "5": [0, 1], "correct": 0, "6": 0, "precis": [0, 1], "7": 0, "recal": 0, "correctli": 0, "identifi": 0, "8": 0, "f1": 0, "harmon": 0, "mean": 0, "9": 0, "same": 0, "10": 0, "11": 0, "balanc": 0, "averag": 0, "12": [0, 1], "likelihood": 0, "increas": 0, "probabl": [0, 1], "13": 0, "reduc": 0, "14": 0, "15": 0, "16": 0, "17": 0, "18": 0, "chanc": 0, "19": 0, "convert": 0, "type": 0, "observed_posit": 0, "observed_neg": 0, "predicted_posit": 0, "predicted_neg": 0, "true_posit": 0, "false_posit": 0, "true_neg": 0, "false_neg": 0, "sum": 0, "balanced_accuraci": 0, "positive_likelihood": 0, "negative_likelihood": 0, "false_positive_r": 0, "false_negative_r": 0, "true_positive_r": 0, "true_negative_r": 0, "positive_predictive_valu": 0, "negative_predictive_valu": 0, "creat": [0, 1], "add": 0, "dict": 0, "observed_positive_r": 0, "observed_negative_r": 0, "predicted_positive_r": 0, "predicted_negative_r": 0, "verbos": 0, "seed": 0, "learning_r": 0, "base_scor": 0, "none": 0, "booster": 0, "callback": 0, "colsample_bylevel": 0, "colsample_bynod": 0, "colsample_bytre": 0, "devic": 0, "early_stopping_round": 0, "enable_categor": 0, "eval_metr": 0, "feature_typ": 0, "gamma": 0, "grow_polici": 0, "importance_typ": 0, "interaction_constraint": 0, "max_bin": 0, "max_cat_threshold": 0, "max_cat_to_onehot": 0, "max_delta_step": 0, "max_depth": 0, "max_leav": 0, "min_child_weight": 0, "miss": 0, "nan": 0, "monotone_constraint": 0, "multi_strategi": 0, "n_estim": 0, "n_job": 0, "num_parallel_tre": 0, "jupyt": 0, "environ": 0, "pleas": 0, "rerun": 0, "thi": 0, "cell": 0, "show": 0, "html": 0, "represent": 0, "trust": 0, "On": 0, "github": 0, "unabl": 0, "render": 0, "try": 0, "page": 0, "nbviewer": 0, "org": 0, "xgbclassifierxgbclassifi": 0, "y_pred_prob": 0, "predict_proba": 0, "y_pred": 0, "accuracy_df": 0, "from_dict": 0, "orient": 0, "round": [0, 1], "268": 0, "732": 0, "247": 0, "753": 0, "842": 0, "723": 0, "666": 0, "694": 0, "907": 0, "786": 0, "130": 0, "368": 0, "093": 0, "334": 0, "881": 0, "roc": 0, "auc": 0, "roc_auc": 0, "print": 0, "f": 0, "3f": 0, "fpr": 0, "tpr": 0, "threshold": 0, "intersect": 0, "argmin": 0, "ab": 0, "optim": 0, "optimal_threshold": 0, "optimal_sens_spec": 0, "fig": 0, "figur": 0, "figsiz": 0, "ax1": 0, "add_subplot": 0, "121": 0, "color": 0, "orang": 0, "darkblu": 0, "linestyl": 0, "set_xlabel": 0, "set_ylabel": 0, "set_titl": 0, "text": 0, "64": 0, "07": 0, "bbox": 0, "facecolor": 0, "white": 0, "edgecolor": 0, "black": 0, "grid": 0, "ax2": 0, "122": 0, "combin": 0, "04": 0, "tight_layout": 0, "pad": 0, "each": [0, 1], "comparison": 0, "groupbi": 0, "stroke_team_comparison": 0, "regress": 0, "line": 0, "vs": 0, "thrombolyli": 0, "x2": 0, "point": 0, "x": 0, "y": [0, 1], "slope": 0, "intercept": 0, "r_valu": 0, "p_valu": 0, "std_err": 0, "linregress": 0, "r_squar": 0, "thrombolysis_pr": 0, "111": 0, "scatter": 0, "c": 0, "k": 0, "s": 0, "20": 0, "linewidth": 0, "r": 0, "squar": 0, "33": 0, "average_differ": 0, "between": 0, "average_absolute_differ": 0, "absolut": 0, "021": 0, "033": 0, "The": 0, "bin": 0, "A": 0, "well": 0, "ha": 0, "good": 0, "align": 0, "who": 0, "digit": 0, "assign": 0, "step": 0, "arang": 0, "store": 0, "reliability_df": 0, "confid": 0, "fraction_posit": 0, "reliabl": 0, "label": [0, 1], "perfect": 0, "fraction": 0, "thrombolys": 0, "legend": 0, "replic": 1, "stroke": 1, "audit": 1, "machin": 1, "learn": 1, "kei": 1, "work": 1, "project": 1, "thei": 1, "cover": 1, "area": 1, "choic": 1, "us": 1, "thrombolysi": 1, "team": 1, "predict": 1, "without": 1, "both": 1, "model": 1, "arriv": 1, "within": 1, "hour": 1, "known": 1, "onset": 1, "time": 1, "mai": 1, "have": 1, "been": 1, "estim": 1, "sampl": 1, "featur": 1, "replac": 1, "independ": 1, "119": 1, "perform": 1, "do": 1, "maintain": 1, "covari": 1, "origin": 1, "except": 1, "sever": 1, "separ": 1, "ischaem": 1, "non": 1, "intend": 1, "demonstr": 1, "our": 1, "research": 1, "frankenstein": 1, "composit": 1, "n": 1, "year": 1, "band": 1, "censor": 1, "below": 1, "35": 1, "abov": 1, "95": 1, "disabl": 1, "prior": 1, "modifi": 1, "rankin": 1, "scale": 1, "mr": 1, "minut": 1, "closest": 1, "min": 1, "scan": 1, "appropri": 1, "calcul": 1, "dure": 1, "sleep": 1, "all": 1, "imprecis": 1, "nihss": 1, "atrial": 1, "fibril": 1, "coagul": 1, "diagnosi": 1, "anonymis": 1, "500": 1, "gener": 1, "wa": 1, "pass": 1, "receiv": 1, "discharg": 1, "inpati": 1, "care": 1, "were": 1, "distribut": 1, "base": 1, "output": 1, "ad": 1, "more": 1, "inform": 1, "found": 1, "here": 1}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"thrombolysi": 0, "choic": 0, "model": 0, "accuraci": 0, "measur": 0, "load": 0, "prepar": 0, "data": [0, 1], "function": 0, "calcul": 0, "score": 0, "fit": 0, "get": 0, "receiv": 0, "oper": 0, "characterist": 0, "curv": 0, "sensit": 0, "specif": 0, "compar": 0, "actual": 0, "predict": 0, "us": 0, "stroke": 0, "team": 0, "plot": 0, "calibr": 0, "samuel": 1, "exampl": 1, "artifici": 1, "patient": 1}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})