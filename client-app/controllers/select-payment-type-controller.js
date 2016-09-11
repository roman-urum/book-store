/**
 * Created by Roman on 8/20/16.
 */
angular.module('appModule').controller('selectPaymentTypeController', [
    '$scope', '$http', '$stateParams',
    function($scope, $http, $stateParams){

        $scope.order = $stateParams.order;

    }]);