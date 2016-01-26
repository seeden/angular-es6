import { Inject } from 'angular-es6';

export default class User extends Inject {
  static $inject = ['$http'];

  update() {
    const { $http } = this.$inject;

    $http.get('/api/currentuser').success(current => this.current = current);
  }
}
