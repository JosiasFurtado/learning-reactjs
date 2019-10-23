import React from 'react';
import Comments from './Comment'
import HeaderPost from './HeaderPost'


export default function Post({ author, date, content, comments }) {
  return (
    <div className="post">
      <HeaderPost author={author} date={date} />
      <p className="post-content">{content}</p>
      <Comments comments={comments} />
    </div>
  );
}