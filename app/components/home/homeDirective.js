/**
 * Created by Lata Tiwari on 5/18/2017.
 */

angular.module ( 'app' )
    .directive ( 'homeDirective', homeDirective ) ;

function homeDirective () {
    return {
        restrict : 'E',
        scope : {

        },
        templateUrl : "./components/home/home.html",
    };
}