angular.module('woof').service('Woofs', function () {
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
});
