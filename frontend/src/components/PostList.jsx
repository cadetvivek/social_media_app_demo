import React from 'react';
import CommentForm from './CommentForm';

const PostList = ({ posts, comments, addComment }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <img src={post.imageUrl} alt={post.description} />
          <p>{post.description}</p>
          <CommentForm postId={post.id} addComment={addComment} />
          <ul>
            {comments.filter(comment => comment.postId === post.id).map(comment => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PostList;
