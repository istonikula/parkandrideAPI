(function() {
    var m = angular.module('parkandride', [
        'ui.bootstrap',

        'templates-app',
        'templates-common',

        'ui.router',

        'filters',
        'featureToggle',

        'parkandride.hubList',

        'parkandride.dev'
    ]);

    m.constant('FEATURES_URL', 'assets/features.json');

    m.config(function myAppConfig($stateProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/hubs');

        $stateProvider.state('root', {
            abstract: true,
            template: '<div ui-view="main"></div>',
            resolve: {
                features: function(FeatureResource) {
                    return FeatureResource.getFeatures();
                }
            },
            controller: function($scope, features) {
                $scope.features = features;
            }
        });

        $httpProvider.interceptors.push(function($q, $translate, $rootScope) {
            return {
                responseError: function(rejection) {
                    if (rejection.status == 400 && rejection.data.violations) {
                        $rootScope.$broadcast("validationErrors", rejection.data.violations);
                        return $q.reject(rejection);
                    } else {
                        swal({
                            title: $translate.instant('error.' + rejection.status + '.title'),
                            text: rejection.data.message,
                            confirmButtonText: $translate.instant('error.buttonText')
                        });
                        return $q.reject(rejection);
                    }
                },
                response: function(response) {
                    $rootScope.$broadcast("validationErrors", []);
                    return response;
                },
                request: function(response) {
                    $rootScope.$broadcast("validationErrors", []);
                    return response;
                }
            };
        });
    });

    m.value("schema", { capacityTypes:[] });

    m.run(function run(schema, FacilityResource) {
        // Use the main applications run method to execute any code after services have been instantiated
        FacilityResource.getCapacityTypes().then(function(types) {
            schema.capacityTypes = types;
        });
    });

    m.controller('AppCtrl', function AppCtrl($scope, $location) {
        $scope.common = {};
        $scope.$on("validationErrors", function(event, violations) {
                $scope.common.violations = _.map(violations, function(violation) {
                    violation.path = violation.path.replace(/\[\d+\]/, "");
                    return violation;
                });
            });
        this.hasValidationErrors = function() {
            return !_.isEmpty($scope.violations);
        };
        // This is a good place for logic not specific to the template or route, such as menu logic or page title wiring
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if (angular.isDefined(toState.data.pageTitle)) {
                $scope.pageTitle = toState.data.pageTitle + ' | parkandride';
            }
        });

        this.validateAndSubmit = function(form, submitFn) {
            $scope.$broadcast('show-errors-check-validity');
            if (form.$valid) {
                submitFn();
            }
        };
    });
})();
