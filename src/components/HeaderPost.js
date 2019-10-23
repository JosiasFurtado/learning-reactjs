import React from 'react'

export default function HeaderPost({ author, date }) {
  return (
    <div className="post-header">
      <img className="avatar" alt="avatar" src={author.avatar} />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

