'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _open = require('open');

var _open2 = _interopRequireDefault(_open);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _webpackConfig = require('./webpack.config.dev');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3003;
var app = (0, _express2.default)();
var compiler = (0, _webpack2.default)(_webpackConfig2.default);
var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  app.use((0, _webpackDevMiddleware2.default)(compiler, {
    noInfo: true,
    publicPath: _webpackConfig2.default.output.publicPath
  }));

  app.use((0, _webpackHotMiddleware2.default)(compiler));
  app.use(_express2.default.static(_path2.default.join(__dirname, 'dist')));
} else {
  app.use((0, _compression2.default)());
  app.use(_express2.default.static('dist'));
}

app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, './dist/index.html'));
});

app.listen(port, function (err) {
  err ? _winston2.default.log(err) : (0, _open2.default)('http://127.0.0.1:' + port);
});
