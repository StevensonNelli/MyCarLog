Ext.define('MyCarLog.store.Docs', {
    extend: 'Ext.data.Store',

    alias: 'store.docs',

    fields: [
        'id', 'doctitle', 'image', 'date','carId'
    ],

    proxy: {
        type: 'ajax',
        url: 'resources/data/Docs.json',
        reader: {
            type: 'json'
            // rootProperty: 'items'
        }
    },

    autoLoad: true
});
