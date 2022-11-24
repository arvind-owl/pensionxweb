import Image from 'next/image';
export default function Header({ children, headerMenu }) {
 
    return (
        <>
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
    
        <nav className="navbar navbar-default navbar-fixed navbar-sticky dark bootsnav">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="index.html">
              <Image src="/img/logo.png" width="200px"  height="100px" className="img-fluid desktop-only" alt="logo" ></Image>
              <Image src="/img/mobile-logo.png" width="200px"  height="100px" className="img-fluid mobile-only" alt="logo" ></Image>
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
              { 
                headerMenu && headerMenu.map((ele,index)=>{
                  return( 
                  <li key={index}>
                    <a className="list-items" href={ele.href}>{ele.linkText}</a>
                  </li>);
                })
              }
             
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
            <a href="" className="btn_fill">Member Login/Registration</a>
          </div>
        </div>
      </div>
    </section>
        </>
);
    }