import React, { useEffect, useState } from 'react';
import profile_placeholder from '../profile/profile_placeholder.jpeg';
import Card from '../Helpers/Card.js';
import Post from '../post/Post'
import './Feed.css';

const Feed = ({ navigate }) => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    if(token) {
      fetch("/posts", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(async data => {
          window.localStorage.setItem("token", data.token)
          setToken(window.localStorage.getItem("token"))
          setPosts(data.posts);
        })
    }
  }, [])
    

  const logout = () => {
    window.localStorage.removeItem("token")
    navigate('/login')
  }
  
    if(token) {
      return(
        <>
          <div className="createPost">
            <Card>
              <div className="statusBox">
                <img className="profile-Pic" src={profile_placeholder} />
                <form>
                  <input className="postInput" type="text" placeholder="What do you want to share?" id="myPost" />
                  <button className="postButton">Post</button>
                </form>
              </div>
            </Card>
          </div>

          <div className="personalizedFeed">
            <Card>
              <div className="sort">
                <button className="sortButton">Sort By</button>
              </div>
              <div className="feed">
                <Card>
                  <div id='feed' role="feed">
                    <div className="left">
                      <img className="profile-Pic" src={profile_placeholder} />
                    </div>
                    <Card>
                      <div className="postContent">
                        {posts.map(
                          (post) => ( <Post post={ post } key={ post._id } /> )
                        )}
                        <div className="timeDateStamp">
                          <p>Posted: 1hr ago</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="postReactions">
                    <button className="commentButton">Comment</button>
                    <button className="likeButton">Like</button>
                    <div className="likeCounter">
                      <p>Likes: 5</p>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
          </div>
        </>
      )
    } else {
      navigate('/signin')
    }
}

export default Feed;