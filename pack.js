// # !/bin/bash
// tarpath=assttyys_ng

// if [ -e $tarpath ]; then
//     rm -r $tarpath
// fi

// mkdir -p $tarpath

// cp project.json $tarpath/project.json
// cp -r assets $tarpath/assets
// cp -r dist $tarpath/dist

const compressing = require('compressing');
const fsPromise = require('fs/promises');

const targetPath = 'assttyys_ng';


(async function () {
    try {
        await recursiveRemove(targetPath);
        await sleep(1000);
        await fsPromise.mkdir(targetPath);
        await recursiveCopy('assets', targetPath + '/assets');
        await recursiveCopy('dist', targetPath + '/dist');
        await recursiveCopy('project.json', targetPath + '/project.json');
        await sleep(1000);
        await compressing.zip.compressDir(targetPath, targetPath + '.zip')
        await sleep(1000);
        await recursiveRemove(targetPath);
    } catch (e) {
        console.error(e);
    }
})();

async function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}

async function recursiveRemove(src) {
    let isSrcExists = true;
    try {
        await fsPromise.access(src);
    } catch (e) {
        isSrcExists = false;
    }
    if (isSrcExists) {
        if ((await fsPromise.stat(src)).isDirectory()) {
            let files = await fsPromise.readdir(src);
            for (let file of files) {
                await recursiveRemove(src + '/' + file);
            }
            await fsPromise.rmdir(src);
        } else {
            await fsPromise.unlink(src);
        }
    }
}

async function recursiveCopy(src, dest) {
    if (src.endsWith('.')) {
        return;
    }
    
    var isSrcExists = false;
    try {
        await fsPromise.access(src);
        isSrcExists = true;
    } catch (e) {
        isSrcExists = false;
    }
    var isDestExists = false;
    try {
        await fsPromise.access(dest);
        isDestExists = true;
    } catch (e) {
        isDestExists = false;
    }

    if (isSrcExists) {
        if ((await fsPromise.stat(src)).isDirectory()) { // 复制目录
            if (isDestExists) { // 存在这个路径或者文件
                if ((await fsPromise.stat(dest)).isDirectory()) { // 是目录就不管它
                    
                } else { // 不是目录就删掉它
                    await fsPromise.unlink(dest);
                }
            } else { // 不存在，创建目录
                await fsPromise.mkdir(dest);
            }
            var files = await fsPromise.readdir(src);
            for (let file of files) {
                // await recursiveCopy(src + '/' + file, dest + '/' + file);
                await recursiveCopy(src + '/' + file, dest + '/' + file);
            }
        } else { // 复制文件
            if (isDestExists) { // 如果存在目标路径
                if ((await fsPromise.stat(dest)).isDirectory()) { // 如果目标路径是文件夹就删了
                    // await fsPromise.rmdir(dest, {
                    //     recursive: true
                    // });
                    recursiveRemove(dest);
                } else { // 删除文件
                    await fsPromise.unlink(dest);
                }
            } 
            await fsPromise.copyFile(src, dest)
        }
    }
}



