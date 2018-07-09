export function initialize(application) {
  const GIPHY_API_KEY = 'API_KEY';
  const giphy = application.lookup('service:giphy');

  giphy.setApiKey(GIPHY_API_KEY);

  application.register('giphy:main', giphy, { instantiate: false });
  application.inject('route', 'giphy', 'giphy:main');
}

export default {
  name: 'giphy',
  initialize
};
