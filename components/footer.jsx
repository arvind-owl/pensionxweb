import Image from 'next/image';
export default function Footer({ children, headerMenu }) {
    return (<>
    <footer id="footer" className="footer">
      <div className="container pt-70 pb-40">
        <div className="row">
          <div className="col-sm-6 col-md-5">
            <div className="widget dark">
              <Image className="img-fluid" alt="logo" src="/img/logo.png" width="200px"  height="100px" ></Image>
              <p className="address">2275 Rio Bonito Way UNIT 200, San <br /> Diego, CA 92108 </p>
              <p className="office-timing">M-F 8:00 am - 5:00pm</p>
              <p className="tel-nio">(619) 515-6800 <br /> TTY: (888) 888-8888 </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mobile-only">
            <div className="widget dark">
              <h4 className="widget-title"> Didn&lsquo;t find what you were looking for? </h4>
              <h3>Leave us Feedback</h3>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="widget dark">
              <ul className="list angle-double-right list-border">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="faq.html">FAQ&lsquo;s </a>
                </li>
                <li>
                  <a href="work.html">Work at SDCERA</a>
                </li>
                <li>
                  <a href="education.html">Education </a>
                </li>
                <li>
                  <a href="webinars-Seminars.html">Webinars and Seminars</a>
                </li>
                <li>
                  <a href="board-information.html">Board Information</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 desktop-only">
            <div className="widget dark">
              <h4 className="widget-title">Didn&lsquo;t find what you were looking for?</h4>
              <h3>
                <a href="contact.html">Leave us Feedback</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
    </>);
}