import '../public/css/bootsnav.css';
import '../public/css/animate.min.css';
import '../public/css/bootstrap.min.css';
import '../public/css/font-awesome.min.css';
import '../public/css/cubeportfolio.min.css';
import '../public/css/owl.carousel.css';
import '../public/css/owl.transitions.css';
import '../public/css/style.css';
import '@pantheon-systems/nextjs-kit/style.css';
import Script from 'next/script'
function MyApp({ Component, pageProps }) {
	return (
		<>
		  <Script src="../../js/jquery-3.2.1.min.js" strategy="beforeInteractive" />
		  <Script src="../../js/bootstrap.min.js" strategy="beforeInteractive" />
		  <Script src="../../js/bootsnav.js" strategy="beforeInteractive" />
		  <Script src="../../js/owl.carousel.min.js" strategy="beforeInteractive" />
		  <Script src="../../js/cubeportfolio.min.js" strategy="beforeInteractive" />
		  <Script src="../../js/wow.min.js" strategy="beforeInteractive" />
		  <Script src="../../js/jquery.themepunch.revolution.min.js" strategy="beforeInteractive" />
		  <Script src="../../js/revolution.extension.video.min.js" strategy="beforeInteractive" />
		  <Script src="../../js/functions.js" strategy="beforeInteractive"  />
		  <Component {...pageProps} />;
		  </>);
}

export default MyApp;
