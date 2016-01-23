

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
       }, {
           name: 'shortdescription',
           calculate: function(values) {
               return Ext.util.Format.ellipsis(values.description, 40);
           }
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