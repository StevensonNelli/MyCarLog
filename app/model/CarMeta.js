Ext.define('MyCarLog.model.CarMeta', {
    extend: 'MyCarLog.model.Base',
    fields: [
        {
            // one to one association with Car
            name: 'carId',
            reference: {
                child: 'Car'
            },
            unique: true
        },
        'nickname',
        'make',
        'image',
        'currentMeterReading', {
            name: 'reading',
            calculate: function(values) {
                var reading 
                try {
                    reading = values.currentMeterReading.toString();
                    // making reading 6 digits
                    while (reading.length < 6) {
                        reading = "0" + reading;
                    }
                } catch(e) {
                    reading = ['','','','','',''];
                } finally {
                    return reading;
                }
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
    
    // proxy: {
    //     type: 'localstorage',
    //     id: 'mcl-carsmeta'
    // },

    // identifier: {
    //     prefix: 'mcl-carmeta#'
    // },

    proxy: MCLUtil.proxy.CARMETA
});