// Yilia 是为 Hexo 3 写的：那时站点配置（author、subtitle 等）会合并进 theme 变量。
// Hexo 5+ 不再合并，这里补回旧行为，主题配置优先。
hexo.extend.filter.register('template_locals', function (locals) {
  locals.theme = Object.assign({}, locals.config, locals.theme);
  return locals;
});
