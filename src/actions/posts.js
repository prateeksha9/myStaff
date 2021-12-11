import {
  DELETE_MULTIPLE,
  DELETE_POST,
  EDIT_POST,
  SEARCH_FOR,
  TO_BE_DELETED,
  UPDATE_POSTS,
} from './actionType';

const toBeDeleteArray = [];

export default function fetchPosts() {
  return (dispatch) => {
    fetch(
      'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id,
  };
}

export function editPost(id, newEmail) {
  return {
    type: EDIT_POST,
    id,
    newEmail,
  };
}

export function toBeDeleted(id) {
  toBeDeleteArray.push(id);
  return {
    type: TO_BE_DELETED,
  };
}

export function removeFromtoBeDeleted(id) {
  const newArray = toBeDeleteArray.filter((item) => item !== id);
  toBeDeleteArray.length = 0;
  toBeDeleteArray.push.apply(toBeDeleteArray, newArray);

  return {
    type: TO_BE_DELETED,
  };
}

export function deleteMultiple() {
  console.log(toBeDeleteArray);
  return {
    type: DELETE_MULTIPLE,
    toBeDeleteArray,
  };
}

export function searchTextFunction(searchText) {
  return {
    type: SEARCH_FOR,
    searchText,
  };
}
