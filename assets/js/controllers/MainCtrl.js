'use_strict';


define(['jquery', 'app', 'bootstrap'], function ($, app ) { 

	app.controller('MainCtrl', function($scope) {
		
		var modal = $('#myModal');
		//$($scope.$element).modal('show');	
		$scope.info = {
					'LabAbv' 	  : 'test',
					'labName' 	  : 'labName',
					'LabProf' 	  : 'LabProf',
					'LabType' 	  : 'LabType',
					'LabBelong'   : 'LabBelong'
				};
		
		$scope.showModal 	=  function(){
			
			// Propagate the changes made:
			$scope.$digest();
			// Show the modal
			modal.modal('show');
		};

	});
});
