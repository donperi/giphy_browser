import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    search() {
      this.transitionToRoute({ queryParams: { q: this.get('search') }})
    }
  }
});
