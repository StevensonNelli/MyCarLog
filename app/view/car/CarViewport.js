Ext.define('MyCarLog.view.car.CarViewport', {
    extend: 'Ext.TabPanel',
    requires: [ /*'MyCarLog.store.Fuellists'*/ ,
        'Ext.dataview.List',
	'MyCarLog.view.car.documents.Document'
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
            html: 'Fuel',
            layout: 'fit',
            items: [{
                xtype: 'container',
                layout: 'fit',
                items: [{
                    xtype: 'list',
                    id: "adffsad",
                    store: {
                        // type: 'fuellists'
                        fields: [
                            'filldate', 'liters', 'cpl', 'odometer', 'totalamount'
                        ],
                        // storeId: 'fuellists',
                        data: [{
                            filldate: 'Jean Luc',
                            liters: "jeanluc.picard@enterprise.com",
                            cpl: "555-111-1111",
                            odometer: "555-111-1111",
                            totalamount: "555-111-1111"
                        }, {
                            filldate: 'Worf',
                            liters: "worf.moghsson@enterprise.com",
                            cpl: "555-222-2222",
                            odometer: "555-111-1111",
                            totalamount: "555-111-1111"
                        }, {
                            filldate: 'Deanna',
                            liters: "deanna.troi@enterprise.com",
                            cpl: "555-333-3333",
                            odometer: "555-111-1111",
                            totalamount: "555-111-1111"
                        }, {
                            filldate: 'Data',
                            liters: "mr.data@enterprise.com",
                            cpl: "555-444-4444",
                            odometer: "555-111-1111",
                            totalamount: "555-111-1111"
                        }]
                    },
                    itemTpl: [
                        '<div class="myfuellist">',
                        '<span>Date and time of fill:&nbsp;&nbsp;&nbsp;&nbsp; {filldate}</span><br/>',
                        '<span>Liters:&nbsp;&nbsp;&nbsp;&nbsp; {liters}</span><br/>',
                        '<span>Charge per litter: &nbsp;&nbsp;&nbsp;&nbsp; {cpl}</span><br/>',
                        '<span>Odometer reading: &nbsp;&nbsp;&nbsp;&nbsp; {odometer}</span><br/>',
                        '<span>Total amount: &nbsp;&nbsp;&nbsp;&nbsp; {totalamount}</span><br/>',
                        '</div>'
                    ]
                }]
            }]
        }, {
            title: 'Services',
            //iconAlign:'top',
            iconCls: 'x-fa fa-tasks',
            html: 'Services'
        }, {
            title: 'Documents',
            //iconAlign:'top',
            iconCls: 'x-fa fa-book',
            //html: 'Documents',
	    items:[{
               xtype:'document'
            }]
        }, {
            title: 'Report',
            iconCls: 'x-fa fa-file',
            html: 'Reports'
        }]
    }
});
