Ext.define('MyCarLog.view.car.fuel.List', {
    extend: 'Ext.dataview.List',
    xtype: 'fuellist',
    requires: ['MyCarLog.store.FuelFilling'],
    // allowDeselect: true,
    deselectOnContainerClick: true,
    store: {
        type: 'fuelfilling',
        remoteFilter: true,
        filters: {
            property: 'carId',
            value: '{filter}'
        }
    },
    itemTpl: document.getElementById('fuellist_itemtpl').innerHTML
});
