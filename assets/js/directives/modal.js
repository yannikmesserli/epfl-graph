'use_strict';


define(['jquery', 'app', 'bootstrap'], function ($, app ) { 

	app.directive('modalUi', function(){
		return {
			restrict: 'A',
			transclude: true,
			scope: {},
			template: '<div ng-transclude></div>',
			controller: function($scope, $element) {
				console.log($element);
				this.set = function(LabAbv 	, labName 	, LabProf 	, LabType 	, LabBelong ){
						$scope.LabAbv 		= LabAbv 	;
						$scope.labName 		= labName 	;
						$scope.LabProf 		= LabProf 	;
						$scope.LabType 		= LabType 	;
						$scope.LabBelong 	= LabBelong ;
				}
				
				
				this.show = function(){
					$element.modal('show');
				}
				//this.set('test', 'test', 'test', 'test', 'test');
			}

		}
	});
});