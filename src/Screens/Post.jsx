import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '../utils/posts';

const Post = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const found = getPostBySlug(slug);
    setPost(found);
  }, [slug]);

  if (!post) return <div className="container py-5"><h2>Loading...</h2></div>;

  return (
    <div className="container py-5">
      <Link to="/blog" className="text-danger mb-3 d-inline-block">← Back to Blog</Link>
      <h1 className="display-4 fw-bold">{post.title}</h1>
      {post.subtitle && <h3 className="text-muted mb-4">{post.subtitle}</h3>}
      <div className="d-flex gap-2 mb-4">
        <span className="badge bg-danger">{post.category}</span>
        <span className="text-muted">{new Date(post.date).toLocaleDateString()}</span>
      </div>
      {post.image && (
        <img src={post.image} alt={post.title} className="img-fluid rounded mb-4" style={{ maxHeight: '400px', objectFit: 'cover' }} />
      )}
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default Post;