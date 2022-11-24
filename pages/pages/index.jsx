import { NextSeo } from 'next-seo';
import { setEdgeHeader } from '@pantheon-systems/wordpress-kit';

import { PageGridItem } from '../../components/grid';
import { withGrid, Paginator } from '@pantheon-systems/nextjs-kit';
import Layout from '../../components/layout';
import PageHeader from '../../components/page-header';

import { getFooterMenu, getHeaderMenu } from '../../lib/Menus';
import { getLatestPages } from '../../lib/Pages';

export default function PageListTemplate({ menuItems, headerMenuItems, pages }) {
	const PagesGrid = withGrid(PageGridItem);

	const RenderCurrentItems = ({ currentItems }) => {
		return <PagesGrid contentType="pages" data={currentItems} />;
	};

	return (
		<Layout footerMenu={menuItems} headerMenu={headerMenuItems}>
			<NextSeo
				title="SDCERA"
				description="San Diego Couty Employees Retirement Association"
			/>
			<div className="max-w-screen-lg mx-auto">
				<section>
					<PageHeader title="Pages" />
					<Paginator
						data={pages}
						itemsPerPage={12}
						Component={RenderCurrentItems}
					/>
				</section>
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ res }) {
	const menuItems = '';//await getFooterMenu();
	const headerMenuItems = await getHeaderMenu();
	const pages = await getLatestPages(100);
	setEdgeHeader({ res });

	return {
		props: {
			headerMenuItems,
			menuItems,
			pages,
		},
	};
}
