/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('MyCarLog.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'MyCarLog',
        carSelected: null,
        filter: null
    }

    //TODO - add data, formulas and/or methods to support your view
});
