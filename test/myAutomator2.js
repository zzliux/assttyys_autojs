// const sh = new Shell(true);


// let r = sh.execAndWaitFor('getevent -p');
// console.log(r);



// let str = com.stardust.autojs.engine.RootAutomatorEngine.getDeviceNameOrPath(context, com.stardust.autojs.core.inputevent.InputDevices.getTouchDeviceName());


// let str = android.preference.PreferenceManager.getDefaultSharedPreferences(context).getInt(com.stardust.autojs.engine.RootAutomatorEngine.touch_device, -1);
// let str = com.stardust.autojs.core.inputevent.InputDevices.getTouchDeviceName();
// console.log(com.stardust.autojs.engine.RootAutomatorEngine);

let ra = new RootAutomator();
events.on('exit', function(){
    ra.exit();
});
// ra.press(100, 100, 1000);
ra.touchDown(100, 100);
sleep(100);
ra.touchMove(200, 200);
sleep(100);
ra.touchMove(300, 300);
sleep(100);
ra.touchMove(400, 400);
sleep(100);
ra.touchUp();

