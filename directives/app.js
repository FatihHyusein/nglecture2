angular.module('myApp', [])
    .controller('MainCtrl', function ($scope, $rootScope) {


    })

    .directive('elementDirective', function () {
        return {
            restrict: 'E',
            template:'<div>time: {{new Date()}}</div>'
        }
    })
    .directive('attributeDirective', function () {
        return {
            restrict: 'A'
        }
    })


;
    