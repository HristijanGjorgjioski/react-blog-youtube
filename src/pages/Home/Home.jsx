import React, { useState } from 'react'

import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import Blogs from '../../components/Blogs/Blogs';
import EmptyList from '../../components/EmptyList/EmptyList';

import { allBlogs } from '../../config/blogs';

const Home = () => {
    const [blogs, setBlogs] = useState(allBlogs)
    const [searchTerm, setSearchTerm] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        const filteredBlogs = allBlogs?.filter((blog) => (
            blog.category.toLowerCase().includes(searchTerm.toLowerCase().trim())
        ));
        setBlogs(filteredBlogs);
    }

    const onChange = (e) => setSearchTerm(e.target.value);

    const clearSearch = () => {
        setSearchTerm('');
        setBlogs(allBlogs);
    }

    return (
        <>
            <Header />
            <SearchBar
                onSubmit={onSubmit}
                onChange={onChange}
                clearSearch={clearSearch}
                value={searchTerm}
            />
            {blogs.length ? <Blogs blogs={blogs} /> : <EmptyList />}
        </>
    )
}

export default Home