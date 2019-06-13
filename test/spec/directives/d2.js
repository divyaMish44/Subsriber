'use strict';

describe('Directive: d2', function () {

  // load the directive's module
  beforeEach(module('subscriptionApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<d2></d2>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the d2 directive');
  }));
});
