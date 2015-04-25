# Angular ECMAScript 6 boilerplate

Do you want to use ES6 with angular and webpack?
Here is a simple project with everything what you need at the beginning


## Instalation

```sh
npm install angular-es6
```

## Examples

Here is multiple examples:

### Directive

```js
export default class NiceDirective {
    constructor($http) {
    	this.$http = $http;

        this.template = '<div>{{computeName('NICE')}}</div>'; 
        this.restrict = 'E'; 
        this.scope = {
        	name: '='
    	};
    } 

    link($scope, element, attrs) { 
        this.$scope = $scope;

        $scope.computeName = suffix => computeName(suffix);
    } 

    computeName(suffix = '') {
    	const $scope = this.$scope;

    	return 'Mr.' + $scope.name + ' ' +  suffix;
    }
}

NiceDirective.$inject = ['$http'];
```


### Controller

```js
export default class MainController {
	constructor($scope) {
		this.$scope = $scope;
	}
}

MainController.$inject = ['$scope'];
```


## Run build for production

```sh
npm run build
```


## Run build for development

```sh
npm run dev
```