(function() {
    'use strict';

    angular
        .module('angularApp')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('hourlist', {
                url: '/',
                templateUrl: 'app/hour-list/hour-list.html',
                controller: 'HourListController',
                controllerAs: 'hourlist'
            }).state('selectedhours', {
                url: '/',
                templateUrl: 'app/selected-hour/selected-hour.html',
                controller: 'SelectedHourController',
                controllerAs: 'selectedhour'
            });

        $urlRouterProvider.otherwise('/');
    }

})();