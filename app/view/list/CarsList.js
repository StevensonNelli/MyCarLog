Ext.define("MyCarLog.view.list.CarsList",{
    extend: "Ext.Container",

    requires: [
        "MyCarLog.view.list.CarsListController",
        "MyCarLog.view.list.CarsListModel",

        "MyCarLog.store.Cars"
    ],

    xtype: 'carslist',
    controller: "list-carslist",
    viewModel: {
        type: "list-carslist"
    },

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
                html: '<h2>My Cars</h2>'
            }, {
                xtype: 'spacer'
            }]
        }, {
            xtype: 'list',
            // allowDeselect: true,
            deselectOnContainerClick: true,
            store: {
                type: 'cars'
            },
            bind: {
                selection: '{carSelected}'
            },
            // itemTpl: [
            //     '<div class="car">',
            //     '<img src="{image}">',
            //     '<div class="info">',
            //     '<h2>{nickname}</h2>',
            //     '<h5>{make}</h5>',
            //     '<span>{currentMeterReading}</span>',
            //     '</div>',
            //     '</div>',
            //     '<div class="clear"></div>'
            // ]
            itemTpl: document.getElementById('carslist_itemtpl').innerHTML
        }],

    }
});
