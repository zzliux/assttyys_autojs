
const fsPromise = require('fs/promises');

const statics = [
    'assets',
    'dist',
    'project.json',
];

const target = 'dev_release';
const prefix = '/assttyys_autojs';


(async () => {
    await fsPromise.mkdir(target, { recursive: true });
    await Promise.all(statics.map((source) => {
        return fsPromise.cp(source, target + '/' + source, { recursive: true, filter: (src) => (!src.includes('LICENSE')) });
    }));
    fsPromise.writeFile(target + '/index', JSON.stringify((await listAll(target)).map(a => a.replace(new RegExp('^' + target + '/'), prefix))));
})();


async function listAll(src) {
    const res = [];
    await listAllInner(src);
    return res;

    async function listAllInner(src) {
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

        if (isSrcExists) {
            if ((await fsPromise.stat(src)).isDirectory()) { // 复制目录
                var files = await fsPromise.readdir(src);
                for (let file of files) {
                    await listAllInner(src + '/' + file);
                }
            } else { // 复制文件
                res.push(src);
            }
        }
    }
}
