'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/weather' },
        { id: 2, title: 'this is news 2', url: '/news/2' }
      ],
      title: '标题'
    };
    await this.ctx.render('home/list.tpl', dataList);
  }
}

module.exports = HomeController;
