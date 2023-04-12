const staticProxys = [
    'assets',
    'dist',
    'project.json',
];

const Koa = require('koa')
const Router = require('koa-router');
const fsPromise = require('fs').promises;

const app = new Koa();
const router = new Router();

(async function () {
    let fileList = [];

    for (let item of staticProxys) {
        fileList = [...fileList, ...(await listAll(item)).map(item => `/${item}`)];
    }
    fileList.forEach(path => {
        router.all(path, async (ctx) => {
            console.log(`load: ${path}`);
            ctx.body = await fsPromise.readFile(__dirname + '/..' + path);
        });
    });

    router.all('/', async (ctx) => {
        console.log(`load: /`);
        ctx.body = JSON.stringify(fileList);
    });

    app.use(router.routes());
    app.listen(2516, () => {
        const ipList = getLocalIP();
        console.log('访问地址：');
        ipList.forEach(ip => {
            console.log(`http://${ip}:2516`);
        });
        console.log('\n');
    });
})()




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

function getLocalIP() {
    var interfaces = require('os').networkInterfaces();
    var res = []
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                res.push(alias.address);
            }
        }
    }
    return res;
}