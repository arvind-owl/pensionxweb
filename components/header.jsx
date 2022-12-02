import axios from "axios";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
export default function Header({ children, headerMenuItems }) {
    const [headerItem, setHeaderItem] = useState([]);
    useEffect(() => {
        axios
          .get(
            "https://dev-sdcera.pantheonsite.io/wp-json/menus/v1/menus/4/?nested=1"
          )
          .then((res) => setHeaderItem(res?.data));
      }, []);
    
    function getUrlSlug(url)
            {
            let slug='';
            let urlArray = url.split('/');
            let urlLength = urlArray.length;
            slug = urlArray[urlLength - 2];
            return slug;
            }
    return (
        <>
          <div className="loader">
                <div className="cssload-thecube">
                    <div className="cssload-cube cssload-c1"></div>
                    <div className="cssload-cube cssload-c2"></div>
                    <div className="cssload-cube cssload-c4"></div>
                    <div className="cssload-cube cssload-c3"></div>
                </div>
            </div>

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
                <nav className="navbar navbar-default navbar-sticky dark bootsnav">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-bars"></i>
                            </button>
                            <Link passHref className="navbar-brand  desktop-only" href="/">
                            <a className="navbar-brand  desktop-only"> <img src="/img/logo.png" className="img-fluid desktop-only" alt="logo" /></a>
                            </Link>
                            <Link passHref className="navbar-brand mobile-only" href="/">
                            <a className="navbar-brand  desktop-only"><img src="/img/mobile-logo.png" className="img-fluid mobile-only" alt="logo" /></a>
                            </Link>
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
                             

                        {headerItem && headerItem.length > 0  && headerItem.map((val, index) => {
                                    return (
                                        <li key={index} className={val.children && val.children.length > 0 ?"dropdown desktop-only":"desktop-only"} >
                                            <Link passHref className={val.children && val.children.length > 0 ? 'list-items dropdown-toggle':"list-items"} data-toggle="dropdown" href={'/'+val?.object+'s/'+getUrlSlug(val?.url)}><a>{val.title?val.title:'#'}</a></Link>
                                        {/* {'/'+val?.object+'/'+val?.object_id} */}
                                        {val.children &&
                                        <ul className="dropdown-menu">
                                             {val.children.length > 0 && val.children.map((sub, i) => {
                                                return (
                                                    <li key={i}><Link passHref href={'/'+sub?.object+'s/'+getUrlSlug(sub?.url)}><a>{sub.title?sub.title:'#'}</a></Link></li>
                                                );
                                            })}
                                            </ul>
                                            }
                                        </li>
                                    );
                                    })}
                                
                                
                                <li className="dropdown desktop-only">
                                    <a className="list-items dropdown-toggle" href="#" data-toggle="dropdown"> 실A Translate </a>
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
        </>
    );

}
