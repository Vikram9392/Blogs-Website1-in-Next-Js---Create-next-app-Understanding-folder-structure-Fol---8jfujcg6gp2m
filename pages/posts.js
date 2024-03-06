import React from 'react';
import Link from 'next/link';
import PostDetail from "./posts/[id]"
const posts = [
  { name: 'Post 1', path: '/posts/1' },
  { name: 'Post 2', path: '/posts/2' },
  { name: 'Post 3', path: '/posts/3' },
  { name: 'Post 4', path: '/posts/4' },
];

function Posts() {
  return (
    <div className='posts'>
      <h1>Post List</h1>
      <ul>
        {posts.map((i)=>{
         return (<Link href={i.path}><li>{i.name}</li></Link> )
          
        })}
      </ul>
      
    </div>
  );
}

export default Posts;
