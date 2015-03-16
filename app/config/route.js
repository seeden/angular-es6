import mainTemplate from '../controllers/main/main.html';

export default function routeConfig($routeProvider) {
	$routeProvider
		.when('/',{
			template: mainTemplate,
			controller:'MainController',
		})
		.otherwise({ redirectTo:'/' });
};
 
routeConfig.$inject = ['$routeProvider'];