---
title: Iterative features selection
date: 2017-05-21 19:42:21
tags: ML
---
#### Forward and Backward
<p>There are two basic methods: starting with no features and adding features one by one until some stopping criterion is reached, or starting with all features and removing features one by one until some stopping criterion is reached.</p>
<p><b>Recursive feature elimination (RFE):</b><br>starts with all features, builds a model, and discards the least important feature according to the model. Then a new model is built using all but the discarded feature, and so on until only a prespecified number of features are left.</p>
<b>It is very time consuming.</b>
{% codeblock lang:Python %}	
	"""
	Part of the code.
	Just to show the application of RFE model selection.
	"""
	from sklearn.feature_selection import RFE
	from sklean.linear_model import LogisticRegression

	select = RFE(RandomForestClassifier(n_estimators = 100, random_state = 42), n_features_to_select = 40)select.fit(X_train, y_train)
	X_train_rfe = select.transform(X_train)
	X_test_rfe = select.transform(X_test)
	score = LogisticRegression().fit(X_train_rfe, y_train).score(X_test_rfe, y_test)

	print "Test score: {:.3f}".format(score)
	Test score: 0.951
{% endcodeblock %}
