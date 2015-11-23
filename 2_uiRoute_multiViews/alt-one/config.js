angular.module('ui-router-named-views.alt-one', ['ui.router']).config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('app.alt-one', {
      url: 'alt-one',
      views: { 'content@': { templateUrl: 'alt-one/alt-one.content.tpl.html' } }
    });
  }
]);
