Ext.define('MyCarLog.store.FuelFilling', {
    extend: 'Ext.data.Store',

    alias: 'store.fuelfilling',

    fields: [
        {
            name: 'fillCost',
            type: 'number'
        }, {
            name: 'litres',
            type: 'number'
        }, {
            name: 'date'
        }, {
            name: 'reading'
        }, {
            name: 'carId'
        }
    ],

    proxy: {
        type: 'ajax',
        url: 'resources/data/fuelfilling.json',
        reader: {
            type: 'json'
            // rootProperty: 'items'
        }
    },

    autoLoad: true
});
