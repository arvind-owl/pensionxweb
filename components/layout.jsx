import  Header from './header';
import Footer  from './footer';

export default function Layout({ children, footerMenu, headerMenu }) {
	

	const navItems = headerMenu?.map(({ path, label }) => ({
		linkText: label,
		href: path,
		parent: null,
	}));

	const footerMenuItems = footerMenu?.map(({ path, label }) => ({
		linkText: label,
		href: path,
		parent: null,
	}));
	return (
		<div className="min-h-screen max-h-screen min-w-screen max-w-screen flex flex-col">
			<Header headerMenuItems={navItems} />
			<div>{children}</div>
			<Footer footerMenuItems={footerMenuItems} />
		</div>
	)
}
