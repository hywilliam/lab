//emmet 插件导致补全的时候一回车就换行真烦，试一下js是不是ok

var app = angular.module('myTest', []);

app.controller('test', function($scope) {
	//js 不会，只是emmet插件的问题
	$scope.message = 'rabbit';
	$scope.closeShow = function() {
		console.log('here');
		$scope.value = !$scope.value;
	};
});
