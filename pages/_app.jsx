import '../public/css/bootsnav.css';
import '../public/css/animate.min.css';
import '../public/css/bootstrap.min.css';
import '../public/css/font-awesome.min.css';
import '../public/css/cubeportfolio.min.css';
import '../public/css/owl.carousel.css';
import '../public/css/style.css';
import '../public/css/owl.transitions.css';
import '../public/img/short_icon.png';
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
		 </>);
}

export default MyApp;
