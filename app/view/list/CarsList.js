Ext.define("MyCarLog.view.list.CarsList",{
    extend: "Ext.Container",

    requires: [
        "MyCarLog.view.list.CarsListController",
        "MyCarLog.view.list.CarsListModel",

        "MyCarLog.store.Cars"
    ],

    xtype: 'carslist',
    controller: "list-carslist",
    // viewModel: {
    //     type: "list-carslist"
    // },

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
            // xtype: 'container',
            xtype: (MyCarLog.deviceInfo.tablet || MyCarLog.deviceInfo.desktop) ? 'dataview' : 'list',
            reference: 'carlist',
            deselectOnContainerClick: true,
            // layout: {
            //     type: 'card'
            // },
            // activeItem: MyCarLog.deviceInfo.tablet ? 1 : 0,
            // defaults: {
                // store: {
                //     type: 'cars'
                // },
                bind: {
                    selection: '{carSelected}',
                    store: '{carsmeta}'
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
                itemTpl: [document.getElementById('carslist_itemtpl').innerHTML,
                    {
                        getId: function() { 
                            var id = Ext.id(null, 'mcl-list-actions-');
                            setTimeout(this.renderActions.bind(this, id), 50);
                            return id;
                        },
                        renderActions: function(id) {
                            debugger;
                            Ext.create('Ext.Toolbar', {
                                layout: {
                                    type: 'hbox',
                                    align: 'center',
                                    pack: MyCarLog.deviceInfo.tablet ? 'center' : 'start'
                                },
                                border: false,
                                margin: '8px 0 -10px 0',
                                style: {
                                    background: 'none'
                                },
                                items: [{
                                        iconCls: 'x-fa fa-flask',
                                        ui: 'plain',
                                        itemId: 'addFuel_' + id,
                                        cls: 'fab-plain'
                                    }, {
                                        iconCls: 'x-fa fa-gears',
                                        ui: 'plain',
                                        itemId: 'addMaintenance_' + id,
                                        cls: 'fab-plain'
                                    }, {
                                        iconCls: 'x-fa fa-file-text',
                                        ui: 'plain',
                                        itemId: 'addDoc_' + id,
                                        cls: 'fab-plain'
                                    },
                                    /*{
                                        iconCls: 'x-fa fa-pencil',
                                        ui: 'plain',
                                        itemId: 'editCar_' + i,
                                        cls: 'fab-plain'
                                    },*/
                                    {
                                        iconCls: 'x-fa fa-trash',
                                        ui: 'plain',
                                        itemId: 'deleteCar_' + id,
                                        cls: 'fab-plain'
                                    }
                                ],
                                renderTo: Ext.query('#' + id)[0]
                            });
                        }
                    }
                ],
                // tpl: [
                //     //'<tpl for=".">',
                //     '<div class="car">',
                //         '<img src="{image}" />',
                //         '<div class="info">',
                //             '<h2>{nickname}</h2>',
                //             '<h5>{make}</h5>',
                //             '<div class="odometer-wrapper">',
                //                 '<span class="odometer">',
                //                     '<span class="digit">',
                //                         '<span>{mrd1}</span>',
                //                 '<hr />',
                //                 '</span><span class="digit">',
                //                         '<span>{mrd2}</span>',
                //                 '<hr />',
                //                 '</span>',
                //                 '<span class="digit">',
                //                         '<span>{mrd3}</span>',
                //                 '<hr />',
                //                 '</span>',
                //                 '<span class="digit">',
                //                         '<span>{mrd4}</span>',
                //                 '<hr />',
                //                 '</span>',
                //                 '<span class="digit">',
                //                         '<span>{mrd5}</span>',
                //                 '<hr />',
                //                 '</span>',
                //                 '<span class="digit">',
                //                         '<span>{mrd6}</span>',
                //                 '<hr />',
                //                 '</span>',
                //                 '</span>',
                //             '</div>',
                //         '</div>',
                //     '</div>',
                //     '<div class="clear"></div>',
                //     '<div id="{[this.renderActions()]}" class="actions"></div>',
                //     //'</tpl>',
                //     {
                //         renderActions: function() {
                //             debugger;
                //         }
                //     }
                // ],
                //itemSelector: 'div.car',
                // listeners: {
                //     'itemtap': 'onCarslistItemTap',
                //     'refresh': 'onCarslistRefresh'
                // }
            // },
            // items: [{
            //     xtype: 'list',
            //     // allowDeselect: true,
            //     deselectOnContainerClick: true
            // }, {
            //     xtype: 'dataview',
            //     // deselectOnContainerClick: true,
            // }]

            // initComponent: function() {
            //     var list = {
            //             xtype: 'list',
            //             deselectOnContainerClick: true 
            //         },
            //         dataview = {
            //             xtype: 'dataview'
            //         };

            //     this.setItems( MyCarLog.deviceInfo.tablet ? dataview : list);
            //     this.callParent();
            // }
        }],

    }
});
