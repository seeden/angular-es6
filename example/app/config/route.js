export default function routeConfig($routeProvider) {
  $routeProvider
    .when('/', {
      template: require('../controllers/main/main.html'),
      controller: 'Main',
    })
    .otherwise({ redirectTo: '/' });
}

routeConfig.$inject = ['$routeProvider'];
