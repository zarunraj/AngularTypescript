module UserTest {
    export class Constants {
        constructor() {
            throw new Error("Cannot new this class");
        }
        static ApiPath = "http://localhost:52918/api";
        static ApplicationPath = "http://localhost:56526/";
        static ApiToken = '';
        static HttpJsonConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            async: true
        };
        static HttpFormUrlConfig = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': '*/*'
            },
            async: true
        };
    }
}