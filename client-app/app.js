/**
 * Created by Roman on 8/20/16.
 */

angular.module('appModule', ['ui.router'])
    .config(function ($stateProvider, $locationProvider) {
        $stateProvider.state('home', {
                url: '/',
                templateUrl: '/templates/home.html'
            })
            .state('selectBooks', {
                url:'/select-books',
                params: {
                    order: {
                        orderItems: [],
                        shippingData: {},
                        orderSum: 0,
                        paymentType: ''
                    }
                },
                templateUrl: '/templates/select-books.html',
                controller: 'selectBooksController'
            })
            .state('shipping', {
                url: '/shipping',
                params: {
                    order: {
                        orderItems: [],
                        shippingData: {},
                        orderSum: 0,
                        paymentType: ''
                    }
                },
                templateUrl: '/templates/shipping.html',
                controller: 'shippingController'
            }).state('paymentType', {
                url: '/select-payment-type',
                params: {
                    order: {
                        orderItems: [],
                        shippingData: {},
                        orderSum: 0,
                        paymentType: ''
                    }
                },
                templateUrl: 'templates/select-payment-type.html',
                controller: 'selectPaymentTypeController'
            }).state('summary', {
                url: '/summary',
                params: {
                    order: {
                        orderItems: [],
                        shippingData: {},
                        orderSum: 0,
                        paymentType: ''
                    }
                },
                templateUrl: 'templates/summary.html',
                controller: 'summaryController'
            });

        $locationProvider.html5Mode(true);

    });


angular.element(document).ready(function(){
   angular.bootstrap(document, ['appModule']);
});