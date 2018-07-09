import Service from '@ember/service';
import $ from 'jquery';


export default Service.extend({
  setApiKey(apiKey) {
    this.apiKey = apiKey
  },

  search(q, params = {}) {
    const query =  Object.assign(params, { api_key: this.apiKey }, { q })

    return  $.get('https://api.giphy.com/v1/gifs/search', query)
  }
});
