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

   // defaults: {
   //     styleHtmlContent: true
   // },
   layout:'vbox',
   cls:'welcome-cls',
   items: [{
       xtype: 'image',
       src: 'resources/images/logo.png',
       cls:'image-cls'
   },{
       xtype:'container',
       cls:'welcometext-cls',
       html:'<span class ="mytext">A place where you can <br/> log everything about your car, <br/>view reports and share them</span>'
   },{
           xtype: 'button',
           text:'Revving up, please wait... ',
           ui:'plain',
           cls:'welcomebt-cls'
           //icon: 'resources/images/car.png',
           //iconAlign:'right'
       }
   ]
});