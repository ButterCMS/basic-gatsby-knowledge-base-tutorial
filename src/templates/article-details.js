import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header';

const Index = ({ data }) => {
	const post = data.allButterPage.edges[0].node;

	return (
		<div>
			<Header />

			<div className="my-10 w-[70rem] h-full bg-white p-10 ">
				<h1 style={{width: '75rem'}} className="text-4xl text-center">{post.kb_article_name}</h1>

				<div
					style={{ width: '70rem', paddingLeft: '7rem', marginTop: '2rem' }}
					dangerouslySetInnerHTML={{
						__html: post.kb_article_body,
					}}
				></div>
			</div>
		</div>
	);
};

export default Index;

export const query = graphql`
	query BlogDetail($slug: String) {
		allButterPage(filter: { slug: { eq: $slug } }) {
			edges {
				node {
					kb_article_name
					kb_article_body
					slug
				}
			}
		}
	}
`;
