import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import Category from '../../components/Category/Category'
import EmptyList from '../../components/EmptyList/EmptyList'

import './Blog.css'

import { allBlogs } from '../../config/blogs'

const Blog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const blog = allBlogs.find((blog) => blog.id === parseInt(id));
        if (blog) {
            setBlog(blog);
        }
    }, [id]);

    return (
        <>
            <Link className='blog-goBack' to='/'>
                <span> &#8592;</span> <span>Go Back</span>
            </Link>
            {
                blog ?
                    <div className='blog-wrap'>
                        <header>
                            <p className='blog-data'>Published {blog.createdAt}</p>
                            <h1>{blog.title}</h1>
                            <div className='blog-subCategory'>
                                {blog?.subCategory.map((category) => (
                                    <div key={category}>
                                        <Category label={category} />
                                    </div>
                                ))}
                            </div>
                        </header>
                        <img src={blog.cover} alt='cover' />
                        <p className='blog-desc'>{blog.description}</p>
                    </div> : <EmptyList />
            }

        </>
    )
}

export default Blog