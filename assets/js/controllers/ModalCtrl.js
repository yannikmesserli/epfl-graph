'use_strict';


define(['jquery', 'app', 'bootstrap', 'services/displayinfo'], function ($, app ) { 

	app.controller('ModalCtrl', function(displayInfo, $scope) {
		//$($scope.$element).modal('show');	
		$scope.info = displayInfo.info;
		console.log($scope);
	});
});


// 'use_strict';


// define(['jquery', 'app', 'bootstrap'], function ($, app ) { 

// 	app.controller('nodeDisplayCtrl', function() {
				
// 		this.set = function(LabAbv 	, labName 	, LabProf 	, LabType 	, LabBelong ){
// 				$scope.LabAbv 		= LabAbv 	;
// 				$scope.labName 		= labName 	;
// 				$scope.LabProf 		= LabProf 	;
// 				$scope.LabType 		= LabType 	;
// 				$scope.LabBelong 	= LabBelong ;
// 		}
// 		this.set('test', 'test', 'test', 'test', 'test');
// 	});
// });