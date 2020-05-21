const Koa = require('koa');     

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating');

const rest = require('./rest');

const app = new Koa();

// log request URL:
// 参数ctx是由koa传入的封装了request和response的变量，next是koa传入的将要处理的下一个异步函数
app.use(async (ctx, next) => {//对任何请求，app将调用该异步函数处理请求
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// static file support:
let staticFiles = require('./static-files');
app.use(staticFiles('/static/', __dirname + '/static'));

// parse request body:
app.use(bodyParser());

// add nunjucks as view:
app.use(templating('views', {
    noCache: true,
    watch: true
}));

// bind .rest() for ctx:
app.use(rest.restify());

// add controllers:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');
