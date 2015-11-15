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
    this.template = '<div>{{computeName('NICE')}}</div>';
    this.restrict = 'E';
    this.scope = {
      name: '=',
    };
  }

  link(scope) {
    scope.computeName = suffix => computeName(suffix);
  }

  computeName(suffix = '') {
    const { $http } = this.$inject;
    const { scope } = this.link.$inject;

    return 'Mr.' + $scope.name + ' ' +  suffix;
  }
}

```


### Controller

```js
export default class MainController {
  static $inject = [$scope, '$http'];

  constructor($scope) {
    $scope.doThis = () => this.doThis();
  }

  doThis() {
    const { $http } = this.$inject;
    ...
  }
}

```

It is safe to use this.$inject because this object is initialized immediately after the constructor.
If you want to use $injected object in constructor you can use arguments or extend class Inject.


### class Inject

Object this.$inject is initialized after class constructor.
If you want to use this.$inject in your constructor you need to extend Inject class.

In next example is called function doThis from the constructor.
You can use this.$inject because this object was initialized by Inject constructor.

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
