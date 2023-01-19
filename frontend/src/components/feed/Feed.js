import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import Create from '../createPost/CreatePost';
import Card from '../Helpers/Card';
import './Feed.css';
import '../../index.css';
import Menu from '../menu/menu'

const Feed = ({ navigate }) => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem('token'));
  const [postAdded, setPostAdded] = useState(false);
  const userId = window.localStorage.getItem('user_id');

  useEffect(() => {
    if (token) {
      fetch('/posts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(async (data) => {
          window.localStorage.setItem('token', data.token);
          setToken(window.localStorage.getItem('token'));
          setPosts(data.posts.reverse());
          setPostAdded(false);
          // console.log(data.posts);
        });
    }
    // eslint-disable-next-line
  }, [postAdded]);

  if (token && (window.location.href).includes('/users')) {
    return (
     
      <div className="feed-page">
          <Menu />
          <div className="feed-scroll" role="feed">
            {posts
              .filter((post) => post.user_id._id === (window.location.pathname).replace('/users/', ''))
              .map((post) => (
                <Post post={post} key={post._id} setPostAdded={setPostAdded} />
              ))}
          </div>
        </div>
    );
  } else if (token) {
    return (
    
     
      <div className="feed-page">
      <Menu />
        
          <div className="feed-scroll" role="feed">
          <Create setPostAdded={setPostAdded} />
            {posts.map((post) => (
              <Post post={post} key={post._id} setPostAdded={setPostAdded} />
            ))}
          </div>

      </div>
    );
  } else {
    navigate('/signin');
  }
};

export default Feed;
