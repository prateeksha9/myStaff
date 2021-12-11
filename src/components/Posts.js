import React from 'react';
import { PostsList } from '.';

function Posts({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          <PostsList key={post.id} post={post} />
        </li>
      ))}
    </ul>
  );
}

export default Posts;
