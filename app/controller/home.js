'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async add() {
    const { ctx } = this;
    console.log(ctx.request.body);
    const { price, content } = ctx.request.body;
    const res = await this.app.mysql.insert('price_table', {
      price,
      content,
    });
    const id = res.insertId;
    const result = await this.app.mysql.select('price_table', {
      where: { id },
    });
    ctx.body = {
      result,
    };
  }

  // 用户登录
  async login() {
    const { ctx, app } = this;
    const data = ctx.request.body;
    let res = {};
    const result = await this.app.mysql.select('user_table', {
      where: {
        user_name: data.username,
        user_password: data.password,
        user_sex: data.sex,
      },
    });
    console.log(result);
    const token = app.jwt.sign({
      username: data.user_name,
    }, app.config.jwt.secret);
    if (result.length === 0) {
      res = {
        message: '登录失败，密码错误',
        err: 1,
      };
    } else {
      res = {
        err: 0,
        token,
        message: '登录成功',
      };

    }
    ctx.body = res;
  }

  // 用户注册
  async register() {
    const { ctx } = this;
    const data = ctx.request.body;
    let res = {};
    const result = await this.app.mysql.select('user_table', {
      where: {
        user_name: data.username,
        user_sex: data.sex,
      },
    });
    console.log(result);
    if (result.length === 0) {
      await this.app.mysql.insert('user_table', {
        user_name: data.username,
        user_password: data.password,
        user_sex: '男',
      });
      await this.app.mysql.insert('user_table', {
        user_name: data.username,
        user_password: data.password,
        user_sex: '女',
      });
      // console.log(insert);
      res = {
        message: '注册成功',
        err: 0,
      };
    } else {
      res = {
        err: 1,
        message: '该用户已存在，请修改用户名',
      };
    }
    ctx.body = res;
  }

  // 主页，渲染列表
  async mainContent() {
    const { ctx } = this;
    const data = ctx.request.body;
    console.log(ctx.state.user, data.userName);
    const result = await this.app.mysql.select('price_table', {
      where: {
        userName: data.userName,
      },
    });
    ctx.body = { code: 201, msg: '验证成功', result };
  }

  // 增加账单信息
  async addContent() {
    const { ctx } = this;
    const data = ctx.request.body;
    const result = await this.app.mysql.insert('price_table', {
      userName: data.username,
      time: data.time,
      user_sex: data.sex,
      price: data.price,
      content: data.content,
    });
    ctx.body = { msg: '记录成功', result, err: 0 };
  }

  // 删除账单信息
  async delContent() {
    const { ctx } = this;
    const data = ctx.request.body;
    const result = await this.app.mysql.delete('price_table', {
      id: data.id,
    });
    console.log(result);
    ctx.body = result;
  }

  // 修改账单信息
  async editContent() {
    const { ctx } = this;
    const data = ctx.request.body;
    console.log(data);
    const result = await this.app.mysql.query('update price_table set price = ? , content = ? , time = ? , user_sex = ? where id = ? ', [ Number(data.price), data.content, data.time, data.sex, Number(data.id) ]);
    // update('price_table', {
    //   id: data.id,
    //   user_sex: data.sex,
    //   time: data.time,
    //   price: data.price,
    //   content: data.content,
    // });
    console.log(result);
    ctx.body = { err: 0, message: '修改成功', result };
  }
}

module.exports = HomeController;
