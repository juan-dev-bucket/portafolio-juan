
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<!-- Google tag (gtag.js) -->\n\t\t<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-KQSP1VZC4Y\"></script>\n\t\t<script>\n\t\t\twindow.dataLayer = window.dataLayer || [];\n\t\t\tfunction gtag(){dataLayer.push(arguments);}\n\t\t\tgtag('js', new Date());\n\t\t\tgtag('config', 'G-KQSP1VZC4Y');\n\t\t</script>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta name=\"title\" content=\"Portafolio Juan Fernando\">\n\t\t<meta name=\"description\" content=\"Una buena implementacion hecho en svelte y typescript.\">\n\t\t<meta name=\"keywords\" content=\"implementacion , modificacion, svelte , typescript, sitio, web, sitioweb, correo, contacto, portafolio, portfolio, js, javascript, codigo, programacion\">\n\t\t<meta name=\"robots\" content=\"index, nofollow\">\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n\t\t<meta name=\"language\" content=\"Spanish\">\n\t\t<meta name=\"author\" content=\"Juan Fernando Moreno\">\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.ico\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\n\t\t<meta property=\"og:site_name\" content=\"juanfernando.site\">\n\t\t<!-- Open Graph / Facebook -->\n\t\t<meta property=\"og:type\" content=\"website\" />\n\t\t<meta property=\"og:url\" content=\"https://juanfernando.site\" />\n\t\t<meta property=\"og:title\" content=\"Portafolio Juan Fernando\" />\n\t\t<meta property=\"og:description\" content=\"Una buena implementacion hecho en svelte y typescript.\" />\n\t\t<meta property=\"og:image\" content=\"https://iili.io/2RFdV9I.png\" />\n\n\t\t<!-- Twitter -->\n\t\t<meta property=\"twitter:card\" content=\"summary_large_image\" />\n\t\t<meta property=\"twitter:url\" content=\"https://juanfernando.site\" />\n\t\t<meta property=\"twitter:title\" content=\"Portafolio Juan Fernando\" />\n\t\t<meta property=\"twitter:image\" content=\"https://iili.io/2RFdV9I.png\" />\n\t\t<meta property=\"twitter:description\" content=\"Una buena implementacion hecho en svelte y typescript.\" />\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n\n</html>\n",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "th9xi4"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
