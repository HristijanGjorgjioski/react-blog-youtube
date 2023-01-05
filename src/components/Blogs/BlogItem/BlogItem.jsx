import React from 'react'
import Category from '../../Category/Category'

const BlogItem = ({ 
	cover,
	category,
	title,
	description,
	authorAvatar,
	authorName,
	createdAt,
	id,
}) => {
	return (
		<div className='blog-item'>
			<img className='blog-item-cover' src={cover} alt='cover' />
			<Category label={category} />
			<h3>{title}</h3>
			<p className='blog-item-desc'>{description}</p>
			<footer>
				<div className='blog-item-author'>
					<img src={authorAvatar} alt='avatar' />
					<div>
						<h6>{authorName}</h6>
						<p>{createdAt}</p>
					</div>
				</div>
				<a className='blog-item-link' href={`/blog/${id}`}>➝</a>
			</footer>
		</div>
	)
}

export default BlogItem