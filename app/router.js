'use strict';

const { home } = require("egg-mock");
const fs = require('fs');
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  const jsonp = app.jsonp();
  console.log(app);
  router.get('/*', controller.home.index);
  // 增加路由测试+查询路由测试
  router.post('/add', jsonp, controller.home.add);

  // 用户登录验证接口
  router.post('/login', jsonp, controller.home.login);
  // 用户注册接口
  router.post('/register', jsonp, controller.home.register);
  // 用户主页
  router.post('/mainContent', jwt, controller.home.mainContent);
  // 用户记账
  router.post('/addContent', jwt, controller.home.addContent);
  // 用户删除记账信息
  router.post('/delContent', jwt, controller.home.delContent);
  // 用户修改记账信息
  router.post('/editContent', jwt, controller.home.editContent);
  // 统计账单分布
  router.post('/showStatus', jwt, controller.home.showStatus);
  // 统计男女账单信息
  router.post('/selectSingle', jwt, controller.home.selectSingle);
};
