'use strict';

/**
 * @ngdoc directive
 * @name subscriptionApp.directive:d1
 * @description
 * # d2
 */
angular.module('subscriptionApp')
  .directive('d2',['subscriptionService', function (subscriptionService) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        subscriptionService.addListener('meta a', 'd2', function(){
          console.log('ctrl + a pressed for d2');
        });

        subscriptionService.addListener('meta c', 'd1', function(){
          console.log('ctrl + c pressed for d2');
        });
      }
    };
  }]);
