/**
 * Created by Roman on 8/20/16.
 */
angular.module('appModule').controller('selectBooksController', [
    '$scope', '$http', '$stateParams',
    function($scope, $http, $stateParams){

        $scope.books = [];
        $scope.order = $stateParams.order;
        $scope.addOrderItem = function (book) {
            $scope.order.orderItems.push({
                id: $scope.order.orderItems.length + 1,
                book: book
            });

            calculateSumOfSelectedBooks();

        };
        $scope.removeBook = function (orderItem) {

            var itemIndex = $scope.order.orderItems.indexOf(orderItem);
            $scope.order.orderItems.splice(itemIndex, 1);

            calculateSumOfSelectedBooks();
        };

        var calculateSumOfSelectedBooks = function(){

            $scope.order.orderSum = 0;
            for (var index in $scope.order.orderItems){
                $scope.order.orderSum += $scope.order.orderItems[index].book.price;
            }
        };
        calculateSumOfSelectedBooks();

        (function(){
            $http.get("/data/books.json")
                .then(function(response) {
                    $scope.books = response.data;
                });

        })();





}]);