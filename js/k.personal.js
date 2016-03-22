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