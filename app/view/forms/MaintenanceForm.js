Ext.define('MyCarLog.view.forms.MaintenanceForm', {
    extend: 'Ext.form.Panel',
    // height:'100%',
    // width:'100%',
    // left:0,
    // margin:0,
    // fullscreen:true,
    centered: true,
    floating: true,
    cls: 'mcl-form',
    xtype: 'mntform',
    items: [{
            xtype: 'toolbar',
            items: [{
                xtype: 'button',
                text: "Save",
                ui: 'action',
                handler: function() {
                    var form = this.up('mntform');
                    Ext.ComponentQuery.query('app-main')[0].fireEvent('savemnt', form);

                }

            }, {
                xtype: 'spacer'
            }, {
                xtype: 'button',
                text: 'Cancel',
                ui: 'decline',
                handler: function() {
                    Ext.Viewport.setActiveItem('app-main');
                    this.up('formpanel').destroy();
                }
            }]
        }, {
            xtype: 'textfield',
            name: 'charge',
            placeHolder: 'Service Charge'
        }, {
            xtype: 'datepickerfield',
            name: 'datetime',
            dateFormat: 'Y-m-d H:i',
            value: new Date()
        }, {
            xtype: 'numberfield',
            name: 'meterreading',
            placeHolder: 'Meter Reading'
        }, {
            xtype: 'textfield',
            name: 'servicecetnername',
            placeHolder: "Service center name",

        }, {
            xtype: 'textareafield',
            placeHolder: 'Maintenance description',
            name: 'desc'
        }

    ]

});
