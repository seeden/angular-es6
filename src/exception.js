export default function exceptionConfig($provide) {
  $provide.decorator('$exceptionHandler', ($delegate) => {
    return (exception) => {
      setTimeout(() => {
        throw exception;
      });
    };
  });
}

exceptionConfig.$inject = ['$provide'];
