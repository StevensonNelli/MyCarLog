Ext.define("MyCarLog.view.list.CarsList", {
    extend: 'Ext.Container',
    requires: ['MyCarLog.store.Cars'],
    xtype: 'carslist',
    config: {
        // fullscreen: true,
        layout: 'fit',
        cls: 'carlist',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                xtype: 'spacer'
            }, {
                xtype: 'container',
                html: '<h2>Your Cars<h2>'
            }, {
                xtype: 'spacer'
            }]
        }, {
            xtype: 'list',
            store: {
                type: 'cars'
            },
            itemTpl: [
                '<div class="car">',
                '<img src="{image}">',
                '<div class="info">',
                '<h2>{nickname}</h2>',
                '<h5>{make}</h5>',
                '<span>{currentMeterReading}</span>',
                '</div>',
                '</div>',
                '<div class="clear"></div>'
            ]
        }],

        listeners: {
            'initialize': function() {
                
            }
        }
    }
});
