import  Header from './header';
import Loader from './loader';
import HeaderTop from './headerTop';
import Slider from './slider';
import Footer from './footer';
export default function Layout({ children, footerMenu, headerMenu }) {
	const navItems = [
		
		{
			linkText: '🏠 Home',
			href: '/',
		},
		{
			linkText: '📰 Posts',
			href: '/posts',
		},
		{
			linkText: '📑 Pages',
			href: '/pages',
		},
		{
			linkText: '⚛️ Examples',
			href: '/examples',
		},
	];

	const headerMenuItems = headerMenu && headerMenu?.map(({ path, label }) => ({
		linkText: label,
		href: path,
		parent: null,
	}));
	const footerMenuItems = footerMenu && footerMenu?.map(({ path, label }) => ({
		linkText: label,
		href: path,
		parent: null,
	}));
	return (
		<>
		<div className="min-h-screen max-h-screen min-w-screen max-w-screen flex flex-col">
			<Loader />
			<HeaderTop />
			<Header headerMenu={headerMenuItems} />
			<Slider />
			<main className="mb-auto">{children}</main>
			<Footer footerMenuItems={footerMenuItems}>
				<span className="mx-auto">
					© {new Date().getFullYear()} Built with{' '}
					<a
						className="text-white hover:text-blue-100 underline"
						href="https://nextjs.org/"
					>
						Next.js
					</a>{' '}
					and{' '}
					<a
						className="text-blue-500 underline hover:text-blue-100"
						href="https://wordpress.com/"
					>
						WordPress
					</a>
				</span>
			</Footer>
		</div>
		 </>);
}
