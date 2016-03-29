Ext.define('MyCarLog.util.FormLocalStorageUtil', {
    singleton: true,
    alternateClassName: ['MCLFormUtil'],

    saveCar: function(carInfo, metaFields, carFields, metastore) {
        var car = this.seperateMeta(carInfo, metaFields, carFields),
            metaRecord = null,
            record = null;

        metaRecord = Ext.create('MyCarLog.model.CarMeta', car.metadata);
        record = Ext.create('MyCarLog.model.Car', car.data);
        metaRecord.save();
        record.save();
        if(metaRecord.setCar) {
            metaRecord.setCar(record);
        }

        metastore.add(metaRecord);
        metastore.sync();
    },
    /**
     * To seperate meta data from the rest of the data
     * 
     * Takes the meta field names and normal field names
     */
    seperateMeta: function(object, metaKeys, keys) {
        var metadata = {},
            data = {},
            key;

        for(key in object) {
            if( metaKeys.indexOf(key) === -1 ) {
                // data
                data[key] = object[key];
            } else {
                // meta data
                metadata[key] = object[key];
            }
        }

        return {
            metadata: metadata,
            data: data
        };
    },
});