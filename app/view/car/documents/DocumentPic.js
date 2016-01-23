Ext.define('MyCarLog.view.car.documents.DocumentPic', {
 extend: 'Ext.Panel',
    alias: 'widget.documentpic',
    fullscreen: true,
    requires: [
    ],
    xtype:'documentpic',
    config: {
    itemId: 'document-pic',
    left:0,
    border:0,
    width: '100%',
    height: '100%',
    margin :0,
    layout:'vbox',
        //width:500,
        //height:500,
        fullscreen: true,
        items: [
            {
                xtype: 'button',
                layout:'anchor',
                text:'close',
                height:50,
                defaults: {anchor: '100%'},
                listeners:{
                            tap:function(){
                                this.up('panel').hide();
                            }
                        }
            },{
                xtype: "image",
                cls:'img-view',
                src:'http://www.sencha.com/assets/images/sencha-avatar-64x64.png',
                //height: '90%',
                flex:1
                //width: 64
            }
        ]
    }
});