import React from 'react'

export default function Comments({ comments }) {
    return (
      <div className="post-comments">
        <div className="divider" />
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <img className="avatar" alt="avatar" src={comment.author.avatar} />
            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    );
  }