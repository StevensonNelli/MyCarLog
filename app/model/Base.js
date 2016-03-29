/**
 * Base model for the app
 * to be extended by all the models defined
 */
Ext.define('MyCarLog.model.Base', {
    extend: 'Ext.data.Model',
    
    schema: {
        namespace: 'MyCarLog.model'
    },
    
    identifier: {
        type: 'sequential'
    }
});