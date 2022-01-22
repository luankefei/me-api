import { createParamDecorator, ExecutionContext } from '@nestjs/common';

type AuthParams = {
  stateKey: 'h5' | 'mini';
  blocked: boolean;
};

export const GetAuth = createParamDecorator(
  (data: AuthParams, ctx: ExecutionContext) => {
    const { method, body, query } = ctx.switchToHttp().getRequest();
    const params: unknown = method === 'POST' ? body : query;
    const userId = (params && params['user_id']) || '';

    if (!userId && data.blocked) {
      ctx.res.statusCode = 401;
      ctx.res.statusMessage = encodeURIComponent('登录信息失效，请重新登录');
      ctx.res.end();
    }
  },
);

export function getAuthMW(stateKey: 'h5' | 'mini', blocked = true) {
  return async function authMW(ctx: any, next: () => Promise<any>) {
    const { method } = ctx.request;
    const params: any = method === 'POST' ? ctx.request.body : ctx.query;
    const openid = (params && params['wechat_openid']) || '';

    if (openid) {
      return next();
    }
    console.warn(`try to access with illegal openID: ${openid}`);

    if (blocked) {
      // tslint:disable-next-line
      ctx.res.statusCode = 401;
      ctx.res.statusMessage = encodeURIComponent('登录信息失效，请重新登录');
      ctx.res.end();
    } else {
      return next();
    }
  };
}
