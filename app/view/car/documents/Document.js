Ext.define('MyCarLog.view.car.documents.Document', {
    extend: 'Ext.Container',
    requires: [
    	'MyCarLog.store.Docs',
    	'MyCarLog.view.forms.DocumentForm',
    	'MyCarLog.view.car.documents.DocumentPic'
    	],
    alias: 'widget.document',
    xtype:'document',
    width:'100%',
    config: {
        // fullscreen: true,
        //layout: 'fit',
        
    items:[{
    	width:'100%',
    	height:500,
    	xtype: 'list',
    	cls: 'document-list',
	    store: {
	        type: 'docs'
	    },
	    itemCls :'docList',
	    itemTpl: [
	    '<span class="thumblistHeadRow"><figure ><img src="resources/images/doc{id}.jpg" /><figcaption>{doctitle}<br/>{date}</figcaption></figure></span>'
	        // '<div class="car">',
	        // '<img src="{image}">',
	        // '<div class="info">',
	        // '<h2>{nickname}</h2>',
	        // '<h5>{make}</h5>',
	        // '<span>{currentMeterReading}</span>',
	        // '</div>',
	        // '</div>',
	        // '<div class="clear"></div>'
	    ],
	    listeners:{
	    	itemtap: 'onDocumentClick'//function(list, index, target, record, e, eOpts){debugger;

	    	//}
	    }
	}]
}
    
});


