import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import Create from '../createPost/CreatePost';
import Card from '../Helpers/Card';
import './FeedPage.css';
import '../../index.css';
import Menu from '../menu/menu'
import Feed from './Feed';
import { useNavigate } from 'react-router';

const FeedPage = ({ navigate }) => {
  // const [posts, setPosts] = useState([]);
  // const [token, setToken] = useState(window.localStorage.getItem('token'));
  // const [postAdded, setPostAdded] = useState(false);
  const userId = window.localStorage.getItem('user_id');

  // useEffect(() => {
  //   if (token) {
  //     fetch('/posts', {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then(async (data) => {
  //         window.localStorage.setItem('token', data.token);
  //         setToken(window.localStorage.getItem('token'));
  //         setPosts(data.posts.reverse());
  //         setPostAdded(false);
  //         // console.log(data.posts);
  //       });
  //   }
  //   // eslint-disable-next-line
  // }, [postAdded]);

    return (
     
      <div className="feed-page">
          <Menu />
          <Feed />
        </div>
    );
  } 

export default FeedPage;
