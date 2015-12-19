Ext.define('MyCarLog.store.Cars', {
    extend: 'Ext.data.Store',

    alias: 'store.cars',

    fields: [
        'id', 'make', 'nickname', 'model', 'fuelType', 'image', 'currentMeterReading'
    ],

    proxy: {
        type: 'ajax',
        url: 'resources/data/cars.json',
        reader: {
            type: 'json'
            // rootProperty: 'items'
        }
    },

    autoLoad: true
});
