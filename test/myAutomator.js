// const sh = new Shell(true);


// let r = sh.execAndWaitFor('getevent -p');
// console.log(r);



// let str = com.stardust.autojs.engine.RootAutomatorEngine.getDeviceNameOrPath(context, com.stardust.autojs.core.inputevent.InputDevices.getTouchDeviceName());


// let str = android.preference.PreferenceManager.getDefaultSharedPreferences(context).getInt(com.stardust.autojs.engine.RootAutomatorEngine.touch_device, -1);
// let str = com.stardust.autojs.core.inputevent.InputDevices.getTouchDeviceName();
// console.log(com.stardust.autojs.engine.RootAutomatorEngine);

// let ra = new RootAutomator();
// events.on('exit', function(){
//     ra.exit();
// });
// // ra.press(100, 100, 1000);
// ra.touchDown(100, 100);
// sleep(100);
// ra.touchMove(200, 200);
// sleep(100);
// ra.touchMove(300, 300);
// sleep(100);
// ra.touchMove(400, 400);
// sleep(100);
// ra.touchUp();


const UP = 0x00;
const DOWN = 0x01;
const SYN_REPORT = 0;
const EV_ABS = 0x03;
const EV_SYN = 0x00;
const EV_KEY = 0x01;
const ABS_MT_SLOT = 0x2f;	/* MT slot being modified */
const ABS_MT_TOUCH_MAJOR = 0x30;	/* Major axis of touching ellipse */
const ABS_MT_TOUCH_MINOR = 0x31;	/* Minor axis (omit if circular) */
const ABS_MT_WIDTH_MAJOR = 0x32;	/* Major axis of approaching ellipse */
const ABS_MT_WIDTH_MINOR = 0x33;	/* Minor axis (omit if circular) */
const ABS_MT_ORIENTATION = 0x34;	/* Ellipse orientation */
const ABS_MT_POSITION_X = 0x35;	/* Center X touch position */
const ABS_MT_POSITION_Y = 0x36;	/* Center Y touch position */
const ABS_MT_TOOL_TYPE = 0x37;	/* Type of touching device */
const ABS_MT_BLOB_ID = 0x38;	/* Group a set of packets as a blob */
const ABS_MT_TRACKING_ID = 0x39;	/* Unique ID of initiated contact */
const ABS_MT_PRESSURE = 0x3a;	/* Pressure on contact area */
const ABS_MT_DISTANCE = 0x3b;	/* Contact hover distance */
const ABS_MT_TOOL_X = 0x3c;	/* Center X tool position */
const ABS_MT_TOOL_Y = 0x3d;	/* Center Y tool position */
const BTN_TOUCH = 0x14a;

let mTracingId = new java.util.concurrent.atomic.AtomicInteger(1);
let mShell = new com.stardust.autojs.core.shell.Shell(true);


touchDown(100, 100, 0);
sleep(100);
touchMove(200, 200, 0);
sleep(100);
touchMove(300, 300, 0);
sleep(100);
touchMove(400, 400, 0);
sleep(100);
touchUp(1);




function touchDown(x, y, id)  {
    // sendEvent(EV_ABS, ABS_MT_SLOT, id);
    // sendEvent(EV_ABS, ABS_MT_TRACKING_ID, mTracingId.getAndIncrement());
    // sendEvent(EV_ABS, ABS_MT_POSITION_X, x);
    // sendEvent(EV_ABS, ABS_MT_POSITION_Y, y);
    // sendEvent(EV_ABS, ABS_MT_TOUCH_MAJOR, 5);
    // sendEvent(EV_ABS, ABS_MT_WIDTH_MAJOR, 5);
    // sendEvent(EV_SYN, SYN_REPORT, 0);

    
    sendEvent(EV_ABS, ABS_MT_TRACKING_ID, mTracingId.getAndIncrement());
    sendEvent(EV_KEY, BTN_TOUCH, DOWN);
    //sendEvent(EV_KEY, BTN_TOOL_FINGER, 0x00000001);
    sendEvent(EV_ABS, ABS_MT_POSITION_X, x);
    sendEvent(EV_ABS, ABS_MT_POSITION_Y, y);
    //sendEvent(EV_ABS, ABS_MT_PRESSURE, 200);
    sendEvent(EV_ABS, ABS_MT_TOUCH_MAJOR, 5);
    sendEvent(EV_ABS, ABS_MT_WIDTH_MAJOR, 5);
    sendEvent(EV_SYN, SYN_REPORT, 0);
}

function touchMove (x, y, id) {
    sendEvent(EV_ABS, ABS_MT_SLOT, id);
    sendEvent(EV_ABS, ABS_MT_TOUCH_MAJOR, 5);
    sendEvent(EV_ABS, ABS_MT_POSITION_X, x);
    sendEvent(EV_ABS, ABS_MT_POSITION_Y, y);
    sendEvent(EV_SYN, SYN_REPORT, 0x00000000);
}

function touchUp (id) {
    sendEvent(EV_ABS, ABS_MT_SLOT, id);
    sendEvent(EV_ABS, ABS_MT_TRACKING_ID, 0xffffffff);
    sendEvent(EV_KEY, BTN_TOUCH, UP);
    sendEvent(EV_SYN, SYN_REPORT, 0x00000000);
}

events.on('exit', function () {
    mShell.exit();    
});
function sendEvent(type, code, value) {
    mShell.exec(type + " " + code + " " + value);
}