Ext.define('MyCarLog.store.Services', {
    extend: 'Ext.data.Store',

    alias: 'store.services',

    fields: [
        {
            name: 'serviceCost',
            type: 'number'
        }, {
            name: 'description'
        }, {
            name: 'date'
        }, {
            name: 'carId'
        }
    ],

    proxy: {
        type: 'ajax',
        url: 'resources/data/services.json',
        reader: {
            type: 'json'
            // rootProperty: 'items'
        }
    },

    autoLoad: true
});
