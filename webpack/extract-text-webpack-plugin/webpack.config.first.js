var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var srl = require('string-replace-loader');

// CSS入口配置
var CSS_PATH = {
    css: {
        pattern: ['./src/**/[^_]*.less', '!./src/old/**/*.less'],
        src: path.join(__dirname, 'src'),
        dst: path.resolve(__dirname, 'static/build/webpack'),
    }
}

// 遍历除所有需要打包的CSS文件路径
function getCSSEntries(config) {
    var fileList = glob.sync(config.pattern)
    return fileList.reduce(function(previous, current) {
        var filePath = path.parse(path.relative(config.src, current))
        var withoutSuffix = path.join(filePath.dir, filePath.name)
        previous[withoutSuffix] = path.resolve(__dirname, current)
        return previous
    }, {})
}
// const extractCSS = new ExtractTextPlugin({filename:"[name].[css]"});
const extractIMAGE = new ExtractTextPlugin({filename:"[name].[image]"});
// const extractHTML = new ExtractTextPlugin({filename:"[name].[html]"});

module.exports = [{
        mode: 'development',
        devtool: 'cheap-module-eval-source-map',
        context: path.resolve(__dirname),
        entry: {
            app: path.resolve(__dirname, 'src/html.html')
        },
        output: {
            path: path.resolve(__dirname, 'out'),
            filename: '[name].[html]'
        },
        module: {
            rules: [
                {
                  test: /\.html$/,
                  // use:extractHTML.extract({
                    use: [ 
                    {
                      loader: 'file-loader',
                      options: {
                          name: "[name]-dist.[ext]",
                      },
                    },
                    {
                        loader: "extract-loader",
                    },
                    {
                      loader: 'html-loader',
                      options: {
                        minimize: false,
                        attrs: ['img:src', 'link:href']
                      }
                    }
                    ]
                  // })
                },
                {
                    test: /\.css$/,
                    loaders: [
                        {
                            loader: "file-loader",
                        },
                        {
                            loader: "extract-loader",
                        },
                        {
                            loader: "css-loader",
                        },
                    ],
                },
                {
                  test: /\.(png|jpg|gif)$/,
                  use:extractIMAGE.extract({

                          use: [ {
                          loader: 'file-loader',
                          options: {
                              name: "[name]-dist.[ext]",
                          },
                        }]
                      })
                },
                // {
                //   test: /\.css$/,
                //   use: extractCSS.extract({
  
                //     use: [
                //     {loader:"style-loader",
                //       options:{
                //         convertToAbsoluteUrls: true
                //       }
                //     },
                //     {loader:"css-loader"},
                //     {loader:'replace-loader',options:{
                //       flags:'g',
                //       regex:'green',
                //       sub:'fuck'
                //     }}]
                //   })
                // }
            ]
        },

        plugins:[
            // extractHTML,
            extractIMAGE,
            // extractCSS,
           
        ]
    },

]