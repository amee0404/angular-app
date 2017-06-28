(function() {
    'use strict';

    angular
        .module('angularApp')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {}

})();