# Angular ECMAScript 6 config and boilerplate

Do you want to use ES6 with angular and webpack?
Here is a simple project with everything what you need at the beginning.

## What you will get

 - You can write directives like a class
 - Autoload directives, controllers, services, filters and factories


## Instalation

```sh
npm install angular-es6
```

## Examples

Here is multiple examples:

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
    scope.computeName = suffix => computeName(suffix);
  }

  computeName(suffix = '') {
    const { $http, scope } = this;

    return 'Mr.' + $scope.name + ' ' +  suffix;
  }
}

```


### Controller

```js
export default class MainController {
  static $inject = [$scope, '$http'];

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

As you can see in the examples below. You need to store injected objects somehow.
There is a better solution. You can extend you class with class Inject and use variable named this.$inject.

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


### Auto load directives

Each directory need to have file index.js with content like this:

```js
import { load } from 'angular-es6';

load.directives(require.context('./', true, /.*\.js$/));
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
