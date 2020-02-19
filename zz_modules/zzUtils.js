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
    }
}