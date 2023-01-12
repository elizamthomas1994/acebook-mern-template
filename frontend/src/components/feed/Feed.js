import React, { useEffect, useState } from 'react';
import Post from '../post/Post'

const Feed = ({ navigate }) => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch( '/posts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message })
    })
      .then(response => {
        if(response.status === 201) {
          navigate('/posts')
        } else {
          navigate('/signup')
        }
      })
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }
    

  const logout = () => {
    window.localStorage.removeItem("token")
    navigate('/login')
  }
  
    if(token) {
      return(
        <>
          <h2>Posts</h2>
            <form onSubmit={handleSubmit}>
            <input placeholder="Comment here!" id="message" type='message' value={ message } onChange={handleMessageChange} />
              <input id='submit' type="submit" value="Submit" />
            </form>
            <button onClick={logout}>
              Logout
            </button>
          <div id='feed' role="feed">
              {posts.map(
                (post) => ( <Post post={ post } key={ post._id } /> )
              )}
          </div>
        </>
      )
    } else {
      navigate('/signin')
    }
}

export default Feed;