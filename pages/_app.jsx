//import '../styles/globals.css';
import Script from 'next/script'
import Link from 'next/link'
import '@pantheon-systems/nextjs-kit/style.css';

function MyApp({ Component, pageProps }) {
	return (<>
	
	<Component {...pageProps} />
	
		<Script src="/js/jquery-3.2.1.min.js" />
		 <Script src="/js/bootstrap.min.js" />
		 <Script src="/js/bootsnav.js" />
		 <Script src="/js/owl.carousel.min.js" />
		 <Script src="/js/cubeportfolio.min.js" />
		 <Script src="/js/wow.min.js" />
		 <Script src="/js/jquery.themepunch.revolution.min.js" />
		 <Script src="/js/revolution.extension.video.min.js" />
		 <Script src="/js/functions.js" />
		 <Link rel="shortcut icon" href="/img/short_icon.png" />
		 <Link rel="stylesheet" type="text/css" href="/css/bootsnav.css" />
		 <Link rel="stylesheet" type="text/css" href="/css/animate.min.css" />
		 <Link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
		 <Link rel="stylesheet" type="text/css" href="/css/font-awesome.min.css" />
		 <Link rel="stylesheet" type="text/css" href="/css/cubeportfolio.min.css" />
		 <Link rel="stylesheet" type="text/css" href="/css/owl.carousel.css" />
		 <Link rel="stylesheet" type="text/css" href="/css/owl.transitions.css" />
		 <Link rel="stylesheet" type="text/css" href="/css/style.css" />
		
		 </>);
}

export default MyApp;
