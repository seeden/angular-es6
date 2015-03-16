export default class UserService {
    constructor($http, definitions) {
        this.$http = $http;

        this.update();
    }

    update() {
        this.$http.get("/api/currentuser").success(current => this.current = current);   	
    }
}

UserService.$inject = ['$http'];