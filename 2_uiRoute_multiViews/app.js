angular.module('ui-router-named-views', [
  'ui-router-named-views.alt-one',
  'ui-router-named-views.alt-two',
  'ui-router-named-views.alt-three',
  'ui-router-named-views.alt-four',  
  'ui.router'
]).config([
  '$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
      url: '/',
      views: {
        'header': { templateUrl: 'common/header.tpl.html' },
        'sidebar': { templateUrl: 'common/sidebar.tpl.html' },
        'content': { templateUrl: 'common/content.tpl.html'},
        'footer': { templateUrl: 'common/footer.tpl.html' }
      }
    });
    $urlRouterProvider.otherwise('/');
  }
]);
