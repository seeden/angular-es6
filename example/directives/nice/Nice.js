import template from './nice.html';

export default class Nice {
  static $inject = ['$http'];

  constructor($http) {
    this.template = template;
    this.restrict = 'E';
  }

  link(sscope) {
    const { $http } = this.$inject;

    element.text('NICE!!!');
  }
}
