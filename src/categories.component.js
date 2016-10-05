(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/templates/categories.component.template.html',
  bindings: {
    categories: '<'
  }
});

})();
