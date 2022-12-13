import React from 'react';
import Blog from '../Blog/Blog';
import { Blogsdata } from './BlogsData';

const Blogs = () => {
    const blogs = Blogsdata;
    return (
        <section id='services' className='container-fluid my-5'>
            <div className="container">
                <h1 className='text-center my-5 color-brand'>My Services</h1>
                <div className="row g-5 mx-auto">
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;