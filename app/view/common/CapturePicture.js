Ext.define('MyCarLog.view.common.CapturePicture', {
    extend: 'Ext.Component',
    alias: 'widget.capturepicture',

    config: {
        captured: true,
        cls: 'picture-capture',
        height: 100,
        html: '<div class="icon"><i class="icon-camera"></i> Take a picture</div><img class="image-tns" /><input type="file" capture="camera" accept="image/*" />',
        width: 140
    }

});