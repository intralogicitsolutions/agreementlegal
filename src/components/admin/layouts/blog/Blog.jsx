import React from 'react';
import './blog.scss';
const Blog = () => {
	console.log('blogggg');
	return (
		<React.Fragment>
			<div className='blog_wrapper container'>
				<div className='blog_date'>20th October | By Rakesh Omprakash Mehra</div>
				<div className='blog_heading'>
					<h1>Landlord eviction notice: How to write one?</h1>
				</div>
				<div className='blog_subtitle'>
					<h6>
						Commodo dictumst proin diam est pharetra, felis id. Pretium amet sit amet non. Facilisi
						sed neque feugiat quis odio morbi vitae tempor. Nunc nec dolor, odio convallis tortor
						amet purus risus.
					</h6>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Blog;
