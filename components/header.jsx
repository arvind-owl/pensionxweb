export default function Header({ children, headerMenu }) {
    return (
        <>
        <header id="header">
      <div class="container display-none-t">
        <div class="row">
          <div class="header_set">
            <div class="col-md-12 text-right">
              <div class="get-tuch text-left">
                <div class="bs-searchbox">
                  <input type="text" class="form-control" placeholder="Search" />
                </div>
              </div>
              <div class="get-tuch text-left">
                <button type="submit" class="btn_fill">Member Login/Registration</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-default navbar-fixed no-background navbar-sticky dark bootsnav">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
              <i class="fa fa-bars"></i>
            </button>
            <a class="navbar-brand" href="index.html">
              <img src="img/logo.png" class="img-fluid desktop-only" alt="logo" />
              <img src="img/mobile-logo.png" class="img-fluid mobile-only" alt="logo" />
            </a>
          </div>
         
          <div class="collapse navbar-collapse nav_bor_bot" id="navbar-menu">
            <ul class="nav navbar-nav navbar-right nav_3" data-in="fadeInDown" data-out="fadeOutUp">
              <li class="mobile-only">
                <div class="get-tuch text-left">
                  <div class="bs-searchbox">
                    <input type="text" class="form-control" placeholder="Search" />
                  </div>
                </div>
              </li>
              <li class="mobile-only">
                <div class="get-tuch text-left">
                  <button type="submit" class="btn_Translate">실A Translate</button>
                </div>
              </li>
              <li class="dropdown mobile-only">
                <a href="board.html" class="dropdown-toggle" data-toggle="dropdown">Board of retirements</a>
                <ul class="dropdown-menu animated">
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
                <a class="list-items" href="board-information.html">Board of retirements</a>
              </li>
              <li>
                <a class="list-items" href="investments.html">Investments</a>
              </li>
              <li>
                <a class="list-items" href="finance.html">Finance</a>
              </li>
              <li>
                <a class="list-items" href="news.html">News & Media</a>
              </li>
              <li>
                <a class="list-items" href="about.html">About</a>
              </li>
              <li>
                <a class="list-items" href="contact.html">Contact</a>
              </li>
              <li class="dropdown desktop-only">
                <a class="list-items" href="#" className="dropdown-toggle" data-toggle="dropdown"> 실A Translate </a>
                <ul class="dropdown-menu">
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
        <section class="registration-section mobile-only">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <button type="submit" class="btn_fill">Member Login/Registration</button>
          </div>
        </div>
      </div>
    </section>
        </>
);
    }