// 只需要编译 html 文件，以及其用到的资源。
fis.set('project.files', ['*.html', 'map.json']);

fis.match('*.css', {
  useHash: true,
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  useHash: true,
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')

});
fis.match('*.js', {
  isMod: true,
  useHash: true,
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

fis.match('/static/sea.js', {
  isMod: false,
  useHash: true
});

fis.hook('cmd', {
  baseUrl: './sea-modules/',

  paths: {
    "jquery": "jquery/jquery/1.10.1/jquery.js",
    "$": "jquery/jquery/1.10.1/jquery.js",
    "jquery-easing": "jquery/easing/1.3.0/easing.js"
  }
});

fis.match('::packager', {
  postpackager: fis.plugin('loader')
});


// 注意： fis 中的 sea.js 方案，不支持部分打包。
// 所以不要去配置 packTo 了，运行时会报错的。
fis
  .media('prod')
  .match('/static/**.js', {
    // 通过 uglify 压缩 js
    // 记得先安装：
    // npm install [-g] fis-optimizer-uglify-js
    optimizer: fis.plugin('uglify-js')
  })
  .match('::packager', {
    postpackager: fis.plugin('loader', {
      allInOne: {
        includeAsyncs: true,
        ignore: ['/static/sea.js']
      }
    })
  })
