// 'ui';

let myShell = require('sh.js');
let sh = new myShell('su');

let trackingId = 0;

// let dm = new android.util.DisplayMetrics();
// activity.getWindowManager().getDefaultDisplay().getRealMetrics(dm);
// let winWidth = dm.widthPixels;
// let winHeight = dm.heightPixels;
// console.log(winWidth + ' * ' + winHeight);

sh.exec('getevent -p', function (data) {
    const r = data.match(/add device.+?:\s+(.+)\r?\n\s+name:\s+"input"/);
    let inputEventPath = r[1];
    console.log(inputEventPath);
    touchDown(100, 100, inputEventPath);
    sleep(1000);
    touchMove(200, 100, inputEventPath);
    sleep(1000);
    touchMove(200, 200, inputEventPath);
    sleep(1000);
    touchUp(inputEventPath);
    // sh.exec('getevent -l', function (data) {
    //     console.log(data);
    //     sh.destroy();
    // });
    // sh.exec('input swipe 100 100 200 200 500', function (_data) {
    //     sh.destroy();
    // });
});

function touchDown(x, y, inputEventPath) {
    // sh.exec('sendevent ' + inputEventPath + ' 3 57 33');
    // sh.exec('sendevent ' + inputEventPath + ' 3 53 ' + x);
    // sh.exec('sendevent ' + inputEventPath + ' 3 54 ' + y);
    // sh.exec('sendevent ' + inputEventPath + ' 1 330 1');
    // sh.exec('sendevent ' + inputEventPath + ' 0 0 0');

    sh.exec('sendevent ' + inputEventPath + ' 3 57 ' + (++trackingId));
    sh.exec('sendevent ' + inputEventPath + ' 1 330 1');
    //sh.exec('sendevent ' + inputEventPath + ' 1 BTN_TOOL_FINGER 0x00000001');
    sh.exec('sendevent ' + inputEventPath + ' 3 53 ' + x);
    sh.exec('sendevent ' + inputEventPath + ' 3 54 ' + y);
    //sh.exec('sendevent ' + inputEventPath + ' 3 ABS_MT_PRESSURE 200');
    sh.exec('sendevent ' + inputEventPath + ' 3 48 5');
    sh.exec('sendevent ' + inputEventPath + ' 3 50 5');
    sh.exec('sendevent ' + inputEventPath + ' 0 0 0');
}

function touchMove(x, y, inputEventPath) {
    // sh.exec('sendevent ' + inputEventPath + ' 3 53 ' + x);
    // sh.exec('sendevent ' + inputEventPath + ' 3 54 ' + y);
    // sh.exec('sendevent ' + inputEventPath + ' 0 0 0');

    sh.exec('sendevent ' + inputEventPath + ' 3 47 ' + 0);
    sh.exec('sendevent ' + inputEventPath + ' 3 48 5');
    sh.exec('sendevent ' + inputEventPath + ' 3 53 ' + x);
    sh.exec('sendevent ' + inputEventPath + ' 3 54 ' + y);
    sh.exec('sendevent ' + inputEventPath + ' 0 0 0');
}

function touchUp(inputEventPath) {
    // sh.exec('sendevent ' + inputEventPath + ' 3 57 ffffffff');
    // sh.exec('sendevent ' + inputEventPath + ' 1 330 0');
    // sh.exec('sendevent ' + inputEventPath + ' 0 0 0');
    sh.exec('sendevent ' + inputEventPath + ' 3 47 ' + 0);
    sh.exec('sendevent ' + inputEventPath + ' 3 57 ' + trackingId);
    sh.exec('sendevent ' + inputEventPath + ' 1 330 0');
    sh.exec('sendevent ' + inputEventPath + ' 0 0 0');
}