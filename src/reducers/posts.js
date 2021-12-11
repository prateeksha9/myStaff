import {
  UPDATE_POSTS,
  DELETE_POST,
  EDIT_POST,
  DELETE_MULTIPLE,
  SEARCH_FOR,
} from '../actions/actionType';

// the function handles all states of posts

export default function posts(state = [], action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return action.posts;

    case DELETE_POST:
      const array = state.filter((post) => post.id !== action.id);
      alert('Post Deleted Successfully');
      return array;

    case EDIT_POST:
      const index = state.findIndex((prod) => prod.id === action.id);
      state[index].email = action.newEmail;
      return [...state];

    case DELETE_MULTIPLE:
      const afterMultipleDeletionArray = state.filter(
        (post) => !action.toBeDeleteArray.includes(post.id)
      );
      alert('Post Deleted Successfully');
      return afterMultipleDeletionArray;

    case SEARCH_FOR:
      const toBeSearchFor = action.searchText.toLowerCase();

      const SearchedArray = state.filter(
        (post) =>
          post.role.toLowerCase() === toBeSearchFor ||
          post.email.includes(toBeSearchFor) ||
          post.name.toLowerCase().includes(toBeSearchFor)
      );
      return SearchedArray;

    default:
      return state;
  }
}
