console.time('rootScreenCapture');
let img = rootScreenCapture();
console.timeEnd('rootScreenCapture');
console.log(img);
img.saveTo(files.cwd() + '/test.png');
img.recycle();

/**
 * 使用root截图
 * @return png格式图片的字节数组
 */
function rootScreenCapture(){
    let tempBuffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
    let byteArrayOutputStream = new java.io.ByteArrayOutputStream();
    try {
        let exec = java.lang.Runtime.getRuntime().exec(['su',  '-c', '/system/bin/screencap -p']);
        exec.getOutputStream().close();
        let inputStream = exec.getInputStream();
        let bufferedInputStream = new java.io.BufferedInputStream(inputStream);
        let count;
        while ((count = bufferedInputStream.read(tempBuffer)) !== -1) {
            byteArrayOutputStream.write(tempBuffer, 0, count);
        }
        bufferedInputStream.close();
        let retCode = exec.waitFor();
        // console.log(retCode);
        exec.destroy();
    } catch (e) {
        console.error($debug.getStackTrace(e));
    }
    return images.fromBytes(byteArrayOutputStream.toByteArray());
}