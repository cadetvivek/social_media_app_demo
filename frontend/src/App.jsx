import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/comments');
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchPosts();
    fetchComments();
  }, []);

  const addPost = async (post) => {
    try {
      const response = await axios.post('http://localhost:5000/posts', post);
      setPosts([...posts, response.data]);
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const addComment = async (comment) => {
    try {
      const response = await axios.post('http://localhost:5000/comments', comment);
      setComments([...comments, response.data]);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div>
      <h1>Social Media App</h1>
      <PostForm addPost={addPost} />
      <PostList posts={posts} comments={comments} addComment={addComment} />
    </div>
  );
};

export default App;
