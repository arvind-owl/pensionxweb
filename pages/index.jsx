import { NextSeo } from 'next-seo';
import { setEdgeHeader } from '@pantheon-systems/wordpress-kit';

import Image from 'next/image';
import Layout from '../components/layout';
import { PostGridItem } from '../components/grid';
import { withGrid } from '@pantheon-systems/nextjs-kit';

import { getFooterMenu, getHeaderMenu } from '../lib/Menus';
import { getLatestPosts } from '../lib/Posts';

export default function Home({ menuItems, headerMenuItems }) {
	

	
	return (
		<Layout footerMenu={menuItems} headerMenu={headerMenuItems} >
			<NextSeo
				title="SDCERA"
				description="San Diego Couty Employees Retirement Association"
			/>
			
		</Layout>
	);
}

export async function getServerSideProps({ res }) {
	const menuItems = '';//await getFooterMenu();
	const headerMenuItems = await getHeaderMenu();
	
	setEdgeHeader({ res });

	return {
		props: {
			headerMenuItems,
			menuItems
		},
	};
}
