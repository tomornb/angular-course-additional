angular.module('ui-router-named-views.alt-four', [ 'ui.router'])
.config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('app.alt-four', {
      url: '/alt-four',
      views: {
        'content@': { templateUrl: 'alt-four/alt-four.content.tpl.html' },
        'header@': { templateUrl: 'alt-four/alt-four.header.tpl.html' },
        'one@app.alt-four': { template: '<div class="alert-info">Sub One</div>' },
        'two@app.alt-four': { template: '<div class="alert-success">Sub Two</div>' }
      }
    });
  }
]);
