import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog, cardClass }) => {
    return (
        <div className={`blog-card ${cardClass}`}>
            <div className="blog-img">
                <img
                    src={blog.imageSrc}
                    alt="Image"
                    className="trasnition"
                />
                <ul className="blog-metainfo">
                    <li>
                        <i className="bx bx-calendar" />{' '}
                        <Link to="/blog">{blog.publishDate}</Link>
                    </li>
                    <li>
                        <i className="bx bx-time" />
                        {blog.readTime}
                    </li>
                </ul>
            </div>
            <div className="blog-info">
                <h3>
                    <Link to={'/blog-details'}>{blog.title}</Link>
                </h3>
                <Link to={"/blog-details"} className="btn-link">
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default BlogCard