'use strict';

/**
 * @ngdoc service
 * @name subscriptionApp.subscriptionService
 * @description
 * # subscriptionService
 * Service in the subscriptionApp.
 */
angular.module('subscriptionApp')
  .service('subscriptionService', function () {
    var subscriptions = [];
    var listener = new window.keypress.Listener();
    function addListener(key, context, callback) {
      var subscriptionsForKey = subscriptions.find(function(o){
        return o.key === key;
      });
      if (!subscriptionsForKey) {
        var obj = {
          key: key,
          listeners: [{
            context: context,
            callback: callback
          }]
        };
        subscriptions.push(obj);

        listener.register_many([
          {
              keys: key,
              is_exclusive: true,
              on_keydown: function() {
                publish(key);
                  // console.log("You pressed shift and s together.");
              },
              // on_keyup: function(e) {
              //     console.log("And now you've released one of the keys.");
              // },
              this: this
          }]);

      } else {
        var existingSubscription = subscriptionsForKey.listeners.find(function(o1) {
          return o1.context === context;
        });
        if (!existingSubscription) {
          subscriptionsForKey.listeners.push({
            context: context,
            callback: callback
          });
        }
      }

    }

    function publish(key) {
      var obj = subscriptions.find(function(o){
        return o.key === key;
      });
      if (obj) {
        obj.listeners.forEach(function(listener){
          listener.callback.call(listener.context);
        });
      }
    }

    function removeListener(key, context) {
      var obj = subscriptions.find(function(o){
        return o.key === key;
      });
      if (obj) {
        obj.listeners = obj.listeners.filter(function(listener){
          return listener.context !== context;
        });
      }
    }

    function getSubscriptions () {
      return subscriptions;
    }

    return {
      addListener: addListener,
      removeListener: removeListener,
      getSubscriptions: getSubscriptions
    };


  });
