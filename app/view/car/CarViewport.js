Ext.define('MyCarLog.view.car.CarViewport', {
    extend: 'Ext.TabPanel',
    requires: [ /*'MyCarLog.store.Fuellists'*/ ,
        'Ext.dataview.List',
        'MyCarLog.view.car.documents.Document',
        'MyCarLog.view.car.fuel.List',
        'MyCarLog.view.car.services.List',
        'MyCarLog.view.car.reports.Report'
    ],
    alias: 'widget.carviewport',
    xtype: 'carviewport',
    //tabBarPosition: 'bottom',
    defaults: {
        styleHtmlContent: true,
        tab: {
            iconAlign: 'top'
        }
    },
    tabBar: {
        ui: 'plain',
        docked: 'top',
        layout: {
            align: 'center',
            pack: 'center'
        }
    },
    config: {
        items: [{
            title: 'Fuel',
            //iconAlign:'top',
            iconCls: 'x-fa fa-taxi',
            scrollable: true,
            layout: 'fit',
            items: [{
                xtype: 'fuellist',
                reference: 'fuellist',
            }]
        }, {
            title: 'Services',
            //iconAlign:'top',
            layout: 'fit',
            scrollable: true,
            iconCls: 'x-fa fa-tasks',
            items: [{
                xtype: 'serviceslist',
                reference: 'serviceslist',
            }]
        }, {
            title: 'Documents',
            //iconAlign:'top',
            iconCls: 'x-fa fa-book',
            //html: 'Documents',
            items: [{
                xtype: 'document',
                reference: 'documentsview'
            }]
        }, {
            title: 'Report',
            iconCls: 'x-fa fa-file',
            items: [{
                xtype:'report'
            }]
        }],
        listeners:{
            activeitemchange:'OnCarViewPortChange'
        }
    }
});
