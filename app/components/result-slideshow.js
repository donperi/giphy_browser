import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  classNames: ['slideshow'],
  classNameBindings: ['opened:opened'],
  opened: null,

  didReceiveAttrs() {
    this.set('image', this.get('images')[this.get('selectedKey')]);
    this.set('opened', Number.isInteger(this.get('selectedKey')));
  },

  actions: {
    next() {
      this.get('selectImage')(this.get('selectedKey')+1);
    },

    prev() {
      this.get('selectImage')(this.get('selectedKey')-1);
    }
  },

  _keypressHandler(e) {
    switch (e.keyCode) {
      case 27:
        this.get('onItemClear')();
        break;
      case 37:
        if (this.get('selectedKey') > 0)
          this.get('selectImage')(this.get('selectedKey')-1);
        break;
      case 39:
        if (this.get('selectedKey') < this.get('images').length - 1)
          this.get('selectImage')(this.get('selectedKey')+1);
        break;
    }
  },

  didRender() {
    const selectedKey = this.get('selectedKey');
    if (selectedKey === null) {
      $(document).off('keydown', 'body');
      $('html, body').css({
        overflow: 'auto',
      });
    }

    if (Number.isInteger(selectedKey)) {
      $(document)
        .off('keydown', 'body')
        .on('keydown','body', this._keypressHandler.bind(this));

      $('.slideshow').css('top', $(document).scrollTop() + 'px')

      $('html, body').css({
        overflow: 'hidden',
      });
    }
  }
});
