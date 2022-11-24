export default function HeaderTop() {
    return (
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
      );
}