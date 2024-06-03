import { error, redirect } from '@sveltejs/kit';

const pages: Record<string, string> = {
	veracrossclassdirectories: 'https://chromewebstore.google.com/detail/veracross-class-directori/cjllaifiobhpjcdlojfoaiabddlflime'
};

export function load(e) {
	if (pages[e.params.slug]) {
		throw redirect(307, pages[e.params.slug]);
	} else {
		error(404, 'Not Found');
	}
}
