export default function exceptionConfig($provide) {
  $provide.decorator('$exceptionHandler', () => {
    return (exception) => {
      setTimeout(() => {
        throw exception;
      });
    };
  });
}

exceptionConfig.$inject = ['$provide'];
