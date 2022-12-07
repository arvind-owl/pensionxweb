import { gql } from '@pantheon-systems/wordpress-kit';
import { client } from './WordPressClient';
import axios from "axios";
export async function getLatestPages(totalPages) {
	const query = gql`
		query LatestPagesQuery($totalPages: Int!) {
			pages(first: $totalPages) {
				edges {
					node {
						id
						uri
						title
						featuredImage {
							node {
								altText
								sourceUrl
							}
						}
					}
				}
			}
		}
	`;

	const {
		pages: { edges },
	} = await client.request(query, { totalPages });

	return edges.map(({ node }) => node);
}

export async function getPageByUri(uri) {
	const query = gql`
		query PageByURIquery($mainUri: ID!) {
			page(id: $mainUri, idType: URI) {
				title
				date
				featuredImage {
					node {
						altText
						sourceUrl
					}
				}
				content
				uri
			}
		}
	`;
	let  mainUri ='';
	if(uri.length > 1)
	{
		uri.map((ele,ind)=>{
			if(ind==0)
			{
				mainUri = ele;
			}
			else
			{
				mainUri = mainUri +'/'+ele;
			}
			
		})
		const { page } = await client.request(query, { mainUri });
		return page;
	}
	else
	{
		mainUri = uri[0];
		const { page } = await client.request(query, { mainUri });
		return page;
	}

	

	

	
}
