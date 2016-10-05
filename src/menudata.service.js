(function () {
'use strict';
  angular.module('data')
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .service('MenuDataService',MenuDataService);

  MenuDataService.$inject = ['$q','$http','ApiBasePath'];
  function MenuDataService($q,$http,ApiBasePath) {
  	var service = this;

	service.getAllCategories = function () {
	  var deferred = $q.defer();

	  $http({
	  	method: 'GET',
	  	url: (ApiBasePath + "/categories.json")
	  }).then(function(result) {
	  	deferred.resolve(result.data);
	  });

	  return deferred.promise;
	}

	service.getItemsForCategory = function (categoryShortName) {
	  var deferred = $q.defer();

	  $http({
	  	method: 'GET',
	  	url: (ApiBasePath + "/menu_items.json"),
	  	params: {category: categoryShortName}
	  }).then(function(result) {
	  	deferred.resolve(result.data.menu_items);
	  });

	  return deferred.promise;
	}
  }
})();
