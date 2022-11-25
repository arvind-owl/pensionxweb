import  Header from './header';
import Loader from './loader';
import HeaderTop from './headerTop';
import Footer from './footer';
export default function Layout({ children, footerMenu, headerMenu }) {
	

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
			{/* <Loader /> */}
			{/* <HeaderTop />
			<Header headerMenu={headerMenuItems} /> */}
			 <div className="header-top-bar text-white d-none d-sm-block">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-end text-sm-center">
            <ul className="top-left-content">
              <li>
                <i className="fa fa-calendar"></i>
                <b>Pension Payment Calendar</b>
                <span className="check-mailed"> - Check Mailed <b>JULY 29</b>
                </span>
              </li>
              <li className="direct-deposit"> Direct Deposit <b>JULY 31</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   
    <header id="header">
      <div className="container display-none-t">
        <div className="row">
          <div className="header_set">
            <div className="col-md-12 text-right">
              <div className="get-tuch text-left">
                <div className="bs-searchbox">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
              </div>
              <div className="get-tuch text-left">
                <button type="submit" className="btn_fill">Member Login/Registration</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-default navbar-fixed no-background navbar-sticky dark bootsnav">
        <div className="container">
        
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="index.html">
              <img src="/img/logo.png" className="img-fluid desktop-only" alt="logo" />
              <img src="/img/mobile-logo.png" className="img-fluid mobile-only" alt="logo" />
            </a>
          </div>
        
          <div className="collapse navbar-collapse nav_bor_bot" id="navbar-menu">
            <ul className="nav navbar-nav navbar-right nav_3" data-in="fadeInDown" data-out="fadeOutUp">
              <li className="mobile-only">
                <div className="get-tuch text-left">
                  <div className="bs-searchbox">
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                </div>
              </li>
              <li className="mobile-only">
                <div className="get-tuch text-left">
                  <button type="submit" className="btn_Translate">실A Translate</button>
                </div>
              </li>
              <li className="dropdown mobile-only">
                <a href="board.html" className="dropdown-toggle" data-toggle="dropdown">Board of retirements</a>
                <ul className="dropdown-menu animated">
                  <li>
                    <a href="#">Board of retirements - 1</a>
                  </li>
                  <li>
                    <a href="#">Board of retirements - 2</a>
                  </li>
                  <li>
                    <a href="#">Board of retirements - 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="list-items" href="board-information.html">Board of retirements</a>
              </li>
              <li>
                <a className="list-items" href="investments.html">Investments</a>
              </li>
              <li>
                <a className="list-items" href="finance.html">Finance</a>
              </li>
              <li>
                <a className="list-items" href="news.html">News & Media</a>
              </li>
              <li>
                <a className="list-items" href="about.html">About</a>
              </li>
              <li>
                <a className="list-items" href="contact.html">Contact</a>
              </li>
              <li className="dropdown desktop-only">
                <a className="list-items dropdown-toggle" href="#"  data-toggle="dropdown"> 실A Translate </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">English</a>
                  </li>
                  <li>
                    <a href="#">Spanish</a>
                  </li>
                  <li>
                    <a href="#">French</a>
                  </li>
                  <li>
                    <a href="#">Lorem Ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorem Ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorem Ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorem Ipsum</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <section className="registration-section mobile-only">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button type="submit" className="btn_fill">Member Login/Registration</button>
          </div>
        </div>
      </div>
    </section>
			<div className="hero_slider padding-bottom-top-120">
				<div className="container">
					<div className="row">
					<div className="col-sm-12 col-lg-4">
						<h2 className="color_white"> Your retirement <br /> journey begins <br /> here </h2>
						<p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. </p>
						<div className="form-group">
						<input type="text" className="form-control" name="text" placeholder="How can we help you?" />
						<button>
							<i className="fa fa-angle-down"></i>
						</button>
						</div>
					</div>
					</div>
				</div>
				</div>
				<section id="get-started" className="padding">
				<div className="container">
					<div className="row">
					<div className="col-xs-12 text-center">
						<h2>Get Started <span className="d-only m-none">— What you need to know</span>
						</h2>
						<p className="heading_space">Pick the guide for your career stage & needs</p>
					</div>
					</div>
					<div className="row justify-content-center">
					<div className="col-md-4 col-lg-3 col-xs-6 text-center">
						<div className="get-started-content top40">
						<img className="img-fluid default" src="/img/01.png" alt="image" />
						<img className="img-fluid hover" src="/img/1-1.png" alt="image" />
						<h4> NEW TO SDCERA</h4>
						</div>
					</div>
					<div className="col-md-4 col-lg-3 col-xs-6 text-center">
						<div className="get-started-content top40">
						<img className="img-fluid default" src="/img/02.png" alt="image" />
						<img className="img-fluid hover" src="/img/2-2.png" alt="image" />
						<h4>MID-CAREER</h4>
						</div>
					</div>
					<div className="col-md-4 col-lg-3 col-xs-6 text-center">
						<div className="get-started-content top40">
						<img className="img-fluid default" src="/img/03.png" alt="image" />
						<img className="img-fluid hover" src="/img/3-3.png" alt="image" />
						<h4>NEARING RETIREMENT</h4>
						</div>
					</div>
					<div className="col-md-4 col-lg-3 col-xs-6 text-center">
						<div className="get-started-content top40">
						<img className="img-fluid default" src="/img/04.png" alt="image" />
						<img className="img-fluid hover" src="/img/4-4.png" alt="image" />
						<h4>RETIRED</h4>
						</div>
					</div>
					<div className="col-md-4 col-lg-3 col-xs-6 text-center">
						<div className="get-started-content top40">
						<img className="img-fluid default" src="/img/05.png" alt="image" />
						<img className="img-fluid hover" src="/img/5-5.png" alt="image" />
						<h4>LIFE OR CAREER CHANGE</h4>
						</div>
					</div>
					</div>
				</div>
				</section>
				<section className="retire-section">
				<div className="row no-gutters">
					<div className="col-lg-7 mobile-only">
					<div className="thumb">
						<img src="/img/pexels-solvej-nielsen.jpg" alt="img" />
					</div>
					</div>
					<div className="col-lg-4 align-self-center">
					<div className="retire-inner">
						<div className="section-title m-0">
						<h2>How much will <br /> you need to <br /> retire? </h2>
						<p>Find the tools to help you upcoming your retirement income and learn about the options you have to maximize it.</p>
						<button type="submit" className="Check-it-out">Check it out!</button>
						</div>
					</div>
					</div>
					<div className="col-lg-7 desktop-only">
					<div className="thumb">
						<img src="/img/pexels-solvej-nielsen.jpg" alt="img" />
					</div>
					</div>
				</div>
				</section>
				<section id="latest-news" className="bg_light padding">
				<div className="container">
					<div className="row">
					<div className="col-xs-12 text-center mb-5">
						<h2><span className="desktop-only">Stay Informed - </span> Latest News & Updates</h2>
						<p className="heading_space">Check out the latest news, updates, & reports from SDCERA</p>
					</div>
					</div>
					<div className="row top40 desktop-only">
					<div id="news-slider" className="owl-carousel">
						<div className="item">
						<div className="news_item bottom40">
							<div className="image">
							<img src="/img/img01.jpg" alt="listin" className="img-fluid" />
							</div>
							<div className="news_content">
							<div className="news_text">
								<p>News <span className="bullet-circle">•</span> October 29, 2022 </p>
								<h3>
								<a href="#">SDCERA Reports Investments Returns for Fiscal Year 2022</a>
								</h3>
							</div>
							</div>
						</div>
						</div>
						<div className="item">
						<div className="news_item bottom40">
							<div className="image">
							<img src="/img/img02.jpg" alt="listin" className="img-fluid" />
							</div>
							<div className="news_content">
							<div className="news_text">
								<p>News <span className="bullet-circle">•</span> October 29, 2022 </p>
								<h3>
								<a href="#">SDCERA Reports Investments Returns for Fiscal Year 2022</a>
								</h3>
							</div>
							</div>
						</div>
						</div>
						<div className="item">
						<div className="news_item bottom40">
							<div className="image">
							<img src="/img/img03.jpg" alt="listin" className="img-fluid" />
							</div>
							<div className="news_content">
							<div className="news_text">
								<p>News <span className="bullet-circle">•</span> October 29, 2022 </p>
								<h3>
								<a href="#">SDCERA Reports Investments Returns for Fiscal Year 2022</a>
								</h3>
							</div>
							</div>
						</div>
						</div>
						<div className="item">
						<div className="news_item bottom40">
							<div className="image">
							<img src="/img/img01.jpg" alt="listin" className="img-fluid" />
							</div>
							<div className="news_content">
							<div className="news_text">
								<p>News <span className="bullet-circle">•</span> October 29, 2022 </p>
								<h3>
								<a href="#">SDCERA Reports Investments Returns for Fiscal Year 2022</a>
								</h3>
							</div>
							</div>
						</div>
						</div>
						<div className="item">
						<div className="news_item bottom40">
							<div className="image">
							<img src="/img/img02.jpg" alt="listin" className="img-fluid" />
							</div>
							<div className="news_content">
							<div className="news_text">
								<p>News <span className="bullet-circle">•</span> October 29, 2022 </p>
								<h3>
								<a href="#">SDCERA Reports Investments Returns for Fiscal Year 2022</a>
								</h3>
							</div>
							</div>
						</div>
						</div>
						<div className="item">
						<div className="news_item bottom40">
							<div className="image">
							<img src="/img/img03.jpg" alt="listin" className="img-fluid" />
							</div>
							<div className="news_content">
							<div className="news_text">
								<p>News <span className="bullet-circle">•</span> October 29, 2022 </p>
								<h3>
								<a href="#">SDCERA Reports Investments Returns for Fiscal Year 2022</a>
								</h3>
							</div>
							</div>
						</div>
						</div>
						<div className="item">
						<div className="news_item bottom40">
							<div className="image">
							<img src="/img/img01.jpg" alt="listin" className="img-fluid" />
							</div>
							<div className="news_content">
							<div className="news_text">
								<p>News <span className="bullet-circle">•</span> October 29, 2022 </p>
								<h3>
								<a href="#">SDCERA Reports Investments Returns for Fiscal Year 2022</a>
								</h3>
							</div>
							</div>
						</div>
						</div>
						<div className="item">
						<div className="news_item bottom40">
							<div className="image">
							<img src="/img/img02.jpg" alt="listin" className="img-fluid" />
							</div>
							<div className="news_content">
							<div className="news_text">
								<p>News <span className="bullet-circle">•</span> October 29, 2022 </p>
								<h3>
								<a href="#">SDCERA Reports Investments Returns for Fiscal Year 2022</a>
								</h3>
							</div>
							</div>
						</div>
						</div>
						<div className="item">
						<div className="news_item bottom40">
							<div className="image">
							<img src="/img/img03.jpg" alt="listin" className="img-fluid" />
							</div>
							<div className="news_content">
							<div className="news_text">
								<p>News <span className="bullet-circle">•</span> October 29, 2022 </p>
								<h3>
								<a href="#">SDCERA Reports Investments Returns for Fiscal Year 2022</a>
								</h3>
							</div>
							</div>
						</div>
						</div>
						<div className="item">
						<div className="news_item bottom40">
							<div className="image">
							<img src="/img/img01.jpg" alt="listin" className="img-fluid" />
							</div>
							<div className="news_content">
							<div className="news_text">
								<p>News <span className="bullet-circle">•</span> October 29, 2022 </p>
								<h3>
								<a href="#">SDCERA Reports Investments Returns for Fiscal Year 2022</a>
								</h3>
							</div>
							</div>
						</div>
						</div>
						<div className="item">
						<div className="news_item bottom40">
							<div className="image">
							<img src="/img/img02.jpg" alt="listin" className="img-fluid" />
							</div>
							<div className="news_content">
							<div className="news_text">
								<p>News <span className="bullet-circle">•</span> October 29, 2022 </p>
								<h3>
								<a href="#">SDCERA Reports Investments Returns for Fiscal Year 2022</a>
								</h3>
							</div>
							</div>
						</div>
						</div>
						<div className="item">
						<div className="news_item bottom40">
							<div className="image">
							<img src="/img/img03.jpg" alt="listin" className="img-fluid" />
							</div>
							<div className="news_content">
							<div className="news_text">
								<p>News <span className="bullet-circle">•</span> October 29, 2022 </p>
								<h3>
								<a href="#">SDCERA Reports Investments Returns for Fiscal Year 2022</a>
								</h3>
							</div>
							</div>
						</div>
						</div>
						<div className="item">
						<div className="news_item bottom40">
							<div className="image">
							<img src="/img/img01.jpg" alt="listin" className="img-fluid" />
							</div>
							<div className="news_content">
							<div className="news_text">
								<p>News <span className="bullet-circle">•</span> October 29, 2022 </p>
								<h3>
								<a href="#">SDCERA Reports Investments Returns for Fiscal Year 2022</a>
								</h3>
							</div>
							</div>
						</div>
						</div>
						<div className="item">
						<div className="news_item bottom40">
							<div className="image">
							<img src="/img/img02.jpg" alt="listin" className="img-fluid" />
							</div>
							<div className="news_content">
							<div className="news_text">
								<p>News <span className="bullet-circle">•</span> October 29, 2022 </p>
								<h3>
								<a href="#">SDCERA Reports Investments Returns for Fiscal Year 2022</a>
								</h3>
							</div>
							</div>
						</div>
						</div>
						<div className="item">
						<div className="news_item bottom40">
							<div className="image">
							<img src="/img/img03.jpg" alt="listin" className="img-fluid" />
							</div>
							<div className="news_content">
							<div className="news_text">
								<p>News <span className="bullet-circle">•</span> October 29, 2022 </p>
								<h3>
								<a href="#">SDCERA Reports Investments Returns for Fiscal Year 2022</a>
								</h3>
							</div>
							</div>
						</div>
						</div>
						<div className="item">
						<div className="news_item bottom40">
							<div className="image">
							<img src="/img/img01.jpg" alt="listin" className="img-fluid" />
							</div>
							<div className="news_content">
							<div className="news_text">
								<p>News <span className="bullet-circle">•</span> October 29, 2022 </p>
								<h3>
								<a href="#">SDCERA Reports Investments Returns for Fiscal Year 2022</a>
								</h3>
							</div>
							</div>
						</div>
						</div>
						<div className="item">
						<div className="news_item bottom40">
							<div className="image">
							<img src="/img/img02.jpg" alt="listin" className="img-fluid" />
							</div>
							<div className="news_content">
							<div className="news_text">
								<p>News <span className="bullet-circle">•</span> October 29, 2022 </p>
								<h3>
								<a href="#">SDCERA Reports Investments Returns for Fiscal Year 2022</a>
								</h3>
							</div>
							</div>
						</div>
						</div>
						<div className="item">
						<div className="news_item bottom40">
							<div className="image">
							<img src="/img/img03.jpg" alt="listin" className="img-fluid" />
							</div>
							<div className="news_content">
							<div className="news_text">
								<p>News <span className="bullet-circle">•</span> October 29, 2022 </p>
								<h3>
								<a href="#">SDCERA Reports Investments Returns for Fiscal Year 2022</a>
								</h3>
							</div>
							</div>
						</div>
						</div>
					</div>
					</div>
					<div className="row mobile-only">
					<div className="col-12 col-md-4">
						<div className="news_item bottom40">
						<div className="news_content">
							<div className="news_text">
							<h5>News <span className="bullet-circle">•</span> October 29, 2022 </h5>
							<h3>
								<a href="#">SDCERA Issues Website Redesign Request for Proposal</a>
							</h3>
							</div>
						</div>
						</div>
					</div>
					<div className="col-12 col-md-4">
						<div className="news_item mb-0">
						<div className="news_content">
							<div className="news_text">
							<h5>News <span className="bullet-circle">•</span> October 29, 2022 </h5>
							<h3>
								<a href="#">SDCERA Issues Website Redesign Request for Proposal</a>
							</h3>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
				</section>
    
				<section id="upcoming" className="desktop-only">
				<div className="container">
					<div className="row">
					<div className="col-sm-1 col-md-2"></div>
					<div className="col-xs-12 col-sm-10 col-md-8 text-center mb-4">
						<h2>Upcoming</h2>
					</div>
					<div className="col-sm-1 col-md-2"></div>
					</div>
					<div className="row">
					<div id="nospace-filter" className="cbp-l-filters-alignCenter">
						<div data-filter="*" className="cbp-filter-item-active cbp-filter-item">All</div>
						<div data-filter=".Webinars" className="cbp-filter-item">Webinars</div>
						<div data-filter=".BoardMeetings" className="cbp-filter-item">Board Meetings</div>
					</div>
					<div id="nospace" className="cbp">
						<div className="cbp-item Webinars BoardMeetings">
						<div className="event-item clearfix">
							<div className="event-image">
							<div className="post-date">
								<small className="month">OCT</small>
								<br />
								<span className="date">10</span>
							</div>
							</div>
							<div className="event-content">
							<div className="event-title mb-15">
								<h3 className="title"> Barcelona Food truck Festival 2018 </h3>
								<span className="ticket-price yellow-color">10:30am PST</span>
							</div>
							</div>
						</div>
						</div>
						<div className="cbp-item Webinars BoardMeetings">
						<div className="event-item clearfix">
							<div className="event-image">
							<div className="post-date">
								<small className="month">NOV</small>
								<br />
								<span className="date">12</span>
							</div>
							</div>
							<div className="event-content">
							<div className="event-title mb-15">
								<h3 className="title"> Barcelona Food truck Festival 2018 </h3>
								<span className="ticket-price yellow-color">10:30am PST</span>
							</div>
							</div>
						</div>
						</div>
						<div className="cbp-item Webinars BoardMeetings">
						<div className="event-item clearfix">
							<div className="event-image">
							<div className="post-date">
								<small className="month">DEC</small>
								<br />
								<span className="date">11</span>
								<br />
							</div>
							</div>
							<div className="event-content">
							<div className="event-title mb-15">
								<h3 className="title"> Barcelona Food truck Festival 2018 </h3>
								<span className="ticket-price yellow-color">10:30am PST</span>
								<span className="ticket-price calcelled">Cancelled</span>
							</div>
							</div>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-12 text-center">
					<ul className="upcoming-events">
						<li>
						<i className="fa fa-file"></i> Most Recent Agenda
						</li>
						<li>
						<i className="fa fa-calendar"></i> Full Calendar JULY 29
						</li>
					</ul>
					</div>
				</div>
				</section>
				<section id="upcoming" className="mobile-only padding">
				<div className="container">
					<div className="row">
					<div className="col-sm-1 col-md-2"></div>
					<div className="col-xs-12 col-sm-10 col-md-8 text-center">
						<h2>Upcoming</h2>
					</div>
					<div className="col-sm-1 col-md-2"></div>
					</div>
					<div className="row mb-4">
					<div className="col-lg-12 text-center">
						<ul className="upcoming-events">
						<li>
							<i className="fa fa-file"></i> Barcelona Food truck Festival 2018
						</li>
						<li>
							<i className="fa fa-calendar"></i> Full Calendar
						</li>
						</ul>
					</div>
					</div>
					<div className="row">
					<div className="col-md-4">
						<div className="event-item">
						<div className="event-image">
							<div className="post-date">
							<small className="month">OCT</small>
							<br />
							<span className="date">10</span>
							</div>
						</div>
						<div className="event-content">
							<div className="event-title mb-15">
							<h3 className="title"> Barcelona Food truck Festival 2018 </h3>
							<span className="ticket-price yellow-color">10:30am PST</span>
							</div>
						</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="event-item">
						<div className="event-image">
							<div className="post-date">
							<small className="month">OCT</small>
							<br />
							<span className="date">10</span>
							</div>
						</div>
						<div className="event-content">
							<div className="event-title mb-15">
							<h3 className="title"> Barcelona Food truck Festival 2018 </h3>
							<span className="ticket-price yellow-color">10:30am PST</span>
							</div>
						</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="event-item">
						<div className="event-image">
							<div className="post-date">
							<small className="month">OCT</small>
							<br />
							<span className="date">10</span>
							</div>
						</div>
						<div className="event-content">
							<div className="event-title mb-15">
							<h3 className="title"> Board of Directors Meeting </h3>
							<span className="ticket-price yellow-color">10:30am PST</span>
							<span className="ticket-price calcelled">Cancelled</span>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
				</section>
   
				<section className="life-events">
				<div className="container">
					<div className="row">
					<div className="col-md-6 col-lg-offset-1 col-lg-6">
						<h6>We can help you manage</h6>
						<h3>Life Events</h3>
						<p>Life is full of excitement, twists, and turns. Click on any of the <br /> common milestones listed here for insights and guidance on how they <br /> might affect your plan. </p>
						<button type="submit" className="desktop-only view-more-btn">View More</button>
					</div>
					<div className="col-md-6 col-lg-5">
						<ul className="fa-ul">
						<li>
							<i className="fa fa-check"></i> MARRIAGE
						</li>
						<li>
							<i className="fa fa-check"></i> BIRTH / ADOPTION
						</li>
						<li>
							<i className="fa fa-check"></i> DIVORCE
						</li>
						<li>
							<i className="fa fa-check"></i> ILLNESS / DISABILITY
						</li>
						<li>
							<i className="fa fa-check"></i> JOB CHANGE
						</li>
						<li>
							<i className="fa fa-check"></i> DEATH
						</li>
						</ul>
						<button type="submit" className="mobile-only view-more-btn">View More</button>
					</div>
					</div>
				</div>
				</section>
   
				<section className="life-events-img">
				<div className="container-fluid">
					<div className="row">
					<img className="img-fluid" src="/img/bg-footer-1.jpg" alt="" />
					</div>
				</div>
				</section>
			<Footer headerMenu={footerMenuItems}>
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
