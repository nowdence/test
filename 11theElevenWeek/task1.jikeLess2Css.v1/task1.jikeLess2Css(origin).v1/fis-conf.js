// 加 md5
fis.match('*.{js,css,png}', {
  useHash: true
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});

// 所有的 css
fis.match('**.css', {
    //发布到/static/css/xxx目录下
    release : '/static/css$0'
});

// 所有image目录下的.png，.gif文件
fis.match('/images/(*.{png})', {
    //发布到/static/pic/xxx目录下
    release: '/static/pic/$1'
});