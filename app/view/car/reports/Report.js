Ext.define('MyCarLog.view.car.reports.Report', {
    extend: 'Ext.Container',
    requires: [ 
        'MyCarLog.view.car.reports.MonthlyReports',
        'MyCarLog.view.car.reports.YearlyReports',
    ],
    alias: 'widget.carviewport',
    xtype: 'report',
    layout: 'vbox',
    items: [{
        xtype:'panel',
        layout: 'fit',
        width:'100%',
        height:500,
        items:{
            xtype: 'container',
            layout: 'card',
            activeItem: 0,
            width: '100%',
            //flex:1,
            height: 530,
            items: [{
                xtype:'monthlyreports'
            }, {
                xtype:'yearlyreports'
            }]
        }
                    
    }, {
        xtype: 'panel',
        width: '100%',
        height:40,
        layout: {
            type: 'hbox',
            pack: 'center'
        },
        items: [{
            xtype:'button',
            text:'Download',
           // ui:'plain'
        },{
            xtype: 'segmentedbutton',
            items: [{
                text: 'Monthly',
                pressed: true
            }, {
                text: 'Yearly'
            }],
            listeners: {
                toggle: function(btn, button, isPressed, eOpts) {

                    if (button.getText() == 'Monthly') {
                        this.up().up().down().down().setActiveItem(0)
                    } else {
                        this.up().up().down().down().setActiveItem(1)
                    }

                }
            }
        },{
            xtype:'button',
            text:'Publish',
           // ui:'plain'
        }]

    }]
});