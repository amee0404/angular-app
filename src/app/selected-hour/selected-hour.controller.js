(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('SelectedHourController', SelectedHourController);

    SelectedHourController.$inject = ['hourService', '$state', 'storageService'];

    function SelectedHourController(hourService, $state, toaster, storageService) {
        var vm = this;
        vm.hours = hourService.getSelectedHours() || [];
        vm.save = save;        
        vm.back = back;
        var selectedID;
        var list = [];
        vm.data = {};
        selectedID = hourService.getSelectedHours().id;                
        var check = JSON.parse(hourService.getItem("list"));

        if(check){
            for(var obj in check){
                if (selectedID == check[obj].id) {
                    // set data in form
                    vm.data.fname = check[obj].fname;
                    vm.data.lname = check[obj].lname;
                    vm.data.contact = check[obj].contact;
                }    
            }
        }
        
        function save(detail) {               
            var Obj = JSON.parse(hourService.getItem("list"));            
            detail["id"] = selectedID;
            list.push(detail);
            if (Obj) {
                for (var a in Obj){
                    if(Obj[a].id == selectedID){
                        //alert("alredy added");
                        Obj.pop(a);
                        Obj.push(detail);
                        hourService.setItem("list", JSON.stringify(Obj), true);
                        $state.go("hourlist");
                    }else{
                        Obj.push(detail);
                        hourService.setItem("list", JSON.stringify(Obj), true);
                        $state.go("hourlist");
                    }
                }
            }else{ // if first time enter
                hourService.setItem("list", JSON.stringify(list), true);
                $state.go("hourlist");
            }            
        }

        //back function on selected hours page
        function back() {
            hourService.setFlag(false); // set to false as getting back to list
            $state.go("hourlist");
        }
    }
})();