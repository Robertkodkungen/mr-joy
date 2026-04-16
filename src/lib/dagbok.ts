import type { MarkdownInstance } from 'astro';

export type DagbokFrontmatter = {
	title: string;
	pubDate: Date | string;
	description?: string;
};

const dagbokGlob = import.meta.glob<MarkdownInstance<DagbokFrontmatter>>('../content/dagbok/*.md', { eager: true });

function pathToSlug(path: string): string {
	const file = path.split('/').pop() ?? '';
	return file.replace(/\.md$/i, '');
}

function asDate(d: Date | string): Date {
	return d instanceof Date ? d : new Date(d);
}

export async function getDagbokListItems(): Promise<
	Array<{ slug: string; title: string; description?: string; pubDate: Date }>
> {
	const items: Array<{ slug: string; title: string; description?: string; pubDate: Date }> = [];

	for (const [path, mod] of Object.entries(dagbokGlob)) {
		const fm = mod.frontmatter;
		items.push({
			slug: pathToSlug(path),
			title: fm.title,
			description: fm.description,
			pubDate: asDate(fm.pubDate),
		});
	}

	return items.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());
}

export async function getDagbokEntry(slug: string) {
	for (const [path, mod] of Object.entries(dagbokGlob)) {
		if (pathToSlug(path) !== slug) continue;
		const fm = mod.frontmatter;
		return {
			slug,
			frontmatter: {
				title: fm.title,
				description: fm.description,
				pubDate: asDate(fm.pubDate),
			},
			Content: mod.Content,
		};
	}
	return undefined;
}
