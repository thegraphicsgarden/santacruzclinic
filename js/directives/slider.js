angular.module("components", [])
	.directive("helloWorld", function() {
		return (
			restrict: 'E',
			template: '<span>Slider</span>'
		)
	})

angular.module('HelloApp', ['components'])