import Link from 'next/link';
export default function Footer({ children, footerMenuItems }) {
    return (
        <>
        <section id="contact" className="bg-color-blue">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-12 text-center">
            <div className="get-tuch">
              <i className="fa fa-phone"></i>
              <ul>
                <li>
                  <h4>Phone Number</h4>
                </li>
                <li>
                  <p>(619) 515-6800, TTY: (888) 888-8888</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12 text-center">
            <div className="get-tuch">
              <i className="fa fa-home"></i>
              <ul>
                <li>
                  <h4>2275 Rio Bonito Way UNIT 200, </h4>
                </li>
                <li>
                  <p>San Diego, CA 92108</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12 text-center">
            <div className="get-tuch">
              <i className="fa fa-envelope"></i>
              <ul>
                <li>
                  <h4>Email Address</h4>
                </li>
                <li>
                  <a href="#">
                    <p>info@abcdef.com</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
            <footer id="footer" className="footer">
                <div className="container pt-70 pb-40">
                    <div className="row">
                    <div className="col-sm-6 col-md-5">
                        <div className="widget dark">
                        <img className="img-fluid mb-20" src="/img/logo.png" />
                        <p className="address">2275 Rio Bonito Way UNIT 200, San <br/> Diego, CA 92108 </p>
                        <p className="office-timing">M-F 8:00 am - 5:00pm</p>
                        <p className="tel-nio">(619) 515-6800 <br/> TTY: (888) 888-8888 </p>
                        </div>
                    </div>
                   
                    <div className="col-sm-6 col-md-4 mobile-only">
                        <div className="widget dark">
                        <h4 className="widget-title">Didn&apos;t find what you were looking for?</h4>
                        <h3>Leave us Feedback</h3>
                        </div>
                    </div>
                   
                    <div className="col-sm-6 col-md-3">
                        <div className="widget dark">
                        <ul className="list angle-double-right list-border">
                            {footerMenuItems && footerMenuItems.length > 0 && footerMenuItems.map((menu,index)=>{
                                return (<li key={index}>
                                    <Link passHref href={'/pages'+menu.href}><a>{menu.linkText?menu.linkText:'#'}</a></Link>
                                    </li>);
                            })}
                        </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 desktop-only">
                        <div className="widget dark">
                        <h4 className="widget-title">Didn&apos;t find what you were looking for?</h4>
                        <h3>
                            <Link passHref href="/pages/contact"><a>Leave us Feedback</a></Link>
                        </h3>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
            <script type="text/javascript">
                            function googleTranslateElementInit() {
                                new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element')
                                }
</script>
        </>
    );
}