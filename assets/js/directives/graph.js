'use_strict';


define(['viva', 'jquery','app'], function (Viva, $, app ) { 

	app.directive('graph', function() {


		return {
			restrict: 'E',
			// require: 'modalUi',
			scope: { src 		: '@',
					 info 		: '=',
					 onNodeClick: '&'
					},
			replace: true,
			template: '<div id="graph1"></div>',
			link: function(scope, element, attrs) {
		  		// Create a graph with Viva graph:
				var graph    = Viva.Graph.graph(),
				    graphics = Viva.Graph.View.svgGraphics();

				// console.log(element);

				var id = -1;

				// Dirty function to add our node like a tree:
				var addRec = function(parent_id, level, jsondata){
				    // Increment the id:
				    id ++;
				    var currid = id;
				    
				    graph.addNode(currid, {
				        "type": jsondata.type,
				        "name": jsondata.name,
				        "full_name": jsondata.full_name,
				        "prof": jsondata.prof,
				        "parent": parent_id,
				        "level": level,
				        "children": []
				    });


				    if(parent_id > -1){
				      var parent_node = graph.getNode(parent_id);
				      parent_node.data.children.push(currid);
				      graph.addLink(currid, parent_id, {src: parent_id, target: currid});
				    }

				    

				    // Recursif:
				    if(jsondata.children){
				        $.each(jsondata.children, function(key, val){
				            addRec(currid, level+1, val);
				        })
				    }
				    

				}
				// for (var key in scope){
				// 	console.log(key+": "+scope[key]);
				// }
				
				// Read the entire file: scope.src
				$.getJSON('epfl.json', function(data) {
				  

					addRec(-1, 0, data);

					// Customize view:
					graphics.node(function(node) {
						var radius = 80 * Math.exp( - 1.2 *node.data.level ),
						    testsize = 5 + 30*Math.exp( - 1.5 *node.data.level),
						    textL = node.data.name.length;
						var ui = Viva.Graph.svg('g'),
						    text = Viva.Graph.svg('text')
						               .attr('x', - testsize /4 * textL)
						               .attr('y', testsize/2 )
						               .text(node.data.name )
						               .attr('font-size', testsize  ),
						    c = Viva.Graph.svg('circle')
						           .attr('r', radius )
						           .attr('class', 'node'+node.data.level );
						if(node.data.level > 2){
						    ui.append(c);
						    $(c).hover(function() { // mouse over
						        $(c).addClass('hover');
						    }, function() { // mouse out
						         $(c).removeClass('hover');
						    });
						  	// c.attr('title', 'test test');
						    // $(c).tooltip({ 'trigger': 'click'});
						    $(c).click(function(){
						      	// $('#Lab-Abv').html(node.data.name);
						      	// $('#Lab-Name').html(node.data.full_name);
						      	// $('#Lab-Prof').html(node.data.prof);
						      	// $('#Lab-Type').html(node.data.type);
						      	// $('#Lab-Belong').html(graph.getNode(node.data.parent).data.full_name );
						      	scope.info.LabAbv 		= node.data.name 	;
								scope.info.labName 		= node.data.full_name 	;
								scope.info.LabProf 		= node.data.prof 	;
								scope.info.LabType 		= node.data.type 	;
								scope.info.LabBelong 	= graph.getNode(node.data.parent).data.full_name  ;
								//console.log(scope.info);
						      	scope.onNodeClick();
						    });
						    
						}else{
						    ui.append(c);
						    ui.append(text);
						    
						}
						
						return ui
					}).placeNode(function(nodeUI, pos){
					        //console.log(nodeUI.children('circle'));
					        var nodeSize = nodeUI.children('circle')[0].attr('r');
					        nodeUI.attr('transform', 
					                          'translate(' + 
					                                (pos.x - nodeSize/2) + ',' + (pos.y - nodeSize/2) + 
					                          ')');
					});


					// Finally render it:
					
					//console.log(element[0])
					var renderer = Viva.Graph.View.renderer(graph, {
					     container : element[0],
					     graphics: graphics
					});


					// Display it in the element:
					renderer.run();
				});
			}
		}

	});


});