export default function createDirectiveFactory(Directive) {
    var factory = function(...args) {
        var instance = new Directive(...args);
        for (var key in instance) {
        	instance[key] = instance[key];
        }

        if(instance.link) {
            var linkOrg = instance.link;
            instance.link = function(...linkArgs) {
                var instance = new Directive(...args);
                linkOrg.apply(instance, linkArgs);
            };
        }

        if(instance.controller) {
            var controllerOrg = instance.controller;
            instance.controller = function(...controllerArgs) {
                var instance = new Directive(...args);
                controllerOrg.apply(instance, controllerArgs);
            };
        }        

        return instance;
    };

    factory.$inject =  Directive.$inject;

    return factory;
}