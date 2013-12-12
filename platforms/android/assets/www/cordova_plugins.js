cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.hypermurea.phonegap.wp8-datetimepicker-plugin/www/datetimepicker.js",
        "id": "com.hypermurea.phonegap.wp8-datetimepicker-plugin.datetimepicker",
        "clobbers": [
            "navigator.datetimepicker"
        ]
    }
]
});
