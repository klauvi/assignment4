(function () {
'use strict';

angular.module('MenuApp')
.component('menuItems', {
  templateUrl: 'src/templates/items.component.template.html',
  bindings: {
    items: '<'
  }
});

})();
