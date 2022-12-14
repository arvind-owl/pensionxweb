import Link from 'next/link';
import axios from "axios";
import React, { useState, useEffect,useRef } from "react";
export default function Footer({ children, footerMenuItems }) {
  const [siteLogo, setSiteLogo] = useState([]);
  
  const [reloadItem, setReloadItem] = useState(0);
  const [allImages, setAllImage]=useState([]);
  const [isAlreadyImages, setIsAlreadyImages]=useState([]);
  useEffect(() => {
    axios
      .get(
        "https://dev-sdcera.pantheonsite.io/wp-json/"
      )
      .then((res) => setSiteLogo(res?.data));
  }, []);
  const  getImageUrl=(imageId)=> {
    let isAlready = false;
    isAlreadyImages && isAlreadyImages.length > 0 && isAlreadyImages.map((item)=>{
      
        if(item==imageId)
        {
            isAlready = true;
        }
        
    });
    if(!isAlready)
        {
          getMediaUrlById(imageId);
        }
    let srcurl = allImages && allImages.filter((item)=>item.id==imageId);
 
    let url = srcurl && srcurl.length > 0  && srcurl[0] && srcurl[0].Url;
    return url;

  }
  const getMediaUrlById=(id)=>{
   
let isAlready = false;
    isAlreadyImages && isAlreadyImages.length > 0 && isAlreadyImages.map((item)=>{
      
        if(item==id)
        {
            isAlready = true;
        }
        
    });
  
    if(!isAlready)
        {
          setIsAlreadyImages((arr) => [...arr,id]);
axios.get("https://dev-sdcera.pantheonsite.io/wp-json/wp/v2/media/"+id).then((res)=>{

if(res)
{
let pdata = res.data;
let cont = pdata?.content?.rendered;
pdata.content = cont;

let excerpt = pdata?.excerpt?.rendered;
pdata.excerpt = excerpt;

let guid = pdata?.guid?.rendered;
pdata.guid = guid;

let title = pdata?.title?.rendered;
pdata.title = title;

let newImageArray = {'id':id,"Url":pdata.guid};

setAllImage((arr) => [...arr,newImageArray]);
setReloadItem(!reloadItem);
}
})
        }

}

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
                        <img className="img-fluid mb-20 logo" src={getImageUrl(siteLogo.site_logo).toString()} />
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
                                    <Link passHref href={menu.href}><a>{menu.linkText?menu.linkText:'#'}</a></Link>
                                    </li>)
                            })}
                        </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 desktop-only">
                        <div className="widget dark">
                        <h4 className="widget-title">Didn&apos;t find what you were looking for?</h4>
                        <h3>
                            <Link passHref href="/contact"><a>Leave us Feedback</a></Link>
                        </h3>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
           
        </>
    );
}