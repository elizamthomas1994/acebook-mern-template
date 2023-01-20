import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import Create from '../createPost/CreatePost';
import Card from '../Helpers/Card';
import './FeedPage.css';
import '../../index.css';
import Menu from '../menu/menu'
import Feed from './Feed';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const FeedPage = ({ navigate }) => {
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


  if (token) {
    return (
     
      <div className="feed-page">
          <Menu />
          <Feed />
        </div>
    );
  } else {
    return (

    <div className="redirect-login">
      <div className="redirect-login-card">
      <Card>
        <h2>You are not logged in, please click here to log in</h2>
        <Link to="/login">
          <button className="redirect to login" >
            Login
          </button>
        </Link>
       
      </Card> 
      </div>
  </div>
    )
  }
  } 

export default FeedPage;
