import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { postId } = useParams(); // Extract postId from URL
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch post details
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => console.error(error));

    // Fetch comments for the post
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => {
        setComments(response.data);
      })
      .catch(error => console.error(error));
  }, [postId]);

  if (!post) return <div>Loading post...</div>;  // Loading state for post

  return (
    <div className="container mt-4">
      {/* Original Post Card with Roboto Slab font */}
      <div className="card mb-4 border border-dark">
        <div className="card-body">
          <h2 className="card-title text-primary" style={{ fontFamily: 'Roboto Slab, serif' }}>Original Post</h2>
          <h4 className="card-title" style={{ fontFamily: 'Roboto Slab, serif' }}>{post.title}</h4>
          <p className="card-text" style={{ fontFamily: 'Roboto Slab, serif' }}>{post.body}</p>
        </div>
      </div>

      {/* Comments Card */}
      <div className="card border border-dark">
        <div className="card-body">
          <h3>Comments</h3>
          <ul className="list-unstyled">
            {comments.map(comment => (
              <li key={comment.id} className="mb-3 border border-dark">
                <div className="card mb-2 bg-light">
                  <div className="card-body">
                    {/* Comment Formatting */}
                    <p><strong>Name:</strong> {comment.name}</p>
                    <p><strong>Email:</strong> {comment.email}</p>
                    <p><strong>Body:</strong> {comment.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
