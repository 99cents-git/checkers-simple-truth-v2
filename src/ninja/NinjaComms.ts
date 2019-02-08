import * as $ from 'jquery';

export default class NinjaComms {

  static init(_config: any) {

  }

  static fetchConfiguration(): any {
    return $.ajax({
      url: 'https://checkers.99api.ninja/api/products',
      method: "GET"
    })
  }
}
