const Service = require('egg').Service;

class WeatherService extends Service {

  async list(page = 1) {
    // read config
    const { serverUrl } = this.config.weather;

    // use build-in http client to GET hacker-news api
    const { data: newsList } = await this.ctx.curl(`${serverUrl}`, {
      dataType: 'json',
    });
    // console.log(idList.data)

    // parallel GET detail
    // const newsList = await Promise.all(
    //   Object.keys(idList).map(key => {
    //     const url = `${serverUrl}`;
    //     return this.ctx.curl(url, { dataType: 'json' });
    //   })
    // );
   
    return newsList;
  }

}

module.exports = WeatherService;