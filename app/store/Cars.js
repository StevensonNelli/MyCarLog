Ext.define('MyCarLog.store.Cars', {
    extend: 'Ext.data.Store',

    alias: 'store.cars',

    fields: [
        'id', 'make', 'nickname', 'model', 'fuelType', 'image', 'currentMeterReading',
        {
            name: 'reading',
            calculate: function(values) {
                var reading = values.currentMeterReading.toString();
                // making reading 6 digits
                while(reading.length < 6) {
                    reading = "0" + reading;
                }
                // console.log('reading : ', reading);
                return reading;
            }
        }, {
            name: 'mrd1',
            calculate: function(values) {
                var reading = values.reading;
                return reading[0];
            }
        }, {
            name: 'mrd2',
            calculate: function(values) {
                var reading = values.reading;
                return reading[1];
            }
        }, {
            name: 'mrd3',
            calculate: function(values) {
                var reading = values.reading;
                return reading[2];
            }
        }, {
            name: 'mrd4',
            calculate: function(values) {
                var reading = values.reading;
                return reading[3];
            }
        }, {
            name: 'mrd5',
            calculate: function(values) {
                var reading = values.reading;
                return reading[4];
            }
        }, {
            name: 'mrd6',
            calculate: function(values) {
                var reading = values.reading;
                return reading[5];
            }
        }
    ],

    proxy: {
        type: 'ajax',
        url: 'resources/data/cars.json',
        reader: {
            type: 'json'
            // rootProperty: 'items'
        }
    },

    autoLoad: true
});
