'use strict';

/**
 * @ngdoc directive
 * @name subscriptionApp.directive:d1
 * @description
 * # d1
 */
angular.module('subscriptionApp')
  .directive('d1',['subscriptionService', function (subscriptionService) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        subscriptionService.addListener('meta a', 'd1', function(){
          console.log('ctrl + a pressed for d1');
        });

        subscriptionService.addListener('meta d', 'd1', function(){
          console.log('ctrl + d pressed for d1');
        });
      }
    };
  }]);
