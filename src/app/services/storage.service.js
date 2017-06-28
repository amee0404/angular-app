(function() {
    'use strict';
    angular.module('angularApp').service('storageService', storageService);
    storageService.$inject = ['$q', '$http', '$log'];

    /* not using ngInject */
    function storageService($q, $http, $log) {
        return {
            getItem: getItem, //getter
            setItem: setItem, //setter
            removeItem: removeItem, 
            clear: clear            
        }
        
        function getItem(key){
          var value = null;
          if(window.sessionStorage.getItem(key) !== null){
            value = window.sessionStorage.getItem(key);
          }if(window.localStorage.getItem(key) !== null){
            value = window.localStorage.getItem(key);
          }
          return  value === null ? null : value;
        }

        function setItem(key, value, local){
          value = value === undefined ? null : value;
          if(local){
            window.localStorage.setItem(key,value);
          }else{
            window.sessionStorage.setItem(key,value);
          }
        }

        function removeItem(key){
          window.localStorage.removeItem(key);
          window.sessionStorage.removeItem(key);
        }

        function clear(local){
          if(local) {
            window.localStorage.clear();
          }
          window.sessionStorage.clear();
        }        
    }
})();