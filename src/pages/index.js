import React from 'react';
import { graphql } from 'gatsby';
import Box from '../components/Box';

function Index({ data }) {
	const [searchText, setSearchText] = React.useState('');
	const [filteredPost, setFilteredPost] = React.useState('');
	const posts = data.allButterPage.edges;

	React.useEffect(() => {
		setFilteredPost(posts);
	}, [posts]);

	function handleChanges(e) {
		setSearchText(e.target.value);
		const filteredData = posts.filter(function (post) {
			return post.node.article_name
				.toLowerCase()
				.includes(e.target.value.toLowerCase());
		});

		setFilteredPost(filteredData);
	}

	return (
		<div>
			<title>Knowledge Base with Gatsby and ButterCMS</title>

			<main>
				<div
					style={{
						color: 'black',
					}}
					className="py-10 bg-green-300 flex text-center align-center justify-center items-center"
				>
					<div>
						<h1 className="mb-3 text-4xl font-bold">How can I help you?</h1>

						<form
							onSubmit={(e) => {
								e.preventDefault();
							}}
							className="flex my-8"
						>
							<input
								value={searchText}
								onChange={handleChanges}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
								placeholder:text-center
								"
								type="text"
								placeholder="Search through the knowledge base for answers..."
							/>
						</form>
					</div>
				</div>

				<div className="bg-gray-100 h-full">
					<br />
					<br />

					{filteredPost && (
						<ul className="mt-6 flex flex-wrap items-center justify-around sm:w-full">
							{filteredPost.map(({ node }) => (
								<li key={node.id}>
									<Box
										name={node.kb_article_name}
										slug={node.slug}
										description={node.kb_article_description}
									/>
								</li>
							))}
						</ul>
					)}
				</div>
			</main>
		</div>
	);
}
export default Index;

export const query = graphql`
	query {
		allButterPage {
			edges {
				node {
					slug
					id
					kb_article_name
					kb_article_description
				}
			}
		}
	}
`;
