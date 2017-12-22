
angular.module("angular.http.request.loader", [])
.directive('httpRequestLoader', ['$http', function($http) {
    return {
      restrict: 'E',
      template: '<div class="loading-icon"></div>',
      link: function(scope, element, attrs) {
        scope.isLoading = function() {
          return $http.pendingRequests.length > 0;
        };
        scope.$watch(scope.isLoading, function(value) {
          if (value)
            element.removeClass('ng-hide');
          else
            element.addClass('ng-hide');
        });
      }
    }
}]);