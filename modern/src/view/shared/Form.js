Ext.define('MyCarLog.view.shared.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'carform',
    config: {
        fullscreen: true,
        items: [{
            xtype: 'fieldset',
            title: 'About You',
            instructions: 'Tell us all about yourself',
            items: [
                {
                    xtype: 'textfield',
                    name : 'firstName',
                    label: 'First Name'
                },
                {
                    xtype: 'textfield',
                    name : 'lastName',
                    label: 'Last Name'
                }
            ]
        }]
    }
});