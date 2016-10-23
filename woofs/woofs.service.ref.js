angular.module('woof').service('Woofs', function ($q) {
  var woofs = [
    {
      body: 'OMG',
      starred: true,
      starCount: 5
    },
    {
      body: 'My breakfast was \u{1F4AF}',
      starred: true,
      starCount: 1
    },
    {
      body: 'I just got a soda.',
      starred: false,
      starCount: 0
    }
  ];

  this.fetch = function () {
    return $q.when(woofs);
  };

  this.toggleStar = function (woof) {
    var isPreviouslyStarred = woof.starred;
    woof.starred = !isPreviouslyStarred;

    if (isPreviouslyStarred) {
      woof.starCount = woof.starCount - 1;
    } else {
      woof.starCount = woof.starCount + 1;
    }
  };

  this.create = function (woofText) {
    woofs.push({
      body: woofText,
      starred: false,
      starCount: 0
    });
  };
});
