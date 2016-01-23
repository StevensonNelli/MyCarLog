Ext.define('MyCarLog.view.common.CapturePicture', {
   extend: 'Ext.Component',
   alias: 'widget.capturepicture',

   config: {
       captured: true,
       cls: 'picture-capture',
       height: 100,
			 data:{
				 mode:'input'
			 },
       tpl: '<div class="icon {mode}">'+
		 					'<div class="inputmode" > <i class="x-fa fa-camera"></i> Take a picture <img class="image-tns" /></div>'+
		 					'<input type="file" style="z-index:10000;" capture="camera" accept="image/*" /> '+
		 					'<div class="outputmode"> <img class="outputimage" src="{src}" /> </div>'+
		 					'</div>',
       width: 140
   },
	 listeners:{
		 'painted':function(){
			 var me = this;
			 
			 var el = this.el;
	     el.down('input').dom.onchange = me.component.onChange
			
		 }
		
	 },
	 onChange:function (event) {
		 var me = Ext.fly(event.currentTarget).up('.picture-capture').component;
		 var el = me.el;
	       var files = event.target.files,
	         file,
	         reader;
	       if (files && files.length > 0) {
	         file = files[0];
	         reader = new FileReader();
	         reader.onloadend = function readerLoaded() {
						 // el.down('.outputimage').src=reader.result;
						 me.setData({
							 mode:'output',
							 src:reader.result
						 });
	           me.fireEvent('snap', reader.result);
	         };
	         reader.readAsDataURL(file);

	       }
	       el.down('input').dom.value='';
				 // el.down('.icon').appendChild({
 // 					 tag:'input',
 // 					 type:'file',
 // 					 style:'z-index:10000;',
 // 					 capture:'came3ra',
 // 					 accept:'image/*'
 // 				 });
 // 				 el.down('input').dom.onchange=me.onChange;
 // 				 el.down('input').setStyle('z-index',10000);

	     }

});