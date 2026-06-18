import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/posts';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const allPosts = getAllPosts();
    setPosts(allPosts);
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-danger mb-4">Blog Posts</h1>
      <div className="row g-4">
        {posts.map((post) => (
          <div className="col-md-4" key={post.slug}>
            <div className="card h-100 shadow-sm">
              {post.image && (
                <img src={post.image} className="card-img-top" alt={post.title} style={{ height: '200px', objectFit: 'cover' }} />
              )}
              <div className="card-body">
                <span className="badge bg-danger mb-2">{post.category}</span>
                <h5 className="card-title">{post.title}</h5>
                {post.subtitle && <p className="card-text text-muted">{post.subtitle}</p>}
                <Link to={`/blog/${post.slug}`} className="btn btn-danger">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;