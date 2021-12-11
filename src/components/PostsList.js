import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deletePost,
  editPost,
  removeFromtoBeDeleted,
  toBeDeleted,
} from '../actions/posts';

function PostsList({ post }) {
  const { id, name, email, role } = post;
  const [isEditInfo, setEditInfo] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const dispatch = useDispatch();
  const [checkedItem, setCheckedItem] = useState(false);

  const selectShortlistedApplicant = (e) => {
    const checked = e.target.checked;
    if (checked) {
      dispatch(toBeDeleted(id));
      setCheckedItem(true);

      //checked
    } else {
      //unchecked
      dispatch(removeFromtoBeDeleted(id));

      setCheckedItem(false);
    }
  };

  const HandleEditInfo = () => {
    setEditInfo(true);
  };

  const handleIsEditing = (e) => {
    setNewEmail(e.target.value);
  };

  const HandleEditDone = () => {
    setEditInfo(false);
    const index = newEmail.indexOf('@');
    if (index === -1) {
      alert('Enter a valid Email');
    } else {
      dispatch(editPost(id, newEmail));
    }

    setNewEmail('');
  };
  const handleDelete = () => {
    dispatch(deletePost(id));
  };
  return (
    <div className="posts">
      <div className="check">
        <input
          type="checkbox"
          value={id}
          onClick={(e) => {
            selectShortlistedApplicant(e);
          }}
        />
      </div>
      <div className="about">{name}</div>
      {!isEditInfo && <div className="about">{email}</div>}
      {isEditInfo && (
        <input
          type="text"
          className="about"
          id="input"
          onChange={handleIsEditing}
        />
      )}

      <div className="about">{role}</div>
      <div className="action">
        {isEditInfo && (
          <button onClick={HandleEditDone}>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/000/441/750/small/Basic_Element_15-30__28586_29.jpg"
              alt="edit-button"
            />{' '}
          </button>
        )}{' '}
        {!isEditInfo && (
          <button onClick={HandleEditInfo}>
            <img
              src="https://www.seekpng.com/png/detail/202-2022672_edit-comments-edit-icon-png-circle.png"
              alt="edit-button"
            />{' '}
          </button>
        )}
        <button onClick={handleDelete}>
          <img
            src="https://media.istockphoto.com/vectors/trash-cangarbage-canrubbish-bin-icon-vector-id928418914?b=1&k=20&m=928418914&s=170667a&w=0&h=cp6WH9e9DBvJgfFYnJJvhMFa0XitsoEBUPp1kGLS3Wk="
            alt="delete-button"
          />
        </button>
      </div>
    </div>
  );
}

export default PostsList;
