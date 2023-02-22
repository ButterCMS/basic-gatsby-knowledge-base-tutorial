const path = require('path');

exports.createPages = async function ({ actions, graphql }) {
	const { data } = await graphql(`
		query {
			allButterPage(filter: { page_type: { eq: "knowledge_base_articles" } }) {
				edges {
					node {
						slug
						id
					}
				}
			}
		}
	`);

	data.allButterPage.edges.forEach((data) => {
		const slug = data.node.slug;
		
		actions.createPage({
			path: slug,
			component: path.resolve(`./src/templates/article-details.js`),
			context: { slug: slug },
		});
	});
};
