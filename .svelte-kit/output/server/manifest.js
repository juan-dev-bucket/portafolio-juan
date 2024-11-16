export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "resume-profile/_app",
	assets: new Set(["CV.pdf","favicon.ico","logos/adonis.png","logos/after-effects.svg","logos/android.png","logos/angular.png","logos/aws.svg","logos/bootstrap.svg","logos/c.svg","logos/celery.svg","logos/cpp.svg","logos/csharp.svg","logos/css.svg","logos/dart.png","logos/deno.png","logos/django.svg","logos/docker.svg","logos/ecommerce.svg","logos/electron.png","logos/express.png","logos/fastify.svg","logos/firebase.png","logos/flask.svg","logos/flutter.svg","logos/go.svg","logos/herke-ict-group.svg","logos/html.svg","logos/illustrator.svg","logos/java.png","logos/jest.png","logos/js.png","logos/kafka.png","logos/kafka.svg","logos/kotlin.png","logos/kubernetes.svg","logos/lotan.png","logos/mongodb.svg","logos/neo4j.svg","logos/nest.svg","logos/nginx.svg","logos/no-img.svg","logos/node.png","logos/numpy.svg","logos/nuxt.png","logos/pandas.svg","logos/photoshop.svg","logos/postcss.svg","logos/postgres.png","logos/premiere.svg","logos/python.png","logos/quasar.svg","logos/rabbitmq.svg","logos/react.svg","logos/redis.svg","logos/rust.svg","logos/ruvy.svg","logos/sass.png","logos/scrapy.png","logos/selenium.svg","logos/seta-logo.avif","logos/shopify.svg","logos/solid.svg","logos/svelte.png","logos/tailwind.svg","logos/ts.png","logos/unocss.svg","logos/vite.png","logos/vitest.svg","logos/vue.png","logos/web-development.svg","logos/xamarin.svg","profile.jpg"]),
	mimeTypes: {".pdf":"application/pdf",".ico":"image/vnd.microsoft.icon",".png":"image/png",".svg":"image/svg+xml",".avif":"image/avif",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.0ac0be32.js","app":"_app/immutable/entry/app.583f9578.js","imports":["_app/immutable/entry/start.0ac0be32.js","_app/immutable/chunks/scheduler.98946c50.js","_app/immutable/chunks/singletons.d325f9c4.js","_app/immutable/chunks/paths.917c18bf.js","_app/immutable/entry/app.583f9578.js","_app/immutable/chunks/scheduler.98946c50.js","_app/immutable/chunks/index.bf7cacb7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
