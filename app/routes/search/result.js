import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('search', model.search);
    controller.set('images', model.images.data)
    controller.set('pagination', model.images.pagination)
    controller.set('giphy', this.giphy);
  },

  queryParams: {
    q: { refreshModel: true },
  },

  model(params, transition) {
    const query = transition.queryParams.q;
    const search = transition.queryParams.q

    return RSVP.hash({
      search: search,
      images: this.giphy.search(query)
    })
  }
});
