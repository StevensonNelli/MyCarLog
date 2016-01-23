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
        'MyCarLog.view.list.CarsList',
        'MyCarLog.view.Welcome',
        'MyCarLog.view.car.CarViewport',
        'MyCarLog.view.main.ActionMenu'
    ],

    controller: 'main',
    viewModel: 'main',

    config: {
        fullscreen: true,
        layout: {
            type: 'card',
            activeitem: 0,
            animation: {
                type: 'slide',
                direction: 'left'
            }
        },
        cls: 'main',
        items: [{
            xtype: 'welcome',
            reference: 'welcome'
        }, {
            xtype: 'carslist',
            reference: 'carslist'
        }, {
            xtype: 'carviewport',
            reference: 'carviewport'
        }, {
            xtype: 'caractionmenu',
            hideOnMaskTap: true,
            reference: 'caractionmenu',
            cls: 'actionmenu',
            hidden: true
        }]

        // listeners: {
        //     'initialize': 
        //     // 'activeitemchange': 'onActiveItemChange'
        // }
    }
});
