# Angular ES6 utility library. Write directives, controllers and services as ES6 classes.

## What you will get

 - Write directives, controllers and services like an ES6 classes
 - Autoload directives, controllers, services, filters and factories with webpack

## Babel

Use version 2.x for the babel 5 and version 3.x for the babel 6

## Instalation

```sh
npm install angular-es6
```

## Examples

You can find whole exmple project in the [example](https://github.com/seeden/angular-es6/tree/master/example) directory.

### Directive

```js
export default class NiceDirective {
  static $inject = ['$http'];

  constructor($http) {
    this.$http = $http;

    this.template = '<div>{{computeName('NICE')}}</div>';
    this.restrict = 'E';
    this.scope = {
      name: '=',
    };
  }

  link(scope) {
    this.scope = scope;
    scope.computeName = (suffix) => this.computeName(suffix);
  }

  computeName(suffix = '') {
    const { $http, scope } = this;

    return 'Mr.' + scope.name + ' ' +  suffix;
  }
}

```


### Controller

```js
export default class MainController {
  static $inject = ['$scope', '$http'];

  constructor($scope, $http) {
    this.$http = $http;

    $scope.doThis = () => this.doThis();
  }

  doThis() {
    const { $http } = this;
    ...
  }
}

```

### Class Inject

As you can see in the examples above. You need to store injected objects somehow.
There is a better solution. You can extend your class with class named Inject and then you can use variable named this.$inject.

In next example is called function doThis from the constructor.
You can use this.$inject because this object was initialized by Inject constructor.

Do not forget to use (...args). Inject class need to get all injected objects.

```js
import { Inject } from 'angular-es6';

export default class MainController extends Inject {
  static $inject = ['$http'];

  constructor(...args) {
    super(...args);

    this.doThis();
  }

  doThis() {
    const { $http } = this.$inject;
  }
}

```

### Directive auto Inject

You can use variables from the link function anywhere in your directive code.
This feature is available without extending Inject class. Here is small example

```js
export default class NiceDirective {
  static $inject = ['$http'];

  constructor($http) {
    this.$http = $http;

    this.template = '<div>{{computeName('NICE')}}</div>';
    this.restrict = 'E';
    this.scope = {
      name: '=',
    };
  }

  link(scope) {
    scope.computeName = (suffix) => this.computeName(suffix);
  }

  computeName(suffix = '') {
    const { scope, element } = this.link.$inject;

    element.text('Mr.' + scope.name + ' ' +  suffix);
  }
}

```


### Auto load directives

Each directory need to have file index.js with content like this:

```js
import { load } from 'angular-es6';
const MODULE_NAME = 'myProject.directives';

load.directives(require.context('./', true, /.*\.js$/), MODULE_NAME);
export default MODULE_NAME;
```


More examples you can find in the example directory.



## Pull request

Pull requests are welcome


## Run build for production

```sh
npm run build
```


## Run build for development

```sh
npm run dev
```
