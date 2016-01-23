hljs.initHighlightingOnLoad();

angular.module('todoApp', [])
	.controller('ListCtrl', ['$scope', function($scope) {
			$scope.todos = [];
			$scope.addList = function() {
				$scope.todos.push($scope.enteredList);
				$scope.enteredList = '';
			};
		}]);

angular.bootstrap($('#App2'),['todoApp']);