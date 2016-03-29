Ext.define('MyCarLog.model.Car', {
    extend: 'MyCarLog.model.Base',

    fields: [
        'model',
        'year',
        'fuelType',
        'currentOwner',
        'currentHand',
        'avgKmsPerDay',
        'initialMeterReading',
    ],
    
    // proxy: {
    //     type: 'localstorage',
    //     id: 'mcl-cars'
    // },
    
    // identifier: {
    //     type: 'sequential',
    //     prefix: 'mcl-car#'
    // },

    proxy: MCLUtil.proxy.CAR    
});