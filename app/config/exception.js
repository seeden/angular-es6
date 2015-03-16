export default function exceptionConfig($provide) {
	  // Fix sourcemaps
    // @url https://github.com/angular/angular.js/issues/5217#issuecomment-50993513
    $provide.decorator('$exceptionHandler', function($delegate) {
      return function(exception, cause) {
        //$delegate(exception, cause);
        setTimeout(function() {
          throw exception;
        });
      };
    });
};
 
exceptionConfig.$inject = ['$provide'];