import {
  ADD_POST,
  ADD_POST_LIKE,
  DELETE_POST,
  EDIT_POST,
  GET_POSTS,
} from "../actions/post.action";

const initialState = []; // Initialisation de l'état comme un tableau vide

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      // Assurez-vous que action.payload est un tableau
      return [...action.payload]; // Retourne un nouvel état avec les posts
    case ADD_POST:
      return [action.payload, ...state]; // Retourne un nouvel état avec les posts
    case EDIT_POST:
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            content: action.payload.content,
          };
        } else return post;
      }); // Retourne un nouvel état avec les posts
    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload); // Retourne un nouvel état avec les posts
    case ADD_POST_LIKE:
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            likes: action.payload.likes,
          };
        } else return post;
      }); // Retourne un nouvel état avec les posts

    default:
      return state;
  }
}
