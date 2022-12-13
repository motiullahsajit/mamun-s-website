import React from 'react';

const Blog = ({ blog }) => {
  const { title, shortDisprition, imgUrl, blogLink } = blog;
  return (
    <article data-aos="fade-up" className='col-md-4'>
      <div className="card h-100">
        <img src={imgUrl} className="card-img-top h-50" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{shortDisprition}</p>
          <a href={blogLink} className='color-brand mt-3 text-decoration-none'><strong>Contact Me</strong></a>
        </div>
      </div>
    </article>
  );
};

export default Blog;