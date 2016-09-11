/**
 * Created by Roman on 8/28/16.
 */
angular.module('appModule').controller('summaryController', ['$scope', '$state', '$stateParams',
    function ($scope, $state, $stateParams){

        $scope.order = $stateParams.order;

}]);