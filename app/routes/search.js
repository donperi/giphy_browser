import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('search', model.search);
  },

  model(params, transition) {
    return {
      search: transition.queryParams.q
    }
  }
});
