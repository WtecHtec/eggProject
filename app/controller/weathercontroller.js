'use strict';

const Controller = require('egg').Controller;

class WeatherController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    const dataList = {
      title: '天气',
      newsList:[]
    };
    const newsList = await ctx.service.weather.weather.list();
    dataList.newsList =  newsList
    // console.log('WeatherController newsList:',dataList.newsList)
    await this.ctx.render('weather/weather.tpl', dataList);
  }
}

module.exports = WeatherController;