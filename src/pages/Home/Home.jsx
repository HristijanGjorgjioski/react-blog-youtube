import React, { useState, useContext } from 'react'

import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import Blogs from '../../components/Blogs/Blogs';
import EmptyList from '../../components/EmptyList/EmptyList';

import { MainContext } from '../../context/context';

const Home = () => {
    const { blogs: contextBlogs } = useContext(MainContext);

    const [blogs, setBlogs] = useState(contextBlogs)
    const [searchTerm, setSearchTerm] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        const filteredBlogs = contextBlogs?.filter((blog) => (
            blog.category.toLowerCase().includes(searchTerm.toLowerCase().trim())
        ));
        setBlogs(filteredBlogs);
    }

    const onChange = (e) => setSearchTerm(e.target.value);

    const clearSearch = () => {
        setSearchTerm('');
        setBlogs(contextBlogs);
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