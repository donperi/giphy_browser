import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['q'],
  q: null,

  init() {
    this._super();
    this.data = this.get('model');
    this.key = null,
    this.selectedImage = null;
  },


  actions: {
    onItemClick(_key) {
      this.set('selectedKey', _key)
    },

    onItemClear() {
      this.set('selectedKey', null);
    },

    selectImage(_key) {
      this.set('selectedKey', _key);
    },

    loadMore() {
      this.set('loadingMore', true);
      this.get('giphy')
        .search(this.get('search'), { offset: this.get('pagination').offset + 25})
        .then((result) => {
          result.data.forEach((item) => {
            this.get('images').pushObject(item);
          });

          this.set('pagination', result.pagination);
          this.set('loadingMore', false);
        });
    }
  }
});
