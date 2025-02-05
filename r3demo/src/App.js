import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes here
import PostList from './components/PostLIst';
import PostDetail from './components/PostData';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation bar with no effect */}
        <nav className="navbar navbar-light bg-light mb-4 border border-dark">
          <div className="container justify-content-center">
            <span className="navbar-brand mb-0 h1" style={{ fontSize: '2rem' }}>
              My React Blog
            </span>
          </div>
        </nav>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:postId" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
