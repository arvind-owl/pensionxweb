import { NextSeo } from 'next-seo';
import { setEdgeHeader } from '@pantheon-systems/wordpress-kit';

import PageHeader from '../../components/page-header';
import Layout from '../../components/layout';
import { PostGridItem } from '../../components/grid';
import { withGrid, Paginator } from '@pantheon-systems/nextjs-kit';

import { getFooterMenu, getHeaderMenu } from '../../lib/Menus';
import { getLatestPosts } from '../../lib/Posts';

export default function PostsListTemplate({ menuItems, posts, headerMenuItems }) {
	const PostGrid = withGrid(PostGridItem);
	const RenderCurrentItems = ({ currentItems }) => {
		return <PostGrid contentType="posts" data={currentItems} />;
	};

	return (
		<Layout footerMenu={menuItems} headerMenu={headerMenuItems}>
			
			<div className="max-w-screen-lg mx-auto">
			Test
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ res }) {
	const menuItems = await getFooterMenu();
	const headerMenuItems = await getHeaderMenu();
	const posts = await getLatestPosts(100);
	setEdgeHeader({ res });

	return {
		props: {
			menuItems,
			headerMenuItems,
			posts,
		},
	};
}
