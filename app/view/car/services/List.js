Ext.define('MyCarLog.view.car.services.List', {
    extend: 'Ext.dataview.List',
    xtype: 'serviceslist',
    requires: ['MyCarLog.store.Services'],
    // allowDeselect: true,
    deselectOnContainerClick: true,
    store: {
        type: 'services'        
    },
    itemTpl: document.getElementById('serviceslist_itemtpl').innerHTML
});
