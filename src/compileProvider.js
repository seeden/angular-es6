let directives = {};
let compileProviderInstance = null;

export default function compileProvider($compileProvider) {
  compileProviderInstance = $compileProvider;

  Object.keys(directives).forEach((name) => {
    const directive = directives[name];
    compileProviderInstance.directive(name, directive);
  });

  directives = {};
}

export function register(name, directive) {
  if (!compileProviderInstance) {
    directives[name] = directive;
    return;
  }

  compileProviderInstance.directive(name, directive);
}

compileProvider.$inject = ['$compileProvider'];
