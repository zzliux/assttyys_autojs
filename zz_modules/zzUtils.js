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
    }
}