/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyCarLog.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'MyCarLog.view.main.MainController',
        'MyCarLog.view.main.MainModel',
        'MyCarLog.view.list.CarsList'
    ],

    controller: 'main',
    viewModel: 'main',

    config: {
        layout: 'fit',
        cls: 'main',
        items: [{
            xtype: 'carslist',
        }],

        listeners: {
            'initialize': function() {
                var body = Ext.getBody();

                var btn = Ext.widget('button', {
                    iconCls: 'x-fa fa-plus',
                    ui: 'round',
                    itemId: 'fab-add',
                    floating: true,
                    cls: 'fab-btn',
                    renderTo: body
                });

                // z-index
                btn.setZIndex(40000);
            }
        }
    }
});
