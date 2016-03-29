/****DocumentUpload***/

Ext.define('MyCarLog.view.forms.DocumentForm', {
    extend: 'Ext.form.Panel',
    requires: ['MyCarLog.view.common.CapturePicture'],
    // renderTo:Ext.getBody(),
    /*height: '100%',
    width: '100%',
    left: 0,
    margin: 0,
    fullscreen: true,*/
    centered: true,
    floating: true,
    cls: 'mcl-form',
    xtype: 'documentform',
    items: [{
            xtype: 'toolbar',
            items: [{
                xtype: 'button',
                text: "Save",
                ui: 'action',
                handler: function() {
                    var form = this.up('documentform');
                    Ext.ComponentQuery.query('app-main')[0].fireEvent('savedoc', form);

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
            label: 'Title',
            name: 'doctitle',
            required: true
        }, {
            xtype: 'datepickerfield',
            label: 'Day',
            name: 'date',
            value: new Date()
        }, {
            xtype: 'hiddenfield',
            name: 'image'
        }, {
            xtype: 'capturepicture',
            placeHolder: "Pic",
            name: 'photo',
            accept: 'image',
            listeners: {
                'snap': function(value) {
                    this.up('formpanel').down('[name=image]').setValue(value);
                }
            }

        }

    ]

});
