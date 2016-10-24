angular.module('woof').service('Woofs', function ($q, Woof) {
  var woofs = [
    new Woof({
      body: 'OMG',
      starred: true,
      starCount: 5
    }),
    new Woof({
      body: 'My breakfast was \u{1F4AF}',
      starred: true,
      starCount: 1
    }),
    new Woof({
      body: 'I just got a soda.',
      starred: false,
      starCount: 0
    })
  ];

  this.fetch = function () {
    return $q.when(woofs);
  };

  this.create = function (woofText) {
    woofs.push(new Woof({
      body: woofText
    }));
  };
});
