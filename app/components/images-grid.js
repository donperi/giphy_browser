import Component from '@ember/component';
import $ from 'jquery'

export default Component.extend({

  init() {
    this._super();
  },

  didInsertElement() {
    this.set('masonry',  $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 200,
      gutter: 10
    }));
  },

  didRender() {
    $('.grid').masonry('reloadItems')
  }
});
