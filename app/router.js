import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('search', { path: '/'}, function() {
    this.route('result' , { path: '/' })
  });
});

export default Router;
