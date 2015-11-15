export default class User {
  static $inject = ['$http'];

  constructor($http) {
  }

  update() {
    const { $http } = this.$inject;

    $http.get('/api/currentuser').success(current => this.current = current);
  }
}
