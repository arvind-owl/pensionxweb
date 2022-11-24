import { NextSeo } from 'next-seo';
import { setEdgeHeader } from '@pantheon-systems/wordpress-kit';
import { ContentWithImage } from '@pantheon-systems/nextjs-kit';
import { IMAGE_URL } from '../../lib/constants';

import Layout from '../../components/layout';

import { getFooterMenu, getHeaderMenu } from '../../lib/Menus';
import { getPostBySlug } from '../../lib/Posts';

export default function PostTemplate({ menuItems,headerMenuItems, post }) {
	return (
		<Layout footerMenu={menuItems} headerMenu={headerMenuItems} >
			<NextSeo
			title="SDCERA"
			description="San Diego Couty Employees Retirement Association"
			/>
			<ContentWithImage
				title={post.title}
				content={post.content}
				date={new Date(post.date).toLocaleDateString('en-US', {
					timeZone: 'UTC',
				})}
				imageProps={
					post.featuredImage
						? {
								src: post.featuredImage?.node.sourceUrl,
								alt: post.featuredImage?.node.altText,
						  }
						: undefined
				}
			/>
		</Layout>
	);
}

export async function getServerSideProps({ params, res }) {

	const menuItems = '';//await getFooterMenu();
	const headerMenuItems = await getHeaderMenu();
	const { slug } = params;
	const post = await getPostBySlug(slug);
	setEdgeHeader({ res });

	if (!post) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			headerMenuItems,
			menuItems,
			post,
		},
	};
}
