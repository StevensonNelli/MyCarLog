Ext.define('MyCarLog.model.Service', {
    extend: 'MyCarLog.model.Base',

    fields: [{
            name: 'serviceCost',
            type: 'number'
        },
        'description',
        'date', {
            name: 'shortdescription',
            calculate: function(values) {
                return Ext.util.Format.ellipsis(values.description, 40);
            }
        }, {
            // many to one association with Car
            name: 'carId',
            reference: 'Car',
            allowBlank: false
        }
    ],

    // proxy: {
    //     type: 'localstorage',
    //     id: 'mcl-services'
    // },
    
    // identifier: {
    //     prefix: 'mcl-service#'
    // },

    proxy: MCLUtil.proxy.SERVICE
});