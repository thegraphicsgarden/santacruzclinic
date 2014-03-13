var app = angular.module('website', [])
	.config(siteRouter);

function siteRouter ($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'partials/home.html'})
		.when('/login', {templateUrl: 'partials/login.html',
			controller: 'LoginController' })
		.when('/signup', {templateUrl: 'partials/signup.html',
			controller: 'SignUpController' })
		.when('/about', {templateUrl: 'partials/about.html'})
		.when('/dashboard', {templateUrl: 'partials/dashboard.html',
			controller: 'DashboardController' })
		.when('/spa', {templateUrl: 'partials/spa.html'})
		.when('/video', {templateUrl: 'partials/video.html'})
		.when('/treatments', {templateUrl: 'partials/treatments.html'})
			.when('/treatments/service-acupuncture', {templateUrl: 'partials/service-acupuncture.html'})
			.when('/treatments/service-herbs', {templateUrl: 'partials/service-herbs.html'})
			.when('/treatments/service-tuina', {templateUrl: 'partials/service-tuina.html'})
			.when('/treatments/service-cupping', {templateUrl: 'partials/service-cupping.html'})
			.when('/treatments/service-aromatherapy', {templateUrl: 'partials/service-aromatherapy.html'})
			.when('/treatments/service-moxa', {templateUrl: 'partials/service-moxa.html'})
			.when('/treatments/service-meditation', {templateUrl: 'partials/service-meditation.html'})
		.when('/retreat', {templateUrl: 'partials/retreat.html'})
		.when('/contact', {templateUrl: 'partials/contact.html'})
		.when('/appointment', {templateUrl: 'partials/appointment.html'})
		.otherwise({redirectTo: '/404', templateUrl: 'partials/404.html'});
}

app.controller("LoginController", ['$scope', '$rootScope', '$http', '$location', function($scope, $rootScope, $http, $location) {
	$scope.valid = true;

	$scope.errorMessage = "Wrong password or username";

	$scope.login = function() {

		$http({
			url: "./login.php",
				method: "POST",
				data: { cache: false, username: $scope.username, password: $scope.password },
				//The data is not empty it's just not in the $_POST array. It's in $_REQUEST. Header below fixes this.
				headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'} 
			}).success(function(data, status, headers, config) {
				$rootScope.user = data;
				$location.path('/dashboard');
			}).error(function(data, status, headers, config) {
				$scope.statusMessage = status;
				alert($scope.errorMessage);
		});
		
		/*$http.post("./login.php", { cache: false, "username": $scope.username, "password": $scope.password, "email": $scope.email })
			.success(function(data, status, headers, config, $scope) {
				console.log("success");
				$scope.data = data;
				$scope.result = data;
				console.log($scope.result);
			}).error(function(data, status, headers, config) {
				console.log("fail");
			}
		);*/
	}
}]);

app.controller("SignUpController", ['$scope', function($scope) {
	console.log("signup: ");
}]);

app.controller("DashboardController", ['$scope', function($scope) {
	$scope.setActive('diet');
}]);