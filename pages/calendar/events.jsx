import { NextSeo } from 'next-seo';
import { setEdgeHeader } from '@pantheon-systems/wordpress-kit';
import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import dayjs from 'dayjs';
import Head from "next/head";
import Layout from '../../components/layout';
import Link from 'next/link';
import { Button} from 'react-bootstrap';
import { getFooterMenu,getHeaderMenu } from  '../../lib/Menus';
import { getLatestPosts } from '../../lib/Posts';
import { REACT_LOADABLE_MANIFEST } from 'next/dist/shared/lib/constants';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
const localizer = momentLocalizer(moment); 
export default function EventCalendar({ menuItems, headerMenuItems }) {
    const [banner, setBanner] = useState();
    const [headerNewItem, setHeaderNewItem] = useState([]);
    const [eventPosts, setEventPosts] = useState([]);
    const [myEventsList, setMyEventsList] = useState([]);
    const [eventCategories, setEventCategories] = useState([]);
    const [isAlreadyEvent, setIsAlreadyEvent]=useState([]);

    
    const  getEventPosts=()=>{
      
     
        axios
        .get(
          "https://dev-sdcera.pantheonsite.io/wp-json/wp/v2/event?order=desc&status=publish"
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
    useEffect(()=>{
        getMainMenus();
        getEventCategories();
        getEventPosts();
      },[])

      const getEventCategories=()=>{
        axios
        .get(
          "https://dev-sdcera.pantheonsite.io/wp-json/wp/v2/eventcategory"
        )
        .then((res) =>setEventCategories(res?.data));
      }

      const getMainMenus = ()=>{
        axios
        .get(
          "https://dev-sdcera.pantheonsite.io/wp-json/menus/v1/menus/4/?nested=1"
        )
        .then((res) => setHeaderNewItem(res?.data));
      }
    useEffect(() => {
        axios.get("https://dev-sdcera.pantheonsite.io/wp-json/wp/v2/pages?slug=event-calendar").then((res) => setBanner(res?.data[0]));
      
        }, []);
        
        useEffect(()=>{
            eventPosts && eventPosts.length > 0 && eventPosts.map((event,ind)=>{
                let isAlready = false;
                isAlreadyEvent && isAlreadyEvent.length > 0 && isAlreadyEvent.map((item)=>{
                  
                    if(item==event.id)
                    {
                        isAlready = true;
                    }
                    
                });
              
                if(!isAlready)
                    {
                  let startDate =  new Date(getConvertDateFormat(event?.acf.event_date)); 
                  let endDate =  new Date(getConvertDateFormat(event?.acf.event_date)); 
                let eventObj = {
                    'title': event?.title,
                    'href': '/'+event?.type+'/'+event?.slug,
                    'start': startDate,
                    'end': new Date(endDate.setDate(endDate.getDate() + 1))
                  }

                  setIsAlreadyEvent((arr) => [...arr,event.id]);
            setMyEventsList((arr) => [...arr,eventObj]);
                }
            })
            
        },[eventPosts]);

        const getConvertDateFormat = (dat)=>{
           
            let mon = dat.substring(4, 6);
            
                let month = mon;
            
                let date = dat.substring(6);
                let year = dat.substring(0,4);
                let returnFormat = year+", "+month+", "+date;


                return returnFormat;

        }
        
        function CustomEvent(props) {
          return (
              <div>
                  <Link href={props && props.linkhref} ><a>{props.title}</a></Link>
              </div>
          );
      }
      
    return (
		<Layout footerMenu={menuItems} headerMenu={headerNewItem}>
     <head dangerouslySetInnerHTML={{
                __html: banner?.yoast_head,
              }} />
      
      <main className="mb-auto container">
        <div className='row m-5'>
            <div className='col-md-8 col-md-offset-2'>
              <div className="myCustomHeight">
                <Calendar
                localizer={localizer}
                step={60}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                popup={true}
                style={{ height: 500 }}
                onShowMore={(myEventsList, date) => this.setState({ showModal: true, myEventsList })}
                components={{
                    event: (props)=>{ return(<CustomEvent title={props.title} linkhref={props.event.href} />);}
                }}
                />
            </div>
            </div>
        </div>
      
        </main>
    </Layout>
	);
}
export async function getServerSideProps({ res }) {
	const menuItems = await getFooterMenu();
	const headerMenuItems = await getHeaderMenu();
	setEdgeHeader({ res });

	return {
		props: {
			menuItems,
			headerMenuItems,
		},
	};
}