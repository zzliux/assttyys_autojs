const Koa = require('koa');
const { koaBody } = require('koa-body');
const static = require('koa-static');
const mount = require('koa-mount');
const compress = require('koa-compress');
const fs = require('fs');
const fsPromise = fs.promises;

const app = new Koa();

app.use(koaBody());

app.use(compress({
    filter: function (_content_type) {
        return true
    },
    threshold: 512,
}))


app.use(async (ctx, next) => {
    if (ctx.path !== '/___dev_log') {
        console.log(`load: ${ctx.path}`)
    }
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
    } else if (ctx.path === '/___dev_log') {
        const { t, m, d } = ctx.request.body;
        if (['info', 'log', 'trace', 'debug', 'error'].includes(m));
        const dt = new Date(t);
        console.log(`[remote] ${dt.toLocaleString()}.${dt.getTime() % 1000}/${m}: ${d}`);
        ctx.body = 'success';
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

let count = 0;
class DevServer {
    apply(compiler) {
        compiler.hooks.done.tap('DevServer', (stats) => {
            const hasErrors = stats.hasErrors();
            setTimeout(() => {
                count++;
                if (hasErrors) {
                    console.error('存在编译报错，请处理报错');
                } else {
                    console.log('代码已发生变更，请重新加载运行');
                }
                if (count === 2) {
                    app.listen(2516, () => {
                        const ipList = getLocalIP();
                        console.log('\n\n\nassttyys debug player 加载/日志地址:');
                        console.log(ipList.map(ip => `http://${ip}:2516`).join('\n'));
                    });
                }
            }, 500);
        });
    }
}
module.exports = DevServer;
