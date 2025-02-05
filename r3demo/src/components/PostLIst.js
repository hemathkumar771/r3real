import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts when the component mounts
    axios.get('https://jsonplaceholder.typicode.com/posts') // Fetch all posts
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  //Home page, when run npm start this is the page redirected to with all the blog posts.
  //all clickable posts in a list.

  return (
    <div className="container mt-4">
    <h2
      className="text-center mb-4 border p-3 mx-auto"
      style={{
        background: 'linear-gradient(45deg, #f0f0f0, #ffffff)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '20%',
      }}
    >
    Post List
    </h2>
      <div className="row">
        {posts.map(post => (
          <div className="col-md-4" key={post.id}>
            <div 
              className="card mb-4 shadow-sm border border-dark"
              style={{ backgroundColor: '#f0f8ff' }}
            >
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/post/${post.id}`} className="text-dark text-decoration-none">
                    {post.title}
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
