'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _jade = require('jade');

var _jade2 = _interopRequireDefault(_jade);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Use jade views

app.set('view engine', 'jade');
app.set('views', _path2.default.join(__dirname, '../../src/jade'));
app.locals.pretty = true;

app.locals.devMode = true;

// load css, js & images
app.use(_express2.default.static(_path2.default.join(__dirname, '../../assets')));
app.use(_express2.default.static(_path2.default.join(__dirname, '../../notes')));
// Test React Server
// import React from 'react'
// import ReactDOM from 'react-dom'
// import ReactDOMServer from 'react-dom/server'
// console.log(ReactDOMServer.renderToString(
//   <div>
//     <h1>Hello World!</h1>
//     <div className="hello">I am react</div>
//   </div>
// ))

app.get('/', function (req, res) {
  return res.render('home');
});

app.listen(process.env.PORT || 4001);