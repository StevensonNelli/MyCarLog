Ext.define('MyCarLog.view.forms.AddCar', {
	extend: 'Ext.form.Panel',
	requires: ['MyCarLog.view.common.CapturePicture'],
	// renderTo:Ext.getBody(),
	height: '100%',
	width: '100%',
	left: 0,
	margin: 0,
	fullscreen: true,
	xtype: 'addcar',
	items: [{
			xtype: 'toolbar',
			items: [{
				xtype: 'button',
				text: "Save",
				ui: 'action',
				action:'save',
				handler: function() {
					var form = this.up('addcar');
					Ext.ComponentQuery.query('app-main')[0].fireEvent('savecar',form);

				}

			}, {
				xtype: 'spacer'
			}, {
				xtype: 'button',
				text: 'Cancel',
				ui: 'decline',
				handler: function() {
					this.up('formpanel').destroy();
				}
			}]
		}, {
			xtype: 'textfield',
			name: 'brand',
			placeHolder: 'Brand'
		}, {
			xtype: 'textfield',
			name: 'model',
			placeHolder: 'model'
		}, {
			xtype: 'numberfield',
			name: 'year',
			placeHolder: 'Year'
		}, {
			xtype: 'selectfield',
			name: 'fueltype',
			placeHolder: "Fuel Type",
			options: [{
				text: 'Diesel',
				value: 'Diesel'
			}, {
				text: 'Petrol',
				value: 'Petrol'
			}, {
				text: 'Petrol + LPG',
				value: 'Pertrol + LPG'
			}]

		}, {

			xtype: 'textfield',
			name: "nickname",
			placeHolder: 'Nick name'
		}, {
			xtype: 'numberfield',
			name: 'currentreading',
			placeHolder: 'Kms driven'
		}, {
			xtype: 'numberfield',
			name: 'avgkmspday',
			placeHolder: 'Avg Kms/Day'
		}, {
			xtype: 'textfield',
			name: 'currentowner',
			placeHolder: 'Owner'
		}, {
			xtype: "textfield",
			name: 'handnumber',
			placeHolder: 'Owner number'
		},  {
			xtype:'hiddenfield',
			name:'image'
		},{
			xtype: 'capturepicture',
			placeHolder: "Pic",
			name: 'photo',
			accept: 'image',
			listeners: {
				'snap': function(value) {
					this.up('formpanel').down('[name=image]').setValue(value);
				}
			}
		}

	]

});
