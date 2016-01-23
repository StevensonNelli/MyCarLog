Ext.define('MyCarLog.view.car.reports.YearlyReports', {
    extend: 'Ext.Container',
    requires:[
    	'Ext.chart.CartesianChart',
        'Ext.chart.series.Pie',
        'Ext.chart.theme.Base',
        'Ext.chart.PolarChart',
        'Ext.chart.series.sprite.PieSlice',
        'Ext.chart.interactions.*',
        'Ext.chart.axis.Numeric3D',
        'Ext.chart.axis.sprite.Axis3D',
        'Ext.chart.axis.Category3D',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.grid.HorizontalGrid3D',
        'Ext.chart.series.Bar3D',
        'Ext.chart.series.Area',
        'Ext.chart.series.Polar',
        'Ext.chart.series.Pie',
        'Ext.chart.series.Radar',
        'Ext.chart.series.Gauge',
        'Ext.chart.series.Line',
        'Ext.chart.series.Pie3D'
    ],
    xtype:'yearlyreports',
    alias: 'widget.yearlyreports',
    items: [{
        xtype: 'panel',
        width: '100%',
        height: 150,
        layout: {
            type: 'hbox',
            pack: 'center'
        },
        items: [{
	        	xtype: 'cartesian',
	            width: 200,
	            height: 150,
	            colors:["#F7BE81","#FF8000"],
	            flipXY: true,
	            store: {
	                fields: ['name', 'data1', 'data2'],
	                data: [{
	                    'name': 'Fuel',
	                    'data1': 120,
	                    'data2': 14
	                }, {
	                    'name': 'Maintenance',
	                    'data1': 93,
	                    'data2': 36
	                }]
	            },
	            sprites: [{
	                type: 'text',
	                text: 'Fuel & Maintenance T-cost',
	                font: '14px Helvetica',
	                width: 150,
	                height: 10,
	                x: 8, // the sprite x position
	                y: 10  // the sprite y position
	            }],
	            axes: [{
	                type: 'numeric3d',
	                position: 'bottom',
	                fields: 'Fuel',
	            }, {
	                type: 'category3d',
	                position: 'left',
	                fields: 'name',
	            }],
	            series: [{
	                type: 'bar3d',
	                xField: 'name',
	                yField: 'data1',
	                label: {
	                    field: 'data1',
	                    display: 'insideEnd'
	                },
	            }]

		},{
            xtype: 'polar',
            height: 150,
            width: 180,
            insetPadding: 10,
            padding: '5 0 0 0',
            store: {
                fields: ['name', 'data1'],
                data: [{
                    name: 'Mileage',
                    data1: 60
                }, {
                    name: 'Service',
                    data1: 16

                }]
            },
            sprites: [{
                type: 'path',
                path: 'm9.21399,0c-5.07404,0 -9.21399,3.43396 -9.21399,7.62198l0,80.2005l44.935,0.6257l0.05701,-46.8692l8.47498,0c1.94702,0 3.526,1.29001 3.526,2.901l0,35.32199c0,4.7373 5.383,8.87372 11.48999,8.87372c5.76801,0 12.172,-3.78342 12.172,-8.87372c-0.08801,-1.18399 -4.664,-22.23999 -4.664,-22.23999c0,-0.048 -0.96698,-5.91501 -0.96698,-5.91501l0,-26.90399c0,-2.88098 -1.16602,-5.258 -3.526,-7.224l-15.01703,-12.40002c-1.03198,0 -3.92395,2.38904 -3.92395,2.38904c0,0.867 7.45099,6.996 7.45099,6.996l-0.22803,10.46597c0,3.70001 3.63501,6.71201 8.13403,6.71201l2.04797,0l-0.73999,19.965l1.02399,6.88202l4.55103,20.19299c0.17596,3.28369 -3.45203,5.2327 -6.31403,5.2327c-2.64099,0 -5.745,-1.82098 -5.745,-4.15271l0.05701,-35.379c0,-4.30899 -4.25,-7.79199 -9.44202,-7.79199l-9.04401,0c0.63403,-0.03699 0.62604,-23.23599 0.62604,-28.15601l0,-0.853c0,-4.18802 -4.09802,-7.62198 -9.15802,-7.62198l-26.56299,0l0,0zm0,5.517l26.56299,0c1.41602,0 2.50299,0.94498 2.50299,2.10498l0,18.48599c0,1.172 -1.08698,2.048 -2.50299,2.048l-26.56299,0c-1.43103,0 -2.50201,-0.87601 -2.50201,-2.048l0,-18.48599c0,-1.16 1.07098,-2.10498 2.50201,-2.10498zm55.401,14.84598c0,0 2.25598,0.39001 2.78699,0.51202c1.09198,0.23196 1.79102,1.59097 1.82001,2.78699c0.02997,1.20901 0,4.83499 0,4.83499c-3.34802,-0.61099 -4.60699,-2.03799 -4.60699,-3.35602l0,-4.77798z',
                fillStyle: 'rgb(92, 158, 22)',
                strokeStyle: 'none',
                scale: {
                    x: 0.25,
                    y: 0.25
                },
                translate: {
                    x: 50,
                    y: 90
                }
            },{
	                type: 'text',
	                text: 'Avg.Mileage',
	                font: '14px Helvetica',
	                width: 150,
	                height: 10,
	                x: 8, // the sprite x position
	                y: 10  // the sprite y position
	            }],
            axes: {
                //title: 'Mileage',
                type: 'numeric',
                position: 'gauge',
                majorTickSteps: 4,
            },
            series: {
                type: 'gauge',
                angleField: 'data1',
                donut: 50,
                 niddle:true,
                colors:["#FF8000","#F7BE81"],
            }
        }]
    }, {
        xtype: 'panel',
        width: '100%',
        layout: 'fit',
        height: 150,
        items: [{
        	 xtype: 'cartesian', 
        	 colors:["#FF8000","#F7BE81"],
		   //renderTo: Ext.getBody(),
		   width: '100%',
		   height: 100,
		   innerPadding: '0 10 0 10',
		   legend:{
            	position:'bottom',
            },
            interactions: {
	            type: 'crosshair',
	            axes: {
	                left: {
	                    label: {
	                        fillStyle: 'white'
	                    },
	                    rect: {
	                        fillStyle: 'brown',
	                        radius: 6
	                    }
	                },
	                bottom: {
	                    label: {
	                        fontSize: '14px',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            lines: {
	                horizontal: {
	                    strokeStyle: 'brown',
	                    lineWidth: 3,
	                    lineDash: [20, 2, 2, 2, 2, 2, 2, 2]
	                }
	            }
	        },
		   store: {
		       fields: ['name', 'Fuel', 'Maintenance'],
		       data: [{
		           name: '2011',
		           Fuel: 50,
		           Maintenance: 43
		       }, {
		           name: '2012',
		           Fuel: 37,
		           Maintenance: 42
		       }, {
		           name: '2013',
		           Fuel: 52,
		           Maintenance: 12
		       }, {
		           name: '2014',
		           Fuel: 20,
		           Maintenance: 13
		       }, {
		           name: '2015',
		           Fuel: 49,
		           Maintenance: 10
		       }, {
		           name: '2016',
		           Fuel: 13,
		           Maintenance: 2
		       }]
		   },
		   sprites: [{
	                type: 'text',
	                text: 'Fuel & Maintenance cost Yearly',
	                font: '14px Helvetica',
	                width: 150,
	                height: 10,
	                x: 10, // the sprite x position
	                y: 20  // the sprite y position
	            }],
		   axes: [{
		       type: 'numeric3d',
		       position: 'left',
		       fields: ['Fuel', 'Maintenance'],
		       grid: {
		           odd: {
		               fillStyle: 'rgba(255, 255, 255, 0.06)'
		           },
		           even: {
		               fillStyle: 'rgba(0, 0, 0, 0.03)'
		           }
		       }
		   }, {
		       type: 'category3d',
		       position: 'bottom',
		       fields: 'name'
		   }],
		   series: {
		       type: 'bar3d',
		       stacked : false,
		       xField: 'name',
		       yField: ['Fuel', 'Maintenance']
		   }
        }]
    }, {
        xtype: 'panel',
        width: '100%',
        layout: 'fit',
        title:'km travelled Yearly',
        height: 150,
        items: [{
            xtype: 'cartesian',
            width: '100%',
            height: 100,
            colors:["#F7CF7D","#F7BE81"],
            legend:{
            	position:'bottom',
            },
            interactions: {
	            type: 'crosshair',
	            axes: {
	                left: {
	                    label: {
	                        fillStyle: 'white'
	                    },
	                    rect: {
	                        fillStyle: 'brown',
	                        radius: 6
	                    }
	                },
	                bottom: {
	                    label: {
	                        fontSize: '14px',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            lines: {
	                horizontal: {
	                    strokeStyle: 'brown',
	                    lineWidth: 3,
	                    lineDash: [20, 2, 2, 2, 2, 2, 2, 2]
	                }
	            }
	        },
            store: {
                fields: ['name', 'km'],
                data: [{
                    'name': '2012',
                    //'km': 10,
                    'km': 50
                }, {
                    'name': '2013',
                   // 'km': 7,
                    'km': 42
                }, {
                    'name': '2014',
                    //'km': 5,
                    'km': 90
                }, {
                    'name': '2015',
                    //'km': 2,
                    'km': 60
                }, {
                    'name': '2016',
                   // 'km': 27,
                    'km': 2
                }]
            },
            sprites: [{
	                type: 'text',
	                text: 'km travelled Yearly',
	                font: '14px Helvetica',
	                width: 150,
	                height: 10,
	                x: 10, // the sprite x position
	                y: 20  // the sprite y position
	            }],
            axes: [{
                type: 'numeric',
                position: 'left',
                fields: ['km'],
                grid: true,
                minimum: 0
            }, {
                type: 'category',
                position: 'bottom',
                fields: ['name'],
            }],
            series: [{
            	type: 'line',
                style: {
                    stroke: '#B45F04',
                    lineWidth: 2
                },
                xField: 'name',
                yField: 'km',
                fill: true,
                marker: {
                    type: 'path',
                    path: ['M', - 4, 0, 0, 4, 4, 0, 0, - 4, 'Z'],
                    stroke: '#B45F04',
                    lineWidth: 2,
                    fill: 'white'
                }
            }]
        }]
    }]
});