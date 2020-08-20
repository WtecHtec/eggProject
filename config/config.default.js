'use strict';

const fs = require('fs');
const path = require('path');

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '123456';



  config.weather = {
    serverUrl: 'http://www.tianqiapi.com/api?version=v9&appid=23035354&appsecret=8YvlPNrz',
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
      '.nj': 'nunjucks',
    },
  };

  return config;
};
