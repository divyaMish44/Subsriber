'use strict';

describe('Directive: d1', function () {

  // load the directive's module
  beforeEach(module('subscriptionApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<d1></d1>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the d1 directive');
  }));
});
