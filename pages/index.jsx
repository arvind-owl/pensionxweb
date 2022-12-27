import { NextSeo } from 'next-seo';
import { setEdgeHeader } from '@pantheon-systems/wordpress-kit';
import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import dayjs from 'dayjs';
import Head from "next/head";
import Layout from '../components/layout';
import Link from 'next/link';
import { getFooterMenu,getHeaderMenu } from '../lib/Menus';
import { getLatestPosts } from '../lib/Posts';
import { REACT_LOADABLE_MANIFEST } from 'next/dist/shared/lib/constants';

export default function Home({ menuItems, posts, headerMenuItems }) {
  const [banner, setBanner] = useState();
  const [postsData, setPostsData]= useState();
  const [categoriesData, setCategoriesData]= useState([]);
  const [eventCategories, setEventCategories] = useState([]);
  const [homePageBannerImage, setHomePageBannerImage] = useState();
  const [eventPosts, setEventPosts] = useState([]);
  const [reloadItem, setReloadItem] = useState(0);
  const [allImages, setAllImage]=useState([]);
  const [isAlreadyImages, setIsAlreadyImages]=useState([]);
    let [currentSlide, setCurrentSlide] = useState(0);
    let [translateVal, setTranslateVal]= useState(0);

    const [headerNewItem, setHeaderNewItem] = useState([]);

    useEffect(()=>{
      getMainMenus();
  
    },[])
    const getMainMenus = ()=>{
      axios
      .get(
        "https://dev-sdcera.pantheonsite.io/wp-json/menus/v1/menus/4/?nested=1"
      )
      .then((res) => setHeaderNewItem(res?.data));
    }


  useEffect(() => {
   
  },[reloadItem]);
  const activeOwlSide=(index)=>{
    let calTranslate = 0;
    let calNewTranslate = 0;
    if(index==1 || index==0)
    {
      calNewTranslate = 0;
    }
    else if(index == postsData.legnth - 1)
    {
      calNewTranslate = (postsData.legnth - 1) * -25;
    }
    else
    {
      calNewTranslate = -25 * (index - 1);
    }
    
    setCurrentSlide(index);
    setTranslateVal(calNewTranslate);
    setReloadItem(!reloadItem);
  }

  const prevOwlSide=(index)=>{
    
   
    let calTranslate = 0;
    let calNewTranslate = 0;
    if(currentSlide==0)
    {
      calNewTranslate = 0;
      setCurrentSlide(index);
    }
    else if(index == postsData.length - 1)
    {
      calNewTranslate = ((currentSlide - 2) * -25);
      setCurrentSlide(index - 1);
    }
    else
    {
      calNewTranslate = translateVal - (-25);
      setCurrentSlide(index - 1);
    }

    setTranslateVal(calNewTranslate);
    setReloadItem(!reloadItem);
  }

  const nextOwlSide=(index)=>{
    
    let calTranslate = 0;
    let calNewTranslate = 0;
    if((currentSlide)==0)
    {
      calNewTranslate = 0;
      setCurrentSlide(index + 1);
    }
    else if(index == postsData.length - 1)
    {
      calNewTranslate = (postsData.length - 1) * -25;
      setCurrentSlide(0);
    }
    else
    {
      calNewTranslate = -25 * (currentSlide);
      setCurrentSlide(index + 1);
    }
    
    setTranslateVal(calNewTranslate);
    setReloadItem(!reloadItem);
  }
  useEffect(() => {
    axios.get("https://dev-sdcera.pantheonsite.io/wp-json/wp/v2/pages?slug=home").then((res) => setBanner(res?.data[0]));
  
    }, []);

    useEffect(() => {
      getPostsByCategories();
      getCategoryNames();
      getEventCategories();
      getEventPosts();
    },[banner]);

	const getEventCategories=()=>{
    axios
    .get(
      "https://dev-sdcera.pantheonsite.io/wp-json/wp/v2/eventcategory"
    )
    .then((res) =>setEventCategories(res?.data));
  }
  const  getEventPosts=()=>{
    let categories = banner?.acf?.upcoming_event_event_categories;
  if(categories && categories.length > 0 )
  {
    let categoriesIds = '';
    categories.map((cat,ind)=>{
      if(ind==0)
      {
        categoriesIds = cat;
      }
      else
      {
        categoriesIds = categoriesIds +", "+ cat;
      }
      
    });
    if(categoriesIds)
    {
    axios
    .get(
      "https://dev-sdcera.pantheonsite.io/wp-json/wp/v2/event?per_page="+banner?.acf?.upcoming_event_no_of_events+"&order=desc&status=publish&categories="+categoriesIds
    )
    .then((res) =>{
      let allupdate = false;
        res?.data && res?.data.length > 0 && res?.data.map((pdata,index)=>{
        let cont = pdata?.content?.rendered;
        res.data[index].content = cont;

        let excerpt = pdata?.excerpt?.rendered;
        res.data[index].excerpt = excerpt;

        let guid = pdata?.guid?.rendered;
        res.data[index].guid = guid;

        let title = pdata?.title?.rendered;
        res.data[index].title = title;
        
        if(index == res?.data.length - 1)
        {
          allupdate = true;
        }
      }) 
      if(allupdate)
      {
        setEventPosts(res?.data);
      }
     
    });
  }
  else
  {
    return 'No Category selected ! Please choose any one category from admin.';
  }

}
else
  {
    return 'No Category selected ! Please choose any one category from admin.';
  }
  }
 
  const getPostsByCategories=()=>{
    let categories = banner?.acf?.stay_informed_post_category;
  if(categories && categories.length > 0 )
  {
    let categoriesIds = '';
    categories.map((cat,ind)=>{
      if(ind==0)
      {
        categoriesIds = cat;
      }
      else
      {
        categoriesIds = categoriesIds +", "+ cat;
      }
      
    });
    if(categoriesIds)
    {
      axios
      .get(
        "https://dev-sdcera.pantheonsite.io/wp-json/wp/v2/posts?per_page="+banner?.acf?.stay_informed_no_of_posts+"&order=desc&status=publish&categories="+categoriesIds
      )
      .then((res) => { 
        let allupdate = false;
        res?.data && res?.data.length > 0 && res?.data.map((pdata,index)=>{
        let cont = pdata?.content?.rendered;
        res.data[index].content = cont;

        let excerpt = pdata?.excerpt?.rendered;
        res.data[index].excerpt = excerpt;

        let guid = pdata?.guid?.rendered;
        res.data[index].guid = guid;

        let title = pdata?.title?.rendered;
        res.data[index].title = title;
        if(index == res?.data.length - 1)
        {
          allupdate = true;
        }
      }) 
      if(allupdate)
      {
        setPostsData(res?.data);
      }
        
       
     
     
    })
  

  }
  else
  {
    return 'No Category selected ! Please choose any one category from admin.';
  }

}
else
  {
    return 'No Category selected ! Please choose any one category from admin.';
  }
  }
  const  getCategoryNames=()=>{
  axios
  .get(
    "https://dev-sdcera.pantheonsite.io/wp-json/wp/v2/categories"
  )
  .then((res) => setCategoriesData(res?.data));
}

const getCatnameById=(id)=>{
  
  let result = categoriesData.filter((ele)=>ele.id==id);
  if(result && result.length > 0 )
  {
    return result[0].name;
  }
  else
  {
    return '';
  }
  
}


const  getEventCatnameById=(id)=>{
  
  let result = eventCategories.filter((ele)=>ele.id==id);
  if(result && result.length > 0 )
  {
    return result[0].name;
  }
  else
  {
    return '';
  }
  
}

const  getEventCatslugById=(id)=>{
  
  let result = eventCategories.filter((ele)=>ele.id==id);
  if(result && result.length > 0 )
  {
    return 'cbp-item '+result[0].slug;
  }
  else
  {
    return 'cbp-item';
  }
  
}

const getEventCats=(data)=>{
  let catNames='';
    data && data.length>0 && data.map((cat,ind)=>{
      let result = eventCategories.filter((ele)=>ele.id==cat);
      if(result && result.length > 0 )
      {
        catNames = catNames +' '+ result[0].slug;
      }
      else
      {
        return '';
      }
  
    })
    return catNames;
}
const  getCovertMonthFormat=(dat)=>{
  const months = [
    "JAN", "FEB", 
    "MAR", "APR", "MAY", 
    "JUN", "JUL", "AUG",
    "SEP", "OCT", 
    "NOV", "DEC"
];
let mon = dat.substring(4, 6);

  let dateFormat = months[mon-1];

  return dateFormat;
}

const  getCovertTimeFormat=(tim)=>{
  let time = tim.substring(0, 2);
  let onlytime = tim.substring(0, 5);
  if(time > 12)
  {
      return onlytime+' pm';
  }
  else
  {
    return onlytime+' am';
  }
}

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
              if(id!=null && id!=undefined && id!='')
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
                }      }
  
}

const getCovertDateFormat=(dat)=>{
  
let date = dat.substring(6);

  let dateFormat = date;

  return dateFormat;
}
	return (
		<Layout footerMenu={menuItems} headerMenu={headerNewItem}>
     <head dangerouslySetInnerHTML={{
                __html: banner?.yoast_head,
              }} />
      
       
      
      <main className="mb-auto">
			<div className="hero_slider padding-bottom-top-120" style={{backgroundImage:'url('+(banner?.acf?.banner_image && getImageUrl(banner?.acf?.banner_image))+')'}}>
      			<div className="container">
        			<div className="row">
          				<div className="col-sm-12 col-lg-4">
            				<h2 className="color_white"> {banner?.acf?.banner_title} </h2>
            				<p  dangerouslySetInnerHTML={{
                __html: banner?.acf?.banner_description,
              }} />
          				</div>
        			</div>
      			</div>
    		</div>
    		<section id="get-started" className="padding">
      			<div className="container">
        			<div className="row">
          				<div className="col-xs-12 text-center">
                  <p  dangerouslySetInnerHTML={{
                __html: banner?.acf?.get_started_title,
              }} />
              
              <p  dangerouslySetInnerHTML={{
                __html: banner?.acf?.get_started_sub_title,
              }} />
            			
          				</div>
        			</div>
        			<div className="row justify-content-center">
                {banner?.acf?.get_started_content && banner?.acf?.get_started_content.length > 0 && banner?.acf?.get_started_content.map((ele,i)=>{
                    return (<div key={i} className="col-md-4 col-lg-3 col-xs-6 text-center">
            				<div className="get-started-content top40">
              					<img className="img-fluid default" src={ele?.image && getImageUrl(ele?.image).toString()} alt="image" />
              					<img className="img-fluid hover" src={ele?.hover_image && getImageUrl(ele?.hover_image).toString()} alt="image" />
                        <p  dangerouslySetInnerHTML={{
                __html: ele?.title,
              }} />
            				</div>
          				</div>)
                })}
          				
          	
					</div>
      			</div>
    		</section>
    		<section className="retire-section">
			<div className="row no-gutters">
				<div className="col-lg-7 mobile-only">
					<div className="thumb">
						<img src={banner?.acf?.how_much_image && getImageUrl(banner?.acf?.how_much_image).toString()} alt="img" />
					</div>
				</div>
				<div className="col-lg-4 align-self-center">
					<div className="retire-inner">
						<div className="section-title m-0">
            <p  dangerouslySetInnerHTML={{
                __html: banner?.acf?.how_much_title,
              }} />
              <p  dangerouslySetInnerHTML={{
                __html: banner?.acf?.how_much_content,
              }} />
							<Link passHref href={banner?.acf?.how_much_button_link?banner?.acf?.how_much_button_link:"#"} className="Check-it-out"><a className="Check-it-out">{banner && banner.acf && banner.acf.how_much_button?banner.acf.how_much_button:"#"}</a></Link>
						</div>
					</div>
				</div>
				<div className="col-lg-7 desktop-only">
					<div className="thumb">
						<img src={banner?.acf?.how_much_image && getImageUrl(banner?.acf?.how_much_image).toString()} style={{maxWidth:'1920px'}} alt="img" />
					</div>
				</div>
      		</div>
    	</section>
    	<section id="latest-news" className="bg_light padding">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 text-center mb-5">
          <p  dangerouslySetInnerHTML={{
                __html: banner?.acf?.stay_informed_title,
              }} />
              <p  dangerouslySetInnerHTML={{
                __html: banner?.acf?.stay_informed_content,
              }} />
						
					</div>
				</div>
        		<div className="row top40 desktop-only about-slider">
            
             <div id="about_single" className="owl-carousel top30">
             <div className='owl-wrapper-outer'>
             <div className='owl-wrapper'>
             {postsData && postsData.length > 0 && postsData.map((post,index)=>{
                    return(
                   
                     <div key={index}  className='owl-item' >
                      <div className="item">
                        <div className="content-right-md">
                        
                          <div className={post?.featured_media?"image":"image no-image"}>
                                     {post?.featured_media && 
                                      <img src={post?.featured_media && getImageUrl(post?.featured_media).toString()} alt="listin" className="img-fluid" />
                                     }
                                      </div>
                                      <div className="news_content">
                                      <div className="news_text">
                                      
                                        <p>{post?.categories.length > 0 && post?.categories.map((cat,index)=>{
                                             if(index==0)
                                             {
                                              return(<span key={index}>{getCatnameById(cat)}</span>)
                                             }else
                                             {
                                              return(<span key={index}>, {getCatnameById(cat)}</span>)
                                              
                                             } 
                                        }) } <span className="bullet-circle">•</span> {post?.date? dayjs(post?.date).format('MMMM DD, YYYY') :""} </p>
                                        
                                        <h3>
                                          <Link passHref href={post.slug?"posts/"+post.slug:"#"}><a>{post.title?post.title:'#'}</a></Link>
                                        </h3>
                                      </div>
                                    </div>
                                      
                         
                        </div>
                      </div>
                      </div>
                 );})
}</div></div>
           <div className="owl-controls clickable">
             
                     <div className="owl-buttons">
                      <div className="owl-prev">
                      <i className="fa fa-angle-left"></i>
                      </div>
                      <div className="owl-next">
                        <i className="fa fa-angle-right"></i>
                        </div></div>
                     </div>

           </div>
          

        </div>
        <div className="row mobile-only">
        {
        postsData && postsData.length > 0 && postsData.map((post,index)=>{
                    return(
          <div key={index} className="col-12 col-md-4">
            <div className="news_item bottom40">
              <div className="news_content">
                <div className="news_text">
                  <h5>{post?.categories.length > 0 && post?.categories.map((cat,ind)=>{
                                             if(ind==0)
                                             {
                                              return(<span key={ind}>{getCatnameById(cat)}</span>)
                                             }else
                                             {
                                              return(<span key={ind}>, {getCatnameById(cat)}</span>)
                                              
                                             } 
                                        }) }<span className="bullet-circle">•</span>{post?.date? dayjs(post?.date).format('MMMM DD, YYYY') :""} </h5>
                  <h3>
                  <Link passHref href={post.slug?post.slug:"#"}><a>{post.title?post.title:'#'}</a></Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>)

        })
      }
          
        </div>
      </div>
    </section>
    
    <section id="upcoming" className="desktop-only">
      <div className="container">
        <div className="row">
          <div className="col-sm-1 col-md-2"></div>
          <div className="col-xs-12 col-sm-10 col-md-8 text-center mb-4">
            <h2>{banner?.acf?.upcoming_event_title}</h2>
          </div>
          <div className="col-sm-1 col-md-2"></div>
        </div>
        <div className="row">
          <div id="nospace-filter" className="cbp-l-filters-alignCenter">
            <div data-filter="*" className="cbp-filter-item-active cbp-filter-item">All</div>
              {eventCategories && eventCategories.length > 0 && eventCategories.map((cat,ind)=>{
                return(<div key={ind} data-filter={cat.slug?"."+cat.slug:""} className="cbp-filter-item">{cat.name}</div>)
              })}
            
          </div>
          <div id="nospace" className="cbp cbp-caption-active cbp-caption-pushTop cbp-ready" style={{height:'136px'}} >
           <div className="cbp-wrapper-outer">
           <div className="cbp-wrapper">

         
            {eventPosts && eventPosts.length > 0 && eventPosts.map((event,ind)=>{

                  return( <div key={ind} className={getEventCats(event?.eventcategory.length > 0 && event?.eventcategory)+" cbp-item " }>
                  <div className="event-item clearfix">
                    <div className="event-image">
                      <div className="post-date">
                      <small className="month">{getCovertMonthFormat(event?.acf.event_date)}</small><br/><span className="date">{getCovertDateFormat(event?.acf.event_date)}</span>
                        
                      </div>
                    </div>
                    <div className="event-content">
                      <div className="event-title mb-15">
                        <h3 className="title"> {event?.title} </h3>
                        <span className="ticket-price yellow-color">{getCovertTimeFormat(event?.acf.event_time)} PST</span>
                      </div>
                    </div>
                  </div>

                </div>)

            })}
              </div>
              </div>
          </div>
        </div>
        <div className="col-lg-12 text-center" dangerouslySetInnerHTML={{
                __html: banner?.acf?.upcoming_event_extra_content,
              }}>         
        </div>
      </div>
    </section>
    <section id="upcoming" className="mobile-only padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-1 col-md-2"></div>
          <div className="col-xs-12 col-sm-10 col-md-8 text-center">
            <h2>{banner?.acf?.upcoming_event_title}</h2>
          </div>
          <div className="col-sm-1 col-md-2"></div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-12 text-center" dangerouslySetInnerHTML={{
                __html: banner?.acf?.upcoming_event_extra_content,
              }} />
        </div>
        <div className="row">
       
{eventPosts && eventPosts.length > 0 && eventPosts.map((event,ind)=>{

return( 
<div key={ind} className="col-md-4">
        <div className="event-item">
          <div className="event-image">
            <div className="post-date">
              <small className="month">{getCovertMonthFormat(event?.acf.event_date)}</small>
              <br/>
              <span className="date">{getCovertDateFormat(event?.acf.event_date)}</span>
            </div>
          </div>
          <div className="event-content">
            <div className="event-title mb-15">
              <h3 className="title"> {event?.title} </h3>
              <span className="ticket-price yellow-color">{getCovertTimeFormat(event?.acf.event_time)} PST</span>
              
            </div>
          </div>
        </div>
      </div>
)

})}
        </div>
      </div>
    </section>
   
    <section className="life-events">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-offset-1 col-lg-6">
            <h6>{banner?.acf?.life_event_title}</h6>
            <h3>{banner?.acf?.life_event_sub_title}</h3>
            <p>{banner?.acf?.life_event_content}</p>
            <Link href={banner?.acf?.life_event_button_link ?banner?.acf?.life_event_button_link:"#"} className="desktop-only view-more-btn"><a className="desktop-only view-more-btn">{banner && banner.acf && banner.acf.life_event_button_text ? banner.acf.life_event_button_text:'#'}</a></Link>
          </div>
          <div className="col-md-6 col-lg-5">
          <p  dangerouslySetInnerHTML={{
                __html: banner?.acf?.life_event_extra_content,
              }} />
              <Link passHref href={banner?.acf?.life_event_button_link ?banner?.acf?.life_event_button_link:"#"} className="mobile-only view-more-btn"><a className="mobile-only view-more-btn">{banner && banner.acf && banner.acf.life_event_button_text ? banner.acf.life_event_button_text:'#'}</a></Link>
          
          </div>
        </div>
      </div>
    </section>
    
    <section className="life-events-img">
      <div className="container-fluid">
        <div className="row">
          <img className="img-fluid" src={banner?.acf?.life_event_image && getImageUrl(banner?.acf?.life_event_image).toString()} alt="" />
        </div>
      </div>
    </section>
    </main>
		</Layout>
	);
}

export async function getServerSideProps({ res }) {
	const menuItems = await getFooterMenu();
	const headerMenuItems = await getHeaderMenu();
	const posts = await getLatestPosts(12);
	setEdgeHeader({ res });

	return {
		props: {
			menuItems,
			headerMenuItems,
			posts,
		},
	};
}
