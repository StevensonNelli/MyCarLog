Ext.define('MyCarLog.model.Doc', {
    extend: 'MyCarLog.model.Base',

    fields: [
        'doctitle',
        'image',
        'date', {
            // many to one association with Car
            name: 'carId',
            reference: 'Car',
            allowBlank: false
        }
    ],

    // proxy: {
    //     type: 'localstorage',
    //     id: 'mcl-docs'
    // },
    
    // identifier: {
    //     prefix: 'mcl-doc#'
    // },

    proxy: MCLUtil.proxy.DOC
});