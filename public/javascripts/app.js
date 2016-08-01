var app = angular.module('tinoWIT', ['ui.router']);

app.controller('MainCtrl', [
'$scope',
function($scope){
	
}]);

app.controller('AboutUsCtrl', [
'$scope',
function($scope){
	$scope.officers = [
	                   {name: "Sam Par", position: "Co-President"},
	                   {name: "Anika Bagga", position: "Co-President"},
	                   {name: "Pallavi Narayanan"},
	                   {name: "Rucha Patki"},
	                   {name: "Vicky Min"},
	                   {name: "Julia Liu"},
	                   {name: "Christina Shao"},
	                   {name: "Nithya Attaluri"}
	                   ];
}]);

app.controller('TracksCtrl', [
'$scope',
function($scope){
	$scope.posts = [
	                {name: ""},
	                {name: ""},
	                {name: ""},
	                ];
}]);

app.controller('BlogCtrl', [
'$scope',
function($scope){
	$scope.posts = [
	                {name: "First Day Of School", image: "public/images/back-to-school.jpeg", caption: "Goodbye to summer, hello to school", content: "The beginning of summer break seemed like it was just yesterday; students are immediately swept into the incoming workload and stress of the school year at Cupertino High School. However, back to school means Tino WIT is up and running once again! Stay tuned for more announcements regarding Clubs Day and our first club meeting.", time: ""},
	                {name: ""},
	                {name: ""},
	                ];
}]);

app.controller('ResourcesCtrl', [
'$scope',
function($scope){

}]);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: '/home.html',
		controller: 'MainCtrl'
	})
	.state('aboutus', {
		url: '/aboutus',
		templateUrl: '/aboutus.html',
		controller: 'AboutUsCtrl'
	})
	.state('tracks', {
		url: '/tracks',
		templateUrl: '/tracks.html',
		controller: 'TracksCtrl'
	})
	.state('blog', {
		url: '/blog',
		templateUrl: '/blog.html',
		controller: 'BlogCtrl'
	})
	.state('resources', {
		url: '/resources',
		templateUrl: '/resources.html',
		controller: 'ResourcesCtrl'
	});

	$urlRouterProvider.otherwise('home');
}]);