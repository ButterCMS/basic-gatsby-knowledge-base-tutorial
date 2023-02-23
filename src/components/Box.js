import React from 'react';
import { Link } from 'gatsby';

export default function Card({ description, name, slug }) {
	return (
		<>
			<Link
				to={`/${slug}`}
				className="bg-green-100 shadow-lg h-60 text-center flex justify-center items-center m-10 rounded-lg w-96 cursor-pointer hover:bg-gray-100"
			>
				<div className="p-10">
					<h2 className="text-2xl font-semibold mb-5"> {name} </h2>
					<p className=""> {description} </p>
				</div>
			</Link>
		</>
	);
}
