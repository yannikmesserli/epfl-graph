'use strict';
/**
 * Services that register every task that need to avoid user interaction and display the loader 
 */

define(['jquery', 'app', 'bootstrap'], function ($, app ) {
  
	app.service('displayInfo', function($compile) {
		var info = {};

		var displayInfoService = {};

		displayInfoService.set = function(LabAbv 	, labName 	, LabProf 	, LabType 	, LabBelong ){
			info.LabAbv 		= LabAbv 	;
			info.labName 		= labName 	;
			info.LabProf 		= LabProf 	;
			info.LabType 		= LabType 	;
			info.LabBelong 		= LabBelong ;
		}

				
		displayInfoService.show = function(){
			//info.show = true;
			$('#Lab-Abv').html(			info.LabAbv 	  );
            $('#Lab-Name').html(		info.labName   );
            $('#Lab-Prof').html(		info.LabProf   );
            $('#Lab-Type').html(		info.LabType   );
            $('#Lab-Belong').html(		info.LabBelong );		
            $('#myModal').modal('show');
			//element.modal('show');
			//console.log(element);
		}

		displayInfoService.info = function(){
			return info;
		}


		return displayInfoService;

	});
});