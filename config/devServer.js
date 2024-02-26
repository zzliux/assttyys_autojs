const Koa = require('koa');
const static = require('koa-static');
const mount = require('koa-mount');
const compress = require('koa-compress');
const fs = require('fs');
const fsPromise = fs.promises;

const app = new Koa();

app.use(compress({
    filter: function (content_type) {
        return true
    },
    threshold: 512,
    flush: require('zlib').Z_SYNC_FLUSH
}))


app.use(async (ctx, next) => {
    console.log(`load: ${ctx.path}`)
    if (ctx.path === '/') {
        const staticProxys = [
            'assets',
            'dist',
            'project.json',
        ];
        let fileList = [];
        for (let item of staticProxys) {
            fileList = [...fileList, ...(await listAll(item)).map(item => `/${item}`)];
        }
        ctx.body = JSON.stringify(fileList);
    } else if (ctx.path === '/project.json') {
        ctx.body = fs.createReadStream('project.json');
    } else {
        await next();
    }
});
// 使用 koa-static 中间件来提供静态文件服务
app.use(mount('/assets', static('assets')));
app.use(mount('/dist', static('dist')));


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
            if ((await fsPromise.stat(src)).isDirectory()) {
                var files = await fsPromise.readdir(src);
                for (let file of files) {
                    await listAllInner(src + '/' + file);
                }
            } else {
                res.push(src);
            }
        }
    }
}


class DevServer {
    apply(compiler) {
        app.listen(2516, () => {
            const ipList = getLocalIP();
            console.log('assttyys debug player 加载地址:');
            ipList.forEach(ip => {
                console.log(`http://${ip}:2516`);
            });
            console.log('\n');
        });
    }
}
module.exports = DevServer;
