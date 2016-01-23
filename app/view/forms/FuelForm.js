Ext.define('MyCarLog.view.forms.FuelForm', {
	extend:'Ext.form.Panel',

	xtype:'fueldform',
	config:{
	height:'100%',
	width:'100%',
	left:0,
	margin:0,
	fullscreen:true,
		
	lastFillingDate:new Date('2016-01-01'),
		lastFillMeterReading:1000,
		costPerLiter:49,
		favCost:1000,
	dailAvgKms:10,
	items:[
		{
			xtype:'toolbar',
			items:[
				{
					xtype:'button',
					text:"Save",
					ui:'action',
				handler: function() {
					var form = this.up('formpanel');
					Ext.ComponentQuery.query('app-main')[0].fireEvent('savefuel', form);

				}
				
			},{
                    xtype: 'spacer'
                },{
				xtype:'button',
				text:'Cancel',
				ui:'decline',
				handler:function(){
					this.up('formpanel').destroy();
				}
			}]
		},
		{
			xtype:'textfield',
			name:'cost',
			label:'Fuel Cost',
			listeners:{
				'change':function(){
					var form = this.up('formpanel');
					form.down('[name=ltrs]').setValue(Ext.util.Format.number(arguments[1]/form.getCostPerLiter(),'0.00'));
				}
			}
			
		},{
			xtype:'textfield',
			name:'rsperltr',
			disabled:true,
			label:'Rs/Ltr',
		},{
			xtype:'textfield',
			name:'ltrs',
			label:'Ltrs',
		},{
			xtype:'numberfield',
			name:'meterreading',
			label:'Meter reading'
		},{
			xtype:'textfield',
			name:'datetime',
			disabled:true,
			label:'Date Time',
			value:Ext.util.Format.date(new Date(),'Y-m-d H:i')
		},{
			xtype: 'togglefield',
			name: 'fav',
			label:'Favourite'
		}
		
	]
},
	initialize:function(){
		var costField = this.down('[name=cost]');
		costField.setValue(this.getFavCost());
		this.down('[name=ltrs]').setValue(Ext.util.Format.number(costField.getValue()/this.getCostPerLiter(),'0.00'));
		this.down('[name=rsperltr]').setValue(this.getCostPerLiter());
		this.down('[name=meterreading]').setValue((Ext.Date.diff(this.getLastFillingDate(),new Date(),Ext.Date.DAY)*this.getDailAvgKms())+this.getLastFillMeterReading());

		
	}
		
});