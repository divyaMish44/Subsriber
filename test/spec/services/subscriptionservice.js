'use strict';

describe('Service: subscriptionService', function () {

  // load the service's module
  beforeEach(module('subscriptionApp'));

  // instantiate service
  var subscriptionService;
  beforeEach(inject(function (_subscriptionService_) {
    subscriptionService = _subscriptionService_;
  }));

  it('should do something', function () {
    expect(!!subscriptionService).toBe(true);
  });

});
