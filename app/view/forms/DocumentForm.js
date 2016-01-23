Ext.define('MyCarLog.view.forms.DocumentForm', {
 extend: 'Ext.Panel',
    //alias: 'widget.documentform',
    fullscreen: true,
    requires: [
        'MyCarLog.view.common.CapturePicture',
        'Ext.form.FieldSet',
        'Ext.field.TextArea',
        'Ext.form.Panel',
        'Ext.Button'
    ],
    xtype:'documentform',
    config: {
    itemId: 'document-form',
    left:0,
    border:0,
    width: '100%',
    height: '100%',
    margin :0,
        //width:500,
        //height:500,
        fullscreen: true,
        items: [
            {
                xtype: 'fieldset',
                title: 'Drop your\'s document here.',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Title',
                        name: 'doctitle',
                        required: true
                    }, {
                        xtype: 'datepickerfield',
                        label: 'Day',
                        name: 'day',
                        value: new Date()
                    },{
                        xtype: 'capturepicture'
                    },{
                        xtype: 'button',
                        cls: 'submit-button',
                        itemId: 'submitButton',
                       // ui: 'plain',
                        text: 'Submit',
                        listeners:{
                            tap:function(){
                                this.up('panel').hide();
                            }
                        }
                    },{
                        xtype: 'button',
                        cls: 'cancel-button',
                        itemId: 'cancelButton',
                        //ui: 'plain',
                        text: 'Cancel',
                        listeners:{
                            tap:function(){
                                this.up('panel').hide();
                            }
                        }
                    }
                ]
            }
        ]
    }
});