(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('HourListController', HourListController);

    HourListController.$inject = ['hourService', '$state'];

    function HourListController(hourService, $state, toaster) {
        var vm = this;
        vm.hours;        
        vm.showSelectedHours = showSelectedHours;
        vm.back = back;
        
        getHours(); // call function to get list of hour

        //show selected hours to another view
        function showSelectedHours(hour) {   
            hourService.setSelectedHours(hour);            
            $state.go("selectedhours");
        }
        

        //get hours from json
        function getHours() {
            hourService.getHourList().then(resolver, rejector);
            //if success
            function resolver(response) {
                vm.hours = response.data; 
            }

            //if reject
            function rejector(response) {
                console.log(response);
            }
        }        

        //back function on selected hours page
        function back() {
            hourService.setFlag(false); // set to false as getting back to list
            $state.go("hourlist");
        }
    }
})();