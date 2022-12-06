import { NextSeo } from 'next-seo';
import { setEdgeHeader } from '@pantheon-systems/wordpress-kit';
import { ContentWithImage } from '@pantheon-systems/nextjs-kit';
import { IMAGE_URL } from '../../lib/constants';
import Link from 'next/link';
import Layout from '../../components/layout';
import axios from "axios";
import { getFooterMenu, getHeaderMenu } from '../../lib/Menus';
import { getPageByUri  } from '../../lib/Pages';
import React, { useState, useEffect } from "react";


export default function PageTemplate({ menuItems, page, headerMenuItems }) {
	let [pageContent,setPageContent]= useState([]);
	
	const [isAlreadyImages, setIsAlreadyImages]=useState([]);
	const [allImages, setAllImage]=useState([]);
	const [subMenuData, setSubMenuData] =useState([]);
	const [reloadItem, setReloadItem] = useState(0);
	const [parentPageData, setParentPageData] = useState([]);
	useEffect(()=>{
		
		if(page)
		{
		 let uri = page?.slug;
		 axios.get("https://dev-sdcera.pantheonsite.io/wp-json/wp/v2/pages?slug="+uri+"").then((res)=>{
			
			res?.data && res?.data.length > 0 && res?.data.map((pdata,index)=>{
				let cont = pdata?.content?.rendered;
				res.data[index].content = cont;
		
				let excerpt = pdata?.excerpt?.rendered;
				res.data[index].excerpt = excerpt;
		
				let guid = pdata?.guid?.rendered;
				res.data[index].guid = guid;
		
				let title = pdata?.title?.rendered;
				res.data[index].title = title;

				res.data[index].type = null;
				if(index == res?.data.length - 1)
				{
					pageContent= (res?.data);
					let subMenuData = [];
					let parentPageId = pageContent[0]?.parent?pageContent[0]?.parent:pageContent[0]?.id;
					if(parentPageId > 0)
					{
					let subMenu = headerMenuItems && headerMenuItems.filter((Item)=>(Item.object_id==parentPageId)).map((Item)=>{return(Item.submenu)} );
					subMenuData = subMenu && subMenu.length > 0 && subMenu[0];
					setSubMenuData(subMenuData);
					}
					if(parentPageId > 0)
						{
						getDataById(parentPageId);
						}
						else
						{
						setParentPageData();
						}
					setPageContent(pageContent);
				}
			});
			
		})


		
    




		}
	},[page]);

	const getDataById = async(parentPageId) => {
		try {
			   axios.get("https://dev-sdcera.pantheonsite.io/wp-json/wp/v2/pages/"+parentPageId+"").then((res)=>{
				setParentPageData(res.data)
	
		})
	   
	
		} catch(error) {
			console.log(error)
		}
	}
	function getUrlSlug(url)
	{
	  let slug='';
	  let urlArray = url.split('/');
	  let urlLength = urlArray.length;
	  slug = urlArray[urlLength - 2];
	  return slug;
	}
	function createMarkup(html) {
		    return { __html: html };
		  }
	function getImageUrl(imageId)
      {
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
function getMediaUrlById(id)
{
  let isAlready = false;
        isAlreadyImages && isAlreadyImages.length > 0 && isAlreadyImages.map((item)=>{
          
            if(item==id)
            {
                isAlready = true;
            }
            
        });
        if(!isAlready)
            {
				if(id)
				{
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
						 setIsAlreadyImages((arr) => [...arr,id]);
						 setAllImage((arr) => [...arr,newImageArray]);
						  setReloadItem(!reloadItem);
						}
					  })
				}

            }
  
}
	
	return (
		<Layout footerMenu={menuItems} headerMenu={headerMenuItems}>
			
			<div className="page-title page-main-section" id={pageContent[0]?.acf?.header_background_image} style={{backgroundImage: 'url('+getImageUrl(pageContent[0]?.acf?.header_background_image)+')'}}>
				<div className="container text-uppercase text-center">
					<div className="main-title">
					<h1>{pageContent[0]?.acf?.page_header_title}</h1>
					<h5>{pageContent[0]?.acf?.page_header_subtitle}</h5>
					<Link href="/">home</Link>
					<span>
						<i className="fa fa-angle-double-right"></i>
					</span>
					<Link href="investments">{page.title}</Link>
					</div>
				</div>
				</div>
			{(pageContent && pageContent.length > 0 && pageContent[0]?.acf?.page_template == 'left' || pageContent && pageContent.length > 0 && pageContent[0]?.acf?.page_template == 'leftright') && 
			
			<div className="col-lg-2  leftSidebarSection">
			{subMenuData && subMenuData.length > 0 ? <h5 className="leftSidebarHeading">{parentPageData?.title?.rendered}</h5>:'' }
			<ul className=" m-0 p-0 submenus">
			{subMenuData && subMenuData.length > 0 ? subMenuData && subMenuData[0] && subMenuData.map((sub, i) => {
								return (
								  <li key={i}>
								  <Link passHref
									className="d-block"
									href={'/'+sub?.object+'/'+getUrlSlug(sub?.url)}
									key={i}
								  >
									<a>{sub.title?sub.title:'#'}</a>
								  </Link>
								  {sub.submenu && sub.submenu.length > 0 ?
								  <div className="d-flex flex-column ">
								  <ul className="submenus_submenus">
								  {sub.submenu.map((subsub, i) => {
									return (
									  <li key={i}>
									  <Link passHref
										className="d-block text-white HeaderDropDownListItem "
										href={'/'+subsub?.object+'/'+getUrlSlug(subsub?.url)}
										key={i}
									  >
										<a>{subsub.title?subsub.title:'#'}</a>
									  </Link>
									  </li>
									);
								  })}
								  </ul>
								</div>
								:''}
								</li>
								);
							  })
							:<li key="0">There are no Items available.</li>
							}
							</ul>
			</div>
			}
    
	<div className={pageContent && pageContent.length > 0 && pageContent[0]?.acf?.page_template == 'left' ? '  left_sidebar   px-xl-5 px-3 col-lg-10': pageContent && pageContent.length > 0 && pageContent[0]?.acf?.page_template == 'right'? ' right_sidebar   px-xl-5 px-3 col-lg-12': pageContent && pageContent.length > 0 && pageContent[0]?.acf?.page_template == 'leftright'? ' leftright_sidebar   px-xl-5 px-3 col-lg-10':'default  px-xl-5 px-3 col-xl-12 col-lg-12'}>
	<div className={pageContent && pageContent.length > 0 && pageContent[0]?.acf?.page_template == 'left' ? 'col-lg-12': pageContent && pageContent.length > 0 && pageContent[0]?.acf?.page_template == 'right'? 'col-lg-9': pageContent && pageContent.length > 0 && pageContent[0]?.acf?.page_template == 'leftright'? ' col-lg-9':'default  col-lg-12'} dangerouslySetInnerHTML={createMarkup(page.content)} />

{(pageContent && pageContent.length > 0 && pageContent[0]?.acf?.page_template == 'right' || pageContent && pageContent.length > 0 && pageContent[0]?.acf?.page_template == 'leftright') ? 
<div className="col-xl-3 col-lg-3">
<aside>
        <div className="row flex-column">
        {pageContent[0]?.acf?.right_sidebar_boxes && pageContent[0]?.acf?.right_sidebar_boxes.length > 0 ? 
            pageContent[0]?.acf?.right_sidebar_boxes.map((item,index)=>{
                if(item.image || item.title || item.description)
                {
                return(
                    <div className='asideBox' key={index}>
                    <Link passHref href={item.url?item.url:'/'} className="AsideCardsMain" ><a >
                    <div className="col ">
                        { item.image ? <img src={getImageUrl(item.image)} alt="" />:'' }
                    <div className="AsideCards" style={{'background':item.background_color?item.background_color:''}}>
                        <h5>{item.title}</h5>
                        <p dangerouslySetInnerHTML={createMarkup(item.description)} />
                    </div>
                </div>
				</a>
                </Link>
                </div>
                )
                }
            }):'There are no Items available.' }
            
        </div>
    </aside>
    </div>

:''}               
     </div>
</Layout>
	)
}

export async function getServerSideProps({ params: { uri }, res }) {
	const menuItems = await getFooterMenu();
	
	const headerMenuItems = await getHeaderMenu();
	const page = await getPageByUri(uri);
	setEdgeHeader({ res });

	if (!page) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			menuItems,
			headerMenuItems,
			page
		},
	};
}
