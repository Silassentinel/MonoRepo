// // this file will contain all the routes and export the bundled.
// // Language: typescript
// // #region imports
// // import router from './FallBack';
// import express from 'express';
// import {
//   RequestParamHandler, IRouterMatcher, IRouterHandler, IRoute, PathParams,
// } from 'express-serve-static-core';
// // #endregion

// // #region config
// // #endregion

// // this object will combine all routes into 1 object.

// class mainRoute implements express.Router {
//   param(name: string, handler: RequestParamHandler): this;

//   param(callback: (name: string, matcher: RegExp) => RequestParamHandler): this;

//   param(name: unknown, handler?: unknown): this {
//     throw new Error('Method not implemented.');
//   }

//   all: IRouterMatcher<this, 'all'>;

//   get: IRouterMatcher<this, 'get'>;

//   post: IRouterMatcher<this, 'post'>;

//   put: IRouterMatcher<this, 'put'>;

//   delete: IRouterMatcher<this, 'delete'>;

//   patch: IRouterMatcher<this, 'patch'>;

//   options: IRouterMatcher<this, 'options'>;

//   head: IRouterMatcher<this, 'head'>;

//   checkout: IRouterMatcher<this, any>;

//   connect: IRouterMatcher<this, any>;

//   copy: IRouterMatcher<this, any>;

//   lock: IRouterMatcher<this, any>;

//   merge: IRouterMatcher<this, any>;

//   mkactivity: IRouterMatcher<this, any>;

//   mkcol: IRouterMatcher<this, any>;

//   move: IRouterMatcher<this, any>;

//   _: IRouterMatcher<this, any>;

//   notify: IRouterMatcher<this, any>;

//   propfind: IRouterMatcher<this, any>;

//   proppatch: IRouterMatcher<this, any>;

//   purge: IRouterMatcher<this, any>;

//   report: IRouterMatcher<this, any>;

//   search: IRouterMatcher<this, any>;

//   subscribe: IRouterMatcher<this, any>;

//   trace: IRouterMatcher<this, any>;

//   unlock: IRouterMatcher<this, any>;

//   unsubscribe: IRouterMatcher<this, any>;

//   use: IRouterHandler<this, string> & IRouterMatcher<this, any>;

//   route<T extends string>(prefix: T): IRoute<T>;

//   route(prefix: PathParams): IRoute<string>;

//   route(prefix: unknown): import('express-serve-static-core').IRoute<T>
// | import('express-serve-static-core').IRoute < string > {
//     throw new Error('Method not implemented.');
//   }

//   stack: any[];
//   // #region constructor
//   // #endregion
//   // #region props
//   // #endregion
//   // #region methods
//   // #endregion
// }

// // const mainRoute = {
// //     router,
// // };

// export default mainRoute;
