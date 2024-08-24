<script>
	import SvelteMarkdown from 'svelte-markdown';
</script>

{#snippet tool({ url, title, description })}
	<a href={url} class="rounded-lg">
	<div class="cursor-pointer group mx-3 flex flex-col justify-between rounded-xl border-2 border-slate-300 p-6 transition-shadow duration-300 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-300/50 lg:m-0">
		<div>
					<h4 class="text-center text-xl font-bold">
						{title}
					</h4>
			<div class="flex items-center justify-center p-2 text-center"><SvelteMarkdown source={description} /></div>
		</div>
	</div>
	</a>
{/snippet}
<div class="max-w-2xl mx-auto my-5 flex flex-col gap-5">
{@render tool({ title: 'Checkerboard', url: '/tools/checkerboard', description: 'Generate a checkerboard with a specified pixel size to fill your screen' })}
{@render tool({ title: 'Bounce', url: '/tools/bounce', description: 'DVD Bounce Game' })}
	{@render tool({ title: 'RegEx', url: '/tools/regexboggle', description: 'Boggle with RegEx symbols' })}
</div>
