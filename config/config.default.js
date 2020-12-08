/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1607063734677_6860';

  // add your middleware config here
  config.middleware = [];
  config.jwt = {
    secret: '123456',
  };
  // mysql
  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'wjy19971220',
      // 数据库名
      database: 'ticket',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 配置指定的前端地址
  config.cors = {
    // 下面这条加上才能共享跨域session，同时前端ajax请求也要加上响应的参数
    credentials: true,
    origin: ctx => ctx.get('origin'),
    // origin: 'http://127.0.0.1:3333',
    // origin: '*',
    // allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  config.security = {
    // 关闭csrf验证
    csrf: {
      enable: false,
    },
    // 白名单
    domainWhiteList: [ 'http://127.0.0.1:3333' ],
  };

  return {
    ...config,
    ...userConfig,
  };
};
