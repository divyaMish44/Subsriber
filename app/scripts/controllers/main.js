'use strict';

/**
 * @ngdoc function
 * @name subscriptionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the subscriptionApp
 */
angular.module('subscriptionApp')
  .controller('MainCtrl',['subscriptionService', function (subscriptionService) {
    this.subscriptions = subscriptionService.getSubscriptions();
    this.unsubscribe = subscriptionService.removeListener;
  }]);
