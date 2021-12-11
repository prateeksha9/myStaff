import React from 'react';

function Heading(props) {
  return (
    <li className="list-group-item">
      <div className="posts">
        <div className="check"></div>
        <div className="about">
          <strong>Name</strong>
        </div>
        <div className="about">
          <strong>Email</strong>
        </div>
        <div className="about">
          <strong>Role</strong>
        </div>
        <div className="action">
          <strong>Actions</strong>
        </div>
      </div>
    </li>
  );
}

export default Heading;
