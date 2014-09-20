angular.module('facilities.create', [
    'ui.router'
])

    .config(function config($stateProvider) {
        $stateProvider.state('facilities-create', { // dot notation in ui-router indicates nested ui-view
            url: '/facilities/create', // TODO set facilities base path on upper level and say here /create ?
            views: {
                "main": {
                    controller: 'CreateCtrl',
                    templateUrl: 'facilities/create/create.tpl.html'
                }
            },
            data: { pageTitle: 'Create Facility' }
        });
    })

    .controller('CreateCtrl', function CreateController($scope) {
    })
;

