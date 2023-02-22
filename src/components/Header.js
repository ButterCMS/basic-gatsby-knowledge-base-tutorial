import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
	return (
		<div className="py-5 flex justify-between px-10 bg-green-100">
			<h1 className="ml-2 text-2xl">ButterKDB with Gatsby</h1>

			<Link to="/">Click here to go back</Link>

			<input
				type="search"
				placeholder="Search"
				className="outline-none border-none px-3 rounded hover:outline-none active:outline-none"
			/>
		</div>
	);
}
