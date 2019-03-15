import * as $ from 'jquery';

export default class NinjaComms {

  static init(_config: any) {

  }

  static fetchConfiguration(): any {
    return $.ajax({
      url: 'https://checkersapi.99c.co.za/99api.ninja/public/api/products',
      method: "GET"
    })
  }
}
