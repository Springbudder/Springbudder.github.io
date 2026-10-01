---
title: sunburst plot and d3 heatmap
date: 2017-05-30 22:21:13
tags: R/visualization
---
### How to post R interactive file to Hexo
* R
	1. Open the interactive file in new window
	2. Save the standalone web page
	3. Open the web inspector in RStudio
	4. Copy the `index.html` file
	5. Change the `CSS` and `js` file path to the current folder
* Hexo
	1. Create a folder in `Hexo/source/..` folder
	2. Add the `skip_render: created/**` in the `_config.yml` file
	3. Check the web page use the url `mysite.me/created`
	4. Insert the url `/created` in other post (relative path)
#### Example:
[See the inteactive sunburst](/My_HTML/sunburst)