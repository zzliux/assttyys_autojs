function randomPackageName() {
    var str = 'abcdefghijklmnopqrstuvwxyz';
    var l1 = Math.floor(Math.random() * 1000000) % 5 + 5;
    var l2 = Math.floor(Math.random() * 1000000) % 5 + 5;
    var ret = 'com.';
    for (var i = 0 ; i < l1; i++) {
        ret += str[Math.floor(Math.random() * 1000000) % 26];
    }
    ret += '.';
    for (var i = 0 ; i < l2; i++) {
        ret += str[Math.floor(Math.random() * 1000000) % 26];
    }
    return ret;
}

randomPackageName();