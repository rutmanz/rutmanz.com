import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { execSync } from "node:child_process";
import { type ConfigEnv } from 'vite';

// export default defineConfig({
// 	plugins: [sveltekit()],

// });


export default ({ mode }: ConfigEnv) => {
	const dev = mode === 'development';

	const commitDate = execSync('git log -1 --format=%cI').toString().trimEnd();
	const commitHash = execSync('git rev-parse HEAD').toString().trimEnd();
	return {
		plugins: [sveltekit(), tailwindcss()],
		define: {
			__GIT_HASH__: JSON.stringify(commitHash),
			__COMMIT_DATE__: JSON.stringify(new Date(commitDate).toLocaleDateString('en-US', {
				month: 'long',
				year: 'numeric',
			}))
		}
	}
}