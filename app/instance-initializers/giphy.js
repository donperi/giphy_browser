export function initialize(application) {
  const GIPHY_API_KEY = 'Qo3E5HExMOSygzw52d9VqRJu2wP36xH9';
  const giphy = application.lookup('service:giphy');

  giphy.setApiKey(GIPHY_API_KEY);

  application.register('giphy:main', giphy, { instantiate: false });
  application.inject('route', 'giphy', 'giphy:main');
}

export default {
  name: 'giphy',
  initialize
};
