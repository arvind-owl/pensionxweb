import { gql } from '@pantheon-systems/wordpress-kit';
import { client } from './WordPressClient';

export async function getLatestPosts(totalPosts) {
	const query = gql`
		query LatestPostsQuery($totalPosts: Int!) {
			posts(first: $totalPosts) {
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
		posts: { edges },
	} = await client.request(query, { totalPosts });

	return edges.map(({ node }) => node);
}

export async function getPostBySlug(slug) {
	const query = gql`
		query PostBySlugQuery($mainSlug: ID!) {
			post(id: $mainSlug, idType: URI) {
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
	let  mainSlug ='';
	if(slug.length > 1)
	{
		slug.map((ele,ind)=>{
			if(ind==0)
			{
				mainSlug = ele;
			}
			else
			{
				mainSlug = mainSlug +'/'+ele;
			}
			
		})
	
	const { post } = await client.request(query, { mainSlug });

	return post;
}
else
{
	mainSlug = slug[0];
	const { post } = await client.request(query, { mainSlug });
	return post;
}
}
export async function getEventBySlug(slug) {
	
	let  mainSlug ='';
	if(slug.length > 1)
	{
		slug.map((ele,ind)=>{
			if(ind==0)
			{
				mainSlug = ele;
			}
			else
			{
				mainSlug = mainSlug +'/'+ele;
			}
			
		})
	
	
	return mainSlug;
}
else
{
	mainSlug = slug[0];
	return mainSlug;
}
}