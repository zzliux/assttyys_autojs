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
        await fsPromise.mkdir(targetPath);
        await Promise.all([
            recursiveCopy('assets', targetPath + '/assets'),
            recursiveCopy('dist', targetPath + '/dist'),
            recursiveCopy('project.json', targetPath + '/project.json')
        ]);
        await compressing.zip.compressDir(targetPath, targetPath + '.zip')
        await recursiveRemove(targetPath);
    } catch (e) {
        console.error(e);
    }
})();

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
            let todo = [];
            for (let file of files) {
                todo.push(recursiveRemove(src + '/' + file));
            }
            await Promise.all(todo);
            return await fsPromise.rmdir(src);
        } else {
            return await fsPromise.unlink(src);
        }
    } else {
        return new Promise(resolve => { resolve() });
    }
}

async function recursiveCopy(src, dest) {
    if (src.endsWith('.')) {
        return new Promise(resolve => { resolve() });
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
                if (!(await fsPromise.stat(dest)).isDirectory()) { // 不是目录就删掉它
                    await fsPromise.unlink(dest);
                }
            } else { // 不存在，创建目录
                await fsPromise.mkdir(dest);
            }
            let files = await fsPromise.readdir(src);
            let todo = [];
            for (let file of files) {
                todo.push(recursiveCopy(src + '/' + file, dest + '/' + file));
            }
            return Promise.all(todo);
        } else { // 复制文件
            if (isDestExists) { // 如果存在目标路径
                if ((await fsPromise.stat(dest)).isDirectory()) { // 如果目标路径是文件夹就删了
                    return await recursiveRemove(dest);
                } else { // 删除文件
                    return await fsPromise.unlink(dest);
                }
            } else {
                return await fsPromise.copyFile(src, dest)
            }
        }
    } else {
        return new Promise(resolve => { resolve() });
    }
}



