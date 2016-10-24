angular.module('woof').factory('Woof', function () {
  return function Woof(props) {
    props = props || {};
    this.body = props.body || '';
    this.starred = props.starred || false;
    this.starCount = props.starCount || 0;

    this.toggleStar = function () {
      var isPreviouslyStarred = this.starred;
      this.starred = !isPreviouslyStarred;

      if (isPreviouslyStarred) {
        this.starCount = this.starCount - 1;
      } else {
        this.starCount = this.starCount + 1;
      }
    };
  };
});
