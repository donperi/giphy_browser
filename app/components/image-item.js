import Component from '@ember/component';

export default Component.extend({
  actions: {
    onclick() {
      this.get('onClick')(this.get('selectedKey'))
    },

    onload(ev) {
      this.get('masonry').masonry('layout');
    }
  }
});
