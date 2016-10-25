var woof = angular.module('woof', ['ui.router']);

woof.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('woof', {
    url: '/',
    abstract: true,
    template: '<ui-view></ui-view>'
  }).state('woof.new', {
    url: 'new',
    templateUrl: './woofs/new/new.html',
    controller: 'newWoofCtrl'
  }).state('woof.index', {
    url: '',
    templateUrl: './woofs/list/list.html'
  });
});
