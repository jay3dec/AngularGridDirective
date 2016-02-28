'use strict';

angular.module('myApp.directives',[])

.directive('myDataGrid',function(){
	return{
		restrict: 'E',
		scope:{
			info:'=info'
		},
		templateUrl : 'directives/grid.html'
	}
});