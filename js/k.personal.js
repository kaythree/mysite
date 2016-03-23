var app = angular.module("kApp", []);

app.controller('HomeCtrl' , function($scope){
   
});

app.directive('content', function(){
	return{
		restrict:'E',
		templateUrl:'/templates/content.html',
		scope:false
	}
});

app.directive('home', function(){
	return{
		restrict:'E',
		templateUrl:'/templates/home.html',
		scope:false
	}
});