Ext.define('MyCarLog.model.FuelFilling', {
    extend: 'MyCarLog.model.Base',

    fields: [{
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
        // many to one association with Car
        name: 'carId',
        reference: {
            parent: 'Car'
        },
        allowBlank: false
    }],
    
    // proxy: {
    //     type: 'localstorage',
    //     id: 'mcl-fuelfillings'
    // },
    
    // identifier: {
    //     prefix: 'mcl-fuelfilling#'
    // }.

    proxy: MCLUtil.proxy.FUELFILLING,
});