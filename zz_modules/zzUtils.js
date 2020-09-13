importClass(android.R);

module.exports = {
    logAttrInObject: function (obj) {
        rec(obj, 1);
        function rec (obj, level) {
            if (level > 10) return;
            if (typeof obj === 'object') {
                var i = 0;
                for (var key in obj) {
                    if (i++ > 30) {
                        console.log('zzAttrLog\t' + (new Array(level)).join('\t') + '...');
                        return;
                    }
                    console.log('zzAttrLog\t' + (new Array(level)).join('\t') + '[' + typeof(obj[key]) + ']: ' + key);
                    rec(obj[key], level + 1);
                }
            }
        }
    },
    sendNotification: function (option) {
        var manager = context.getSystemService(android.app.Service.NOTIFICATION_SERVICE);
        var notification;
        if (device.sdkInt >= 26) {
            var channel = new android.app.NotificationChannel("channel_id", "channel_name", android.app.NotificationManager.IMPORTANCE_HIGH);
            channel.enableLights(true);
            channel.setLightColor(0xff0000);
            channel.setShowBadge(false);
            manager.createNotificationChannel(channel);
            notification = new android.app.Notification.Builder(context, "channel_id")
                .setContentTitle(option.title || '')
                .setContentText(option.content || '')
                .setWhen(new Date().getTime())
                .setSmallIcon(R.drawable.ic_dialog_alert)
                .setTicker(option.ticker || '')
                .setDefaults(android.app.Notification.DEFAULT_ALL)
                .build();
        } else {
            notification = new android.app.Notification.Builder(context)
                .setContentTitle(option.title || '')
                .setContentText(option.content || '')
                .setWhen(new Date().getTime())
                .setSmallIcon(R.drawable.ic_dialog_alert)
                .setTicker(option.ticker || '')
                .setDefaults(android.app.Notification.DEFAULT_ALL)
                .build();
        }
        manager.notify(1, notification);
    },

    parseColorToGraphicHelper: function (color) {
        var ret = null;
        if (Array.isArray(color) && color.length 
            && Array.isArray(color[0]) && 3 == color[0].length) { // color的第二个参数path
            ret = [];
            for (var i = 0; i < color.length; i++) {
                ret.push(this.parseColor(color[i]));
            }
        } else {
            ret = this.parseColor(color);
        }
        return ret;
    },

    parseColor: function (color) {
        var ret = null;
        if (typeof color === 'string') { // '#rrggbb' => [r, g, b]
            ret = [Number('0x' + color.substr(1, 2)), Number('0x' + color.substr(3, 2)), Number('0x' + color.substr(5, 2))];
        } else if (Array.isArray(color) && 3 == color.length) { // [x, y, color] => [x, y, r, g, b]
            var colorRGB = this.parseColor(color[2]);
            ret = [];
            ret.push(color[0]);
            ret.push(color[1]);
            ret.push(colorRGB[0]);
            ret.push(colorRGB[1]);
            ret.push(colorRGB[2]);
        } else if (typeof color === 'number') { // 0xRRGGBB => [r, g, b]
            ret = [color >> 16, (0x00FF & (color >> 8)), (0x0000FF & color)];
        }
        return ret;
    }
}