import * as $ from 'jquery';

export default class NinjaComms {

  static init(_config: any) {

  }

  static fetchConfiguration(): any {
    return $.ajax({
      url: 'http://localhost:56777/checkers-simple-truth-v2/public/dummydata.html?_ijt=1hsvfeuu4ejmcn9gllgkhg0mpk',
      method: "GET"
    })
  }
}
