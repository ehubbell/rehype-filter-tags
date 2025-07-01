# Overview

A simple rehype plugin that will filter specific HTML tags from markdown according to your specification.
For example, you might only want h1, h2, h3, etc when building your table of contents for a blog or documentation website.

## Prerequisites

- Node
- Rehype

## Installation

```
npm i rehype-filter-tags
```

## Usage

Simply declare the tags you want to keep using the plugin like so:

```tsx
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeFilterTags from 'rehype-filter-tags';

import { Col, Container, Grid } from '@playbooks/ui/grid';
import { AppWrapper } from 'components/app/app-wrapper';
import { DocContent } from 'components/doc/doc-content';
import { DocSidebar } from 'components/doc/doc-sidebar';
import { fetchDoc } from 'queries';
import { truncate } from 'utils';
import { baseOptions } from 'utils/mdx';

const tocOptions = {
	format: 'mdx',
	remarkPlugins: [],
	rehypePlugins: [rehypeSlug, [rehypeFilterTags, { tags: ['h1', 'h2', 'h3', 'h4'] }]],
};

const DetailPage = ({ ssr }) => {
	const content = ssr.content;
  const toc = ssr.toc;

	// Render
	return (
		<AppWrapper breadcrumbs>
			<Container size='xl' height='h-full' className='py-4'>
				<Grid height='h-full'>
					<Col lg='9' className='markdown'>
						<DocContent content={content} />
					</Col>
					<Col lg='3' border='md:border-l' className='hidden lg:block'>
						<DocSidebar toc={toc} />
					</Col>
				</Grid>
			</Container>
		</AppWrapper>
	);
};

export async function getServerSideProps({ params }) {
	try {
		const doc = await fetchDoc('cli', params.cliId);
		const content = await serialize(doc.content, { mdxOptions: baseOptions as any });
		const toc = await serialize(doc.content, { mdxOptions: tocOptions as any });
		return { props: { content, toc } };
	} catch (e) {
		console.error(e);
		return { notFound: true };
	}
}

export default DetailPage;
```

## Development

This project uses [yalc](https://npmjs.com/package/yalc) for local development.

- npm run dev
- switch to project
- npx yalc add vite-plugin-size
- After that, this library will hot reload into the consuming application

## Scripts

- We've included a couple of helpful scripts for faster development.
- deploy: `npm run deploy -- 'commit message'`
- publish: `npm run publish -- 'commit message' [major|minor|patch]`

## Husky

- Husky configuration is setup to lint and format the repo on every commit
- Edit the `.husky/pre-commit` file to change your settings

## Author

- [Eric Hubbell](http://www.erichubbell.com)
- eric@erichubbell.com
