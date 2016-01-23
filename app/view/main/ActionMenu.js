Ext.define('MyCarLog.view.main.ActionMenu', {
    extend: 'Ext.ActionSheet',
    xtype: 'caractionmenu',

    defaults: {
        textAlign: "right",
        iconAlign: 'right'
    },

    items: [{
        text: 'Add Fuel filling',
        iconCls: 'x-fa fa-flask',
        itemId: 'addFuel'
    }, {
        text: 'Add Maintenance',
        iconCls: 'x-fa fa-gears',
        itemId: 'addMaintenance'
    }, {
        text: 'Upload Document',
        iconCls: 'x-fa fa-file-text',
        itemId: 'addDoc'
    }]
});
