Ext.define('MyCarLog.util.Util', {
    singleton: true,
    alternateClassName: ['MCLUtil'],

    DEFAULT_CAR_IMG: 'resources/images/car-default.jpg',

    constructor: function() {
        // proxy depending upon the type defined in index.html
        var proxytype = MyCarLog.proxytype,
            proxyDefs = {
                localstorage: {
                    CARMETA: {
                        type: 'localstorage',
                        id: 'mcl-carsmeta'
                    },
                    CAR: {
                        type: 'localstorage',
                        id: 'mcl-cars-meta'
                    },
                    FUELFILLING: {
                        type: 'localstorage',
                        id: 'mcl-fuelfillings'
                    },
                    DOC: {
                        type: 'localstorage',
                        id: 'mcl-cars'
                    },
                    SERVICE: {
                        type: 'localstorage',
                        id: 'mcl-services'
                    }
                }
            };
        
        this.proxy = proxyDefs[proxytype];
    }
});