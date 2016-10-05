(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // categories list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoriesController as catList',
    resolve: {
    	categories: ['MenuDataService', function(MenuDataService) {
    		return MenuDataService.getAllCategories();
    	}]
    }
  })

  // menu items list page
  .state('menuItems', {
    url: '/menu-items/{categoryShortName}',
    templateUrl: 'src/templates/items.template.html',
    controller: 'MenuItemsController as menuItems',
    resolve: {
    	items: ['$stateParams','MenuDataService', function($stateParams,MenuDataService) {
    		return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
    	}]
    }
  });
}

})();
