Ext.define('MyCarLog.view.Welcome', {
   extend: 'Ext.Container',
   alias: 'widget.welcome',
  xtype: 'welcome',

  requires: [
   'Ext.Button',
   'MyCarLog.view.main.MainController',
   'MyCarLog.view.main.MainModel'
  ],

  controller: 'main',
  viewModel: 'main',

  layout: 'fit',
  width:'100%',
  items: [{
    xtype: 'container',
    centered: true,
    width:'100%',
    layout: {
      type: 'vbox',
      align: 'middle'
    },
    items: [{
       xtype: 'image',
       src: 'resources/images/logo.png',
       cls:'image-cls',
       width:'100%'
    },{
       xtype:'container',
       cls:'welcometext-cls',
       html:'<span class ="mytext">A place where you can log everything about your car, view reports and share them</span>'
    },{
       xtype: 'button',
       text:'Revving up, please wait... ',
       ui:'plain',
       cls:'welcomebt-cls'
       //icon: 'resources/images/car.png',
       //iconAlign:'right'
    }]
  }]
});