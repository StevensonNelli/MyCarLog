/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('MyCarLog.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    requires: [
        'MyCarLog.store.CarsMeta',
        'MyCarLog.store.Cars'
    ],

    data: {
        name: 'MyCarLog',
        carSelected: null,
        filter: null
    },

    stores: {
        /**
         * Store with the meta data of cars
         */
        carsmeta: {
            type: 'carsmeta',
            autoLoad: true
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
