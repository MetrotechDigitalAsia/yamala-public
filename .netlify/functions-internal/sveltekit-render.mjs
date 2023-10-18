import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.384a124b.js","app":"_app/immutable/entry/app.cccf636d.js","imports":["_app/immutable/entry/start.384a124b.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.d3d84cd3.js","_app/immutable/entry/app.cccf636d.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.8ecc7ac8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
