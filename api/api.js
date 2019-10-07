const Koa = require('koa');
const koaBody = require('koa-body');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/check-email', ctx => {
  if (!ctx.query.email) {
    ctx.status = 400;
    ctx.body = 'Missing query email';
    return;
  }

  if (ctx.query.email === 'a@a.com') {
    ctx.status = 403;
    ctx.body = 'Not accepted email';
    return;
  }

  ctx.status = 200;
});

router.get('/degrees', ctx => {
  ctx.body = [
    {
      id: 1,
      name: '6eme',
    },
    {
      id: 2,
      name: '5eme',
    },
    {
      id: 3,
      name: '4eme',
    },
    {
      id: 4,
      name: '3eme',
    },
    {
      id: 5,
      name: 'Seconde',
    },
    {
      id: 6,
      name: '1ere',
    },
    {
      id: 7,
      name: 'Terminale',
    },
  ];
});

router.post('/user', koaBody(), ctx => {
  const {
    email,
    password,
    gender,
    firstname,
    lastname,
    degree,
  } = ctx.request.body;

  if (!email) return errorOn(ctx, 'email');
  if (!password) return errorOn(ctx, 'password');
  if (!gender) return errorOn(ctx, 'gender');
  if (!firstname) return errorOn(ctx, 'firstname');
  if (!lastname) return errorOn(ctx, 'lastname');
  if (!degree) return errorOn(ctx, 'degree');

  ctx.status = 201;
  ctx.body = 'User subscribed';
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);

console.log('API started on port: 3000');

// Private

const errorOn = (ctx, key) => {
  ctx.status = 400;
  ctx.body = `Missing ${key}`;
  return;
};
