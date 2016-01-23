/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyCarLog.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    control: {
        'app-main': {
            'initialize': 'onMainInit',
            'activeitemchange': 'onActiveItemChange'
        },
        'carslist list': {
            'itemtap': 'onCarslistItemTap',
            'refresh': 'onCarslistRefresh'
        },
        'caractionmenu #addFuel': {
            'click': function() {
                console.log(arguments);
                debugger;
            },
        }
    },


    /* Main view */
    onMainInit: function(main) {
        var me = this;

        // fab button
        var btn = Ext.widget('button', {
            iconCls: 'x-fa fa-plus',
            ui: 'round',
            itemId: 'fab-add',
            reference: 'fabAdd',
            height: 60,
            width: 60,
            floating: true,
            cls: 'fab fab-btn',
            hidden: true,
            handler: me.fabAction.bind(this)
        });
        // fab btn to stay on top of all
        btn.setZIndex(40000);

        main.add(btn);

        // back button
        var btn1 = Ext.widget('button', {
            iconCls: 'x-fa fa-car',
            ui: 'round',
            itemId: 'fab-add',
            reference: 'fabBack',
            height: 60,
            width: 60,
            floating: true,
            cls: 'fab fab-back fab-btn',
            hidden: true,
            handler: me.backToCarsList.bind(this)
        });
        // fab btn to stay on top of all
        btn1.setZIndex(40000);

        main.add(btn1);

        // removing the welcome screen after a certain time
        var welcome = main.down('welcome');
        var btn = welcome.down('button');
        /*Ext.Anim.run(btn, 'wipe', {
            duration: 2000
        })*/
        ;
        setTimeout(function() {
            // welcome.hide();
            this.setActiveItem(1);
        }.bind(main), 3000);
    },
    onActiveItemChange: function(card, newActiveItem, oldActiveItem, eOpts) {
        if (newActiveItem.xtype != 'welcome') {
            this.lookupReference('fabAdd').setHidden(false);
        } else {
            this.lookupReference('fabAdd').setHidden(true);
        }

        if(newActiveItem.xtype != 'welcome' 
                && newActiveItem.xtype != 'carslist') {
            this.lookupReference('fabBack').setHidden(false);
        } 

        if(newActiveItem.xtype == 'carslist'
                || newActiveItem.xtype === 'welcome') {
            this.lookupReference('fabBack').setHidden(true);
        }

        // var idxOld = card.indexOf(oldActiveItem);
        // var idxNew = card.indexOf(newActiveItem);
        // var anim = card.getLayout().getAnimation();
        // if(idxOld < idxNew) {
        //     anim.setDirection('left');
        // } else {
        //     anim.setDirection('right');
        // }

        // hiding the actionsheet
        this.lookupReference('caractionmenu').hide();
    },

    /* CarsList view */
    onCarslistItemTap: function(dataview, index, target, record, e, eOpts) {
        var me = this;
        var isSelected = Ext.isEmpty(dataview.getSelection());
        var car = record;

        var hit = Ext.getCmp(e.target.id) || Ext.getCmp(e.target.parentElement.id);
        if (Boolean(hit)) {
            var actions = ['addFuel', 'addMaintenance', 'addDoc', 'editCar', 'deleteCar'];
            var actionHit = hit.getItemId().split('_')[0];
            console.log('car: ', car.getData());
            switch (actionHit) {
                case actions[0]:
                    // TODO show add fuel form
                    console.log('action: ', actions[0]);
                    break;
                case actions[1]:
                    // TODO show add maintenance form
                    console.log('action: ', actions[1]);
                    break;
                case actions[2]:
                    // TODO show add doc form
                    console.log('action: ', actions[2]);
                    break;
                case actions[3]:
                    // TODO show add car form with the present details
                    console.log('action: ', actions[3]);
                    break;
                case actions[4]:
                    // TODO delete the car record
                    console.log('action: ', actions[4]);
                    me.deleteCar(car);
                    break;
                default:
                    // TODO switch to car viewport
                    me.switchToCarViewport(car);
            }
        } else {
            // TODO switch to car viewport
            me.switchToCarViewport(car);
        }
    },
    onCarslistRefresh: function() {
        function renderBtn(querySelector) {
            var renderSelector = Ext.query(querySelector);
            for (var i in renderSelector) {
                // console.log('renderSelector :', renderSelector[i]);
                Ext.create('Ext.Toolbar', {
                    layout: {
                        type: 'hbox',
                        align: 'center'
                    },
                    border: false,
                    margin: '8px 0 -10px 0',
                    style: {
                        background: 'none'
                    },
                    items: [{
                        iconCls: 'x-fa fa-flask',
                        ui: 'plain',
                        itemId: 'addFuel_' + i,
                        cls: 'fab-plain'
                    }, {
                        iconCls: 'x-fa fa-gears',
                        ui: 'plain',
                        itemId: 'addMaintenance_' + i,
                        cls: 'fab-plain'
                    }, {
                        iconCls: 'x-fa fa-file-text',
                        ui: 'plain',
                        itemId: 'addDoc_' + i,
                        cls: 'fab-plain'
                    }, {
                        iconCls: 'x-fa fa-pencil',
                        ui: 'plain',
                        itemId: 'editCar_' + i,
                        cls: 'fab-plain'
                    }, {
                        iconCls: 'x-fa fa-trash',
                        ui: 'plain',
                        itemId: 'deleteCar_' + i,
                        cls: 'fab-plain'
                    }],
                    renderTo: renderSelector[i]
                });
            }
        }

        // render edit buttons
        // renderBtn('span.edit-car', 'x-fa fa-edit');
        // render delete buttons
        // renderBtn('span.delete-car', 'x-fa fa-remove');
        renderBtn('div.actions');
    },
    backToCarsList: function() {
        console.log('backToCarsList');
        var card = this.getView();
        var anim = card.getLayout().getAnimation();

        anim.setDirection('right');
        card.setActiveItem(1);
        anim.setDirection('left');
    },
    fabAction: function() {
        // debugger;
        var main = this.getView();
        var activeXtype = main.getActiveItem().xtype;
        if(activeXtype === "carslist") {
            // TODO show add car form
            console.log('TODO show add car form');
        } else {
            // TODO show actinsheet
            var actionSheet = main.down('caractionmenu');
            actionSheet.show();
        }
    },

    /* General Functions */
    switchToCarViewport: function(car) {
        console.log('switchToCarViewport');
        console.log('selected car: ', this.getViewModel().getData().carSelected);
        this.getView().setActiveItem(2);
    },
    deleteCar: function(car) {
        Ext.Msg.confirm('', 'Do you really want to remove the selected car?', _confirmCB.bind(this));

        function _confirmCB(reply) {
            if (reply === "yes") {
                var ls = this.lookupReference('carslist').down('list');
                var store = ls.getStore();
                store.remove(car);
                // store.sync();
                ls.refresh();
            }
        }
    },
});
