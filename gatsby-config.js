/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		name: `ButterCMS knowledge base with Gatsby`,
		title: `knowledge-base-with-gatsby`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		'gatsby-plugin-postcss',
		{
			resolve: `gatsby-source-buttercms`,
			options: {
				authToken: process.env.BUTTER_CMS_API_KEY,
				pages: [`Knowledge base with Gatsby and ButterCMS`],
				pageTypes: [`knowledge_base_articles`],
			},
		},
	],
};
