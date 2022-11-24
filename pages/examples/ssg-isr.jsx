import { NextSeo } from 'next-seo';

import PageHeader from '../../components/page-header';
import Layout from '../../components/layout';
import { PostGridItem } from '../../components/grid';
import { withGrid } from '@pantheon-systems/nextjs-kit';

import { getFooterMenu } from '../../lib/Menus';
import { getLatestPosts } from '../../lib/Posts';

export default function SSGISRExampleTemplate({ menuItems, posts }) {
	const PostGrid = withGrid(PostGridItem);
	return (
		<Layout footerMenu={menuItems}>
			<NextSeo
			title="SDCERA"
			description="San Diego Couty Employees Retirement Association"
			/>
			<PageHeader title="Posts" />
			<div className="mt-8 prose lg:prose-xl max-w-lg mx-auto lg:grid-cols-3 lg:max-w-screen-lg">
				<p>
					<em>
						By default, this starter kit is optimized for SSR and Edge Caching
						on Pantheon. This example instead uses Incremental Static
						Regeneration and is provided as a reference for cases where Next.js
						static generation options would be beneficial.
					</em>
				</p>
			</div>
			<section>
				<PostGrid contentType="posts" data={posts} />
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	const menuItems = await getFooterMenu();
	const posts = await getLatestPosts(100);

	return {
		props: {
			menuItems,
			posts,
		},
		revalidate: 60,
	};
}
